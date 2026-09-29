export const business = {
  name: 'Genius HR Consultancy',
  shortName: 'Genius HR',
  tagline: 'Recruitment & HR Consultancy',
  parentCompany: 'Genius Groups Ventures',
  parentTagline: 'by Genius Groups Ventures',
  description:
    'We help businesses identify, screen and connect with suitable candidates through a structured recruitment process designed around their hiring requirements.',

  phone: '+91 9164998997',
  phoneLink: 'tel:+919164998997',
  whatsapp: '+91 9164998997',
  whatsappLink: 'https://wa.me/919164998997?text=Hello%20Genius%20HR%20Consultancy,%20I%20would%20like%20to%20discuss%20a%20recruitment%20requirement.',
  email: 'hr@thegeniusgroups.com',
  emailLink: 'mailto:hr@thegeniusgroups.com',

  address: {
    line1: '2nd Floor, Darshan Orchid Complex, MSK Mill Rd',
    line2: 'Opposite Sangameshwar Hospital, Vidya Nagar',
    full: '2nd Floor, Darshan Orchid Complex, MSK Mill Rd, Opposite Sangameshwar Hospital, Vidya Nagar, Kalaburagi, Karnataka 585102',
  },

  businessHours: {
    weekdays: '10:00 AM – 07:00 PM',
    weekends: 'Sunday: Closed',
  },

  website: 'https://www.thegeniusgroups.com',
  mapUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121743.96870484832!2d76.78!3d17.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc8c7be1d7b0001%3A0x7ee2b5c5fbeee!2sKalaburagi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1',

  socialLinks: {
    linkedin: '#',
    instagram: '#',
  },
} as const;

export const navigation = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Process', href: '/process' },
  { label: 'For Employers', href: '/employers' },
  { label: 'Candidates', href: '/candidates' },
  { label: 'Contact', href: '/contact' },
] as const;

export const services = [
  {
    number: '01',
    title: 'Recruitment Support',
    description:
      "Support throughout the recruitment workflow based on the employer's requirements.",
    details:
      'From understanding the vacancy to coordinating with shortlisted candidates, we assist at every stage of the recruitment process aligned with your hiring needs.',
  },
  {
    number: '02',
    title: 'Candidate Sourcing',
    description:
      'Finding and approaching potential candidates relevant to the vacancy.',
    details:
      'We identify and reach out to candidates through multiple sourcing channels to build a pool of potential profiles that match the role requirements.',
  },
  {
    number: '03',
    title: 'Screening & Shortlisting',
    description:
      'Initial candidate communication, information verification and requirement-based shortlisting.',
    details:
      'Candidates are contacted, their details are verified, and those who align with the provided requirements are shortlisted for employer review.',
  },
  {
    number: '04',
    title: 'Interview Coordination',
    description:
      'Helping coordinate communication between shortlisted candidates and employers.',
    details:
      'We manage the scheduling and communication logistics between your team and the candidates to ensure a smooth interview process.',
  },
  {
    number: '05',
    title: 'Bulk & Recurring Hiring Support',
    description:
      'Structured recruitment assistance for businesses managing multiple or recurring vacancies.',
    details:
      'For companies with ongoing hiring needs or multiple open positions, we provide structured support to manage the volume efficiently.',
  },
] as const;

export const processSteps = [
  {
    number: '01',
    title: 'Understand the Requirement',
    description:
      'We first understand the role, vacancy, location, experience, skills and other relevant requirements.',
  },
  {
    number: '02',
    title: 'Source Candidates',
    description:
      'Potential candidates are identified through available candidate sources.',
  },
  {
    number: '03',
    title: 'Contact & Screen',
    description:
      'Candidates are contacted and their basic information and suitability are initially reviewed.',
  },
  {
    number: '04',
    title: 'Shortlist',
    description:
      'Candidates who align with the provided requirements are shortlisted.',
  },
  {
    number: '05',
    title: 'Prepare Candidate Information',
    description:
      'Relevant candidate details and CV information are organized for employer review.',
  },
  {
    number: '06',
    title: 'Employer Coordination',
    description:
      "Shortlisted candidates are shared with the company's HR/team for further evaluation.",
  },
  {
    number: '07',
    title: 'Interview Coordination',
    description:
      'Interview-related communication is coordinated between the employer and candidate.',
  },
  {
    number: '08',
    title: 'Follow-Up',
    description:
      'The recruitment team follows up on the process and maintains communication.',
  },
] as const;

export const industries = [
  { name: 'Technology', icon: 'Monitor' },
  { name: 'Retail', icon: 'ShoppingBag' },
  { name: 'Sales & Marketing', icon: 'TrendingUp' },
  { name: 'Education', icon: 'GraduationCap' },
  { name: 'Healthcare', icon: 'Heart' },
  { name: 'Manufacturing', icon: 'Factory' },
  { name: 'Hospitality', icon: 'UtensilsCrossed' },
  { name: 'Logistics', icon: 'Truck' },
  { name: 'Administration', icon: 'ClipboardList' },
  { name: 'Customer Support', icon: 'Headphones' },
  { name: 'Operations', icon: 'Settings' },
  { name: 'Other Business Services', icon: 'Briefcase' },
] as const;

export const whyGeniusReasons = [
  {
    title: 'Requirement First',
    description:
      'We begin with understanding the actual vacancy instead of simply forwarding resumes.',
  },
  {
    title: 'Structured Process',
    description:
      'Candidate communication, screening, shortlisting and coordination follow an organized workflow.',
  },
  {
    title: 'Employer Focused',
    description:
      'The employer remains at the center of the final evaluation and selection process.',
  },
  {
    title: 'Clear Communication',
    description:
      'We aim to maintain clear communication between the employer, candidate and recruitment team.',
  },
] as const;
