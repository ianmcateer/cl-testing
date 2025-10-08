# CSS Custom Properties Challenge

## Problem Description

Create a themeable card component using CSS Custom Properties (CSS Variables) that supports multiple color schemes and responsive sizing.

## Requirements

Build a card component with the following features:

### 1. Theme Support
- Create a card that can switch between **light** and **dark** themes
- Use CSS custom properties for all colors
- Theme should be switchable via a class on the parent element

### 2. Custom Properties to Implement

Define and use these CSS variables:
- Primary color
- Secondary color
- Background color
- Text color
- Border color
- Border radius
- Card padding
- Card shadow

### 3. Component Structure

The card should include:
- A header section
- A content/body section
- A footer section
- Responsive spacing that adapts to screen size

### 4. Responsive Behavior

- Use custom properties for spacing that changes at different breakpoints
- Cards should stack on mobile, display in a grid on desktop

## Deliverables

1. `styles.css` - CSS file with custom properties and styles
2. `index.html` - HTML structure demonstrating the card component
3. Theme toggle functionality (can be done with CSS classes)

## Examples

**Light Theme:**
- Background: white
- Text: dark gray/black
- Primary: blue
- Border: light gray

**Dark Theme:**
- Background: dark gray/black
- Text: white/light gray
- Primary: lighter blue
- Border: darker gray

## Bonus Points

- Smooth transitions between themes
- Additional theme variations (e.g., high contrast, colorful)
- Accessibility considerations (readable contrast ratios)
- Use of `calc()` with custom properties for dynamic sizing

## Constraints

- Must use CSS Custom Properties (no preprocessor variables)
- Should work in modern browsers
- Semantic HTML
- No JavaScript required for basic functionality (optional for theme toggle)
