export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: 'new' | 'contacted' | 'proposal_sent' | 'won' | 'lost' | 'archived';
  notes?: string;
  source: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectCRM {
  id: string;
  title: string;
  clientName: string;
  clientEmail: string;
  category: 'App Development' | 'Software Engineering' | 'Web Development' | 'SEO Services' | 'Digital Marketing';
  techStack: string[];
  status: 'discovery' | 'in_development' | 'beta_testing' | 'completed' | 'on_hold';
  budget: string;
  progress: number;
  startDate: string;
  deadline: string;
  github?: string;
  desc?: string;
  bullets?: string[];
}

export interface Client {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  projectsCount: number;
  totalSpent: string;
  status: 'active' | 'inactive' | 'lead';
  createdAt: string;
}

export interface ServiceCMS {
  id: string;
  title: string;
  category: string;
  slug: string;
  iconName: string;
  description: string;
  features: string[];
  status: 'active' | 'draft';
}

export interface TeamMemberCMS {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  bio: string;
  image: string;
  skills: string[];
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}

export interface FAQItemCMS {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Services' | 'Pricing' | 'Technical';
}

export interface FeatureCMS {
  id: string;
  title: string;
  category: string;
  tagline: string;
  desc: string;
  bullets: string[];
  iconName: string;
}

export interface PortfolioItemCMS {
  id: string;
  title: string;
  category: string;
  image: string;
  link: string;
  desc: string;
}

export interface AgencySettingsCMS {
  agencyName: string;
  adminEmail: string;
  phone: string;
  address: string;
  passcode: string;
  socials: {
    github: string;
    facebook: string;
    whatsapp: string;
    twitter: string;
    linkedin: string;
    instagram: string;
  };
}

// Initial Seed Data
const initialServices: ServiceCMS[] = [
  {
    id: 'srv-1',
    title: 'Mobile App Development',
    category: 'Mobile Solutions',
    slug: 'mobile',
    iconName: 'Smartphone',
    description: 'High-performance cross-platform Flutter & native Android mobile apps engineered for speed, scale, and high engagement.',
    features: ['Flutter Cross-Platform', 'Kotlin Native Android', 'Firebase & REST API Integration', 'Play Store & App Store Publishing'],
    status: 'active'
  },
  {
    id: 'srv-2',
    title: 'Enterprise Software Engineering',
    category: 'Software Architecture',
    slug: 'software',
    iconName: 'Code2',
    description: 'Custom Enterprise ERPs, SaaS platforms, and secure automation backends built with Next.js, Laravel, and Cloud infrastructure.',
    features: ['Custom Enterprise ERP', 'SaaS Platform Development', 'Database Optimization & Security', 'Real-Time Data Analytics'],
    status: 'active'
  },
  {
    id: 'srv-3',
    title: 'Web Application Development',
    category: 'Web Engineering',
    slug: 'web',
    iconName: 'Globe2',
    description: 'Responsive, lightning-fast web applications built with Next.js, React, Tailwind CSS, and headless backends.',
    features: ['Next.js React Framework', 'Responsive Glassmorphic Design', 'Full SEO Optimization', 'Fast CDN Edge Deployment'],
    status: 'active'
  },
  {
    id: 'srv-4',
    title: 'SEO & Organic Growth Marketing',
    category: 'Growth & SEO',
    slug: 'seo-services',
    iconName: 'TrendingUp',
    description: 'Data-driven technical SEO, keyword ranking optimization, and organic campaign strategies designed to dominate search engine results.',
    features: ['Technical On-Page & Schema SEO', 'Domain Authority & Link Building', 'Organic Keyword Optimization', 'Monthly Analytics Reporting'],
    status: 'active'
  }
];

