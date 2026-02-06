# Animation Style Guide

## Overview
This guide documents the comprehensive animation system implemented across the website to ensure consistent, smooth, and professional user experiences.

---

## Animation Standards

### Duration Standards
All animations follow standardized durations for consistency:

| Duration | Value | Use Case |
|----------|-------|----------|
| **Instant** | 150ms | Immediate feedback (dropdowns, tooltips) |
| **Fast** | 200ms | Quick interactions (hover states, toggles) |
| **Normal** | 300ms | Standard transitions (page changes, modals) |
| **Medium** | 400ms | Card animations, form submissions |
| **Slow** | 500ms | Scroll reveals, complex transitions |
| **Very Slow** | 700ms | Hero animations, special effects |

### Easing Functions
Consistent easing creates natural motion:

| Easing | Curve | Use Case |
|--------|-------|----------|
| **Standard** | `cubic-bezier(0.4, 0.0, 0.2, 1)` | General purpose transitions |
| **Decelerate** | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Elements entering screen |
| **Accelerate** | `cubic-bezier(0.4, 0.0, 1, 1)` | Elements exiting screen |
| **Smooth** | `cubic-bezier(0.4, 0.0, 0.6, 1)` | Smooth, flowing animations |
| **Bounce** | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Playful interactions (buttons) |

---

## CSS Custom Properties

Access animation values throughout the codebase:

```css
:root {
  /* Durations */
  --anim-duration-instant: 150ms;
  --anim-duration-fast: 200ms;
  --anim-duration-normal: 300ms;
  --anim-duration-medium: 400ms;
  --anim-duration-slow: 500ms;
  --anim-duration-very-slow: 700ms;

  /* Easing */
  --anim-easing-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
  --anim-easing-decelerate: cubic-bezier(0.0, 0.0, 0.2, 1);
  --anim-easing-accelerate: cubic-bezier(0.4, 0.0, 1, 1);
  --anim-easing-smooth: cubic-bezier(0.4, 0.0, 0.6, 1);
  --anim-easing-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

---

## Page Transitions

### Implementation
Smooth fade transitions occur on all page changes:

**Duration:** 300ms
**Effect:** Fade out → Change content → Fade in

```tsx
// Automatic in App.tsx via PageWrapper component
// No additional code needed in individual pages
```

---

## Scroll Reveal Animations

### Using the ScrollReveal Component

```tsx
import ScrollReveal from '../components/ScrollReveal';

// Basic usage
<ScrollReveal>
  <div>Content appears on scroll</div>
</ScrollReveal>

// With direction
<ScrollReveal direction="left">
  <div>Slides in from left</div>
</ScrollReveal>

// With delay for stagger effect
<ScrollReveal direction="up" delay={100}>
  <div>Appears 100ms after previous</div>
</ScrollReveal>
```

### Available Directions
- **up** (default): Fades in from bottom
- **down**: Fades in from top
- **left**: Slides in from left
- **right**: Slides in from right
- **fade**: Simple fade-in
- **scale**: Scale up with fade

### Creating Staggered Animations

```tsx
{items.map((item, index) => (
  <ScrollReveal
    key={item.id}
    direction="up"
    delay={index * 75}
  >
    <Card {...item} />
  </ScrollReveal>
))}
```

---

## Hover & Interactive Animations

### Card Hover Effect
```tsx
<div className="card-hover">
  {/* Lifts up 6px and scales to 102% on hover */}
</div>
```

### Premium Hover Effect
```tsx
<div className="premium-hover">
  {/* Lifts up 4px with shadow enhancement */}
</div>
```

### Link Hover with Underline
```tsx
<a href="#" className="link-hover">
  {/* Animated underline appears on hover */}
</a>
```

### Button Ripple Effect
```tsx
<button className="btn-hover">
  {/* Ripple effect from center on hover */}
</button>
```

### Button Scale Effect
```tsx
<button className="btn-scale">
  {/* Scales to 103% on hover, 97% on click */}
</button>
```

---

## CSS Class Reference

### Scroll Reveal Classes
Apply these classes manually if not using the component:

```html
<!-- Fade in from bottom -->
<div class="scroll-reveal">Content</div>

<!-- Fade in from top -->
<div class="scroll-reveal-down">Content</div>

<!-- Slide from left -->
<div class="scroll-reveal-left">Content</div>

<!-- Slide from right -->
<div class="scroll-reveal-right">Content</div>

<!-- Simple fade -->
<div class="scroll-reveal-fade">Content</div>

