import fs from 'fs';
import path from 'path';

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

export interface CMSJSONDatabase {
  services: ServiceCMS[];
  team: TeamMemberCMS[];
  projects: ProjectCRM[];
  portfolio: PortfolioItemCMS[];
  features: FeatureCMS[];
  faqs: FAQItemCMS[];
  leads: Lead[];
  clients: Client[];
  settings: AgencySettingsCMS;
}

const JSON_FILE_PATH = path.join(process.cwd(), 'data', 'cms-data.json');

// Helper to load JSON file from disk safely
function loadJSONData(): CMSJSONDatabase {
  try {
    if (fs.existsSync(JSON_FILE_PATH)) {
      const raw = fs.readFileSync(JSON_FILE_PATH, 'utf-8');
      const parsed = JSON.parse(raw);
      return {
        services: Array.isArray(parsed.services) ? parsed.services : [],
        team: Array.isArray(parsed.team) ? parsed.team : [],
        projects: Array.isArray(parsed.projects) ? parsed.projects : [],
        portfolio: Array.isArray(parsed.portfolio) ? parsed.portfolio : [],
        features: Array.isArray(parsed.features) ? parsed.features : [],
        faqs: Array.isArray(parsed.faqs) ? parsed.faqs : [],
        leads: Array.isArray(parsed.leads) ? parsed.leads : [],
        clients: Array.isArray(parsed.clients) ? parsed.clients : [],
        settings: parsed.settings || {
          agencyName: 'Innovateria Software Solutions',
          adminEmail: 'admin@innovateria.in',
          phone: '+91-7762974716',
          address: 'Bangalore & Mysore, India',
          passcode: '123456',
          socials: {
            github: 'https://github.com/VnjVibhash',
            facebook: 'https://facebook.com/Vivekajee',
            whatsapp: 'https://wa.me/917762974716',
            twitter: 'https://twitter.com/Vnjvibhash',
            linkedin: 'https://linkedin.com/in/Vivekajee',
            instagram: 'https://instagram.com/Vivekajee'
          }
        }
      };
    }
  } catch (err) {
    console.error('Error reading data/cms-data.json:', err);
  }

  // Fallback initial data
  return {
    services: [],
    team: [],
    projects: [],
    portfolio: [],
    features: [],
    faqs: [],
    leads: [],
    clients: [],
    settings: {
      agencyName: 'Innovateria Software Solutions',
      adminEmail: 'admin@innovateria.in',
      phone: '+91-7762974716',
      address: 'Bangalore & Mysore, India',
      passcode: '123456',
      socials: {
        github: 'https://github.com/VnjVibhash',
        facebook: 'https://facebook.com/Vivekajee',
        whatsapp: 'https://wa.me/917762974716',
        twitter: 'https://twitter.com/Vnjvibhash',
        linkedin: 'https://linkedin.com/in/Vivekajee',
        instagram: 'https://instagram.com/Vivekajee'
      }
    }
  };
}

