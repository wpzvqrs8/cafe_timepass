# ☕ ANTIGRABOTY CAFÉ — The Digital Experience That Makes People *Crave*
### Full-Stack Build Brief · UI/UX Obsession Edition · 2025–2026

---

> **One sentence that drives everything:**
> *"This website should make someone pick up their phone, open it for 3 seconds, and immediately want to order — not because they're hungry, but because the experience itself feels too good to resist."*

---

## 🎯 The Real Objective (Beyond "just build it")

Most café websites are *functional*. Ours will be *felt*.

The gap between a 2% conversion rate and a 12% one isn't features — it's **emotional resonance**. It's the half-second moment where a user sees a photo and their brain releases dopamine before they've even read the price. This brief is about engineering *that* moment, then sustaining it all the way through the checkout.

**Three non-negotiable outcomes:**
1. **First impression:** User opens the site and whispers "wow" within 2 seconds
2. **Ordering flow:** Zero confusion from landing → cart → paid — max 4 taps on mobile
3. **Re-engagement:** After their first order, they feel compelled to come back

---

## 🧠 Design Philosophy: "Sensory Digital"

This café is not a utility. It's an *experience brand*.

The design language must evoke:
- The warmth of holding a ceramic mug on a cold morning
- The aroma hit when you walk into a good café
- The quiet luxury of a space that clearly cares about every detail

**Aesthetic Direction: Warm Brutalism meets Artisanal Editorial**

Imagine if *Kinfolk Magazine* and a *Criterion Collection* Blu-ray had a baby raised in a specialty coffee shop in Tokyo. Clean but not cold. Structured but breathing. Dark amber and cream, with editorial grid-breaking layouts. Text that isn't afraid to be large and in charge.

### Design Token System

```
— Background:     #0E0A07  (espresso black, not pure black)
— Surface:        #1C1410  (dark roast)
— Surface-raised: #2A1F18  (lighter card surface)
— Primary:        #C8763A  (burnt caramel / espresso crema)
— Primary-warm:   #E8935A  (lighter, for hovers)
— Accent:         #F2C98A  (golden foam)
— Text-primary:   #F5EFE6  (warm white, never pure #FFF)
— Text-muted:     #9A8880  (steam grey)
— Success:        #6AAB72  (matcha green)
— Error:          #C05050  (red velvet)

Typography:
— Display:     "Canela" or "Playfair Display" — for headlines, emotional moments
— UI/Body:     "Söhne" or "DM Sans" — clean, legible, personality
— Mono/Label:  "JetBrains Mono" — for prices, order IDs, status pills

Motion:
— Easing:  cubic-bezier(0.25, 0.46, 0.45, 0.94)  (ease-out-quart feels physical)
— Short:   180ms (micro interactions)
— Medium:  380ms (panel slides, modals)
— Long:    700ms (page transitions, hero entrances)
— Never use linear easing for anything visible to the user
```

---

## 🏗️ Tech Stack (Non-Negotiable for 2025/2026 Scale)

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 15 (App Router)** | RSC + streaming SSR for LCP < 2s |
| Styling | **Tailwind CSS v4 + CSS Variables** | Speed + design token consistency |
| Components | **Radix UI primitives** (unstyled) | Accessible by default, fully ownable |
| Backend | **tRPC v11 + Next.js API Routes** | End-to-end type safety, zero boilerplate |
| Database | **Supabase (PostgreSQL + Realtime)** | Realtime order tracking built-in |
| Auth | **Clerk** | OTP + Google/Apple in < 1 hour |
| State | **Jotai** (atoms) + **TanStack Query** | Minimal, composable, no boilerplate hell |
| Images | **Cloudinary** | Auto-format, focal-point cropping, lazy blur |
| Payments | **Razorpay** (primary) + UPI intent links | Native India stack, 1-tap UPI |
| Animations | **Framer Motion 11** | Page transitions + gesture physics |
| Deployment | **Vercel** (Edge Functions) | Instant preview branches, global CDN |

---

## 🌐 Information Architecture

