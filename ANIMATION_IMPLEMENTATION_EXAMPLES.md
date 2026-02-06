# Animation Implementation Examples

Quick reference for implementing animations on your pages.

---

## Example 1: Basic Page with Scroll Reveals

```tsx
import ScrollReveal from '../components/ScrollReveal';

function MyPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20">
        <ScrollReveal direction="down">
          <h1 className="text-5xl font-bold">Welcome</h1>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-xl mt-4">Your tagline here</p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <button className="btn-scale mt-6">Get Started</button>
        </ScrollReveal>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-8">Features</h2>
        </ScrollReveal>

        <div className="grid grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.id} delay={index * 75}>
              <div className="card-hover p-6 bg-white rounded-lg">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
```

---

## Example 2: Service Cards with Hover Effects

```tsx
function ServicesPage() {
  const services = [
    { id: 1, title: 'Tax Advisory', icon: '📊' },
    { id: 2, title: 'Audit', icon: '✅' },
    { id: 3, title: 'SMSF', icon: '💰' },
  ];

  return (
    <section className="py-20">
      <ScrollReveal direction="down">
        <h1 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h1>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ScrollReveal
            key={service.id}
            direction="up"
            delay={index * 100}
          >
            <div className="card-hover group p-8 bg-white rounded-2xl border">
              <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">Service description...</p>
              <button className="btn-scale mt-4 px-6 py-2 bg-[#C9A227] text-white rounded-lg">
                Learn More
              </button>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
```

---

## Example 3: Interactive Calculator Section

```tsx
function CalculatorsPage() {
  return (
    <div>
      {/* Header */}
      <header className="py-16 bg-gradient-to-r from-[#0A2540] to-[#C9A227]">
        <ScrollReveal direction="down">
          <h1 className="text-5xl font-bold text-white text-center">
            Calculators
          </h1>
        </ScrollReveal>
      </header>

      {/* Calculator Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {calculators.map((calc, index) => (
            <ScrollReveal
              key={calc.id}
              direction="up"
              delay={index * 75}
            >
              <div className="premium-hover p-8 bg-white rounded-2xl shadow-md">
                <h3 className="text-xl font-bold mb-4">{calc.name}</h3>

                {/* Dropdown with custom styling */}
                <div className="relative mb-4">
                  <select className="w-full p-3.5 pl-4 pr-10 border border-gray-200 rounded-lg font-medium text-[#0A2540] focus:outline-none focus:ring-2 focus:ring-[#C9A227]/40 focus:border-[#C9A227] transition-all bg-gradient-to-br from-white to-[#FAF9F6] shadow-sm focus:shadow-md hover:border-[#C9A227]/30 cursor-pointer appearance-none">
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                </div>

                <button className="btn-scale w-full py-3 bg-gradient-to-r from-[#C9A227] to-[#B8911F] text-white rounded-lg font-semibold">
                  Calculate
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
```

---

## Example 4: About Page with Alternating Content

```tsx
function AboutPage() {
  const sections = [
    { id: 1, title: 'Our Story', content: '...', direction: 'left' },
    { id: 2, title: 'Our Values', content: '...', direction: 'right' },
    { id: 3, title: 'Our Team', content: '...', direction: 'left' },
  ];

  return (
    <div>
      {sections.map((section, index) => (
        <section key={section.id} className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal direction={section.direction as any}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6">
                    {section.title}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {section.content}
                  </p>
                </div>
                <div className="bg-gray-200 h-64 rounded-2xl" />
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}
    </div>
  );
}
```

---

## Example 5: Navigation with Link Hover Effects

```tsx
function Navigation() {
  const links = ['Home', 'About', 'Services', 'Contact'];

  return (
    <nav className="flex gap-8">
      {links.map((link) => (
        <a
          key={link}
          href={`/${link.toLowerCase()}`}
          className="link-hover text-[#0A2540] font-medium relative"
        >
          {link}
        </a>
      ))}
    </nav>
  );
}
```

---

## Example 6: FAQ Accordion with Smooth Transitions

```tsx
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: 'Question 1?', a: 'Answer 1' },
    { q: 'Question 2?', a: 'Answer 2' },
    { q: 'Question 3?', a: 'Answer 3' },
  ];

  return (
    <section className="py-20">
      <ScrollReveal>
        <h2 className="text-3xl font-bold mb-8">FAQs</h2>
      </ScrollReveal>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <ScrollReveal key={index} delay={index * 50}>
            <div className="border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left font-semibold flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                {faq.q}
                <span className={`accordion-icon transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              <div
                className="accordion-content overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === index ? '200px' : '0',
                  opacity: openIndex === index ? 1 : 0,
                }}
              >
                <div className="p-6 pt-0 text-gray-600">
                  {faq.a}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
```

---

## Example 7: CTA Section with Multiple Elements

```tsx
function CTASection() {
  return (
    <section className="py-32 bg-gradient-to-br from-[#0A2540] to-[#1a3a5a]">
      <div className="max-w-4xl mx-auto text-center px-4">
        <ScrollReveal direction="down">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of satisfied clients today
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex gap-4 justify-center">
            <button className="btn-scale btn-hover px-8 py-4 bg-[#C9A227] text-white rounded-xl font-semibold text-lg">
              Book Consultation
            </button>
            <button className="btn-scale px-8 py-4 bg-white text-[#0A2540] rounded-xl font-semibold text-lg">
              Learn More
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="text-sm text-white/70 mt-8">
            No credit card required • Free consultation
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
```

---

## Example 8: Stats Counter with Animation

```tsx
import { useCountUp } from '../hooks/useCountUp';

function StatsSection() {
  const stats = [
    { label: 'Clients', value: 500, suffix: '+' },
    { label: 'Years', value: 15, suffix: '' },
    { label: 'Success Rate', value: 98, suffix: '%' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 100}>
              <div className="text-center">
                <div className="text-6xl font-bold text-[#C9A227] mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-xl text-gray-600">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## Tips for Best Results

1. **Use consistent delays**: Stick to 50ms, 75ms, or 100ms increments
2. **Don't over-animate**: Not every element needs animation
3. **Group related elements**: Animate them together with staggering
4. **Test on mobile**: Ensure animations feel smooth on all devices
5. **Use direction meaningfully**: Left/right for horizontal layouts, up/down for vertical
6. **Combine effects**: `card-hover` with `ScrollReveal` for maximum impact
7. **Keep it subtle**: Animations should enhance, not distract

---

## Performance Checklist

✅ Only animate `transform` and `opacity`
✅ Use `will-change` only when necessary
✅ Limit concurrent animations (max 10-15)
✅ Test with DevTools performance panel
✅ Verify 60fps on mid-range devices
✅ Check reduced motion settings

---

## Common Mistakes to Avoid

❌ Animating too many elements at once
❌ Using inconsistent timing across pages
❌ Forgetting mobile optimization
❌ Not testing with reduced motion
❌ Over-using bounce easing
❌ Animating width/height instead of scale
❌ Setting animation delays too long

---

These examples cover most common use cases. Mix and match patterns to create your unique page experiences!
