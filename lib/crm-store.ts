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
  progress: number; // 0 - 100
  startDate: string;
  deadline: string;
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

// Initial Seed Data
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
  },
  {
    id: 'lead-3',
    name: 'Anil Kapoor',
    email: 'anil@logistics-express.com',
    phone: '9988776655',
    subject: 'SEO & Growth Marketing Package',
    message: 'Looking for organic traffic optimization and backlink building for our logistics web portal.',
    status: 'proposal_sent',
    notes: 'Proposal for 6-month SEO package sent.',
    source: 'Website Contact Form',
    createdAt: new Date(Date.now() - 3 * 24 * 3600 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 24 * 3600 * 1000).toISOString(),
  },
  {
    id: 'lead-4',
    name: 'Vikram Mehta',
    email: 'vikram@fintech-hub.in',
    phone: '9765432109',
    subject: 'POS & Billing Android App Development',
    message: 'Requirement for offline Android billing app with Bluetooth printer connectivity.',
    status: 'won',
    notes: 'Contract signed. Project initialized in CRM.',
    source: 'Referral',
    createdAt: new Date(Date.now() - 7 * 24 * 3600 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 2 * 24 * 3600 * 1000).toISOString(),
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
    deadline: '2026-08-30'
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
  },
  {
    id: 'proj-3',
    title: 'Rangi Cabs Booking Portal',
    clientName: 'Travel Solutions Corp',
    clientEmail: 'contact@rangicabs.com',
    category: 'Web Development',
    techStack: ['React', 'Node.js', 'Bootstrap', 'jQuery'],
    status: 'completed',
    budget: '₹1,20,000',
    progress: 100,
    startDate: '2026-04-01',
    deadline: '2026-06-01'
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
  },
  {
    id: 'client-2',
    name: 'Vikram Mehta',
    company: 'Fintech Hub India',
    email: 'vikram@fintech-hub.in',
    phone: '9765432109',
    projectsCount: 2,
    totalSpent: '₹6,30,000',
    status: 'active',
    createdAt: '2026-05-10'
  },
  {
    id: 'client-3',
    name: 'Anil Kapoor',
    company: 'Logistics Express',
    email: 'anil@logistics-express.com',
    phone: '9988776655',
    projectsCount: 0,
    totalSpent: '₹0',
    status: 'lead',
    createdAt: '2026-07-28'
  }
];

// Global Memory Store (persists across dev server lifecycle)
declare global {
  var _crmStore: {
    leads: Lead[];
    projects: ProjectCRM[];
    clients: Client[];
    adminPasscode: string;
  } | undefined;
}

if (!global._crmStore) {
  global._crmStore = {
    leads: [...initialLeads],
    projects: [...initialProjects],
    clients: [...initialClients],
    adminPasscode: '123456'
  };
}

export const crmStore = global._crmStore;

// Helper Methods
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

  crmStore.leads[index] = {
    ...crmStore.leads[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  return crmStore.leads[index];
}

export function deleteLead(id: string): boolean {
  const initialLen = crmStore.leads.length;
  crmStore.leads = crmStore.leads.filter(l => l.id !== id);
  return crmStore.leads.length < initialLen;
}

export function getProjects(): ProjectCRM[] {
  return crmStore.projects;
}

export function addProject(project: Omit<ProjectCRM, 'id'>): ProjectCRM {
  const newProject: ProjectCRM = {
    ...project,
    id: `proj-${Date.now()}`
  };
  crmStore.projects.unshift(newProject);
  return newProject;
}

export function updateProject(id: string, updates: Partial<ProjectCRM>): ProjectCRM | null {
  const index = crmStore.projects.findIndex(p => p.id === id);
  if (index === -1) return null;
  crmStore.projects[index] = { ...crmStore.projects[index], ...updates };
  return crmStore.projects[index];
}

export function deleteProject(id: string): boolean {
  const initialLen = crmStore.projects.length;
  crmStore.projects = crmStore.projects.filter(p => p.id !== id);
  return crmStore.projects.length < initialLen;
}

export function getClients(): Client[] {
  return crmStore.clients;
}

export function addClient(client: Omit<Client, 'id' | 'createdAt'>): Client {
  const newClient: Client = {
    ...client,
    id: `client-${Date.now()}`,
    createdAt: new Date().toISOString().split('T')[0]
  };
  crmStore.clients.unshift(newClient);
  return newClient;
}

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