```
/                          → Landing / Hero
/menu                      → Full menu with filters
/menu/[category]           → Category deep page
/item/[slug]               → Item detail (full-screen photo, reviews, customize)
/cart                      → Cart review + upsells
/checkout                  → Single-page checkout
/order/[id]                → Live order tracking
/account                   → Profile + order history + favorites
/account/reorder/[id]      → One-tap reorder

/admin                     → Dashboard overview
/admin/orders              → Live order queue
/admin/menu                → Menu editor
/admin/menu/[id]           → Edit item
/admin/analytics           → Revenue + item performance
/admin/settings            → Café settings (hours, delivery zones)
```

---

## 🖼️ Page-by-Page Breakdown

---

### 1. 🏠 Landing Page — The Seduction

**Goal:** Create lust before intent. The user hasn't searched "buy coffee" — they may have just been sent a link. Make them want to order before they consciously decide to.

#### Hero Section
- **Full-viewport video hero** — looping 6–10s cinematic clip. Ideas:
  - Espresso shot pulled in slow motion — crema forming in bloom
  - Barista's hands wrapping a takeaway cup in warm light
  - Steam rising from a latte with perfect heart art
- Video must **autoplay muted** on mobile (use `<video playsinline muted loop autoplay>`)
- Overlay: semi-transparent dark gradient (bottom 40% → fully opaque) so text is legible
- **Hero text** centered, large, emotional:
  ```
  [Display font, 72px desktop / 48px mobile]
  "Every sip,
  crafted for you."
  
  [Subline, muted, 18px]
  Artisanal coffee & comfort food · 25–40 min delivery
  
  [CTA button, large, primary color]
  [ Order Now → ]   [ View Menu ]
  ```
- Micro-interaction: CTA button has a subtle pulse animation (scale 1 → 1.03 → 1 every 3s), not annoying but eye-catching
- **Trust bar** below fold-break: `★ 4.8 rating   •   1,200+ orders this month   •   Free delivery over ₹399`

