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

1. `ProductCard.jsx` - React component ✅
2. `ProductCard.styles.js` - Styled components ✅
3. `App.jsx` - Demo with multiple product cards ✅
4. `package.json` - Dependencies ✅

## Solution Implemented

### Files Created

- **`ProductCard.jsx`** - Main component with props handling and logic
- **`ProductCard.styles.js`** - All styled components with beginner-friendly comments
- **`App.jsx`** - Demo application with 6 sample products
- **`main.jsx`** - React entry point
- **`index.html`** - HTML template
- **`vite.config.js`** - Vite build configuration
- **`package.json`** - Dependencies and scripts

### Features Implemented

✅ **All Requirements Met:**
- Props-based conditional styling (`$inStock`, `$hasDiscount`)
- Responsive grid layout (1 column → 2 columns → 3 columns)
- Dynamic price calculations with discount support
- Stock badges with conditional colors
- Disabled button states for out-of-stock items
- Text truncation for long descriptions
- Image fallback handling

✅ **Bonus Features:**
- Smooth animations and transitions
- Hover effects on cards and buttons
- Active states for better UX
- Comprehensive inline comments for learning
- Real product images from Unsplash

### How to Run

```bash
# Navigate to the project folder
cd ReactStyledComponents

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Key Concepts Demonstrated

1. **Styled Components Basics**
   - Creating styled components with `styled.div`
   - Using template literals for CSS

2. **Props-Based Styling**
   - Transient props with `$` prefix (e.g., `$inStock`)
   - Conditional styling with ternary operators
   - Dynamic calculations

3. **Responsive Design**
   - Media queries within styled components
   - Mobile-first approach
   - CSS Grid for layout

4. **Component Composition**
   - Separating styles from logic
   - Reusable component patterns
   - Clean file organization

## Evaluation Criteria

- ✅ Proper use of styled-components syntax
- ✅ Props-based dynamic styling
- ✅ Component reusability
- ✅ Clean, readable code with comments
- ✅ Responsive design
- ✅ Proper handling of edge cases (missing props, long text, image errors)
