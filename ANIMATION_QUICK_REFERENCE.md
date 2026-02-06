# Animation Quick Reference Card

## 🎯 Most Common Patterns

### 1. Page Transition (Automatic)
```tsx
// Already implemented in App.tsx - no code needed!
// Every page change automatically fades (300ms)
```

### 2. Scroll Reveal - Single Element
```tsx
import ScrollReveal from '../components/ScrollReveal';

<ScrollReveal>
  <div>Fades in from bottom</div>
</ScrollReveal>
```

### 3. Scroll Reveal - Multiple Elements (Staggered)
```tsx
{items.map((item, i) => (
  <ScrollReveal key={i} delay={i * 75}>
    <div>{item}</div>
  </ScrollReveal>
))}
```

### 4. Card with Hover Effect
```tsx
<div className="card-hover p-6 bg-white rounded-lg">
  Card lifts on hover
</div>
```

### 5. Button with Scale & Ripple
```tsx
<button className="btn-scale btn-hover px-6 py-3 bg-[#C9A227]">
  Click Me
</button>
```

### 6. Link with Animated Underline
```tsx
<a href="#" className="link-hover">
  Hover for underline
</a>
```

---

## 📋 CSS Class Reference

| Class | Effect | Use Case |
|-------|--------|----------|
| `card-hover` | Lift + scale on hover | Cards, panels |
| `premium-hover` | Subtle lift with shadow | Premium elements |
| `btn-hover` | Ripple effect | Buttons, CTAs |
| `btn-scale` | Scale up/down | Interactive buttons |
| `link-hover` | Animated underline | Text links |

---

## 🎨 ScrollReveal Directions

| Direction | Effect | Example |
|-----------|--------|---------|
| `"up"` (default) | Slides from bottom | `<ScrollReveal>` |
| `"down"` | Slides from top | `<ScrollReveal direction="down">` |
| `"left"` | Slides from left | `<ScrollReveal direction="left">` |
| `"right"` | Slides from right | `<ScrollReveal direction="right">` |
| `"fade"` | Simple fade | `<ScrollReveal direction="fade">` |
| `"scale"` | Scale up | `<ScrollReveal direction="scale">` |

---

## ⏱️ Timing Standards

| Use Case | Duration | Code |
|----------|----------|------|
| Dropdown menu | 200ms | `var(--anim-duration-fast)` |
| Page transition | 300ms | `var(--anim-duration-normal)` |
| Card hover | 400ms | `var(--anim-duration-medium)` |
| Scroll reveal | 500ms | `var(--anim-duration-slow)` |
| Hero animation | 700ms | `var(--anim-duration-very-slow)` |

---

## 🔧 Stagger Timing

```tsx
// Cards: 75-100ms apart
delay={index * 75}

// List items: 50ms apart
delay={index * 50}

// Large sections: 100-150ms apart
delay={index * 100}
```

---

## 💾 Import Statements

```tsx
// For scroll reveals
import ScrollReveal from '../components/ScrollReveal';

// For JS utilities
import { ANIMATION_CONFIG, getAnimationDelay } from '../utils/animationConfig';

// For custom hooks
import { useScrollReveal } from '../hooks/useScrollReveal';
```

---

## ♿ Accessibility

All animations automatically respect `prefers-reduced-motion`. No extra code needed!

---

## 🚀 Copy-Paste Templates

### Hero Section
```tsx
<section>
  <ScrollReveal direction="down">
    <h1>Main Title</h1>
  </ScrollReveal>
  <ScrollReveal delay={100}>
    <p>Subtitle</p>
  </ScrollReveal>
  <ScrollReveal delay={200}>
    <button className="btn-scale">CTA</button>
  </ScrollReveal>
</section>
```

### Services Grid
```tsx
<div className="grid grid-cols-3 gap-6">
  {services.map((s, i) => (
    <ScrollReveal key={s.id} delay={i * 75}>
      <div className="card-hover p-6">
        <h3>{s.title}</h3>
      </div>
    </ScrollReveal>
  ))}
</div>
```

### Stats Section
```tsx
<div className="grid grid-cols-3">
  {stats.map((stat, i) => (
    <ScrollReveal key={i} direction="up" delay={i * 100}>
      <div className="text-center">
        <div className="text-5xl font-bold">{stat.value}</div>
        <div>{stat.label}</div>
      </div>
    </ScrollReveal>
  ))}
</div>
```

---

## 📱 Mobile Considerations

All animations work on mobile! They automatically:
- Respect device performance
- Honor reduced motion settings
- Use hardware acceleration
- Stay at 60fps

---

## 🎯 Do's and Don'ts

### ✅ Do
- Use consistent timing (75ms, 100ms, 150ms)
- Combine ScrollReveal + card-hover
- Test with reduced motion enabled
- Keep delays under 300ms
- Use transform and opacity only

### ❌ Don't
- Animate width, height, margin, padding
- Use delays over 500ms
- Animate too many elements at once
- Forget mobile testing
- Use different timing patterns

---

## 🐛 Troubleshooting

**Animation not working?**
1. Check if element is in viewport
2. Verify ScrollReveal is imported
3. Check for conflicting CSS
4. Test with reduced motion OFF

**Animation too slow/fast?**
- Adjust delay prop: `delay={100}`
- Or use custom duration in CSS

**Performance issues?**
- Limit concurrent animations
- Use only transform & opacity
- Check browser DevTools Performance tab

---

## 📚 Full Documentation

- **Complete Guide**: `ANIMATION_STYLE_GUIDE.md`
- **Examples**: `ANIMATION_IMPLEMENTATION_EXAMPLES.md`
- **CSS Variables**: `src/index.css`
- **JS Utilities**: `src/utils/animationConfig.ts`

---

**Pro Tip**: Start simple! Use `<ScrollReveal>` and `.card-hover` everywhere, then add complexity.