const initialTeam: TeamMemberCMS[] = [
  {
    id: 'team-1',
    name: 'Vivek Kumar',
    role: 'Founder & Full Stack Developer',
    company: 'Innovateria',
    location: 'Bangalore, IN',
    bio: 'Software engineer specializing in Flutter, React, Next.js, and Laravel cloud solutions with a passion for building user-first digital products.',
    image: '/assets/img/team-1.png',
    skills: ['Flutter', 'Next.js', 'Laravel', 'React', 'Firebase', 'Android SDK'],
    github: 'https://github.com/VnjVibhash',
    linkedin: 'https://linkedin.com/in/Vivekajee',
    twitter: 'https://twitter.com/Vnjvibhash',
    website: 'https://vivekajee.in'
  },
  {
    id: 'team-2',
    name: 'Anjali Sharma',
    role: 'Senior UI/UX & Frontend Architect',
    company: 'Innovateria',
    location: 'Bangalore, IN',
    bio: 'UI/UX specialist creating modern responsive interfaces, glassmorphism design systems, and seamless user experiences.',
    image: '/assets/img/team-2.png',
    skills: ['UI/UX Design', 'Figma', 'Tailwind CSS', 'React', 'CSS Animations'],
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  }
];

const initialFAQs: FAQItemCMS[] = [
  {
    id: 'faq-1',
    category: 'Services',
    question: 'What mobile app frameworks does Innovateria specialize in?',
    answer: 'We specialize in Flutter for high-performance cross-platform iOS and Android apps, as well as native Android development using Kotlin and Android SDK.'
  },
  {
    id: 'faq-2',
    category: 'Services',
    question: 'How long does it take to develop a custom web or mobile application?',
    answer: 'Development timelines depend on project scope. A standard mobile or web app takes between 4 to 8 weeks, while complex enterprise systems take 10 to 16 weeks.'
  },
  {
    id: 'faq-3',
    category: 'Pricing',
    question: 'Do you offer custom pricing and milestone payment plans?',
    answer: 'Yes! We provide transparent fixed-scope milestone billing with discovery, beta testing, and deployment phases.'
  },
  {
    id: 'faq-4',
    category: 'General',
    question: 'Do you provide post-launch maintenance and technical support?',
    answer: 'Absolutely. All our projects include 60 days of complimentary post-launch support, security updates, and performance monitoring.'
  }
];

const initialFeatures: FeatureCMS[] = [
  {
    id: 'feat-1',
    title: 'Cross-Platform Mobile Excellence',
    category: 'Mobile Engineering',
    tagline: 'iOS & Android from a Single Codebase',
    desc: 'Build native-performing mobile applications with Flutter and Firebase backends for instant synchronization and real-time push notifications.',
    bullets: ['Unified iOS & Android Codebase', 'Firebase Real-Time DB Sync', 'Payment Gateway Integration', 'Push Notification Engines'],
    iconName: 'Smartphone'
  },
  {
    id: 'feat-2',
    title: 'Enterprise Architecture & Cloud API',
    category: 'Software Solutions',
    tagline: 'Built for High Throughput & Reliability',
    desc: 'Engineered backend architectures utilizing Laravel, PostgreSQL, and Next.js for high transactional speed and zero downtime.',
    bullets: ['RESTful & GraphQL API Design', 'PostgreSQL & Cloud Infrastructure', 'Enterprise Role-Based Access Control', 'Automated Database Backups'],
    iconName: 'Code2'
  },
  {
    id: 'feat-3',
    title: 'Organic Growth & Technical SEO Automation',
    category: 'Digital Strategy',
    tagline: 'Dominate Search Engine Rankings',
    desc: 'Automated SEO pipelines tracking organic rankings, domain authority metrics, technical schema markup, and monthly analytics reporting.',
    bullets: ['Rich Schema JSON-LD Injection', 'Fast Edge Load Times (<1s)', 'Keyword SERP Tracking', 'Automated SEO Audit Reports'],
    iconName: 'TrendingUp'
  }
];

const initialPortfolio: PortfolioItemCMS[] = [
  {
    id: 'port-1',
    title: 'Shop-Orbit 🛍️',
    category: 'Flutter E-Commerce App',
    image: '/assets/img/android.png',
    link: 'https://github.com/Vnjvibhash/Shop-Orbit',
    desc: 'Modern cross-platform mobile shopping app with payment gateway, cart, and live order tracking.'
  },
  {
    id: 'port-2',
    title: 'BuddyExpense 💰',
    category: 'Finance & Expense Tracker',
    image: '/assets/img/soft.png',
    link: 'https://github.com/Vnjvibhash/BuddyExpense',
    desc: 'Smart group expense tracking application for friends to manage shared costs effortlessly.'
  },
  {
    id: 'port-3',
    title: 'SoulScripter ✍️',
    category: 'React Literature Platform',
    image: '/assets/img/pweb.png',
    link: 'https://github.com/Vnjvibhash/SoulScripter',
    desc: 'Creative writing and publishing platform for poets and storytellers.'
  },
  {
    id: 'port-4',
    title: 'iDVault OCR 🛡️',
    category: 'Identity OCR & Security',
    image: '/assets/img/g-seo.png',
    link: 'https://github.com/Vnjvibhash/iDVault',
    desc: 'Aadhaar document scanner and manager with OCR data extraction.'
  }
];

