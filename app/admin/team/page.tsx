'use client';

import { useState, useEffect } from 'react';
import { UserCheck, Plus, Edit3, Trash2, X, Github, Linkedin, Twitter, Globe, MapPin, Building } from 'lucide-react';
import { TeamMemberCMS } from '@/lib/crm-store';

export default function AdminTeamPage() {
  const [team, setTeam] = useState<TeamMemberCMS[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMemberCMS | null>(null);

  const [form, setForm] = useState({
    name: '',
    role: '',
    company: 'Innovateria',
    location: 'Bangalore, IN',
    bio: '',
    image: '/assets/img/team-1.png',
    skills: '',
    github: '',
    linkedin: '',
    twitter: '',
    website: ''
  });

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/team');
      const data = await res.json();
      if (data.success) setTeam(data.team);
    } catch (err) {
      console.error('Error fetching team:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddMember = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        ...form,
        skills: form.skills.split(',').map(s => s.trim()).filter(Boolean)
      };
      const res = await fetch('/api/admin/team', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        fetchTeam();
        setShowAddModal(false);
        setForm({ name: '', role: '', company: 'Innovateria', location: 'Bangalore, IN', bio: '', image: '/assets/img/team-1.png', skills: '', github: '', linkedin: '', twitter: '', website: '' });
      }
    } catch (err) {
      console.error('Error creating team member:', err);
    }
  };

  const handleUpdateMember = async () => {
    if (!editingMember) return;
    try {
      const res = await fetch('/api/admin/team', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingMember)
      });
      if (res.ok) {
        fetchTeam();
        setEditingMember(null);
      }
    } catch (err) {
      console.error('Error updating team member:', err);
    }
  };

  const handleDeleteMember = async (id: string) => {
    if (!confirm('Are you sure you want to remove this team member?')) return;
    try {
      const res = await fetch(`/api/admin/team?id=${id}`, { method: 'DELETE' });
      if (res.ok) fetchTeam();
    } catch (err) {
      console.error('Error deleting team member:', err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight flex items-center space-x-2">
            <UserCheck size={24} className="text-brand-500" />
            <span>Team Members CMS Management</span>
          </h1>
          <p className="text-xs text-gray-400 mt-1">Manage team profiles, roles, bios, social handles, and skills shown on public pages.</p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center space-x-2 bg-gradient-brand text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow-lg shadow-brand-500/20 hover:opacity-90 transition-all"
        >
          <Plus size={16} />
          <span>Add Team Member</span>
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <div key={member.id} className="glass-card glass-card-hover rounded-3xl p-6 border border-white/10 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-500 font-bold text-lg overflow-hidden shrink-0">
                    {member.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{member.name}</h3>
                    <p className="text-xs text-brand-400 font-medium">{member.role}</p>
                    <span className="text-[11px] text-gray-400 flex items-center space-x-1 mt-0.5">
                      <MapPin size={11} />
                      <span>{member.location}</span>
                    </span>
                  </div>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">{member.bio}</p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {member.skills.map((skill, i) => (
                    <span key={i} className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-white/10">
                <div className="flex items-center space-x-2 text-gray-400">
                  {member.github && <a href={member.github} target="_blank" rel="noopener noreferrer" className="hover:text-white"><Github size={14} /></a>}
                  {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white"><Linkedin size={14} /></a>}
                  {member.website && <a href={member.website} target="_blank" rel="noopener noreferrer" className="hover:text-white"><Globe size={14} /></a>}
                </div>

                <div className="flex space-x-2">
                  <button onClick={() => setEditingMember(member)} className="p-2 rounded-xl glass-card hover:bg-brand-500/20 text-brand-400">
                    <Edit3 size={14} />
                  </button>
                  <button onClick={() => handleDeleteMember(member.id)} className="p-2 rounded-xl glass-card hover:bg-red-500/20 text-red-400">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Team Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="glass-card rounded-3xl p-6 max-w-md w-full border border-white/10 space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <h3 className="text-lg font-bold text-white">Add Team Member</h3>
              <button onClick={() => setShowAddModal(false)} className="p-1 rounded-lg text-gray-400 hover:text-white glass-card">
                <X size={18} />
              </button>
            </div>
            <form onSubmit={handleAddMember} className="space-y-3">
              <div>
                <label className="block text-xs text-gray-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-300 mb-1">Designation / Role *</label>
                  <input
                    type="text"
                    required
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    placeholder="Mobile App Lead"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-300 mb-1">Location</label>
                  <input
                    type="text"
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    placeholder="Bangalore, IN"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-300 mb-1">Bio Summary *</label>
                <textarea
                  required
                  rows={3}
                  value={form.bio}
                  onChange={(e) => setForm({ ...form, bio: e.target.value })}
                  placeholder="Brief biography..."
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs resize-none"
                ></textarea>
              </div>
              <div>
                <label className="block text-xs text-gray-300 mb-1">Skills (comma separated)</label>
                <input
                  type="text"
                  value={form.skills}
                  onChange={(e) => setForm({ ...form, skills: e.target.value })}
                  placeholder="Flutter, Kotlin, React"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0B0F17] border border-white/10 text-white text-xs"
                />
              </div>
              <div className="flex justify-end space-x-3 pt-2">
                <button type="button" onClick={() => setShowAddModal(false)} className="px-4 py-2 rounded-xl glass-card text-xs text-gray-300">Cancel</button>
                <button type="submit" className="bg-gradient-brand text-white px-5 py-2 rounded-xl text-xs font-semibold">Save Member</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
