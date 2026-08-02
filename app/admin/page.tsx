'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Inbox, 
  FolderKanban, 
  Users, 
  TrendingUp, 
  ArrowUpRight, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Phone, 
  Mail, 
  MessageCircle, 
  ChevronRight,
  Plus,
  Zap,
  Sparkles
} from 'lucide-react';
import { Lead, ProjectCRM } from '@/lib/crm-store';

export default function AdminDashboardPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [projects, setProjects] = useState<ProjectCRM[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const [leadsRes, projectsRes, statsRes] = await Promise.all([
        fetch('/api/admin/leads'),
        fetch('/api/admin/projects'),
        fetch('/api/admin/stats')
      ]);

      const leadsData = await leadsRes.json();
      const projectsData = await projectsRes.json();
      const statsData = await statsRes.json();

      if (leadsData.success) setLeads(leadsData.leads);
      if (projectsData.success) setProjects(projectsData.projects);
      if (statsData.success) setStats(statsData.stats);
    } catch (err) {
      console.error('Error fetching CRM dashboard data:', err);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: Lead['status']) => {
    switch (status) {
      case 'new':
        return <span className="bg-brand-500/20 text-brand-400 border border-brand-500/30 text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full">New Lead</span>;
      case 'contacted':
        return <span className="bg-blue-500/20 text-blue-400 border border-blue-500/30 text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full">Contacted</span>;
      case 'proposal_sent':
        return <span className="bg-purple-500/20 text-purple-400 border border-purple-500/30 text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full">Proposal Sent</span>;
      case 'won':
        return <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full">Won Project</span>;
      case 'lost':
        return <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full">Lost</span>;
      default:
        return <span className="bg-gray-500/20 text-gray-400 border border-gray-500/30 text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full">{status}</span>;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      
      {/* Welcome Banner */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative z-10">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-500 border border-brand-500/20 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles size={14} />
              <span>Agency Command Center</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Welcome Back, <span className="text-gradient-brand">Vivek</span> 👋
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 mt-1">
              Here is your agency performance summary, lead inbox, and project milestones.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              href="/admin/leads"
              className="inline-flex items-center space-x-2 bg-gradient-brand text-white px-5 py-2.5 rounded-xl text-xs font-semibold shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 transition-all"
            >
              <Inbox size={16} />
              <span>View Lead Inbox ({stats?.newLeads || 0} New)</span>
            </Link>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Card 1: Total Leads */}
        <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4 hover:border-brand-500/30 transition-all">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Inquiries</span>
            <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-500">
              <Inbox size={20} />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-white">{stats?.totalLeads || 0}</h3>
            <p className="text-xs text-brand-400 mt-1 flex items-center space-x-1">
              <span>{stats?.newLeads || 0} new unread leads</span>
            </p>
          </div>
        </div>

        {/* Card 2: Active Projects */}
        <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4 hover:border-brand-500/30 transition-all">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Active Projects</span>
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
              <FolderKanban size={20} />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-white">{stats?.activeProjects || 0}</h3>
            <p className="text-xs text-blue-400 mt-1">In Development & Beta</p>
          </div>
        </div>

        {/* Card 3: Conversion Rate */}
        <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4 hover:border-brand-500/30 transition-all">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Conversion Rate</span>
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
              <TrendingUp size={20} />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-white">{stats?.conversionRate || 0}%</h3>
            <p className="text-xs text-emerald-400 mt-1">Lead to Client Success</p>
          </div>
        </div>

        {/* Card 4: Revenue Projections */}
        <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4 hover:border-brand-500/30 transition-all">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Projected Revenue</span>
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
              <Zap size={20} />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-white">{stats?.projectedRevenue || '₹0'}</h3>
            <p className="text-xs text-purple-400 mt-1">Active Pipeline Volume</p>
          </div>
        </div>

      </div>

      {/* Main Grid: Recent Leads & Active Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left 7 Columns: Recent Incoming Leads */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-white flex items-center space-x-2">
              <Inbox size={20} className="text-brand-500" />
              <span>Recent Contact Inquiries</span>
            </h2>
            <Link href="/admin/leads" className="text-xs font-semibold text-brand-500 hover:underline flex items-center space-x-1">
              <span>View All ({leads.length})</span>
              <ChevronRight size={14} />
            </Link>
          </div>

          <div className="space-y-3">
            {leads.slice(0, 4).map((lead) => (
              <div key={lead.id} className="glass-card rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-all space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="text-sm font-bold text-white">{lead.name}</h4>
                      {getStatusBadge(lead.status)}
                    </div>
                    <p className="text-xs text-brand-400 font-medium mt-0.5">{lead.subject}</p>
                  </div>
                  <span className="text-[10px] text-gray-400">
                    {new Date(lead.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                </div>

                <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
                  &ldquo;{lead.message}&rdquo;
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
                  <div className="flex items-center space-x-4">
                    <a href={`tel:${lead.phone}`} className="flex items-center space-x-1 text-gray-400 hover:text-brand-500">
                      <Phone size={12} />
                      <span>{lead.phone}</span>
                    </a>
                    <a href={`mailto:${lead.email}`} className="flex items-center space-x-1 text-gray-400 hover:text-brand-500">
                      <Mail size={12} />
                      <span>{lead.email}</span>
                    </a>
                  </div>

                  <a 
                    href={`https://wa.me/91${lead.phone}?text=Hi%20${encodeURIComponent(lead.name)},%20thank%20you%20for%20contacting%20Innovateria!`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-green-400 hover:text-green-300 text-[11px] font-semibold"
                  >
                    <MessageCircle size={12} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right 5 Columns: Active Projects Tracker */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-white flex items-center space-x-2">
              <FolderKanban size={20} className="text-brand-500" />
              <span>Active Projects Tracker</span>
            </h2>
            <Link href="/admin/projects" className="text-xs font-semibold text-brand-500 hover:underline">
              View All
            </Link>
          </div>

          <div className="space-y-4">
            {projects.map((proj) => (
              <div key={proj.id} className="glass-card rounded-2xl p-5 border border-white/10 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-brand-400 tracking-wider block">{proj.category}</span>
                    <h4 className="text-sm font-bold text-white mt-0.5">{proj.title}</h4>
                  </div>
                  <span className="text-xs font-bold text-white bg-white/10 px-2.5 py-1 rounded-lg">
                    {proj.budget}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-brand-400 font-semibold">{proj.progress}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-brand transition-all duration-500"
                      style={{ width: `${proj.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[11px] text-gray-400">
                  <span>Client: <strong className="text-white">{proj.clientName}</strong></span>
                  <span>Deadline: <strong className="text-white">{proj.deadline}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
