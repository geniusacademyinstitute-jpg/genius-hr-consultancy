import { business } from './business';

export const seoConfig = {
  default: {
    title: `${business.name} | ${business.tagline}`,
    description: business.description,
    canonical: business.website,
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url: business.website,
      siteName: business.name,
      title: `${business.name} | ${business.tagline}`,
      description: business.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${business.name} | ${business.tagline}`,
      description: business.description,
    },
  },
  pages: {
    home: {
      title: `${business.name} | Recruitment & HR Consultancy`,
      description:
        'Genius HR Consultancy helps businesses find and connect with suitable candidates through a structured recruitment process. Recruitment and HR consultancy services in Kalaburagi, Karnataka.',
    },
    about: {
      title: `About | ${business.name}`,
      description:
        'Learn about Genius HR Consultancy, our recruitment process, approach and how we support businesses with their hiring requirements.',
    },
    services: {
      title: `Recruitment Services | ${business.name}`,
      description:
        'Recruitment support, candidate sourcing, screening & shortlisting, interview coordination and bulk hiring support for businesses.',
    },
    process: {
      title: `Our Recruitment Process | ${business.name}`,
      description:
        'From understanding the requirement to candidate coordination — explore the structured recruitment process at Genius HR Consultancy.',
    },
    employers: {
      title: `For Employers | ${business.name}`,
      description:
        'Submit your hiring requirement and let our recruitment team work on finding suitable candidates for your open positions.',
    },
    candidates: {
      title: `For Candidates | ${business.name}`,
      description:
        'Looking for your next opportunity? Submit your profile to Genius HR Consultancy for consideration in relevant vacancies.',
    },
    contact: {
      title: `Contact | ${business.name}`,
      description:
        'Get in touch with Genius HR Consultancy. Contact us about your hiring requirements or recruitment needs.',
    },
  },
} as const;

export function getPageSeo(page: keyof typeof seoConfig.pages) {
  return {
    ...seoConfig.default,
    ...seoConfig.pages[page],
  };
}
