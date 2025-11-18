// Structured data schemas for Lawsons CloudWorks

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://www.lawsonscloudworks.co.uk/#organization',
  name: 'Lawsons CloudWorks',
  legalName: 'Lawsons Enterprises Ltd',
  url: 'https://www.lawsonscloudworks.co.uk',
  logo: 'https://www.lawsonscloudworks.co.uk/images/logo.png',
  description: 'Specialist managed service provider for cloud workspaces, modern endpoints and automation. Serving 20-250 person UK organisations with Microsoft 365, AWS WorkSpaces, Intune and automation services.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kent',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    addressCountry: 'GB',
  },
  email: 'hello@lawsonscloudworks.co.uk',
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  sameAs: [
    'https://lawsonscreative.co.uk',
  ],
  serviceType: [
    'Managed Service Provider',
    'Cloud Consulting',
    'IT Infrastructure Management',
  ],
  vatID: 'GB495884223',
  taxID: '16433965',
};

export const servicesSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.lawsonscloudworks.co.uk/services#managed-cloud-workspace',
    serviceType: 'Managed Cloud Workspace Service',
    provider: {
      '@id': 'https://www.lawsonscloudworks.co.uk/#organization',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    description: 'Ongoing management of Microsoft 365, AWS Workspaces, AVD (Azure Virtual Desktop) and hybrid environments. SLA-backed support for day-to-day operations, change management and continuous improvement.',
    offers: {
      '@type': 'Offer',
      price: '2500',
      priceCurrency: 'GBP',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '2500',
        priceCurrency: 'GBP',
        unitText: 'MONTH',
      },
      description: 'Monthly managed service from £2,500/month for 20-50 users',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.lawsonscloudworks.co.uk/services#managed-endpoint-identity',
    serviceType: 'Managed Endpoint & Identity Service',
    provider: {
      '@id': 'https://www.lawsonscloudworks.co.uk/#organization',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    description: 'Continuous management of Intune, Autopilot, Conditional Access and device compliance. Keep endpoints secure, users productive, and onboarding/offboarding smooth.',
    offers: {
      '@type': 'Offer',
      price: '1500',
      priceCurrency: 'GBP',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '1500',
        priceCurrency: 'GBP',
        unitText: 'MONTH',
      },
      description: 'Monthly managed service from £1,500/month for 20-50 devices',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.lawsonscloudworks.co.uk/services#automation-dev-tooling',
    serviceType: 'Automation & Dev Tooling',
    provider: {
      '@id': 'https://www.lawsonscloudworks.co.uk/#organization',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    description: 'GitHub Actions, CI/CD pipelines and workflow automation. Available as ongoing managed service or fixed-scope project.',
    offers: {
      '@type': 'Offer',
      price: '1000',
      priceCurrency: 'GBP',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '1000',
        priceCurrency: 'GBP',
        unitText: 'MONTH',
      },
      description: 'Managed service from £1,000/month or project-based £2,500-£5,000',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.lawsonscloudworks.co.uk/services#advisory-project-rescue',
    serviceType: 'Advisory & Project Rescue',
    provider: {
      '@id': 'https://www.lawsonscloudworks.co.uk/#organization',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    description: 'Fractional technical leadership, roadmap steering and governance. Project rescue for stuck or failing infrastructure projects.',
    offers: {
      '@type': 'Offer',
      price: '2000',
      priceCurrency: 'GBP',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '2000',
        priceCurrency: 'GBP',
        unitText: 'MONTH',
      },
      description: 'Monthly retainer from £2,000/month (typically 2-4 days per month)',
    },
  },
];

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are you a full-service MSP or a specialist MSP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We\'re a specialist MSP. We focus on cloud workspaces, modern endpoints and automation. We don\'t run helpdesks or SOCs – instead we work alongside your existing providers. Think of us as owning the platforms your team actually works on, while others handle day-to-day tickets.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide 24/7 support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Our SLAs cover UK business hours (9am–6pm). For 24/7 requirements, we can work alongside a provider who offers that, or help you design resilient systems that reduce out-of-hours emergencies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle SOC/MDR/cybersecurity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We ensure sensible security baselines in everything we do (identity, endpoints, cloud configurations). For deep SOC, MDR or penetration testing, we work with specialist security partners.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work only with AWS and Microsoft?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Those are our core ecosystems and where we have the most depth. We can work with other platforms, but AWS and Microsoft are where we\'re strongest.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if we\'re smaller than 20 people or larger than 250?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We\'re flexible. The 20-250 range is where we see the best fit, but we\'re happy to discuss your situation if you\'re outside that band.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do managed services start?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most clients start with an on-ramp project (Health Check, Quickstart or Migration). This gives both of us a clear view of the environment. From there, we transition to monthly managed services for ongoing operations.',
      },
    },
  ],
};

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.lawsonscloudworks.co.uk/#website',
  url: 'https://www.lawsonscloudworks.co.uk',
  name: 'Lawsons CloudWorks',
  description: 'Specialist managed service provider for cloud workspaces, modern endpoints and automation',
  publisher: {
    '@id': 'https://www.lawsonscloudworks.co.uk/#organization',
  },
  inLanguage: 'en-GB',
};

export function getCaseStudySchema(params: {
  url: string;
  title: string;
  description: string;
  industry: string;
  companySize: string;
  datePublished: string;
  keywords: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${params.url}#article`,
    headline: params.title,
    description: params.description,
    url: params.url,
    datePublished: params.datePublished,
    dateModified: params.datePublished,
    author: {
      '@id': 'https://www.lawsonscloudworks.co.uk/#organization',
    },
    publisher: {
      '@id': 'https://www.lawsonscloudworks.co.uk/#organization',
    },
    about: [
      {
        '@type': 'Thing',
        name: params.industry,
      },
      {
        '@type': 'Service',
        name: 'Managed Cloud Workspace Service',
        provider: {
          '@id': 'https://www.lawsonscloudworks.co.uk/#organization',
        },
      },
    ],
    keywords: params.keywords.join(', '),
    articleSection: 'Case Study',
    inLanguage: 'en-GB',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': params.url,
    },
  };
}
