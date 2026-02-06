# Quick Reference Guide - Smooth Transitions

## Common Use Cases

### 1. Add Hover Effect to Button
```tsx
<button className="btn-hover px-6 py-3 bg-[#C9A227] text-white rounded-lg">
  Click Me
</button>
```

### 2. Animate Section on Scroll
```tsx
import AnimatedSection from './components/AnimatedSection';

<AnimatedSection animation="fade">
  <div>Your content here</div>
</AnimatedSection>
```

### 3. Create Hover Card
```tsx
<div className="card-hover p-6 bg-white rounded-xl shadow-md">
  Card content
</div>
```

### 4. Add Link Underline Animation
```tsx
<a href="/page" className="link-hover text-[#1B4765]">
  Link Text
</a>
```

### 5. Image Zoom on Hover
```tsx
<div className="img-hover rounded-lg overflow-hidden">
  <img src="/image.jpg" alt="Description" />
</div>
```

### 6. Stagger Multiple Items
```tsx
<div className="grid grid-cols-3 gap-6">
  {items.map((item, i) => (
    <div key={i} className="stagger-item">
      {item.content}
    </div>
  ))}
</div>
```

### 7. Add Subtle Bounce to CTA
```tsx
<button className="bounce-subtle px-8 py-4 bg-[#C9A227] text-white rounded-lg">
  Get Started
</button>
```

### 8. Loading State
```tsx
import Loading from './components/Loading';

{isLoading && <Loading />}
```

---

## Animation Types

| Class | Effect | Best For |
|-------|--------|----------|
| `.fade-in-scroll` | Fade + slide up | Section headers, content blocks |
| `.slide-in-left` | Fade + slide from left | Images on left side |
| `.slide-in-right` | Fade + slide from right | Text on right side |
| `.scale-in` | Fade + scale up | Cards, icons, badges |
| `.btn-hover` | Lift + ripple | Primary buttons, CTAs |
| `.card-hover` | Lift + scale | Service cards, features |
| `.img-hover` | Zoom in | Photos, portfolio items |
| `.link-hover` | Underline animation | Text links |

---

## Timing Reference

- **Quick**: 200-300ms (buttons, links)
- **Medium**: 400-500ms (cards, page loads)
- **Slow**: 500-600ms (scroll animations)

---

## Color Codes

- **Primary**: #0A2540 (Navy)
- **Secondary**: #1B4765 (Blue)
- **Accent**: #C9A227 (Gold)
- **Light**: #F5F1EC (Cream)

---

## Accessibility

All animations automatically respect `prefers-reduced-motion`. No additional code needed!

---

For full documentation, see TRANSITIONS_DOCUMENTATION.md
