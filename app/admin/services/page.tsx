'use client';

import { useState, useEffect } from 'react';
import { Wrench, Plus, Edit3, Trash2, X, Save, CheckCircle2, Code2, Smartphone, Globe2, TrendingUp } from 'lucide-react';
import { ServiceCMS } from '@/lib/crm-store';

export default function AdminServicesPage() {
  const [services, setServices] = useState<ServiceCMS[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingService, setEditingService] = useState<ServiceCMS | null>(null);

  const [form, setForm] = useState({
    title: '',
    category: 'Mobile Solutions',
    slug: 'mobile',
    iconName: 'Smartphone',
    description: '',
    features: '',
    status: 'active' as ServiceCMS['status']
  });

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/services');
      const data = await res.json();
      if (data.success && Array.isArray(data.services)) {
        setServices(data.services);
      } else {
        setServices([]);
      }
    } catch (err) {
      console.error('Error fetching services:', err);
      setServices([]);
    } finally {
      setLoading(false);
    }
  };

  const handleAddService = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        ...form,
        features: form.features.split('\n').map(f => f.trim()).filter(Boolean)
      };
      const res = await fetch('/api/admin/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        fetchServices();
        setShowAddModal(false);
        setForm({ title: '', category: 'Mobile Solutions', slug: 'mobile', iconName: 'Smartphone', description: '', features: '', status: 'active' });
      }
    } catch (err) {
      console.error('Error creating service:', err);
    }
  };

  const handleUpdateService = async () => {
    if (!editingService) return;
    try {
      const res = await fetch('/api/admin/services', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingService)
      });
      if (res.ok) {
        fetchServices();
        setEditingService(null);
      }
    } catch (err) {
      console.error('Error updating service:', err);
    }
  };

  const handleDeleteService = async (id: string) => {
    if (!confirm('Are you sure you want to delete this service offering?')) return;
    try {
      const res = await fetch(`/api/admin/services?id=${id}`, { method: 'DELETE' });
      if (res.ok) fetchServices();
    } catch (err) {
      console.error('Error deleting service:', err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight flex items-center space-x-2">
            <Wrench size={24} className="text-brand-500" />
            <span>Services CMS Management</span>
          </h1>
          <p className="text-xs text-gray-400 mt-1">Manage agency services, offerings, features, and public landing pages.</p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center space-x-2 bg-gradient-brand text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow-lg shadow-brand-500/20 hover:opacity-90 transition-all"
        >
          <Plus size={16} />
          <span>Add New Service Offering</span>
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(services || []).map((srv) => (
            <div key={srv.id} className="glass-card glass-card-hover rounded-3xl p-6 border border-white/10 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-brand-500 uppercase tracking-wider">{srv.category}</span>
                  <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                    srv.status === 'active' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                  }`}>
                    {srv.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white">{srv.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{srv.description}</p>

                <ul className="space-y-1.5 pt-2 border-t border-white/10">
                  {srv.features.map((feat, i) => (
                    <li key={i} className="text-[11px] text-gray-400 flex items-start space-x-2">
                      <CheckCircle2 size={12} className="text-brand-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-end space-x-2 pt-4 border-t border-white/10">
                <button onClick={() => setEditingService(srv)} className="p-2 rounded-xl glass-card hover:bg-brand-500/20 text-brand-400">
                  <Edit3 size={14} />
                </button>
                <button onClick={() => handleDeleteService(srv.id)} className="p-2 rounded-xl glass-card hover:bg-red-500/20 text-red-400">
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit Service Modal */}
      {editingService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="glass-card rounded-3xl p-6 max-w-md w-full border border-white/10 space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <h3 className="text-lg font-bold text-white">Edit Service Offering</h3>
              <button onClick={() => setEditingService(null)} className="p-1 rounded-lg text-gray-400 hover:text-white glass-card">
                <X size={18} />
              </button>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-300 mb-1">Service Title</label>
                <input
                  type="text"
                  value={editingService.title}
                  onChange={(e) => setEditingService({ ...editingService, title: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-300 mb-1">Description</label>
                <textarea
                  rows={3}
                  value={editingService.description}
                  onChange={(e) => setEditingService({ ...editingService, description: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs resize-none"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end space-x-3 pt-2">
              <button onClick={() => setEditingService(null)} className="px-4 py-2 rounded-xl glass-card text-xs text-gray-300">Cancel</button>
              <button onClick={handleUpdateService} className="bg-gradient-brand text-white px-5 py-2 rounded-xl text-xs font-semibold">Save Changes</button>
            </div>
          </div>
        </div>
      )}

      {/* Add Service Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="glass-card rounded-3xl p-6 max-w-md w-full border border-white/10 space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <h3 className="text-lg font-bold text-white">Add New Service</h3>
              <button onClick={() => setShowAddModal(false)} className="p-1 rounded-lg text-gray-400 hover:text-white glass-card">
                <X size={18} />
              </button>
            </div>
            <form onSubmit={handleAddService} className="space-y-3">
              <div>
                <label className="block text-xs text-gray-300 mb-1">Service Title *</label>
                <input
                  type="text"
                  required
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder="e.g. AI & Machine Learning Solutions"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-300 mb-1">Category *</label>
                <input
                  type="text"
                  required
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  placeholder="e.g. Cloud Solutions"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-300 mb-1">Description *</label>
                <textarea
                  required
                  rows={3}
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="Service description..."
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs resize-none"
                ></textarea>
              </div>
              <div>
                <label className="block text-xs text-gray-300 mb-1">Key Features (One per line)</label>
                <textarea
                  rows={3}
                  value={form.features}
                  onChange={(e) => setForm({ ...form, features: e.target.value })}
                  placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs resize-none"
                ></textarea>
              </div>
              <div className="flex justify-end space-x-3 pt-2">
                <button type="button" onClick={() => setShowAddModal(false)} className="px-4 py-2 rounded-xl glass-card text-xs text-gray-300">Cancel</button>
                <button type="submit" className="bg-gradient-brand text-white px-5 py-2 rounded-xl text-xs font-semibold">Create Service</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