const initialLeads: Lead[] = [
  {
    id: 'lead-1',
    name: 'Rahul Sharma',
    email: 'rahul@techventures.in',
    phone: '9876543210',
    subject: 'Cross-Platform E-Commerce Mobile App',
    message: 'We want to build a Flutter e-commerce mobile app for Android and iOS with payment gateway and live inventory sync.',
    status: 'new',
    notes: 'High priority client interested in 2-month timeline.',
    source: 'Website Contact Form',
    createdAt: new Date(Date.now() - 2 * 3600 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 2 * 3600 * 1000).toISOString(),
  },
  {
    id: 'lead-2',
    name: 'Priya Verma',
    email: 'priya@healthplus.org',
    phone: '9123456789',
    subject: 'Enterprise Healthcare Billing & OCR Software',
    message: 'Need a custom document scanner and patient record management portal built with Next.js and Cloud storage.',
    status: 'contacted',
    notes: 'Sent initial discovery call invite for tomorrow at 3 PM.',
    source: 'Direct Phone Inquiry',
    createdAt: new Date(Date.now() - 24 * 3600 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 12 * 3600 * 1000).toISOString(),
  }
];

const initialProjects: ProjectCRM[] = [
  {
    id: 'proj-1',
    title: 'Shop-Orbit Mobile Commerce App',
    clientName: 'Rahul Sharma',
    clientEmail: 'rahul@techventures.in',
    category: 'App Development',
    techStack: ['Flutter', 'Firebase', 'Dart', 'Razorpay'],
    status: 'in_development',
    budget: '₹2,50,000',
    progress: 65,
    startDate: '2026-07-01',
    deadline: '2026-08-30',
    github: 'https://github.com/Vnjvibhash/Shop-Orbit'
  },
  {
    id: 'proj-2',
    title: 'Enterprise ERP & Asset Manager',
    clientName: 'Vikram Mehta',
    clientEmail: 'vikram@fintech-hub.in',
    category: 'Software Engineering',
    techStack: ['Next.js', 'Laravel', 'PostgreSQL', 'Tailwind CSS'],
    status: 'beta_testing',
    budget: '₹4,80,000',
    progress: 88,
    startDate: '2026-05-15',
    deadline: '2026-08-15'
  }
];

const initialClients: Client[] = [
  {
    id: 'client-1',
    name: 'Rahul Sharma',
    company: 'TechVentures Pvt Ltd',
    email: 'rahul@techventures.in',
    phone: '9876543210',
    projectsCount: 1,
    totalSpent: '₹2,50,000',
    status: 'active',
    createdAt: '2026-07-01'
  }
];

const initialSettings: AgencySettingsCMS = {
  agencyName: 'Innovateria Software Solutions',
  adminEmail: 'admin@innovateria.in',
  phone: '+91-7762974716',
  address: 'Bangalore & Mysore, India / Remote',
  passcode: '123456',
  socials: {
    github: 'https://github.com/VnjVibhash',
    facebook: 'https://facebook.com/Vivekajee',
    whatsapp: 'https://wa.me/917762974716',
    twitter: 'https://twitter.com/Vnjvibhash',
    linkedin: 'https://linkedin.com/in/Vivekajee',
    instagram: 'https://instagram.com/Vivekajee'
  }
};

// Global Memory Store
declare global {
  var _crmStore: {
    leads: Lead[];
    projects: ProjectCRM[];
    clients: Client[];
    services: ServiceCMS[];
    team: TeamMemberCMS[];
    faqs: FAQItemCMS[];
    features: FeatureCMS[];
    portfolio: PortfolioItemCMS[];
    settings: AgencySettingsCMS;
    adminPasscode: string;
  } | undefined;
}

