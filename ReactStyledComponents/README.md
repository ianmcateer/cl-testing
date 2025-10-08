# React Styled Components Exercise

## Problem Description

Build a responsive **Product Card** component using React and Styled Components. The card should display product information and respond to user interactions.

## Requirements

### 1. Component Structure

Create a `ProductCard` component that accepts the following props:

```javascript
{
  title: string,
  price: number,
  imageUrl: string,
  description: string,
  inStock: boolean,
  discount?: number  // Optional percentage discount (0-100)
}
```

### 2. Styling Requirements

Use **styled-components** to create:

- **Card Container**: Rounded corners, shadow, hover effect
- **Product Image**: Cover the top portion of the card
- **Title**: Bold, primary color
- **Price Display**:
  - Show original price crossed out if there's a discount
  - Show discounted price in green
  - Regular price in dark text
- **Description**: Lighter text, truncate after 2 lines
- **Stock Badge**:
  - Green "In Stock" badge if available
  - Red "Out of Stock" badge if unavailable
- **Add to Cart Button**:
  - Primary color background
  - Disabled state if out of stock
  - Hover effects

### 3. Responsive Behavior

- Mobile (< 768px): Cards stack vertically, full width
- Tablet/Desktop (≥ 768px): Cards display in a grid

### 4. Dynamic Styling

Demonstrate these styled-components features:
- Props-based conditional styling
- Extend existing styled components
- CSS helper functions (css)
- Theme support (optional)

## Example Usage

```javascript
<ProductCard
  title="Wireless Headphones"
  price={99.99}
  imageUrl="https://example.com/headphones.jpg"
  description="High-quality wireless headphones with noise cancellation"
  inStock={true}
  discount={20}
/>
```

## Visual Requirements

**Card Layout:**
```
┌─────────────────────────┐
│                         │
│    Product Image        │
│                         │
├─────────────────────────┤
│ Title              🟢   │
│                         │
│ $79.99  $99.99         │
│                         │
│ Product description...  │
│                         │
│  [ Add to Cart ]        │
└─────────────────────────┘
```

## Deliverables

1. `ProductCard.jsx` - React component
2. `ProductCard.styles.js` - Styled components
3. `App.jsx` - Demo with multiple product cards
4. `package.json` - Dependencies

## Evaluation Criteria

- ✓ Proper use of styled-components syntax
- ✓ Props-based dynamic styling
- ✓ Component reusability
- ✓ Clean, readable code
- ✓ Responsive design
- ✓ Proper handling of edge cases (missing props, long text, etc.)

## Bonus Points

- Animations/transitions
- Theme provider implementation
- Accessibility features (ARIA labels, keyboard navigation)
- Additional interactive states (loading, added to cart)
- Global styles with createGlobalStyle
