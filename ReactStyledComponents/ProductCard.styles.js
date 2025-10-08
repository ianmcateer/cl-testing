import styled from 'styled-components';

/**
 * Styled Components for ProductCard
 *
 * These are component styles created with styled-components.
 * They can accept props to change styling dynamically.
 */

// Main card container
export const Card = styled.article`
  /* Basic card styling */
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;  /* Keeps image from breaking out of rounded corners */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  /* Layout */
  display: flex;
  flex-direction: column;  /* Stack image, content, button vertically */

  /* Smooth animations */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  /* Hover effect - card lifts up slightly */
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;

// Product image section
export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f0f0f0;  /* Placeholder background */
  position: relative;  /* For positioning the stock badge */
  overflow: hidden;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;  /* Makes image fill the space without distortion */
  display: block;
`;

// Stock badge that appears on the image
// This demonstrates props-based styling - color changes based on inStock prop
export const StockBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;

  /* Change color based on stock status - this is conditional styling with props */
  background-color: ${props => props.$inStock ? '#10b981' : '#ef4444'};
  color: white;

  /* Add a subtle shadow for better visibility */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

// Content area of the card
export const CardContent = styled.div`
  padding: 20px;
  flex: 1;  /* Takes up remaining space */
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

// Product title
export const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;

  /* Prevent long titles from breaking layout */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// Price container
export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

// Discounted price (shown in green)
export const DiscountedPrice = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #10b981;  /* Green for savings */
`;

// Original price (shown crossed out when there's a discount)
export const OriginalPrice = styled.span`
  font-size: 1rem;
  color: #6b7280;  /* Gray color */

  /* Apply strikethrough if there's a discount */
  text-decoration: ${props => props.$hasDiscount ? 'line-through' : 'none'};

  /* Make it bigger and darker if there's no discount (it's the main price) */
  font-size: ${props => props.$hasDiscount ? '1rem' : '1.5rem'};
  font-weight: ${props => props.$hasDiscount ? '400' : '700'};
  color: ${props => props.$hasDiscount ? '#6b7280' : '#1a1a1a'};
`;

// Discount percentage badge
export const DiscountBadge = styled.span`
  background-color: #fef3c7;  /* Light yellow background */
  color: #92400e;  /* Dark brown text */
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
`;

// Product description text
export const Description = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.5;
  margin: 0;

  /* Truncate description after 2 lines with ellipsis */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

// Add to cart button
// This demonstrates multiple props affecting styling
export const AddToCartButton = styled.button`
  width: 100%;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  /* Change styling based on disabled state (out of stock) */
  background-color: ${props => props.disabled ? '#e5e7eb' : '#3b82f6'};
  color: ${props => props.disabled ? '#9ca3af' : '#ffffff'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

  /* Hover effect only if not disabled */
  &:hover {
    background-color: ${props => props.disabled ? '#e5e7eb' : '#2563eb'};
    transform: ${props => props.disabled ? 'none' : 'scale(1.02)'};
  }

  /* Click effect */
  &:active {
    transform: ${props => props.disabled ? 'none' : 'scale(0.98)'};
  }
`;
