# Lawsons CloudWorks - Main Marketing Site

Professional cloud consulting and modern workplace services for UK businesses.

Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
lawsonscloudworks-main-site/
├── app/                        # Next.js app directory
│   ├── about/                  # About page
│   ├── api/                    # API routes
│   │   └── contact/           # Contact form submission
│   ├── approach/              # How we work page
│   ├── case-studies/          # Case studies
│   ├── contact/               # Contact page
│   ├── privacy/               # Privacy policy
│   ├── services/              # Services page
│   ├── terms/                 # Terms of service
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── components/                # Reusable components
│   ├── CaseStudyTeaser.tsx   # Case study card
│   ├── ContactForm.tsx       # Contact form
│   ├── CredibilityStrip.tsx  # Credentials section
│   ├── Footer.tsx            # Site footer
│   ├── Navigation.tsx        # Navigation bar (with active states!)
│   ├── OutcomesSection.tsx   # Outcomes grid
│   ├── ServiceCard.tsx       # Service pillar card
│   └── ServicePillar.tsx     # Service detail section
├── public/                    # Static assets
│   └── images/
│       └── logo.png          # CloudWorks logo
├── docs/                      # Documentation
│   └── lawsonscloudworks-brief.md  # Design brief
└── README.md                  # This file
```

## 🎨 Design System

### Colour Palette

Based on the CloudWorks logo:

- **Brand Navy**: `#2E3B8E` - Primary brand colour (headings, nav active states)
- **Brand Sky**: `#1EA7E0` - Secondary brand colour (CTAs, accents)
- **Brand Slate**: `#5B7BAA` - Mid-tone blue
- **Brand Light**: `#E8F1F8` - Light blue tint (backgrounds)
- **Neutral grays**: 50-900 scale for text and backgrounds

### Typography

- **Font**: Inter (loaded from Google Fonts)
- **H1**: 4xl-6xl, bold, brand-navy
- **H2**: 3xl-4xl, semibold, brand-navy
- **H3**: 2xl-3xl, medium, brand-navy
- **Body**: base-lg, leading-relaxed

### Components

Reusable utility classes in `globals.css`:

- `.btn-primary` - Primary CTA button
- `.btn-secondary` - Secondary/ghost button
- `.card` - Card container with hover effect
- `.container-custom` - Max-width container with padding
- `.section-spacing` - Consistent vertical section spacing

## 🧭 Navigation Active States

**CRITICAL FEATURE**: The navigation component includes proper active state styling:

- **Active page**: Brand navy colour, semibold font weight, bottom border
- **Inactive pages**: Mid-gray colour, normal font weight
- **Hover state**: Smooth transitions, subtle background colour
- **Mobile menu**: Active state maintained with left border accent

This was explicitly requested in the design brief and must not be removed.

## 📝 Key Pages

### Homepage (`/`)
- Hero section with value proposition
- Four service pillar cards
- Outcomes section
- Credibility strip
- Case study teasers
- Final CTA

### Services (`/services`)
- Page introduction
- Four detailed service pillars:
  - Cloud & Workspace Architecture
  - Modern Endpoint & Identity
  - Automation & Dev Tooling
  - Advisory & Project Rescue
- FAQ section
- CTA

### Approach (`/approach`)
- How we engage (5-step process)
- Small consultancy positioning
- Documentation and handover
- Ideal client profile

### About (`/about`)
- Company background
- Principal consultant bio
- Company values
- Legal information

### Contact (`/contact`)
- Contact form with qualification questions
- Contact information
- What happens next section

### Case Studies (`/case-studies`)
- Case study index
- Individual case study pages (2 examples)

## 📧 Contact Form

The contact form currently logs submissions to the console. To enable email notifications:

1. Choose an email service (SendGrid, Postmark, Resend, etc.)
2. Add environment variables to `.env.local`
3. Update `/app/api/contact/route.ts` with email sending logic

See `.env.example` for required variables.

## 🔧 Development

### Adding New Pages

1. Create a new directory in `app/`
2. Add a `page.tsx` file
3. Include metadata for SEO
4. Update navigation in `components/Navigation.tsx` if needed

### Customising Styles

Global styles and utility classes are in `app/globals.css`.

Tailwind configuration (colours, fonts) is in `tailwind.config.ts`.

### Adding Images

Place images in `public/images/` and reference them with `/images/filename.ext`.

For professional photography, consider:
- Unsplash (free, high-quality)
- Pexels (free, royalty-free)
- Stock photo services

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project to Vercel
3. Configure environment variables
4. Deploy

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS (Amplify, EC2, ECS)
- Azure
- DigitalOcean
- Self-hosted

## 🌐 Domain Configuration

When ready to deploy:

1. Configure DNS in Cloudflare
2. Point to Vercel (or chosen host)
3. Set up SSL certificate
4. Update environment variables for production

## ✅ Pre-Launch Checklist

- [ ] Replace placeholder images with professional photography
- [ ] Update Andy's LinkedIn URL if needed
- [ ] Verify all email addresses are correct
- [ ] Set up contact form email integration
- [ ] Add Google Analytics or privacy-friendly alternative
- [ ] Test all links
- [ ] Test contact form submission
- [ ] Mobile responsiveness check on real devices
- [ ] Performance audit (Lighthouse)
- [ ] Accessibility check
- [ ] Legal review of privacy policy and terms
- [ ] Set up monitoring/uptime alerts

## 📚 Reference

- **Primary reference site**: [Intelliworx UK](https://intelliworx.co/uk/)
- **Design brief**: See `docs/lawsonscloudworks-brief.md`
- **Next.js docs**: https://nextjs.org/docs
- **Tailwind CSS docs**: https://tailwindcss.com/docs

## 🤝 Related Projects

- **Lawsons Creative**: Web design for SMEs - https://lawsonscreative.co.uk
- **Lawsons Enterprises Ltd**: Parent company

## 📄 License

Proprietary - © 2025 Lawsons Enterprises Ltd

---

**Built by:** Claude Code
**For:** Lawsons CloudWorks
**Date:** November 2025
