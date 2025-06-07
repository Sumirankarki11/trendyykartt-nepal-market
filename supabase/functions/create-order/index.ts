
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    )

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    const { cartItems, shippingAddress, paymentMethod } = await req.json()

    // Generate order number
    const orderNumber = `TK${Date.now()}`

    // Calculate totals
    let subtotal = 0
    const orderItems = []

    for (const item of cartItems) {
      const { data: product } = await supabase
        .from('products')
        .select('*')
        .eq('id', item.product_id)
        .single()

      if (!product) {
        throw new Error(`Product not found: ${item.product_id}`)
      }

      const itemTotal = product.price * item.quantity
      subtotal += itemTotal

      orderItems.push({
        product_id: product.id,
        product_name: product.name,
        product_image: product.images[0] || null,
        quantity: item.quantity,
        unit_price: product.price,
        total_price: itemTotal,
        variant: item.variant || {}
      })
    }

    const shippingCost = subtotal > 5000 ? 0 : 200 // Free shipping over NPR 5000
    const taxAmount = subtotal * 0.13 // 13% VAT in Nepal
    const totalAmount = subtotal + shippingCost + taxAmount

    // Create order
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert({
        user_id: user.id,
        order_number: orderNumber,
        payment_method: paymentMethod,
        subtotal,
        shipping_cost: shippingCost,
        tax_amount: taxAmount,
        total_amount: totalAmount,
        shipping_address: shippingAddress,
        billing_address: shippingAddress
      })
      .select()
      .single()

    if (orderError) throw orderError

    // Create order items
    const orderItemsWithOrderId = orderItems.map(item => ({
      ...item,
      order_id: order.id
    }))

    const { error: itemsError } = await supabase
      .from('order_items')
      .insert(orderItemsWithOrderId)

    if (itemsError) throw itemsError

    // Clear cart
    await supabase
      .from('cart_items')
      .delete()
      .eq('user_id', user.id)

    return new Response(JSON.stringify({ 
      success: true, 
      order: { ...order, items: orderItemsWithOrderId }
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }
})