if (!global._crmStore) {
  global._crmStore = {
    leads: [...initialLeads],
    projects: [...initialProjects],
    clients: [...initialClients],
    services: [...initialServices],
    team: [...initialTeam],
    faqs: [...initialFAQs],
    features: [...initialFeatures],
    portfolio: [...initialPortfolio],
    settings: { ...initialSettings },
    adminPasscode: '123456'
  };
}

export const crmStore = global._crmStore;

// Leads CRUD
export function getLeads(): Lead[] {
  return crmStore.leads;
}

export function addLead(data: Omit<Lead, 'id' | 'createdAt' | 'updatedAt' | 'status'> & { status?: Lead['status'] }): Lead {
  const newLead: Lead = {
    id: `lead-${Date.now()}`,
    name: data.name,
    email: data.email,
    phone: data.phone,
    subject: data.subject,
    message: data.message,
    status: data.status || 'new',
    notes: data.notes || '',
    source: data.source || 'Website Contact Form',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  crmStore.leads.unshift(newLead);
  return newLead;
}

export function updateLead(id: string, updates: Partial<Lead>): Lead | null {
  const index = crmStore.leads.findIndex(l => l.id === id);
  if (index === -1) return null;
  crmStore.leads[index] = { ...crmStore.leads[index], ...updates, updatedAt: new Date().toISOString() };
  return crmStore.leads[index];
}

export function deleteLead(id: string): boolean {
  const len = crmStore.leads.length;
  crmStore.leads = crmStore.leads.filter(l => l.id !== id);
  return crmStore.leads.length < len;
}

// Projects CRUD
export function getProjects(): ProjectCRM[] {
  return crmStore.projects;
}

export function addProject(project: Omit<ProjectCRM, 'id'>): ProjectCRM {
  const newProj: ProjectCRM = { ...project, id: `proj-${Date.now()}` };
  crmStore.projects.unshift(newProj);
  return newProj;
}

export function updateProject(id: string, updates: Partial<ProjectCRM>): ProjectCRM | null {
  const index = crmStore.projects.findIndex(p => p.id === id);
  if (index === -1) return null;
  crmStore.projects[index] = { ...crmStore.projects[index], ...updates };
  return crmStore.projects[index];
}

export function deleteProject(id: string): boolean {
  const len = crmStore.projects.length;
  crmStore.projects = crmStore.projects.filter(p => p.id !== id);
  return crmStore.projects.length < len;
}

// Clients CRUD
export function getClients(): Client[] {
  return crmStore.clients;
}

export function addClient(client: Omit<Client, 'id' | 'createdAt'>): Client {
  const newClient: Client = { ...client, id: `client-${Date.now()}`, createdAt: new Date().toISOString().split('T')[0] };
  crmStore.clients.unshift(newClient);
  return newClient;
}

// Services CMS CRUD
export function getServicesCMS(): ServiceCMS[] {
  return crmStore.services;
}

export function addServiceCMS(service: Omit<ServiceCMS, 'id'>): ServiceCMS {
  const newSrv: ServiceCMS = { ...service, id: `srv-${Date.now()}` };
  crmStore.services.push(newSrv);
  return newSrv;
}

export function updateServiceCMS(id: string, updates: Partial<ServiceCMS>): ServiceCMS | null {
  const idx = crmStore.services.findIndex(s => s.id === id);
  if (idx === -1) return null;
  crmStore.services[idx] = { ...crmStore.services[idx], ...updates };
  return crmStore.services[idx];
}

export function deleteServiceCMS(id: string): boolean {
  const len = crmStore.services.length;
  crmStore.services = crmStore.services.filter(s => s.id !== id);
  return crmStore.services.length < len;
}

// Team CMS CRUD
export function getTeamCMS(): TeamMemberCMS[] {
  return crmStore.team;
}

export function addTeamMemberCMS(member: Omit<TeamMemberCMS, 'id'>): TeamMemberCMS {
  const newMember: TeamMemberCMS = { ...member, id: `team-${Date.now()}` };
  crmStore.team.push(newMember);
  return newMember;
}

export function updateTeamMemberCMS(id: string, updates: Partial<TeamMemberCMS>): TeamMemberCMS | null {
  const idx = crmStore.team.findIndex(t => t.id === id);
  if (idx === -1) return null;
  crmStore.team[idx] = { ...crmStore.team[idx], ...updates };
  return crmStore.team[idx];
}

export function deleteTeamMemberCMS(id: string): boolean {
  const len = crmStore.team.length;
  crmStore.team = crmStore.team.filter(t => t.id !== id);
  return crmStore.team.length < len;
}

// FAQs CMS CRUD
export function getFAQsCMS(): FAQItemCMS[] {
  return crmStore.faqs;
}

export function addFAQCMS(faq: Omit<FAQItemCMS, 'id'>): FAQItemCMS {
  const newFaq: FAQItemCMS = { ...faq, id: `faq-${Date.now()}` };
  crmStore.faqs.push(newFaq);
  return newFaq;
}

export function updateFAQCMS(id: string, updates: Partial<FAQItemCMS>): FAQItemCMS | null {
  const idx = crmStore.faqs.findIndex(f => f.id === id);
  if (idx === -1) return null;
  crmStore.faqs[idx] = { ...crmStore.faqs[idx], ...updates };
  return crmStore.faqs[idx];
}

export function deleteFAQCMS(id: string): boolean {
  const len = crmStore.faqs.length;
  crmStore.faqs = crmStore.faqs.filter(f => f.id !== id);
  return crmStore.faqs.length < len;
}

// Features CMS CRUD
export function getFeaturesCMS(): FeatureCMS[] {
  return crmStore.features;
}

export function addFeatureCMS(feature: Omit<FeatureCMS, 'id'>): FeatureCMS {
  const newFeat: FeatureCMS = { ...feature, id: `feat-${Date.now()}` };
  crmStore.features.push(newFeat);
  return newFeat;
}

export function updateFeatureCMS(id: string, updates: Partial<FeatureCMS>): FeatureCMS | null {
  const idx = crmStore.features.findIndex(f => f.id === id);
  if (idx === -1) return null;
  crmStore.features[idx] = { ...crmStore.features[idx], ...updates };
  return crmStore.features[idx];
}

export function deleteFeatureCMS(id: string): boolean {
  const len = crmStore.features.length;
  crmStore.features = crmStore.features.filter(f => f.id !== id);
  return crmStore.features.length < len;
}

// Portfolio CMS CRUD
export function getPortfolioCMS(): PortfolioItemCMS[] {
  return crmStore.portfolio;
}

export function addPortfolioCMS(item: Omit<PortfolioItemCMS, 'id'>): PortfolioItemCMS {
  const newItem: PortfolioItemCMS = { ...item, id: `port-${Date.now()}` };
  crmStore.portfolio.push(newItem);
  return newItem;
}

export function updatePortfolioCMS(id: string, updates: Partial<PortfolioItemCMS>): PortfolioItemCMS | null {
  const idx = crmStore.portfolio.findIndex(p => p.id === id);
  if (idx === -1) return null;
  crmStore.portfolio[idx] = { ...crmStore.portfolio[idx], ...updates };
  return crmStore.portfolio[idx];
}

export function deletePortfolioCMS(id: string): boolean {
  const len = crmStore.portfolio.length;
  crmStore.portfolio = crmStore.portfolio.filter(p => p.id !== id);
  return crmStore.portfolio.length < len;
}

// Settings CRUD
export function getSettingsCMS(): AgencySettingsCMS {
  return crmStore.settings;
}

export function updateSettingsCMS(updates: Partial<AgencySettingsCMS>): AgencySettingsCMS {
  crmStore.settings = { ...crmStore.settings, ...updates };
  if (updates.passcode) crmStore.adminPasscode = updates.passcode;
  return crmStore.settings;
}

// Dashboard Stats
export function getCRMStats() {
  const leads = crmStore.leads;
  const projects = crmStore.projects;
  const clients = crmStore.clients;

  const totalLeads = leads.length;
  const newLeads = leads.filter(l => l.status === 'new').length;
  const wonLeads = leads.filter(l => l.status === 'won').length;
  const conversionRate = totalLeads > 0 ? Math.round((wonLeads / totalLeads) * 100) : 0;
  const activeProjects = projects.filter(p => p.status === 'in_development' || p.status === 'beta_testing').length;

  return {
    totalLeads,
    newLeads,
    wonLeads,
    conversionRate,
    activeProjects,
    totalClients: clients.length,
    totalProjects: projects.length,
    projectedRevenue: '₹12,40,000'
  };
}
