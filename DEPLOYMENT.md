# Deployment Guide - Lawsons CloudWorks

This guide covers deploying the CloudWorks site to production.

## Pre-Deployment Checklist

Before deploying to production, ensure:

- [ ] All content is final and reviewed
- [ ] Professional images replace placeholders
- [ ] Contact form email integration is configured
- [ ] Environment variables are set
- [ ] Domain DNS is ready
- [ ] SSL certificate will be configured
- [ ] Privacy policy and terms reviewed by legal (if required)

## Vercel Deployment (Recommended)

### Initial Setup

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Lawsons CloudWorks site"
   git remote add origin [your-github-repo-url]
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables**
   In Vercel project settings, add:
   - `RESEND_API_KEY` (or your chosen email service)
   - `RESEND_FROM_EMAIL`
   - `RESEND_TO_EMAIL`
   - `NEXT_PUBLIC_SITE_URL`
   - Any analytics keys

4. **Deploy**
   - Vercel will automatically deploy
   - You'll get a `*.vercel.app` URL

### Custom Domain Setup

1. **In Vercel**
   - Go to Project Settings → Domains
   - Add your custom domain: `lawsonscloudworks.co.uk`
   - Vercel will provide DNS configuration

2. **In Cloudflare DNS**
   - Add CNAME record: `@` → `cname.vercel-dns.com`
   - Or A records as provided by Vercel
   - SSL will be automatically configured

3. **Verify**
   - Wait for DNS propagation (5-60 minutes)
   - Site should be live at your domain

## Contact Form Email Setup

### Using Resend (Recommended)

1. **Sign up at resend.com**
2. **Verify your domain**
   - Add DNS records as instructed
   - Verify domain ownership
3. **Get API key**
4. **Install Resend SDK**
   ```bash
   npm install resend
   ```
5. **Update `/app/api/contact/route.ts`**
   ```typescript
   import { Resend } from 'resend';

   const resend = new Resend(process.env.RESEND_API_KEY);

   export async function POST(request: Request) {
     const body = await request.json();

     await resend.emails.send({
       from: process.env.RESEND_FROM_EMAIL!,
       to: process.env.RESEND_TO_EMAIL!,
       subject: `New Contact Form: ${body.name}`,
       html: `
         <h2>New Contact Form Submission</h2>
         <p><strong>Name:</strong> ${body.name}</p>
         <p><strong>Email:</strong> ${body.email}</p>
         <p><strong>Company:</strong> ${body.company || 'Not provided'}</p>
         <p><strong>Services:</strong> ${body.services.join(', ')}</p>
         <p><strong>Urgency:</strong> ${body.urgency}</p>
         <p><strong>Message:</strong></p>
         <p>${body.message}</p>
       `,
     });

     return NextResponse.json({ success: true }, { status: 200 });
   }
   ```

### Alternative: SendGrid, Postmark, etc.

Similar process - see respective documentation.

## Analytics Setup (Optional)

### Google Analytics 4

1. Create GA4 property
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to environment variables
4. Create `/app/components/Analytics.tsx`:
   ```typescript
   import Script from 'next/script';

   export default function Analytics() {
     const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

     if (!GA_ID) return null;

     return (
       <>
         <Script
           src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
           strategy="afterInteractive"
         />
         <Script id="google-analytics" strategy="afterInteractive">
           {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', '${GA_ID}');
           `}
         </Script>
       </>
     );
   }
   ```
5. Add to layout.tsx

### Privacy-Friendly Alternative: Plausible, Fathom

Consider privacy-focused analytics if you want cookie-free tracking.

## Performance Optimization

### Before Launch

1. **Optimize Images**
   - Use Next.js Image component (already implemented)
   - Compress images (use TinyPNG, ImageOptim, etc.)
   - Use WebP format where possible

2. **Check Bundle Size**
   ```bash
   npm run build
   ```
   Review bundle analysis

3. **Run Lighthouse**
   - Aim for 90+ scores
   - Fix any accessibility issues

### Post-Launch Monitoring

Set up monitoring with:
- Vercel Analytics (built-in)
- Uptime monitoring (UptimeRobot, Pingdom)
- Error tracking (Sentry) if needed

## DNS Configuration (Cloudflare)

Example DNS records:

```
Type    Name    Content                         Proxy
CNAME   @       cname.vercel-dns.com            Yes
CNAME   www     lawsonscloudworks.co.uk         Yes
```

Additional records for email (if using custom email):
```
Type    Name    Content                         Priority
MX      @       [your-mail-server]              10
TXT     @       v=spf1 include:_spf.google.com ~all
```

## Security Headers

Vercel automatically adds security headers, but you can customize in `next.config.ts`:

```typescript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
        ],
      },
    ];
  },
};
```

## Backup & Recovery

1. **Git Repository**
   - Keep code in GitHub (primary backup)
   - Use branches for development
   - Tag releases

2. **Database** (if you add one later)
   - Automated backups
   - Test recovery process

3. **Content**
   - Most content is in code (already backed up)
   - Export any user-generated content regularly

## Rollback Plan

If something goes wrong:

1. **Vercel**
   - Go to Deployments
   - Find last working deployment
   - Click "Promote to Production"

2. **Git**
   ```bash
   git revert HEAD
   git push
   ```

## Post-Deployment Testing

After going live:

- [ ] Test all pages load correctly
- [ ] Test navigation on desktop and mobile
- [ ] Submit a test contact form
- [ ] Verify email notifications arrive
- [ ] Check SSL certificate is active
- [ ] Test on multiple browsers
- [ ] Test on real mobile devices
- [ ] Verify analytics tracking (if enabled)
- [ ] Check Core Web Vitals in Search Console

## Ongoing Maintenance

### Weekly
- Check contact form submissions
- Review any error logs

### Monthly
- Review analytics
- Check for security updates
- Review uptime reports

### Quarterly
- Content review and updates
- Performance audit
- Accessibility check
- Update case studies

## Support

For issues with:
- **Hosting**: Vercel support
- **DNS**: Cloudflare support
- **Email**: Resend/SendGrid support
- **Code**: See README.md or contact developer

---

**Last Updated:** November 2025
**Version:** 1.0
