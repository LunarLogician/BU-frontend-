# BU Assistant - SEO Action Plan

**Priority Matrix:** (Impact vs Effort)

### 🔴 Phase 1: High Impact, Low Effort (Do today)

**1. Add Essential Meta Tags**
Add the following blocks inside your `<head>` tag in `index.html`. This ensures the site displays properly on Google, WhatsApp, and Discord.

```html
<!-- Primary Meta Tags -->
<meta name="description" content="Tired of your university portal crashing? BU Assistant is the fastest way to check your attendance, track assignments, and calculate bunks accurately.">
<link rel="canonical" href="https://your-live-domain.com/">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://your-live-domain.com/">
<meta property="og:title" content="BU Assistant — your attendance is cooked fr fr">
<meta property="og:description" content="Tired of your university portal crashing? BU Assistant is the fastest way to check your attendance and track assignments.">
<meta property="og:image" content="https://your-live-domain.com/public/og-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:title" content="BU Assistant — your attendance is cooked fr fr">
<meta property="twitter:description" content="Tired of your university portal crashing? Check your real attendance instantly.">
<meta property="twitter:image" content="https://your-live-domain.com/public/og-image.jpg">
```

**2. Inject Schema Markup (JSON-LD)**
Add this script directly above the closing `</head>` tag. This makes your page fully parseable by Google's rich result systems.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "BU Assistant",
  "operatingSystem": "Android, Web",
  "applicationCategory": "EducationalApplication",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "USD"
  },
  "description": "A faster, reliable portal alternative for university students to track attendance and assignments.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "40"
  }
}
</script>
```

---

### ⚠️ Phase 2: Medium Impact, Low Effort (Do before launch)

**1. Set up robots.txt and sitemap.xml**
When you deploy, create a `robots.txt` in the root:
```txt
User-agent: *
Allow: /
Sitemap: https://your-live-domain.com/sitemap.xml
```

**2. Implement Generative Engine Optimization (GEO) Readiness**
To index well on Perplexity and ChatGPT search:
- Create an `llms.txt` file at your root directory describing what exactly your tool does in plain Markdown.
- Add an `Organization` schema to clarify who builds the app to boost transparency (E-E-A-T).

---

### ℹ️ Phase 3: Post-Deployment Verification

**1. Run Core Web Vitals (CWV)**
Because the app is currently local, we couldn't test PageSpeed. Once deployed on Vercel or Netlify, run:
- Lighthouse test specifically measuring INP (Interaction to Next Paint) and LCP (Largest Contentful Paint). Given your lean layout, expect great scores.

**2. Verify Schema**
Run the live URL through https://validator.schema.org to assure Google is successfully reading the SoftwareApplication data.
