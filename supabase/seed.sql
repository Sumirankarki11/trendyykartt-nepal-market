
-- Insert sample categories
INSERT INTO public.categories (name, slug, description, image_url, icon) VALUES
('Electronics', 'electronics', 'Smartphones, laptops, gaming gear and more', 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop', '📱'),
('Fashion', 'fashion', 'Clothing, shoes, accessories for all', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop', '👗'),
('Home & Garden', 'home-&-garden', 'Furniture, decor, gardening supplies', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop', '🏡'),
('Sports', 'sports', 'Fitness equipment, outdoor gear, sports accessories', 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=300&fit=crop', '⚽'),
('Books', 'books', 'Educational, fiction, and reference books', 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop', '📚'),
('Beauty', 'beauty', 'Skincare, makeup, hair care products', 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop', '💄'),
('Toys', 'toys', 'Educational toys, games, and entertainment', 'https://images.unsplash.com/photo-1558060370-d1d1bcc1d9cc?w=400&h=300&fit=crop', '🧸'),
('Automotive', 'automotive', 'Car accessories, tools, and maintenance', 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop', '🚗');

-- Insert sample products for each category
INSERT INTO public.products (name, description, short_description, price, original_price, category_id, images, specifications, stock_quantity, brand, rating, review_count, is_featured, sku) 
SELECT 
  'iPhone 15 Pro Max',
  'Latest Apple iPhone with advanced camera system, powerful A17 Pro chip, and titanium design.',
  'Apple iPhone 15 Pro Max - 256GB',
  189999.00,
  199999.00,
  id,
  '["https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500", "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500"]',
  '{"storage": "256GB", "color": "Natural Titanium", "display": "6.7-inch Super Retina XDR", "chip": "A17 Pro"}',
  50,
  'Apple',
  4.8,
  156,
  true,
  'IPH15PM256'
FROM public.categories WHERE slug = 'electronics';

INSERT INTO public.products (name, description, short_description, price, original_price, category_id, images, specifications, stock_quantity, brand, rating, review_count, is_featured, sku) 
SELECT 
  'MacBook Air M2',
  'Supercharged by the M2 chip, MacBook Air delivers incredible performance in an ultraportable design.',
  'MacBook Air 13-inch with M2 chip',
  149999.00,
  159999.00,
  id,
  '["https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500", "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"]',
  '{"processor": "Apple M2", "memory": "8GB", "storage": "256GB SSD", "display": "13.6-inch Liquid Retina"}',
  25,
  'Apple',
  4.7,
  89,
  true,
  'MBA13M2256'
FROM public.categories WHERE slug = 'electronics';

-- Fashion products
INSERT INTO public.products (name, description, short_description, price, original_price, category_id, images, specifications, stock_quantity, brand, rating, review_count, is_flash_sale, sku) 
SELECT 
  'Premium Cotton T-Shirt',
  'Soft, comfortable, and durable cotton t-shirt perfect for everyday wear.',
  'Classic fit cotton t-shirt',
  1299.00,
  1599.00,
  id,
  '["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500", "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500"]',
  '{"material": "100% Cotton", "fit": "Classic", "care": "Machine wash"}',
  100,
  'Trendyy',
  4.3,
  45,
  true,
  'TSH001CT'
FROM public.categories WHERE slug = 'fashion';

INSERT INTO public.products (name, description, short_description, price, original_price, category_id, images, specifications, stock_quantity, brand, rating, review_count, sku) 
SELECT 
  'Denim Jacket',
  'Classic denim jacket with modern fit, perfect for layering.',
  'Vintage style denim jacket',
  3499.00,
  4299.00,
  id,
  '["https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?w=500"]',
  '{"material": "Denim", "style": "Classic", "pockets": "4"}',
  30,
  'Levis',
  4.6,
  78,
  false,
  'DJ001LEV'
FROM public.categories WHERE slug = 'fashion';

-- Home & Garden products
INSERT INTO public.products (name, description, short_description, price, original_price, category_id, images, specifications, stock_quantity, brand, rating, review_count, sku) 
SELECT 
  'Modern Coffee Table',
  'Sleek and modern coffee table with storage compartment.',
  'Contemporary glass-top coffee table',
  12999.00,
  15999.00,
  id,
  '["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500"]',
  '{"material": "Glass and Steel", "dimensions": "120x60x45cm", "storage": "Yes"}',
  15,
  'HomeDecor',
  4.2,
  23,
  false,
  'CT001MOD'
FROM public.categories WHERE slug = 'home-&-garden';

-- Sports products
INSERT INTO public.products (name, description, short_description, price, original_price, category_id, images, specifications, stock_quantity, brand, rating, review_count, is_featured, sku) 
SELECT 
  'Professional Football',
  'FIFA approved professional football for matches and training.',
  'Official match football',
  2499.00,
  2999.00,
  id,
  '["https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500"]',
  '{"size": "5", "material": "Synthetic Leather", "certification": "FIFA Approved"}',
  75,
  'Nike',
  4.7,
  134,
  true,
  'FB001PRO'
FROM public.categories WHERE slug = 'sports';

-- Books
INSERT INTO public.products (name, description, short_description, price, original_price, category_id, images, specifications, stock_quantity, brand, rating, review_count, sku) 
SELECT 
  'Learn React.js',
  'Complete guide to modern React development with hooks and TypeScript.',
  'React.js Development Guide',
  1899.00,
  2299.00,
  id,
  '["https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500"]',
  '{"pages": "450", "language": "English", "level": "Beginner to Advanced"}',
  40,
  'TechBooks',
  4.5,
  67,
  false,
  'BK001REACT'
FROM public.categories WHERE slug = 'books';

-- Beauty products
INSERT INTO public.products (name, description, short_description, price, original_price, category_id, images, specifications, stock_quantity, brand, rating, review_count, is_flash_sale, sku) 
SELECT 
  'Vitamin C Serum',
  'Brightening vitamin C serum for glowing, healthy skin.',
  'Anti-aging vitamin C face serum',
  2299.00,
  2899.00,
  id,
  '["https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500"]',
  '{"volume": "30ml", "concentration": "20%", "skin_type": "All"}',
  60,
  'GlowSkin',
  4.4,
  92,
  true,
  'SER001VITC'
FROM public.categories WHERE slug = 'beauty';

-- Toys
INSERT INTO public.products (name, description, short_description, price, original_price, category_id, images, specifications, stock_quantity, brand, rating, review_count, sku) 
SELECT 
  'Educational Building Blocks',
  'Creative building blocks set for developing motor skills and creativity.',
  'STEM learning building blocks',
  1799.00,
  2199.00,
  id,
  '["https://images.unsplash.com/photo-1558060370-d1d1bcc1d9cc?w=500"]',
  '{"pieces": "100", "age": "3+", "material": "BPA-free Plastic"}',
  80,
  'LearnPlay',
  4.6,
  156,
  false,
  'TOY001BUILD'
FROM public.categories WHERE slug = 'toys';

-- Automotive
INSERT INTO public.products (name, description, short_description, price, original_price, category_id, images, specifications, stock_quantity, brand, rating, review_count, sku) 
SELECT 
  'Car Dashboard Camera',
  'HD dashboard camera with night vision and GPS tracking.',
  'Full HD car dash cam',
  5999.00,
  7299.00,
  id,
  '["https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500"]',
  '{"resolution": "1080p", "storage": "32GB", "features": "Night Vision, GPS"}',
  35,
  'AutoTech',
  4.3,
  87,
  false,
  'CAM001DASH'
FROM public.categories WHERE slug = 'automotive';
