# Harmeet Interior — Luxury Digital Flagship Website

A production-quality digital flagship website engineered for **HARMEET INTERIOR**, premier interior designers, modular contractors, and turnkey home renovation specialists based in **Kirti Nagar, New Delhi, India**.

---

## 1. Verified Business Details

- **Business Name:** Harmeet Interior
- **Category:** Interior Design, Interior Contractor, Home Renovation
- **Primary Mobile:** `+91 9990327474`
- **Office Desk:** `+91 9911213974`
- **Email:** `harmeet.singh8311@gmail.com`
- **Address:** A-52, W.H.-5, Timber Block, Kirti Nagar, New Delhi, India
- **Service Area:** Delhi, Kirti Nagar, Punjabi Bagh, Janakpuri, Dwarka, Rohini, South Delhi and surrounding NCR areas
- **Tagline:** *"Let's Build Your Dream Space Together."*
- **Studio Headline:** *"Thoughtfully Designed. Beautifully Lived."*

---

## 2. Advertised Starting Prices & Transparency

The website clearly showcases the advertised starting rates accompanied by mandatory pricing disclaimers:

1. **Modular Kitchens:** Starting at **₹1,199 per sq. ft.**
2. **Wardrobes & Almirahs:** Starting at **₹1,099 per sq. ft.**
3. **False Ceiling Designs:** Starting at **₹100 per sq. ft.**

*Disclaimer: Displayed rates are starting indicative prices for basic specifications and are strictly subject to site inspection, material choices, hardware, dimensions, and project scope. Final project quotation is provided after site survey.*

---

## 3. Implemented Route Structure

### A. Core Pages
- `/` — **Flagship Home:** Cinematic hero section, advertised starting rates banner, 3 core services preview, Kirti Nagar studio background, 5-step execution workflow, why choose us cards, gallery preview, FAQ preview, and embedded consultation request form.
- `/about` — **About Harmeet Interior:** Brand ethos, direct contractor supervision philosophy, material integrity standards, and project coordination workflow.
- `/services` — **Services Directory:** Overview of all 8 specialized interior categories with starting rate badges.
- `/pricing` — **Transparent Starting Rates:** Dedicated comparison cards for the 3 core advertised specialties, custom turnkey pricing guide, itemized BOQ explanation, and pricing FAQs.
- `/projects` — **Projects & Architectural Gallery:** Filterable portfolio (All, Kitchens, Living Rooms, Bedrooms, Wardrobes, Ceilings, Commercial) with interactive modal lightbox.
- `/projects/[slug]` — **Project Detail Template:** High-resolution photography, materials used, spatial scope, and specific inquiry handoff.
- `/contact` — **Contact & Studio HQ:** Verified telephone numbers, email, physical address, working hours, interactive inquiry form with validation, and direct WhatsApp handoff.
- `/faq` — **Frequently Asked Questions:** Clear answers covering site surveys, pricing, materials, and timelines.
- `/privacy-policy` — **Privacy Policy:** Data protection statement with full company disclosures.
- `/terms` — **Terms & Conditions:** Statutory conditions on indicative estimates, milestone stages, and Delhi legal jurisdiction.
- `not-found.tsx` — **Custom 404 Page:** Branded error page with direct navigation back to home or services.

### B. Specialized Service Routes (`/services/[slug]`)
1. `/services/modular-kitchens` — L-shape, U-shape, parallel, and island layouts; starting at ₹1,199/sq.ft.
2. `/services/wardrobes` — Sliding, hinged, and walk-in almirahs; starting at ₹1,099/sq.ft.
3. `/services/false-ceiling` — Gyproc & POP ceiling schemes with profile lighting; starting at ₹100/sq.ft.
4. `/services/wall-panelling` — Fluted louvers, WPC panels, and accent feature walls.
5. `/services/electrical-lighting` — Concealed wiring and switchgear options (Anchor, Roma, Polycab).
6. `/services/bathroom-tiles` — Waterproofing, large-format porcelain tiles, and vanity units.
7. `/services/flooring` — Italian marble, vitrified tiles, and wooden flooring.
8. `/services/home-interiors` — Comprehensive turnkey 1BHK, 2BHK, 3BHK, 4BHK and commercial renovations.

---

## 4. Technical Stack & SEO Highlights

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS with custom palette (Deep Navy `#0B1D3A`, Royal Blue `#173D78`, Gold `#E9C94A`, Warm White `#FAF9F6`, Charcoal `#22252B`)
- **Typography:** Playfair Display (Serif) + Inter (Sans-serif)
- **Icons:** Lucide React
- **SEO & Structured Data:**
  - `sitemap.xml` dynamically generated via `src/app/sitemap.ts` (all 28 static and dynamic routes included).
  - `robots.txt` configured via `src/app/robots.ts`.
  - `LocalBusiness` Schema.org JSON-LD structured data embedded with address, coordinates, and contact details.
  - Granular OpenGraph & Twitter cards with descriptive alt tags.

---

## 5. Local Development Commands

To run the project locally on your machine:

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# Visit http://localhost:3000 (or http://localhost:3005 if port 3000 is occupied)
```

To validate and create a production build:

```bash
npm run build
npm run start
```

---

## 6. Deployment to Vercel

1. Push this repository to GitHub or GitLab:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Harmeet Interior website"
   git remote add origin <your-remote-repo-url>
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com).
3. Click **Add New...** &rarr; **Project**.
4. Import your **Harmeet Interior** repository.
5. Vercel automatically detects Next.js:
   - Framework Preset: `Next.js`
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Click **Deploy**. Your luxury site will be live on an edge network with instant global SSL.
