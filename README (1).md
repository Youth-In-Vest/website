# Youth In-Vest Website

A complete multi-page website for **Youth In-Vest** — empowering young people with financial knowledge and leadership skills.

## 📁 Files
- `index.html` — Full single-page website with all sections
- `styles.css` — All styles (colors, layout, animations, responsive)
- `script.js` — All JavaScript (form handling, animations, nav)

## 🎨 Brand Colors
- Sky Blue: `#38C6F4`
- Dark Navy: `#1C2B3A`
- Orange: `#FF5722`

## 📄 Sections
1. **Home / Hero** — "Do You Want to Make a Difference?" with Parents/Teachers and Teenagers CTAs
2. **About** — Mission, Vision, and Method cards
3. **Join Us** — Mailing list signup + Community join form
4. **Apply** — Team application form (Marketing, Program Mgmt, Finance, Research & Writing, Tech)
5. **Donate** — Donation form with one-time/monthly toggle
6. **Contact** — Contact form with Instagram, LinkedIn, Email icons
7. **Footer** — Location (Cupertino, CA & Houston, TX), socials, copyright

## 🚀 Deploying to GitHub Pages (Free)

1. Create a free account at [github.com](https://github.com)
2. Click **New Repository** → name it `youth-in-vest` (or anything you like)
3. Upload all 3 files (`index.html`, `styles.css`, `script.js`)
4. Go to **Settings → Pages**
5. Under "Branch" select `main` → click **Save**
6. Your site will be live at: `https://YOUR-USERNAME.github.io/youth-in-vest/`

### Custom Domain (Free with GitHub Pages)
1. Buy a domain from Namecheap, Google Domains, or Cloudflare (~$10-15/year)
2. In GitHub Pages settings, add your custom domain
3. Update your domain DNS to point to GitHub Pages

## 🚀 Deploying to Netlify (Even Easier)

1. Go to [netlify.com](https://netlify.com) → Sign up free
2. Drag and drop the folder with all 3 files onto the Netlify dashboard
3. Your site is instantly live at a free `.netlify.app` URL
4. You can add a custom domain for free in Netlify settings

## 📧 Connecting Forms to Email

To make the contact/mailing forms actually send emails:

### Option 1: EmailJS (Free, no backend needed)
1. Sign up at [emailjs.com](https://emailjs.com)
2. Add your service and template
3. In `script.js`, uncomment and fill in the EmailJS lines with your credentials

### Option 2: Formspree (Super easy)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form → get an endpoint URL
3. Update the form `action` attribute in `index.html`

### Option 3: Netlify Forms (If deploying to Netlify)
1. Add `netlify` attribute to your form tags
2. Netlify handles everything automatically

## 💳 Connecting Donations to Real Payments

For actual payment processing, connect to:
- **Stripe** — `stripe.com` — professional, widely used
- **PayPal Donate** — quick setup, just add a PayPal button
- **Hack Club Bank** — great for youth nonprofits (mentioned in your plan)

In `script.js`, update the `processDonation()` function to redirect to your payment link.

## 📝 Updating Google Form Links

Replace these placeholder URLs in `index.html`:
- `https://forms.gle/YOUR_GOOGLE_FORM_LINK` → your community join form
- `https://forms.gle/YOUR_APPLICATION_FORM` → your team application form