// Helper to write JSON file to disk
function saveJSONData(data: CMSJSONDatabase) {
  try {
    const dir = path.dirname(JSON_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(JSON_FILE_PATH, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing to data/cms-data.json:', err);
  }
}

// Global Memory Cache synchronized with JSON file
declare global {
  var _crmStore: (CMSJSONDatabase & { adminPasscode: string }) | undefined;
}

if (!global._crmStore) {
  const diskData = loadJSONData();
  global._crmStore = {
    ...diskData,
    services: Array.isArray(diskData.services) ? diskData.services : [],
    team: Array.isArray(diskData.team) ? diskData.team : [],
    projects: Array.isArray(diskData.projects) ? diskData.projects : [],
    portfolio: Array.isArray(diskData.portfolio) ? diskData.portfolio : [],
    features: Array.isArray(diskData.features) ? diskData.features : [],
    faqs: Array.isArray(diskData.faqs) ? diskData.faqs : [],
    leads: Array.isArray(diskData.leads) ? diskData.leads : [],
    clients: Array.isArray(diskData.clients) ? diskData.clients : [],
    adminPasscode: diskData.settings?.passcode || '123456'
  };
}

export const crmStore = global._crmStore;

function persistState() {
  saveJSONData({
    services: crmStore.services || [],
    team: crmStore.team || [],
    projects: crmStore.projects || [],
    portfolio: crmStore.portfolio || [],
    features: crmStore.features || [],
    faqs: crmStore.faqs || [],
    leads: crmStore.leads || [],
    clients: crmStore.clients || [],
    settings: crmStore.settings
  });
}

// Leads CRUD
export function getLeads(): Lead[] {
  return Array.isArray(crmStore.leads) ? crmStore.leads : [];
}

export function addLead(data: Omit<Lead, 'id' | 'createdAt' | 'updatedAt' | 'status'> & { status?: Lead['status'] }): Lead {
  if (!Array.isArray(crmStore.leads)) crmStore.leads = [];
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
  persistState();
  return newLead;
}

export function updateLead(id: string, updates: Partial<Lead>): Lead | null {
  if (!Array.isArray(crmStore.leads)) crmStore.leads = [];
  const index = crmStore.leads.findIndex(l => l.id === id);
  if (index === -1) return null;
  crmStore.leads[index] = { ...crmStore.leads[index], ...updates, updatedAt: new Date().toISOString() };
  persistState();
  return crmStore.leads[index];
}

export function deleteLead(id: string): boolean {
  if (!Array.isArray(crmStore.leads)) crmStore.leads = [];
  const len = crmStore.leads.length;
  crmStore.leads = crmStore.leads.filter(l => l.id !== id);
  persistState();
  return crmStore.leads.length < len;
}

// Projects CRUD
export function getProjects(): ProjectCRM[] {
  return Array.isArray(crmStore.projects) ? crmStore.projects : [];
}

export function addProject(project: Omit<ProjectCRM, 'id'>): ProjectCRM {
  if (!Array.isArray(crmStore.projects)) crmStore.projects = [];
  const newProj: ProjectCRM = { ...project, id: `proj-${Date.now()}` };
  crmStore.projects.unshift(newProj);
  persistState();
  return newProj;
}

export function updateProject(id: string, updates: Partial<ProjectCRM>): ProjectCRM | null {
  if (!Array.isArray(crmStore.projects)) crmStore.projects = [];
  const index = crmStore.projects.findIndex(p => p.id === id);
  if (index === -1) return null;
  crmStore.projects[index] = { ...crmStore.projects[index], ...updates };
  persistState();
  return crmStore.projects[index];
}

export function deleteProject(id: string): boolean {
  if (!Array.isArray(crmStore.projects)) crmStore.projects = [];
  const len = crmStore.projects.length;
  crmStore.projects = crmStore.projects.filter(p => p.id !== id);
  persistState();
  return crmStore.projects.length < len;
}

// Clients CRUD
export function getClients(): Client[] {
  return Array.isArray(crmStore.clients) ? crmStore.clients : [];
}

export function addClient(client: Omit<Client, 'id' | 'createdAt'>): Client {
  if (!Array.isArray(crmStore.clients)) crmStore.clients = [];
  const newClient: Client = { ...client, id: `client-${Date.now()}`, createdAt: new Date().toISOString().split('T')[0] };
  crmStore.clients.unshift(newClient);
  persistState();
  return newClient;
}

// Services CMS CRUD
export function getServicesCMS(): ServiceCMS[] {
  return Array.isArray(crmStore.services) ? crmStore.services : [];
}

export function addServiceCMS(service: Omit<ServiceCMS, 'id'>): ServiceCMS {
  if (!Array.isArray(crmStore.services)) crmStore.services = [];
  const newSrv: ServiceCMS = { ...service, id: `srv-${Date.now()}` };
  crmStore.services.push(newSrv);
  persistState();
  return newSrv;
}

export function updateServiceCMS(id: string, updates: Partial<ServiceCMS>): ServiceCMS | null {
  if (!Array.isArray(crmStore.services)) crmStore.services = [];
  const idx = crmStore.services.findIndex(s => s.id === id);
  if (idx === -1) return null;
  crmStore.services[idx] = { ...crmStore.services[idx], ...updates };
  persistState();
  return crmStore.services[idx];
}

export function deleteServiceCMS(id: string): boolean {
  if (!Array.isArray(crmStore.services)) crmStore.services = [];
  const len = crmStore.services.length;
  crmStore.services = crmStore.services.filter(s => s.id !== id);
  persistState();
  return crmStore.services.length < len;
}

// Team CMS CRUD
export function getTeamCMS(): TeamMemberCMS[] {
  return Array.isArray(crmStore.team) ? crmStore.team : [];
}

export function addTeamMemberCMS(member: Omit<TeamMemberCMS, 'id'>): TeamMemberCMS {
  if (!Array.isArray(crmStore.team)) crmStore.team = [];
  const newMember: TeamMemberCMS = { ...member, id: `team-${Date.now()}` };
  crmStore.team.push(newMember);
  persistState();
  return newMember;
}

export function updateTeamMemberCMS(id: string, updates: Partial<TeamMemberCMS>): TeamMemberCMS | null {
  if (!Array.isArray(crmStore.team)) crmStore.team = [];
  const idx = crmStore.team.findIndex(t => t.id === id);
  if (idx === -1) return null;
  crmStore.team[idx] = { ...crmStore.team[idx], ...updates };
  persistState();
  return crmStore.team[idx];
}

export function deleteTeamMemberCMS(id: string): boolean {
  if (!Array.isArray(crmStore.team)) crmStore.team = [];
  const len = crmStore.team.length;
  crmStore.team = crmStore.team.filter(t => t.id !== id);
  persistState();
  return crmStore.team.length < len;
}

// FAQs CMS CRUD
export function getFAQsCMS(): FAQItemCMS[] {
  return Array.isArray(crmStore.faqs) ? crmStore.faqs : [];
}

export function addFAQCMS(faq: Omit<FAQItemCMS, 'id'>): FAQItemCMS {
  if (!Array.isArray(crmStore.faqs)) crmStore.faqs = [];
  const newFaq: FAQItemCMS = { ...faq, id: `faq-${Date.now()}` };
  crmStore.faqs.push(newFaq);
  persistState();
  return newFaq;
}

export function updateFAQCMS(id: string, updates: Partial<FAQItemCMS>): FAQItemCMS | null {
  if (!Array.isArray(crmStore.faqs)) crmStore.faqs = [];
  const idx = crmStore.faqs.findIndex(f => f.id === id);
  if (idx === -1) return null;
  crmStore.faqs[idx] = { ...crmStore.faqs[idx], ...updates };
  persistState();
  return crmStore.faqs[idx];
}

export function deleteFAQCMS(id: string): boolean {
  if (!Array.isArray(crmStore.faqs)) crmStore.faqs = [];
  const len = crmStore.faqs.length;
  crmStore.faqs = crmStore.faqs.filter(f => f.id !== id);
  persistState();
  return crmStore.faqs.length < len;
}

// Features CMS CRUD
export function getFeaturesCMS(): FeatureCMS[] {
  return Array.isArray(crmStore.features) ? crmStore.features : [];
}

export function addFeatureCMS(feature: Omit<FeatureCMS, 'id'>): FeatureCMS {
  if (!Array.isArray(crmStore.features)) crmStore.features = [];
  const newFeat: FeatureCMS = { ...feature, id: `feat-${Date.now()}` };
  crmStore.features.push(newFeat);
  persistState();
  return newFeat;
}

export function updateFeatureCMS(id: string, updates: Partial<FeatureCMS>): FeatureCMS | null {
  if (!Array.isArray(crmStore.features)) crmStore.features = [];
  const idx = crmStore.features.findIndex(f => f.id === id);
  if (idx === -1) return null;
  crmStore.features[idx] = { ...crmStore.features[idx], ...updates };
  persistState();
  return crmStore.features[idx];
}

export function deleteFeatureCMS(id: string): boolean {
  if (!Array.isArray(crmStore.features)) crmStore.features = [];
  const len = crmStore.features.length;
  crmStore.features = crmStore.features.filter(f => f.id !== id);
  persistState();
  return crmStore.features.length < len;
}

// Portfolio CMS CRUD
export function getPortfolioCMS(): PortfolioItemCMS[] {
  return Array.isArray(crmStore.portfolio) ? crmStore.portfolio : [];
}

export function addPortfolioCMS(item: Omit<PortfolioItemCMS, 'id'>): PortfolioItemCMS {
  if (!Array.isArray(crmStore.portfolio)) crmStore.portfolio = [];
  const newItem: PortfolioItemCMS = { ...item, id: `port-${Date.now()}` };
  crmStore.portfolio.push(newItem);
  persistState();
  return newItem;
}

export function updatePortfolioCMS(id: string, updates: Partial<PortfolioItemCMS>): PortfolioItemCMS | null {
  if (!Array.isArray(crmStore.portfolio)) crmStore.portfolio = [];
  const idx = crmStore.portfolio.findIndex(p => p.id === id);
  if (idx === -1) return null;
  crmStore.portfolio[idx] = { ...crmStore.portfolio[idx], ...updates };
  persistState();
  return crmStore.portfolio[idx];
}

export function deletePortfolioCMS(id: string): boolean {
  if (!Array.isArray(crmStore.portfolio)) crmStore.portfolio = [];
  const len = crmStore.portfolio.length;
  crmStore.portfolio = crmStore.portfolio.filter(p => p.id !== id);
  persistState();
  return crmStore.portfolio.length < len;
}

// Settings CRUD
export function getSettingsCMS(): AgencySettingsCMS {
  return crmStore.settings;
}

export function updateSettingsCMS(updates: Partial<AgencySettingsCMS>): AgencySettingsCMS {
  crmStore.settings = { ...crmStore.settings, ...updates };
  if (updates.passcode) crmStore.adminPasscode = updates.passcode;
  persistState();
  return crmStore.settings;
}

// Dashboard Stats
export function getCRMStats() {
  const leads = getLeads();
  const projects = getProjects();
  const clients = getClients();

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
