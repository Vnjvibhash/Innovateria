'use client';

import { useState, useEffect } from 'react';
import { Grid, Plus, Edit3, Trash2, X, ExternalLink, Link as LinkIcon } from 'lucide-react';
import { PortfolioItemCMS } from '@/lib/crm-store';

export default function AdminPortfolioPage() {
  const [portfolio, setPortfolio] = useState<PortfolioItemCMS[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingItem, setEditingItem] = useState<PortfolioItemCMS | null>(null);

  const [form, setForm] = useState({
    title: '',
    category: 'Flutter App',
    image: '/assets/img/android.png',
    link: 'https://github.com/Vnjvibhash',
    desc: ''
  });

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/portfolio');
      const data = await res.json();
      if (data.success) setPortfolio(data.portfolio);
    } catch (err) {
      console.error('Error fetching portfolio:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        fetchPortfolio();
        setShowAddModal(false);
        setForm({ title: '', category: 'Flutter App', image: '/assets/img/android.png', link: 'https://github.com/Vnjvibhash', desc: '' });
      }
    } catch (err) {
      console.error('Error adding portfolio item:', err);
    }
  };

  const handleUpdateItem = async () => {
    if (!editingItem) return;
    try {
      const res = await fetch('/api/admin/portfolio', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingItem)
      });
      if (res.ok) {
        fetchPortfolio();
        setEditingItem(null);
      }
    } catch (err) {
      console.error('Error updating portfolio item:', err);
    }
  };

  const handleDeleteItem = async (id: string) => {
    if (!confirm('Are you sure you want to delete this portfolio item?')) return;
    try {
      const res = await fetch(`/api/admin/portfolio?id=${id}`, { method: 'DELETE' });
      if (res.ok) fetchPortfolio();
    } catch (err) {
      console.error('Error deleting portfolio item:', err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight flex items-center space-x-2">
            <Grid size={24} className="text-brand-500" />
            <span>Portfolio Showcase CMS</span>
          </h1>
          <p className="text-xs text-gray-400 mt-1">Manage portfolio cards and repository links displayed on homepage and portfolio pages.</p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center space-x-2 bg-gradient-brand text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow-lg shadow-brand-500/20 hover:opacity-90 transition-all"
        >
          <Plus size={16} />
          <span>Add Portfolio Item</span>
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolio.map((item) => (
            <div key={item.id} className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between group">
              <div className="p-4 space-y-3">
                <span className="text-[10px] uppercase font-bold text-brand-500 tracking-wider block">{item.category}</span>
                <h3 className="text-base font-bold text-white group-hover:text-brand-500 transition-colors">{item.title}</h3>
                <p className="text-xs text-gray-300 line-clamp-2">{item.desc}</p>
              </div>

              <div className="p-4 pt-2 border-t border-white/10 flex justify-between items-center bg-white/5">
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xs text-brand-400 hover:underline flex items-center space-x-1">
                  <span>View Project</span>
                  <ExternalLink size={12} />
                </a>

                <div className="flex space-x-2">
                  <button onClick={() => setEditingItem(item)} className="p-1.5 rounded-lg glass-card text-brand-400">
                    <Edit3 size={14} />
                  </button>
                  <button onClick={() => handleDeleteItem(item.id)} className="p-1.5 rounded-lg glass-card text-red-400">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="glass-card rounded-3xl p-6 max-w-md w-full border border-white/10 space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <h3 className="text-lg font-bold text-white">Add Portfolio Item</h3>
              <button onClick={() => setShowAddModal(false)} className="p-1 rounded-lg text-gray-400 hover:text-white glass-card">
                <X size={18} />
              </button>
            </div>
            <form onSubmit={handleAddItem} className="space-y-3">
              <div>
                <label className="block text-xs text-gray-300 mb-1">Title *</label>
                <input
                  type="text"
                  required
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder="e.g. Shop-Orbit 🛍️"
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
                  placeholder="Flutter E-Commerce"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-300 mb-1">GitHub / Live URL *</label>
                <input
                  type="url"
                  required
                  value={form.link}
                  onChange={(e) => setForm({ ...form, link: e.target.value })}
                  placeholder="https://github.com/Vnjvibhash/..."
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-300 mb-1">Description *</label>
                <textarea
                  required
                  rows={2}
                  value={form.desc}
                  onChange={(e) => setForm({ ...form, desc: e.target.value })}
                  placeholder="Brief description..."
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs resize-none"
                ></textarea>
              </div>
              <div className="flex justify-end space-x-3 pt-2">
                <button type="button" onClick={() => setShowAddModal(false)} className="px-4 py-2 rounded-xl glass-card text-xs text-gray-300">Cancel</button>
                <button type="submit" className="bg-gradient-brand text-white px-5 py-2 rounded-xl text-xs font-semibold">Add Item</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
