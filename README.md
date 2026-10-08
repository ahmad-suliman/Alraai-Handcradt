# Al-Raai Handmade Crafts | الراعي للأعمال اليدوية

A responsive, Arabic (RTL) landing page for **Al-Raai Handmade Crafts**, a coastal artisan studio specializing in wood burning, reverse glass painting, and seashell work. Built with React, Vite, and Tailwind CSS as a clean static page.

![Screenshot](./screenshot.png)


## Features

- Full RTL Arabic layout with calligraphic headings (Aref Ruqaa) and Tajawal body text
- Visual identity taken from the brand banner: parchment, burnt-wood brown, sea blue, and sunset gold
- Sticky navbar with a hamburger menu on mobile
- Full-screen hero with the brand banner as background (hidden on phones for a faster first view)
- Sections: About, Crafts, Gallery (name, size, and price under each piece), and Contact
- WhatsApp and Instagram call-to-action buttons
- Smooth scrolling between sections
- All content lives in a single data file, so no code changes are needed to update it

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/) v4


## Customization

Everything editable is in `src/data/siteData.js`:

| What | Where |
| --- | --- |
| Brand colors | `C` object |
| Store name, owner, quote, WhatsApp and Instagram links | `STORE` object |
| Navbar links | `navLinks` array |
| Services shown in the Crafts section | `crafts` array |
| Gallery pieces (name, price, size, image) | `gallery` array |

### Adding gallery images

1. Put the image in `public/` (for example `public/work1.jpg`).
2. Set the item's `image` field: `image: "/work1.jpg"`.

Recommended size is **1000×1000 px** (square), JPG or WebP, under 200 KB. Non-square images are cropped from the center.

## Deployment


## نبذة بالعربية

صفحة هبوط ثابتة ومتجاوبة لمتجر **الراعي للأعمال اليدوية**، مبنية بـ React وTailwind CSS وتدعم اللغة العربية من اليمين لليسار. لتعديل النصوص والأسعار والألوان وروابط التواصل، عدّل الملف `src/data/siteData.js` فقط.