#### "Why Antigraboty" Section
Three editorial cards, asymmetric layout (not 3-equal-columns, that's generic):
- Left card: large (60% width) — "Obsessed with quality" — close-up coffee bean photo
- Right: two stacked smaller cards — "25 min delivery" + "Made fresh, always"
- Hover: cards tilt 1–2° with a subtle shadow lift (CSS `transform: perspective(800px) rotateY(-2deg)`)

#### Popular Right Now
- Horizontal scroll on mobile, 3-column on desktop
- Each card: **tall portrait photo (2:3 ratio)**, item name, price, rating, "+ Add" button
- Card hover: photo zooms 5%, button color changes, subtle shadow
- Section header: "🔥 What everyone's ordering today" — feels alive, not static

#### Social Proof Strip
- Real reviews in a horizontal auto-scrolling marquee (CSS animation, no JS)
- Format: `"The cold brew changed my life honestly" — Priya M., ★★★★★`
- Interspersed with order count: `847 orders placed this week`

#### Footer
- Dark, café-branded — not an afterthought
- Logo + tagline + Instagram grid (6 recent posts via API)
- Links + operating hours + WhatsApp link

---

### 2. 🍽️ Menu Page — The Desire Engine

**This is where conversion happens or dies.**

#### Sticky Header (appears on scroll)
- Café logo (small) + Search icon + Cart badge (pulsates when items added) + "Sign in"
- Below: **scrollable category chips** — `All • Coffee • Cold Brew • Matcha • Food • Combos • Desserts`
- Active chip: filled background, smooth sliding indicator bar underneath (like iOS tab bar)
- Chips don't jump or reflow — use `overflow-x: auto; scrollbar-width: none`

#### Menu Layout (Mobile-first)
```
[2-column grid on mobile, 3-column on tablet, 4-column on desktop]

Each card:
┌─────────────────────────┐
│  [Photo 4:3, full-bleed]│
│                    [VEG]│
├─────────────────────────┤
│  Name (bold, 16px)      │
│  Tagline (muted, 13px)  │
│  ★ 4.7 · 124 reviews    │
│  ₹249  ~~₹299~~         │
│                  [+ Add]│
└─────────────────────────┘
```
- Photo: `object-fit: cover`, consistent ratio, Cloudinary auto-format (WebP/AVIF)
- Blur placeholder: base64 LQIP (low-quality image placeholder) from Cloudinary
- `+ Add` button: floating bottom-right of card. On tap → **opens customization bottom sheet** (mobile) or popover (desktop)

#### Smart Filters (horizontal scroll bar below categories)
`🥦 Veg Only   ·   💰 Under ₹150   ·   🔥 Popular   ·   ✨ New   ·   🎛️ Customizable`
- Multiselect — filters animate items in/out with `layout` animation (Framer Motion)
- Filter state preserved in URL params for sharing / deep linking

#### Item Detail (Full-screen modal or /item/[slug] page)
- **Hero photo full width**, pinch-to-zoom on mobile
- Scrollable details below: name, description, ingredients, allergens
- **Customization section** (if applicable):
  ```
  Milk type: [Whole ●] [Oat] [Almond] [Soy]
  Sugar level: [None] [Less] [Normal ●] [Extra]
  Temperature: [Hot ●] [Iced] [Blended]
  Add-ons: [Extra shot +₹30] [Whipped cream +₹20]
  ```
- Live price update as customizations change (smooth number counter animation)
- **"Add to Cart" button** — sticky at bottom of modal, large, full-width, primary color
- Below button: "People also ordered" — 3 related items in compact horizontal cards

---

### 3. 🛒 Cart — The Momentum Builder

**Cart abandonment is where money burns. Design this like a conversation, not a form.**

#### Mini-Cart (Bottom Sheet on mobile, Side Panel on desktop)
- Opens smoothly on "+ Add" — doesn't navigate away (critical on mobile)
- Gesture: **swipe down to dismiss** (Framer Motion `drag="y"` with `dragConstraints`)
- Items list: thumbnail + name + customizations summary + qty +/- + remove (×)
- Qty changes: animated counter, smooth height transitions on add/remove
- **Upsell section** (2 compact cards): "Add a cookie for ₹49?" — one-tap add, no modal needed
- **Subtotal area**:
  ```
  Subtotal          ₹498
  Delivery fee      ₹40
  Taxes (5%)        ₹27
  ─────────────────────
  Total             ₹565
  
  [View Cart & Checkout →]
  ```
- Promo code input: collapsed by default (tap to expand) — reduces visual clutter

#### Full Cart Page
- Order summary on right (sticky, desktop) / top (mobile)
- Delivery address quick-select
- Estimated delivery time: "🕐 Your order will arrive by 2:45 PM" — calculated, shown early
- **"You might also like"** section — 2 upsells that feel curated, not algorithmic-spammy

---

### 4. 💳 Checkout — The Trust Vault

**One-page vertical flow. No multi-page wizard. No page refreshes.**

```
Step 1: Delivery Details
  ├── Saved addresses (if logged in) as large tap cards
  ├── Add new: Google Places autocomplete (one field)
  └── "Deliver to current location" button

Step 2: Delivery Time
  ├── ASAP (25–35 min) [default selected]
  └── Schedule: date + time picker

Step 3: Payment
  ├── UPI (PhonePe, GPay, BHIM) — one-tap via Razorpay intent
  ├── Cards (Razorpay saved cards)
  ├── Cash on Delivery
  └── Café Wallet (if loyalty feature built)

Step 4: Review & Place Order
  ├── Compact order summary (collapsed, tap to expand)
  ├── Delivery address + time shown
  └── [PAY ₹565 · PLACE ORDER] — large, full-width, satisfying
```

**Trust signals at checkout:**
- 🔒 "Secured by Razorpay" near payment section
- "✓ No hidden charges" near total
- Estimated delivery time shown again next to CTA
- Guest checkout default — "Create account after order to earn points"

**Order placement animation:**
- Full-screen success state (not just a toast)
- Animated checkmark (Lottie or CSS)
- Confetti burst (Canvas confetti, 1.5s, subtle not obnoxious)
- "Your order is confirmed! 🎉 We'll have it ready in 28 minutes"
- WhatsApp update link: "Get updates on WhatsApp →"

---

### 5. 📦 Order Tracking — The Dopamine Loop

Users open tracking 3–4x per order. Make it beautiful enough that they *want* to.

```
┌──────────────────────────────────┐
│  Order #AG-2847                  │
│  Arriving in ~22 minutes 🕐       │
│                                  │
│  ● Order Received        2:12 PM │
│  ● Being Prepared        2:14 PM │
│  ○ Out for Delivery              │
│  ○ Delivered                     │
│                                  │
│  [Map placeholder / illustration]│
│                                  │
│  Your order:                     │
│  [Item thumbnails row]           │
│                                  │
│  [Rate your experience →]        │
│  [Reorder →]                     │
└──────────────────────────────────┘
```

- **Live countdown timer**: "Arriving in 22:14" — ticks down in real-time (Supabase Realtime)
- **Step animations**: Each step has a pulsing glow when it becomes active
- **Celebration moment**: On "Delivered" status → confetti burst + "How was it? ⭐⭐⭐⭐⭐"
- Persistent until rated + 1 hour after delivery

---

### 6. 👤 Auth — Frictionless by Design

**Phone + OTP is the primary path for Indian users.**

```
Enter your phone number
[+91] [XXXXXXXXXX] → [Continue]

We sent a 6-digit code to +91 XXXXX XXXXX
[_] [_] [_] [_] [_] [_]
← Edit number    Resend in 28s
```

- Auto-submit when 6 digits entered (no "Verify" button tap needed)
- OTP digits: large, bold, satisfying fill animation
- Google sign-in: secondary option, clear visual hierarchy
- After first order as guest: "Save your details? Get 50 loyalty points." — gentle, opt-in

---

### 7. 📊 Admin Dashboard — Calm Power

**Admin should feel like a cockpit, not a spreadsheet.**

#### Layout
- Left sidebar (collapsible on mobile): logo + nav links + café status toggle (Open/Closed)
- Main area: context-sensitive content
- Top bar: "Good morning, Arjun ☕" + today's date + quick notification bell

#### Home Overview
```
┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
│ 47      │  │ ₹18,240 │  │ ₹387    │  │ 8 ⚠️    │
│ Orders  │  │ Revenue │  │ Avg AOV │  │ Pending │
│ today   │  │ today   │  │         │  │ orders  │
└─────────┘  └─────────┘  └─────────┘  └─────────┘

[Revenue sparkline last 7 days]
[Top 5 items today bar chart]
```

#### Live Order Queue
- Cards sorted by time (oldest first — FIFO)
- Each card: order ID + items summary + customer name + time since placed + **status dropdown**
  ```
  Status: [Pending ▾] → [Preparing] → [Ready] → [Out for delivery] → [Delivered]
  ```
- Status change triggers **Supabase Realtime push** to customer tracking page (< 1s latency)
- Overdue orders (> 40 min since placed) automatically highlighted in red
- Sound notification when new order arrives (toggleable)

#### Menu Editor
- Drag-and-drop category reordering (Dnd-kit)
- Each item: thumbnail + name + price + availability toggle + edit button
- **Availability toggle**: instant, optimistic update — "Sold out" badge appears on menu immediately
- **Add/Edit item form**: Side panel (not full-page navigation)
  - Image upload with drag-drop → Cloudinary direct upload → auto-crop preview
  - All fields inline with real-time character counts
  - Preview button: shows how the item card looks to customers

#### Analytics Page
- Revenue chart: switchable between day / week / month (smooth transition)
- Top items: horizontal bar chart ranked by revenue and by quantity
- Customer stats: new vs returning, avg order frequency
- Delivery zone heatmap (if Google Maps integrated)

---

## ✨ Micro-interaction Specification (The "WOW" Layer)

These are what separate forgettable from unforgettable:

| Trigger | Animation | Duration |
|---|---|---|
| Add to cart | Item thumbnail flies (arc) toward cart icon | 400ms |
| Cart icon receives item | Bounce scale 1 → 1.3 → 1 + number counter increments | 200ms |
| Checkout CTA hover | Subtle shimmer sweep left→right | 600ms |
| Order placed | Full-screen dark overlay + confetti burst + checkmark draw | 1.8s |
| OTP digit entered | Digit scales in + green fill | 120ms per digit |
| Status update (tracking) | Step glows then solidifies, ripple outward | 600ms |
| Page load (menu) | Cards stagger-fade in top-to-bottom, 50ms delay each | — |
| Scroll into section | Elements slide up from 20px below opacity 0→1 | 400ms |
| Bottom sheet open | Spring physics — slight overshoot | 350ms |
| Quantity change | Number rolls up/down (slot-machine style) | 200ms |
| Filter applied | Items shuffle with layout animation | 300ms |

---

## 🔔 Real-time Architecture

```
Customer orders → Supabase DB write
                     ↓
            Supabase Realtime broadcast
                ↙            ↘
   Customer tracking page    Admin order queue
   (status updates live)     (new order card appears)
```

- **No polling.** Everything is push via WebSockets.
- Fallback: 30s refresh if WebSocket disconnects
- Admin new order: browser notification + audio ping (user-permission requested on first admin login)

---

## 🇮🇳 India-specific UX Decisions

| Feature | Decision | Reason |
|---|---|---|
| Auth | Phone + OTP primary | Higher smartphone penetration than email check habits |
| Payment | UPI intent first, cards second | 75%+ Indian digital payments are UPI |
| Currency | ₹ symbol, no decimal for round numbers (₹249 not ₹249.00) | Local convention reduces cognitive load |
| Language | English + optional Gujarati toggle | Surat-specific market |
| Address | Support for apartment/society/floor fields | Indian address structure |
| WhatsApp | Order confirmation via WhatsApp link | 500M+ active Indian users |
| Delivery time | Show in minutes, not clock time (initially) | "35 min" > "3:42 PM" in immediacy |
| Offers | Prominent on landing and menu — Indians highly offer-sensitive | — |

---

## 📐 Component Library (Build These First)

```
primitives/
  Button.tsx        — 5 variants: primary / secondary / ghost / danger / loading
  Card.tsx          — base card with hover state
  BottomSheet.tsx   — gesture-dismissible (Framer Motion)
  Badge.tsx         — veg/nonveg, new, sold-out, discount
  Input.tsx         — with error states, labels, icons
  Toast.tsx         — 4 types, stacked, auto-dismiss
  Avatar.tsx        — initials fallback, ring variant
  Spinner.tsx       — branded (coffee-colored)
  Rating.tsx        — stars, half-star, read-only + interactive modes
  CounterButton.tsx — +/- with smooth number animation
  ImageCard.tsx     — with LQIP blur placeholder + Cloudinary integration
  StatusPill.tsx    — order status with color mapping
  PriceDisplay.tsx  — handles strike-through, discount badge, currency
```

---

## ♿ Accessibility Requirements (Not Optional)

- All interactive elements: `aria-label` or `aria-describedby`
- Focus ring: visible, styled (not browser default) — `2px solid var(--primary)`
- Color contrast: minimum 4.5:1 for body text, 3:1 for large text / UI elements
- Keyboard: full tab-through of checkout flow
- Screen reader: modal focus trap + announcements on cart update
- Reduced motion: `@media (prefers-reduced-motion: reduce)` → all animations skip/fade-only
- Font minimum: 14px (16px preferred for body text)

---

## 🚀 Performance Targets

| Metric | Target | Technique |
|---|---|---|
| LCP | < 2.0s | Hero image preload, Cloudinary CDN, RSC streaming |
| CLS | < 0.05 | Fixed image dimensions, skeleton loaders |
| TBT | < 150ms | Code splitting, no blocking JS |
| INP | < 200ms | Event delegation, deferred non-critical JS |
| Bundle size | < 150KB first load JS | Dynamic imports, tree-shaking |
| Image weight | < 80KB per menu photo | Cloudinary auto-format + quality auto |

Use `next/image` with `priority` on hero image, `loading="lazy"` on all below-fold images.

---

## 📱 Mobile-First Interaction Patterns

```
Bottom navigation (always visible):
[ 🏠 Home ] [ 📋 Menu ] [ 🛍️ Orders ] [ 👤 Profile ]

Cart access: FAB (floating action button) bottom-right
             → opens bottom sheet cart

Modals: always bottom sheets on mobile (never centered modal)
        → feels native, thumb-reachable

Swipe gestures:
  - Menu item photo: swipe left/right to see more photos
  - Bottom sheet: swipe down to close
  - Order history: swipe right on item to quick-reorder

Navigation: use Next.js `<Link prefetch>` on all nav links
            → pages load before tap completes
```

---

## 🌟 Bonus Features (Tiered by Priority)

**P1 (build these):**
- [ ] Reorder from history (one-tap, repopulates cart)
- [ ] Favorites / wishlist (heart icon on item cards)
- [ ] Push notifications (PWA service worker)
- [ ] Item availability toggle (admin → instant customer-side update)
- [ ] WhatsApp order confirmation link

**P2 (build if time):**
- [ ] Loyalty points system (₹1 spend = 1 point, 100 points = ₹10 off)
- [ ] Review + rating after delivery (star + text, photo optional)
- [ ] Item customization with price modifiers
- [ ] Promo code system
- [ ] Schedule future orders

**P3 (backlog / v2):**
- [ ] AI-powered recommendations (embedding similarity on past orders)
- [ ] Live driver tracking (Google Maps)
- [ ] Multi-language (Gujarati)
- [ ] Table ordering (QR code at café tables)
- [ ] Subscription / monthly coffee plan

---

## 📁 Folder Structure

```
antigraboty/
├── app/
│   ├── (customer)/
│   │   ├── page.tsx              # Landing
│   │   ├── menu/
│   │   ├── item/[slug]/
│   │   ├── cart/
│   │   ├── checkout/
│   │   └── order/[id]/
│   ├── (admin)/
│   │   ├── admin/
│   │   │   ├── page.tsx          # Dashboard
│   │   │   ├── orders/
│   │   │   ├── menu/
│   │   │   └── analytics/
│   └── api/
│       └── trpc/[trpc]/
├── components/
│   ├── ui/                       # Primitives (Button, Card, etc.)
│   ├── menu/                     # ItemCard, CategoryChips, etc.
│   ├── cart/                     # MiniCart, CartItem, etc.
│   ├── checkout/                 # AddressStep, PaymentStep, etc.
│   └── admin/                    # OrderCard, MenuEditor, etc.
├── lib/
│   ├── trpc/
│   ├── supabase/
│   ├── cloudinary/
│   └── razorpay/
├── server/
│   ├── routers/
│   │   ├── menu.ts
│   │   ├── orders.ts
│   │   ├── cart.ts
│   │   └── admin.ts
│   └── db/
│       └── schema.prisma
├── stores/
│   ├── cart.ts                   # Jotai atoms
│   └── ui.ts                     # Modal/sheet state
└── public/
    └── assets/
```

---

## ✅ Definition of Done

A feature is "done" only when:
- [ ] Works on iPhone SE (375px) without horizontal scroll
- [ ] Works on desktop at 1440px
- [ ] Lighthouse Performance ≥ 90
- [ ] No console errors in production build
- [ ] Loading states for every async operation
- [ ] Error states for every failure mode (network, API, validation)
- [ ] Keyboard accessible
- [ ] Tested with real food photos (not placeholder.com)

---

## 📋 README Requirements

```markdown
# Antigraboty Café

## Screenshots
[Mobile landing] [Menu page] [Checkout] [Admin dashboard]

## Quick Start
1. Clone
2. `cp .env.example .env.local`
3. Fill in environment variables (list below)
4. `npm install && npm run dev`

## Environment Variables
NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=

## Key Decisions
- Why tRPC over REST: [...]
- Why Jotai over Zustand: [...]
- Why Clerk over NextAuth: [...]

## Trade-offs
- [Decision]: [What we chose] vs [what we didn't] because [reason]
```

---

## 💬 Final Note to the Developer

The best café websites don't *look* like café websites. They look like luxury brand sites that happen to sell coffee. Every pixel should carry the message: *"We care deeply about what we make, and we'll treat your order the same way."*

When in doubt, ask: **"Does this make the user feel something?"**

If the answer is no — redesign it.

Make it blow minds. ☕

---

*Brief version: 2.0 · Enhanced for 2025–2026 · Built for Antigraboty Café*
