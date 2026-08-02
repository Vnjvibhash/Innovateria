'use client';

import { useState, useEffect } from 'react';
import { Users, Search, Plus, Phone, Mail, Building, FolderKanban, DollarSign, X } from 'lucide-react';
import { Client } from '@/lib/crm-store';

export default function AdminClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newClient, setNewClient] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectsCount: 1,
    totalSpent: '₹1,00,000',
    status: 'active' as Client['status']
  });

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/clients');
      const data = await res.json();
      if (data.success) {
        setClients(data.clients);
      }
    } catch (err) {
      console.error('Error fetching clients:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddClient = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/clients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newClient)
      });
      if (res.ok) {
        fetchClients();
        setShowAddModal(false);
        setNewClient({
          name: '',
          company: '',
          email: '',
          phone: '',
          projectsCount: 1,
          totalSpent: '₹1,00,000',
          status: 'active'
        });
      }
    } catch (err) {
      console.error('Error adding client:', err);
    }
  };

  const filteredClients = clients.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight flex items-center space-x-2">
            <Users size={24} className="text-brand-500" />
            <span>Client Directory CRM</span>
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            Manage agency enterprise clients, accounts, lifetime billing, and contact records.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center space-x-2 bg-gradient-brand text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow-lg shadow-brand-500/20 hover:opacity-90 transition-all"
        >
          <Plus size={16} />
          <span>Add Client Record</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="glass-card p-4 rounded-2xl border border-white/10 flex items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search clients by name, company, email..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#0B0F17]/80 border border-white/10 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-brand-500"
          />
        </div>
      </div>

      {/* Clients Grid */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : filteredClients.length === 0 ? (
        <div className="glass-card rounded-2xl p-12 text-center space-y-3 border border-white/10">
          <Users size={40} className="mx-auto text-gray-500" />
          <h3 className="text-base font-bold text-white">No Clients Found</h3>
          <p className="text-xs text-gray-400 max-w-sm mx-auto">
            No client records match your current search terms.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClients.map((client) => (
            <div key={client.id} className="glass-card glass-card-hover rounded-3xl p-6 border border-white/10 space-y-4 relative overflow-hidden group">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-2xl bg-brand-500/15 border border-brand-500/30 flex items-center justify-center text-brand-500 font-bold text-sm">
                    {client.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-brand-500 transition-colors">{client.name}</h3>
                    <p className="text-xs text-brand-400 font-medium flex items-center space-x-1">
                      <Building size={12} />
                      <span>{client.company}</span>
                    </p>
                  </div>
                </div>

                <span className={`text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full border ${
                  client.status === 'active' 
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                    : 'bg-gray-500/20 text-gray-400 border-gray-500/30'
                }`}>
                  {client.status}
                </span>
              </div>

              <div className="space-y-2 text-xs pt-2 border-t border-white/10">
                <a href={`tel:${client.phone}`} className="flex items-center space-x-2 text-gray-300 hover:text-brand-500 transition-colors">
                  <Phone size={14} className="text-brand-500 shrink-0" />
                  <span>{client.phone}</span>
                </a>
                <a href={`mailto:${client.email}`} className="flex items-center space-x-2 text-gray-300 hover:text-brand-500 transition-colors">
                  <Mail size={14} className="text-brand-500 shrink-0" />
                  <span className="truncate">{client.email}</span>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-center">
                  <span className="text-[10px] text-gray-400 block uppercase">Projects</span>
                  <strong className="text-white text-base font-bold">{client.projectsCount}</strong>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-center">
                  <span className="text-[10px] text-gray-400 block uppercase">Lifetime Value</span>
                  <strong className="text-brand-400 text-base font-bold">{client.totalSpent}</strong>
                </div>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* Add Client Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="glass-card rounded-3xl p-6 sm:p-8 max-w-md w-full border border-white/10 space-y-6 relative">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <h3 className="text-lg font-bold text-white">Add Client Record</h3>
              <button onClick={() => setShowAddModal(false)} className="p-1 rounded-lg text-gray-400 hover:text-white glass-card">
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleAddClient} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Contact Name *</label>
                <input
                  type="text"
                  required
                  value={newClient.name}
                  onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Company / Business Name *</label>
                <input
                  type="text"
                  required
                  value={newClient.company}
                  onChange={(e) => setNewClient({ ...newClient, company: e.target.value })}
                  placeholder="e.g. TechVentures Pvt Ltd"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={newClient.email}
                    onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
                    placeholder="client@company.com"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={newClient.phone}
                    onChange={(e) => setNewClient({ ...newClient, phone: e.target.value })}
                    placeholder="9876543210"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Initial Projects Count</label>
                  <input
                    type="number"
                    min="0"
                    value={newClient.projectsCount}
                    onChange={(e) => setNewClient({ ...newClient, projectsCount: parseInt(e.target.value) || 0 })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Lifetime Value</label>
                  <input
                    type="text"
                    value={newClient.totalSpent}
                    onChange={(e) => setNewClient({ ...newClient, totalSpent: e.target.value })}
                    placeholder="₹2,50,000"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-2">
                <button type="button" onClick={() => setShowAddModal(false)} className="px-4 py-2 rounded-xl glass-card text-xs text-gray-300">
                  Cancel
                </button>
                <button type="submit" className="bg-gradient-brand text-white px-5 py-2 rounded-xl text-xs font-semibold shadow-lg">
                  Save Client
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
