import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ProductGallery from '../components/ProductGallery/ProductGallery';
import ProductInfo from '../components/ProductInfo/ProductInfo';
import SizeSelector from '../components/SizeSelector/SizeSelector';
import ColorSelector from '../components/ColorSelector/ColorSelector';
import QuantitySelector from '../components/QuantitySelector/QuantitySelector';
import AddToCartButton from '../components/AddToCartButton/AddToCartButton';
import WishlistButton from '../components/WishlistButton/WishlistButton';
import ShippingInfo from '../components/ShippingInfo/ShippingInfo';
import PaymentOptions from '../components/PaymentOptions/PaymentOptions';
import ProductHighlights from '../components/ProductHighlights/ProductHighlights';
import ProductTabs from '../components/ProductTabs/ProductTabs';
import ReviewSection from '../components/ReviewSection/ReviewSection';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';
import RecentlyViewed from '../components/RecentlyViewed/RecentlyViewed';
import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const product = useMemo(
    () => products.find((p) => p.id === parseInt(id)),
    [id]
  );

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Reset selections when product changes
  useEffect(() => {
    if (product) {
      setSelectedSize('');
      setSelectedColor('');
      setQuantity(1);
      window.scrollTo(0, 0);
    }
  }, [product]);

  // SEO: Dynamic title and meta
  useEffect(() => {
    if (product) {
      document.title = `${product.name} | ${product.brand} | StyleZone`;

      // Meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', product.description);
      }

      // Open Graph
      const setOgMeta = (property, content) => {
        let tag = document.querySelector(`meta[property="${property}"]`);
        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute('property', property);
          document.head.appendChild(tag);
        }
        tag.setAttribute('content', content);
      };

      setOgMeta('og:title', `${product.name} | StyleZone`);
      setOgMeta('og:description', product.description);
      setOgMeta('og:image', product.images[0]);
      setOgMeta('og:url', window.location.href);
      setOgMeta('og:type', 'product');
    }

    return () => {
      document.title = 'StyleZone - Premium Sports Footwear & Running Gear';
    };
  }, [product]);

  if (!product) {
    return (
      <div className="product-not-found">
        <div className="container">
          <h2>Product Not Found</h2>
          <p>The product you're looking for doesn't exist or has been removed.</p>
          <button className="btn-orange" onClick={() => navigate('/')}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    ...(product.categoryPath || []).map((cat) => ({
      label: cat,
      path: '/shop',
    })),
    { label: product.name },
  ];

  const handleAddToCart = () => {
    if (!selectedSize) {
      showToast('Please select a size', 'error');
      return;
    }
    if (!selectedColor) {
      showToast('Please select a color', 'error');
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      brand: product.brand,
      brandLogo: product.brandLogo,
      price: product.price,
      originalPrice: product.originalPrice,
      discount: product.discount,
      image: product.image,
      quantity,
      size: selectedSize,
      color: selectedColor,
    });

    showToast('Added to Cart Successfully ✓', 'success');
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      showToast('Please select a size', 'error');
      return;
    }
    if (!selectedColor) {
      showToast('Please select a color', 'error');
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      brand: product.brand,
      brandLogo: product.brandLogo,
      price: product.price,
      originalPrice: product.originalPrice,
      discount: product.discount,
      image: product.image,
      quantity,
      size: selectedSize,
      color: selectedColor,
    });

    navigate('/checkout');
  };

  // Schema.org JSON-LD
  const schemaData = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    image: product.images,
    description: product.description,
    sku: product.sku,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    offers: {
      '@type': 'Offer',
      url: window.location.href,
      priceCurrency: 'INR',
      price: product.price,
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviews,
    },
  };

  return (
    <motion.main
      className="product-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Main Product Section */}
      <section className="product-main section-padding">
        <div className="container">
          <div className="product-main-grid">
            {/* Left Side - Gallery */}
            <motion.div
              className="product-gallery-col"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ProductGallery images={product.images} />
            </motion.div>

            {/* Right Side - Product Details */}
            <motion.div
              className="product-details-col"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ProductInfo product={product} />

              <div className="product-selectors">
                <SizeSelector
                  sizes={product.sizes}
                  selectedSize={selectedSize}
                  onSizeChange={setSelectedSize}
                />

                <ColorSelector
                  colors={product.colors}
                  selectedColor={selectedColor}
                  onColorChange={setSelectedColor}
                />

                <QuantitySelector
                  quantity={quantity}
                  onQuantityChange={setQuantity}
                />
              </div>

              <div className="product-actions">
                <AddToCartButton
                  onAddToCart={handleAddToCart}
                  onBuyNow={handleBuyNow}
                  disabled={false}
                />
                <WishlistButton productId={product.id} />
              </div>

              <ShippingInfo />
              <PaymentOptions />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        <ProductHighlights highlights={product.highlights} />
      </motion.section>

      {/* Description & Specifications Tabs */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        <ProductTabs
          description={product.longDescription}
          specifications={product.specifications}
        />
      </motion.section>

      {/* Reviews */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        <ReviewSection />
      </motion.section>

      {/* Related Products */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        <RelatedProducts products={products} currentProductId={product.id} />
      </motion.section>

      {/* Recently Viewed */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        <RecentlyViewed currentProductId={product.id} />
      </motion.section>
    </motion.main>
  );
};

export default ProductPage;
