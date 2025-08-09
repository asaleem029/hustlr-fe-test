ProductGrid Component
Overview
ProductGrid is a responsive product listing component built with React, Bootstrap 5, and inline styling for rich UI effects. It displays a grid of product cards that adapt to various screen sizes, each with:

Product Image — with lazy loading, error fallback SVG, and smooth zoom effect on hover.

Product Title & Description — truncated using CSS -webkit-line-clamp for clean multi-line ellipsis.

Price Display — formatted with Intl.NumberFormat for currency.

Action Buttons — "Buy Now" and "Add to Cart", fully responsive and accessible.

Hover Effects — card lift & shadow intensification for interactive feel.

Key Features
Responsive Grid Layout

Uses Bootstrap’s row-cols-* classes to dynamically adjust columns per screen size.

1 column on mobile → up to 4 columns on large screens.

Card Styling

Inline boxShadow, borderRadius, and transition for modern, elevated design.

Smooth lift & scale animation on hover using transform and box-shadow.

Image Handling

Maintains aspect ratio using Bootstrap’s .ratio-1x1.

object-fit: contain ensures the full product image is visible without cropping.

Zoom-in effect on hover.

Error Fallback: If the image fails to load, a simple SVG “No Image” placeholder is shown.

Text Clamping

CSS -webkit-line-clamp ensures product titles and descriptions don’t overflow, keeping card heights consistent.

Buttons & Actions

"Buy Now" links to the product detail page using react-router-dom’s <Link>.

"Add to Cart" triggers the passed addProduct function.

Fully responsive buttons — stack on small screens, inline on larger ones.

Accessibility

aria-label attributes for screen readers on action buttons and links.

Semantic HTML structure for better accessibility
