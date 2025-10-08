import React from 'react';
import {
  Card,
  ImageContainer,
  ProductImage,
  StockBadge,
  CardContent,
  Title,
  PriceContainer,
  DiscountedPrice,
  OriginalPrice,
  DiscountBadge,
  Description,
  AddToCartButton
} from './ProductCard.styles';

/**
 * ProductCard Component
 *
 * A reusable product card component that displays product information
 * with dynamic styling based on props.
 *
 * Props:
 * - title: Product name
 * - price: Original price (number)
 * - imageUrl: URL to product image
 * - description: Product description text
 * - inStock: Whether product is available (boolean)
 * - discount: Optional discount percentage (0-100)
 */
const ProductCard = ({
  title,
  price,
  imageUrl,
  description,
  inStock,
  discount = 0
}) => {
  // Calculate the discounted price if there's a discount
  const hasDiscount = discount > 0;
  const discountedPrice = hasDiscount ? price * (1 - discount / 100) : price;

  // Format prices to 2 decimal places
  const formatPrice = (amount) => `$${amount.toFixed(2)}`;

  return (
    <Card>
      {/* Product Image Section */}
      <ImageContainer>
        <ProductImage
          src={imageUrl}
          alt={title}
          onError={(e) => {
            // Fallback if image fails to load
            e.target.src = 'https://via.placeholder.com/400x200?text=Product+Image';
          }}
        />

        {/* Stock Badge - uses $inStock prop (transient prop with $ prefix) */}
        <StockBadge $inStock={inStock}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </StockBadge>
      </ImageContainer>

      {/* Card Content Section */}
      <CardContent>
        {/* Product Title */}
        <Title>{title}</Title>

        {/* Price Section */}
        <PriceContainer>
          {/* Show discounted price if there's a discount */}
          {hasDiscount && (
            <DiscountedPrice>
              {formatPrice(discountedPrice)}
            </DiscountedPrice>
          )}

          {/* Original price - crossed out if discounted */}
          <OriginalPrice $hasDiscount={hasDiscount}>
            {formatPrice(price)}
          </OriginalPrice>

          {/* Discount badge */}
          {hasDiscount && (
            <DiscountBadge>-{discount}%</DiscountBadge>
          )}
        </PriceContainer>

        {/* Product Description */}
        <Description>{description}</Description>

        {/* Add to Cart Button - disabled if out of stock */}
        <AddToCartButton
          disabled={!inStock}
          onClick={() => {
            if (inStock) {
              console.log(`Added ${title} to cart!`);
              // In a real app, this would add to cart state/context
            }
          }}
        >
          {inStock ? 'Add to Cart' : 'Out of Stock'}
        </AddToCartButton>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