<!-- Scale in -->
<div class="scroll-reveal-scale">Content</div>
```

Add `.revealed` class when element enters viewport to trigger animation.

---

## JavaScript/TypeScript Utilities

### Animation Config
```typescript
import { ANIMATION_CONFIG, getTransitionDuration } from '../utils/animationConfig';

// Get duration
const duration = ANIMATION_CONFIG.duration.normal; // 300

// Get duration with reduced motion support
const safeDuration = getTransitionDuration('normal'); // 300 or 1ms

// Calculate stagger delay
import { getAnimationDelay } from '../utils/animationConfig';
const delay = getAnimationDelay(index, 75); // index * 75ms
```

### Scroll Reveal Hook
```typescript
import { useScrollReveal } from '../hooks/useScrollReveal';

function MyComponent() {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={ref}>
      {isVisible && <div>Content revealed!</div>}
    </div>
  );
}
```

---

## Accessibility: Reduced Motion

### Automatic Support
All animations automatically respect user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  /* All animations reduced to 1ms */
  /* Scroll behavior becomes instant */
}
```

### Manual Check in JavaScript
```typescript
import { isReducedMotion } from '../utils/animationConfig';

if (isReducedMotion()) {
  // Skip complex animations
} else {
  // Full animation experience
}
```

---

## Performance Guidelines

### 60fps Target
All animations are optimized for smooth 60fps performance:

1. **Use transform and opacity only** - Hardware accelerated
2. **Avoid animating**: width, height, top, left, margin, padding
3. **Use `will-change` sparingly** - Only for complex animations
4. **Limit concurrent animations** - Stagger appropriately

### Good Examples ✅
```css
/* Fast, hardware-accelerated */
.element {
  transition: transform 300ms, opacity 300ms;
}
```

### Bad Examples ❌
```css
/* Slow, causes repaints */
.element {
  transition: width 300ms, height 300ms, margin 300ms;
}
```

---

## Common Patterns

### Staggered Cards Grid
```tsx
<div className="grid grid-cols-3 gap-6">
  {cards.map((card, index) => (
    <ScrollReveal key={card.id} delay={index * 75}>
      <div className="card-hover">
        {/* Card content */}
      </div>
    </ScrollReveal>
  ))}
</div>
```

### Hero Section Animation
```tsx
<section>
  <ScrollReveal direction="down">
    <h1>Main Heading</h1>
  </ScrollReveal>

  <ScrollReveal delay={100}>
    <p>Subheading appears after</p>
  </ScrollReveal>

  <ScrollReveal delay={200}>
    <button className="btn-scale">CTA Button</button>
  </ScrollReveal>
</section>
```

### List with Sequential Reveals
```tsx
<ul>
  {items.map((item, i) => (
    <ScrollReveal
      key={item.id}
      direction="left"
      delay={i * 50}
    >
      <li>{item.text}</li>
    </ScrollReveal>
  ))}
</ul>
```

---

## Testing Checklist

- [ ] All page transitions are smooth (300ms fade)
- [ ] Scroll reveals trigger at appropriate viewport position
- [ ] Staggered animations feel natural (not too fast/slow)
- [ ] Hover states respond within 200ms
- [ ] No animation feels jarring or abrupt
- [ ] Reduced motion preference is respected
- [ ] Performance stays at 60fps during animations
- [ ] Mobile animations work smoothly
- [ ] No layout shift during animations

---

## Browser Support

All animations use standard CSS and modern JavaScript APIs:

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

Fallback: Users on older browsers see instant transitions (no animation).

---

## Quick Reference

| Need | Solution |
|------|----------|
| Page transition | Automatic via PageWrapper |
| Scroll reveal | `<ScrollReveal>` component |
| Card hover | `.card-hover` class |
| Button ripple | `.btn-hover` class |
| Link underline | `.link-hover` class |
| Custom timing | CSS vars or `ANIMATION_CONFIG` |
| Stagger delays | `getAnimationDelay(index, time)` |
| Check reduced motion | `isReducedMotion()` |

---

## Future Enhancements

Potential additions to the animation system:

1. **Loading skeleton animations** for async content
2. **Parallax scrolling** for hero sections
3. **Morphing transitions** between related elements
4. **Gesture-based animations** for touch devices
5. **Route-specific transition types** (slide vs fade)

---

## Support

For questions or issues with animations:
1. Check this guide first
2. Review `src/index.css` for animation definitions
3. Inspect `src/utils/animationConfig.ts` for JS utilities
4. Test with reduced motion preferences enabled

**Remember:** Good animations enhance UX, great animations are invisible.
