'use client';

import { useState, useEffect } from 'react';
import { 
  FolderKanban, 
  Plus, 
  Search, 
  Calendar, 
  DollarSign, 
  CheckCircle2, 
  Clock, 
  User, 
  Edit3, 
  Trash2, 
  X,
  Code2,
  Smartphone,
  Globe2,
  TrendingUp,
  Save
} from 'lucide-react';
import { ProjectCRM } from '@/lib/crm-store';

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<ProjectCRM[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // New Project Modal State
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProj, setNewProj] = useState({
    title: '',
    clientName: '',
    clientEmail: '',
    category: 'App Development' as ProjectCRM['category'],
    techStack: '',
    status: 'in_development' as ProjectCRM['status'],
    budget: '₹1,50,000',
    progress: 25,
    startDate: new Date().toISOString().split('T')[0],
    deadline: ''
  });

  // Active Edit Modal
  const [editingProj, setEditingProj] = useState<ProjectCRM | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/projects');
      const data = await res.json();
      if (data.success) {
        setProjects(data.projects);
      }
    } catch (err) {
      console.error('Error fetching projects:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        ...newProj,
        techStack: newProj.techStack.split(',').map(t => t.trim()).filter(Boolean)
      };

      const res = await fetch('/api/admin/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        fetchProjects();
        setShowAddModal(false);
        setNewProj({
          title: '',
          clientName: '',
          clientEmail: '',
          category: 'App Development',
          techStack: '',
          status: 'in_development',
          budget: '₹1,50,000',
          progress: 25,
          startDate: new Date().toISOString().split('T')[0],
          deadline: ''
        });
      }
    } catch (err) {
      console.error('Error creating project:', err);
    }
  };

  const handleUpdateProject = async () => {
    if (!editingProj) return;
    try {
      const res = await fetch('/api/admin/projects', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingProj)
      });
      if (res.ok) {
        fetchProjects();
        setEditingProj(null);
      }
    } catch (err) {
      console.error('Error updating project:', err);
    }
  };

  const handleDeleteProject = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project record?')) return;
    try {
      const res = await fetch(`/api/admin/projects?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchProjects();
        if (editingProj && editingProj.id === id) setEditingProj(null);
      }
    } catch (err) {
      console.error('Error deleting project:', err);
    }
  };

  const getStatusBadge = (status: ProjectCRM['status']) => {
    switch (status) {
      case 'discovery':
        return <span className="bg-purple-500/20 text-purple-400 border border-purple-500/30 text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full">Discovery</span>;
      case 'in_development':
        return <span className="bg-brand-500/20 text-brand-400 border border-brand-500/30 text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full">In Development</span>;
      case 'beta_testing':
        return <span className="bg-blue-500/20 text-blue-400 border border-blue-500/30 text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full">Beta Testing</span>;
      case 'completed':
        return <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full font-semibold">Completed</span>;
      case 'on_hold':
        return <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full">On Hold</span>;
    }
  };

  const filteredProjects = projects.filter(p => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch = p.title.toLowerCase().includes(query) || p.clientName.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight flex items-center space-x-2">
            <FolderKanban size={24} className="text-brand-500" />
            <span>Agency Project Management CRM</span>
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            Track client project deliverables, budgets, milestone progress, and deadlines.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center space-x-2 bg-gradient-brand text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow-lg shadow-brand-500/20 hover:opacity-90 transition-all"
        >
          <Plus size={16} />
          <span>New Client Project</span>
        </button>
      </div>

      {/* Search & Filter */}
      <div className="glass-card p-4 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by project name or client..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#0B0F17]/80 border border-white/10 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-brand-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'App Development', label: 'App Dev' },
            { id: 'Software Engineering', label: 'Software' },
            { id: 'Web Development', label: 'Web Dev' },
            { id: 'SEO Services', label: 'SEO' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-brand-500 text-white font-semibold shadow-md'
                  : 'glass-card text-gray-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : filteredProjects.length === 0 ? (
        <div className="glass-card rounded-2xl p-12 text-center space-y-3 border border-white/10">
          <FolderKanban size={40} className="mx-auto text-gray-500" />
          <h3 className="text-base font-bold text-white">No Projects Found</h3>
          <p className="text-xs text-gray-400 max-w-sm mx-auto">
            No projects match your current category filter or search terms.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <div 
              key={p.id} 
              className="glass-card glass-card-hover rounded-3xl p-6 border border-white/10 flex flex-col justify-between space-y-5 relative overflow-hidden group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-brand-500 tracking-wider block">
                      {p.category}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-brand-500 transition-colors mt-0.5">
                      {p.title}
                    </h3>
                  </div>
                  {getStatusBadge(p.status)}
                </div>

                <div className="space-y-1.5 bg-white/5 p-3 rounded-xl border border-white/10">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Milestone Progress</span>
                    <span className="text-brand-400 font-bold">{p.progress}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-brand transition-all duration-500" 
                      style={{ width: `${p.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between text-gray-300">
                    <span className="text-gray-400">Client:</span>
                    <strong className="text-white font-semibold">{p.clientName}</strong>
                  </div>
                  <div className="flex items-center justify-between text-gray-300">
                    <span className="text-gray-400">Project Budget:</span>
                    <strong className="text-white font-semibold">{p.budget}</strong>
                  </div>
                  <div className="flex items-center justify-between text-gray-300">
                    <span className="text-gray-400">Target Deadline:</span>
                    <strong className="text-white font-semibold">{p.deadline || 'TBD'}</strong>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {p.techStack.map((tech, i) => (
                    <span key={i} className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <button
                  onClick={() => setEditingProj(p)}
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-brand-400 hover:text-brand-300"
                >
                  <Edit3 size={14} />
                  <span>Update Status & Progress</span>
                </button>

                <button
                  onClick={() => handleDeleteProject(p.id)}
                  className="text-gray-400 hover:text-red-400 p-1"
                  title="Delete Project"
                >
                  <Trash2 size={14} />
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* Edit Project Progress Modal */}
      {editingProj && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="glass-card rounded-3xl p-6 sm:p-8 max-w-md w-full border border-white/10 space-y-6 relative">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <h3 className="text-lg font-bold text-white">Update Project Status</h3>
              <button onClick={() => setEditingProj(null)} className="p-1 rounded-lg text-gray-400 hover:text-white glass-card">
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Project Status</label>
                <select
                  value={editingProj.status}
                  onChange={(e) => setEditingProj({ ...editingProj, status: e.target.value as ProjectCRM['status'] })}
                  className="w-full px-3 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs focus:outline-none"
                >
                  <option value="discovery">Discovery Phase</option>
                  <option value="in_development">In Active Development</option>
                  <option value="beta_testing">Beta Testing</option>
                  <option value="completed">Completed & Delivered</option>
                  <option value="on_hold">On Hold</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-300 font-medium">Milestone Progress ({editingProj.progress}%)</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={editingProj.progress}
                  onChange={(e) => setEditingProj({ ...editingProj, progress: parseInt(e.target.value) })}
                  className="w-full accent-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Budget</label>
                <input
                  type="text"
                  value={editingProj.budget}
                  onChange={(e) => setEditingProj({ ...editingProj, budget: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-2 border-t border-white/10">
              <button onClick={() => setEditingProj(null)} className="px-4 py-2 rounded-xl glass-card text-xs text-gray-300">
                Cancel
              </button>
              <button onClick={handleUpdateProject} className="inline-flex items-center space-x-1.5 bg-gradient-brand text-white px-5 py-2 rounded-xl text-xs font-semibold shadow-lg">
                <Save size={14} />
                <span>Save Milestone</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add New Project Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="glass-card rounded-3xl p-6 sm:p-8 max-w-md w-full border border-white/10 space-y-6 relative">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <h3 className="text-lg font-bold text-white">Create Client Project</h3>
              <button onClick={() => setShowAddModal(false)} className="p-1 rounded-lg text-gray-400 hover:text-white glass-card">
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleCreateProject} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Project Title *</label>
                <input
                  type="text"
                  required
                  value={newProj.title}
                  onChange={(e) => setNewProj({ ...newProj, title: e.target.value })}
                  placeholder="e.g. Flutter Mobile E-Commerce App"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Client Name *</label>
                  <input
                    type="text"
                    required
                    value={newProj.clientName}
                    onChange={(e) => setNewProj({ ...newProj, clientName: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Client Email *</label>
                  <input
                    type="email"
                    required
                    value={newProj.clientEmail}
                    onChange={(e) => setNewProj({ ...newProj, clientEmail: e.target.value })}
                    placeholder="rahul@example.com"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Service Category</label>
                  <select
                    value={newProj.category}
                    onChange={(e) => setNewProj({ ...newProj, category: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs"
                  >
                    <option value="App Development">App Development</option>
                    <option value="Software Engineering">Software Engineering</option>
                    <option value="Web Development">Web Development</option>
                    <option value="SEO Services">SEO Services</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Project Budget</label>
                  <input
                    type="text"
                    required
                    value={newProj.budget}
                    onChange={(e) => setNewProj({ ...newProj, budget: e.target.value })}
                    placeholder="₹2,00,000"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Tech Stack (comma separated)</label>
                <input
                  type="text"
                  value={newProj.techStack}
                  onChange={(e) => setNewProj({ ...newProj, techStack: e.target.value })}
                  placeholder="Flutter, Firebase, Dart, Payment Gateway"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Target Deadline</label>
                <input
                  type="date"
                  required
                  value={newProj.deadline}
                  onChange={(e) => setNewProj({ ...newProj, deadline: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-2">
                <button type="button" onClick={() => setShowAddModal(false)} className="px-4 py-2 rounded-xl glass-card text-xs text-gray-300">
                  Cancel
                </button>
                <button type="submit" className="bg-gradient-brand text-white px-5 py-2 rounded-xl text-xs font-semibold shadow-lg">
                  Create Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
