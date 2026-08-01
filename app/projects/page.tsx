import Link from 'next/link';
import { FolderKanban, Clock, ArrowRight, Code2, Smartphone, Globe2 } from 'lucide-react';

export const metadata = {
  title: 'Our Projects | Innovateria',
  description: 'Explore active and past software engineering, app development, and web projects by Innovateria.',
};

export default function ProjectsPage() {
  const activeProjects = [
    {
      title: 'Innovateria Enterprise Suite',
      category: 'Software Engineering',
      tech: ['Next.js', 'Laravel', 'PostgreSQL', 'Tailwind CSS'],
      status: 'In Active Development',
      desc: 'Unified enterprise resource planning and client management portal built for high reliability and real-time synchronization.',
      icon: Code2
    },
    {
      title: 'Mobile Commerce & POS App',
      category: 'Android App',
      tech: ['Kotlin', 'Android SDK', 'REST API', 'Payment Gateway'],
      status: 'Beta Testing',
      desc: 'Mobile billing and point-of-sale Android application with offline database storage and live cloud sync.',
      icon: Smartphone
    },
    {
      title: 'Digital Marketing & SEO Automation',
      category: 'Web Platform',
      tech: ['React', 'Node.js', 'Google API', 'Analytics'],
      status: 'Deployment Phase',
      desc: 'Automated SEO dashboard tracking organic rankings, domain authority metrics, and automated campaign reports.',
      icon: Globe2
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-brand-500 uppercase tracking-widest bg-brand-500/10 px-3.5 py-1.5 rounded-full border border-brand-500/20">
          Our Portfolio & Milestones
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Current & Past <span className="text-gradient-brand">Projects</span>
        </h1>
        <p className="text-sm text-gray-300 leading-relaxed">
          High-quality software development solutions engineered to help businesses unlock new digital capabilities.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {activeProjects.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div key={idx} className="glass-card glass-card-hover rounded-3xl p-6 border border-white/10 flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                    <Icon size={24} />
                  </div>
                  <span className="text-[10px] uppercase font-bold text-brand-500 bg-brand-500/10 border border-brand-500/20 px-2.5 py-1 rounded-full">
                    {p.status}
                  </span>
                </div>

                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">{p.category}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-brand-500 transition-colors">{p.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{p.desc}</p>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t, i) => (
                    <span key={i} className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>

                <Link href="/contact" className="inline-flex items-center space-x-1 text-xs font-semibold text-brand-500 hover:text-white transition-colors">
                  <span>Inquire About Similar Project</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
