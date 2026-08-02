'use client';

import { useState, useEffect } from 'react';
import { 
  Inbox, 
  Search, 
  Filter, 
  Plus, 
  Download, 
  Phone, 
  Mail, 
  MessageCircle, 
  Edit3, 
  Trash2, 
  CheckCircle2, 
  X, 
  Clock, 
  FileText,
  User,
  Save,
  Send
} from 'lucide-react';
import { Lead } from '@/lib/crm-store';

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  
  // Modal states
  const [activeLead, setActiveLead] = useState<Lead | null>(null);
  const [editingNotes, setEditingNotes] = useState('');
  const [editingStatus, setEditingStatus] = useState<Lead['status']>('new');
  
  // New Lead Modal State
  const [showAddModal, setShowAddModal] = useState(false);
  const [newLeadForm, setNewLeadForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    source: 'Manual Admin Entry',
    notes: ''
  });

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/leads');
      const data = await res.json();
      if (data.success) {
        setLeads(data.leads);
      }
    } catch (err) {
      console.error('Error fetching leads:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (leadId: string, status: Lead['status']) => {
    try {
      const res = await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: leadId, status })
      });
      if (res.ok) {
        fetchLeads();
        if (activeLead && activeLead.id === leadId) {
          setActiveLead(prev => prev ? { ...prev, status } : null);
        }
      }
    } catch (err) {
      console.error('Error updating lead status:', err);
    }
  };

  const handleSaveNotes = async () => {
    if (!activeLead) return;
    try {
      const res = await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: activeLead.id, notes: editingNotes, status: editingStatus })
      });
      if (res.ok) {
        fetchLeads();
        setActiveLead(null);
      }
    } catch (err) {
      console.error('Error saving lead notes:', err);
    }
  };

  const handleDeleteLead = async (leadId: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;
    try {
      const res = await fetch(`/api/admin/leads?id=${leadId}`, { method: 'DELETE' });
      if (res.ok) {
        fetchLeads();
        if (activeLead && activeLead.id === leadId) setActiveLead(null);
      }
    } catch (err) {
      console.error('Error deleting lead:', err);
    }
  };

  const handleAddLead = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLeadForm)
      });
      if (res.ok) {
        fetchLeads();
        setShowAddModal(false);
        setNewLeadForm({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          source: 'Manual Admin Entry',
          notes: ''
        });
      }
    } catch (err) {
      console.error('Error adding new lead:', err);
    }
  };

  const exportToCSV = () => {
    const headers = ['ID', 'Name', 'Email', 'Phone', 'Subject', 'Message', 'Status', 'Notes', 'Created Date'];
    const rows = leads.map(l => [
      l.id,
      `"${l.name}"`,
      `"${l.email}"`,
      `"${l.phone}"`,
      `"${l.subject}"`,
      `"${l.message.replace(/"/g, '""')}"`,
      l.status,
      `"${l.notes || ''}"`,
      l.createdAt
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Innovateria_Leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredLeads = leads.filter(l => {
    const matchesStatus = selectedStatus === 'all' || l.status === selectedStatus;
    const query = searchQuery.toLowerCase();
    const matchesSearch = l.name.toLowerCase().includes(query) || 
                          l.email.toLowerCase().includes(query) || 
                          l.phone.includes(query) || 
                          l.subject.toLowerCase().includes(query);
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-6">
      
      {/* Header & Quick Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight flex items-center space-x-2">
            <Inbox size={24} className="text-brand-500" />
            <span>Lead Inbox & Opportunity CRM</span>
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            Capture, track, and manage all incoming contact inquiries and lead workflows.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={exportToCSV}
            className="inline-flex items-center space-x-2 glass-card hover:bg-white/10 text-white px-4 py-2.5 rounded-xl text-xs font-semibold border border-white/10 transition-all"
          >
            <Download size={14} />
            <span>Export CSV</span>
          </button>

          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center space-x-2 bg-gradient-brand text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow-lg shadow-brand-500/20 hover:opacity-90 transition-all"
          >
            <Plus size={16} />
            <span>Add Offline Lead</span>
          </button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="glass-card p-4 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search leads by name, email, phone..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#0B0F17]/80 border border-white/10 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Status Pills */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {[
            { id: 'all', label: 'All Inquiries' },
            { id: 'new', label: 'New' },
            { id: 'contacted', label: 'Contacted' },
            { id: 'proposal_sent', label: 'Proposal Sent' },
            { id: 'won', label: 'Won Projects' },
            { id: 'lost', label: 'Lost' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedStatus(tab.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedStatus === tab.id
                  ? 'bg-brand-500 text-white font-semibold shadow-md'
                  : 'glass-card text-gray-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Leads Table / Cards */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : filteredLeads.length === 0 ? (
        <div className="glass-card rounded-2xl p-12 text-center space-y-3 border border-white/10">
          <Inbox size={40} className="mx-auto text-gray-500" />
          <h3 className="text-base font-bold text-white">No Leads Found</h3>
          <p className="text-xs text-gray-400 max-w-sm mx-auto">
            No inquiries match your current status filter or search parameters.
          </p>
        </div>
      ) : (
        <div className="glass-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-white/10 bg-[#0E1422] text-gray-400 font-semibold">
                  <th className="p-4">Contact Info</th>
                  <th className="p-4">Subject & Requirement</th>
                  <th className="p-4">Status Workflow</th>
                  <th className="p-4">Date</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-white/5 transition-colors group">
                    <td className="p-4 space-y-1">
                      <strong className="text-white font-bold block">{lead.name}</strong>
                      <div className="flex items-center space-x-3 text-[11px] text-gray-400">
                        <a href={`tel:${lead.phone}`} className="hover:text-brand-500 flex items-center space-x-1">
                          <Phone size={11} />
                          <span>{lead.phone}</span>
                        </a>
                        <a href={`mailto:${lead.email}`} className="hover:text-brand-500 flex items-center space-x-1">
                          <Mail size={11} />
                          <span className="truncate max-w-[140px]">{lead.email}</span>
                        </a>
                      </div>
                    </td>

                    <td className="p-4 space-y-1">
                      <span className="text-brand-400 font-semibold block">{lead.subject}</span>
                      <p className="text-gray-300 line-clamp-1 text-[11px] max-w-md">
                        {lead.message}
                      </p>
                    </td>

                    <td className="p-4">
                      <select
                        value={lead.status}
                        onChange={(e) => handleStatusChange(lead.id, e.target.value as Lead['status'])}
                        className="bg-[#0B0F17] border border-white/15 text-white text-[11px] rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-brand-500"
                      >
                        <option value="new">🆕 New Lead</option>
                        <option value="contacted">📞 Contacted</option>
                        <option value="proposal_sent">📄 Proposal Sent</option>
                        <option value="won">🎉 Won Project</option>
                        <option value="lost">❌ Lost</option>
                        <option value="archived">📁 Archived</option>
                      </select>
                    </td>

                    <td className="p-4 text-gray-400 whitespace-nowrap">
                      {new Date(lead.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </td>

                    <td className="p-4 text-right space-x-2 whitespace-nowrap">
                      <a
                        href={`https://wa.me/91${lead.phone}?text=Hi%20${encodeURIComponent(lead.name)},%20thank%20you%20for%20reaching%20out%20to%20Innovateria!`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg glass-card hover:bg-green-500/20 text-green-400 inline-flex transition-colors"
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle size={14} />
                      </a>

                      <button
                        onClick={() => {
                          setActiveLead(lead);
                          setEditingNotes(lead.notes || '');
                          setEditingStatus(lead.status);
                        }}
                        className="p-1.5 rounded-lg glass-card hover:bg-brand-500/20 text-brand-400 inline-flex transition-colors"
                        title="View Details & Notes"
                      >
                        <FileText size={14} />
                      </button>

                      <button
                        onClick={() => handleDeleteLead(lead.id)}
                        className="p-1.5 rounded-lg glass-card hover:bg-red-500/20 text-red-400 inline-flex transition-colors"
                        title="Delete Lead"
                      >
                        <Trash2 size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Lead Details & Notes Drawer Modal */}
      {activeLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="glass-card rounded-3xl p-6 sm:p-8 max-w-xl w-full border border-white/10 space-y-6 relative max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-brand-500 tracking-wider">Lead Detail View</span>
                <h3 className="text-xl font-bold text-white mt-0.5">{activeLead.name}</h3>
              </div>
              <button 
                onClick={() => setActiveLead(null)}
                className="p-2 rounded-xl text-gray-400 hover:text-white glass-card"
              >
                <X size={18} />
              </button>
            </div>

            {/* Lead Meta */}
            <div className="grid grid-cols-2 gap-4 text-xs bg-white/5 p-4 rounded-2xl border border-white/10">
              <div>
                <span className="text-gray-400 block text-[10px] uppercase">Phone</span>
                <a href={`tel:${activeLead.phone}`} className="text-white font-semibold hover:text-brand-500">{activeLead.phone}</a>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px] uppercase">Email</span>
                <a href={`mailto:${activeLead.email}`} className="text-white font-semibold hover:text-brand-500 truncate block">{activeLead.email}</a>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px] uppercase">Source</span>
                <span className="text-gray-300">{activeLead.source}</span>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px] uppercase">Submitted Date</span>
                <span className="text-gray-300">{new Date(activeLead.createdAt).toLocaleString()}</span>
              </div>
            </div>

            {/* Requirement Message */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-white">Subject: <span className="text-brand-400">{activeLead.subject}</span></h4>
              <div className="p-4 rounded-2xl bg-[#0B0F17] border border-white/10 text-xs text-gray-300 leading-relaxed whitespace-pre-wrap">
                {activeLead.message}
              </div>
            </div>

            {/* Notes & Status Editor */}
            <div className="space-y-3 pt-2">
              <label className="block text-xs font-medium text-gray-300">Internal CRM Notes</label>
              <textarea
                rows={3}
                value={editingNotes}
                onChange={(e) => setEditingNotes(e.target.value)}
                placeholder="Add internal notes about client budget, call history, or follow-up schedule..."
                className="w-full px-4 py-3 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs focus:outline-none focus:border-brand-500 resize-none"
              ></textarea>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <button
                onClick={() => handleDeleteLead(activeLead.id)}
                className="text-xs text-red-400 hover:underline flex items-center space-x-1"
              >
                <Trash2 size={14} />
                <span>Delete Lead</span>
              </button>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setActiveLead(null)}
                  className="px-4 py-2.5 rounded-xl glass-card text-xs font-semibold text-gray-300 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveNotes}
                  className="inline-flex items-center space-x-2 bg-gradient-brand text-white px-5 py-2.5 rounded-xl text-xs font-semibold shadow-lg"
                >
                  <Save size={14} />
                  <span>Save Changes</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Add Offline Lead Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="glass-card rounded-3xl p-6 sm:p-8 max-w-md w-full border border-white/10 space-y-6 relative">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <h3 className="text-lg font-bold text-white">Add New Offline Lead</h3>
              <button 
                onClick={() => setShowAddModal(false)}
                className="p-1.5 rounded-xl text-gray-400 hover:text-white glass-card"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleAddLead} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Client Name *</label>
                <input
                  type="text"
                  required
                  value={newLeadForm.name}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, name: e.target.value })}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs focus:outline-none focus:border-brand-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={newLeadForm.phone}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, phone: e.target.value })}
                    placeholder="9876543210"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs focus:outline-none focus:border-brand-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={newLeadForm.email}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, email: e.target.value })}
                    placeholder="client@example.com"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs focus:outline-none focus:border-brand-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Project / Subject *</label>
                <input
                  type="text"
                  required
                  value={newLeadForm.subject}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, subject: e.target.value })}
                  placeholder="e.g. Android Mobile App Inquiry"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs focus:outline-none focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Requirement Notes *</label>
                <textarea
                  required
                  rows={3}
                  value={newLeadForm.message}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, message: e.target.value })}
                  placeholder="Requirement summary..."
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs focus:outline-none focus:border-brand-500 resize-none"
                ></textarea>
              </div>

              <div className="flex justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl glass-card text-xs font-semibold text-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-gradient-brand text-white px-5 py-2 rounded-xl text-xs font-semibold shadow-lg"
                >
                  Save Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
