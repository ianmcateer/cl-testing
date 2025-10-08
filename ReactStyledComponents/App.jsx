import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

/**
 * Global Styles and Layout Components
 */

// Global container for the app
const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 40px 20px;
`;

// Header section
const Header = styled.header`
  text-align: center;
  color: white;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 12px 0;
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  margin: 0;
  opacity: 0.9;
`;

// Grid container for product cards
// This demonstrates responsive design with styled-components
const ProductGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 24px;

  /* Mobile: 1 column */
  grid-template-columns: 1fr;

  /* Tablet: 2 columns */
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Desktop: 3 columns */
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

/**
 * Sample product data for demonstration
 */
const products = [
  {
    id: 1,
    title: 'Wireless Headphones',
    price: 99.99,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    description: 'Premium wireless headphones with active noise cancellation and 30-hour battery life.',
    inStock: true,
    discount: 20
  },
  {
    id: 2,
    title: 'Smart Watch',
    price: 299.99,
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
    description: 'Track your fitness goals with this sleek smartwatch featuring heart rate monitoring.',
    inStock: true,
    discount: 0
  },
  {
    id: 3,
    title: 'Laptop Stand',
    price: 49.99,
    imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop',
    description: 'Ergonomic aluminum laptop stand with adjustable height and angle.',
    inStock: false,
    discount: 0
  },
  {
    id: 4,
    title: 'Mechanical Keyboard',
    price: 149.99,
    imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop',
    description: 'RGB backlit mechanical keyboard with customizable switches for the ultimate typing experience.',
    inStock: true,
    discount: 15
  },
  {
    id: 5,
    title: 'Webcam HD',
    price: 79.99,
    imageUrl: 'https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?w=400&h=300&fit=crop',
    description: '1080p HD webcam with built-in microphone, perfect for video calls and streaming.',
    inStock: true,
    discount: 10
  },
  {
    id: 6,
    title: 'USB-C Hub',
    price: 39.99,
    imageUrl: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop',
    description: '7-in-1 USB-C hub with HDMI, USB 3.0, SD card reader, and power delivery.',
    inStock: false,
    discount: 0
  }
];

/**
 * Main App Component
 *
 * Demonstrates the ProductCard component with various states:
 * - In stock vs out of stock
 * - With discount vs without discount
 * - Different product information
 */
function App() {
  return (
    <AppContainer>
      <Header>
        <Title>Tech Store</Title>
        <Subtitle>Premium gadgets and accessories</Subtitle>
      </Header>

      <ProductGrid>
        {/* Map through products and render a ProductCard for each */}
        {products.map(product => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
            description={product.description}
            inStock={product.inStock}
            discount={product.discount}
          />
        ))}
      </ProductGrid>
    </AppContainer>
  );
}

export default App;
