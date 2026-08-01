import Link from 'next/link';
import { 
  Zap, 
  ShieldCheck, 
  Settings2, 
  Code2, 
  HelpCircle, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Layers,
  Cpu,
  Lock,
  Globe2
} from 'lucide-react';

export const metadata = {
  title: 'Features & Add-ons | Innovateria',
  description: 'Discover key features, security, open-source technology stack, and customizable software plans by Innovateria.',
};

export default function FeaturePage() {
  const mainFeatures = [
    {
      title: 'Easy to Operate',
      desc: 'The Innovateria user interface is clean and intuitive, making it easy for anyone to operate without technical friction.',
      icon: Zap,
      color: 'text-amber-400'
    },
    {
      title: 'Fast, Secure & Reliable',
      desc: 'Our enterprise solutions run on high-performance infrastructure with encrypted transaction processing and high uptime.',
      icon: ShieldCheck,
      color: 'text-green-400'
    },
    {
      title: '100% Customizable',
      desc: 'Customizable compensation modules, business logic, workflows, multi-currency engines, and custom analytics dashboards.',
      icon: Settings2,
      color: 'text-brand-500'
    },
    {
      title: 'Modern Technology Stack',
      desc: 'Built using Next.js, React, Node.js, Laravel, REST APIs, GraphQL, PostgreSQL, and cloud deployments.',
      icon: Code2,
      color: 'text-blue-400'
    },
    {
      title: '24/7 Dedicated Support',
      desc: 'Round-the-clock technical assistance, regular maintenance, database backups, and quick bug resolution.',
      icon: HelpCircle,
      color: 'text-purple-400'
    },
    {
      title: 'Free Instant Demo',
      desc: 'Experience our live feature demos to explore admin dashboards, user portals, and analytics before launch.',
      icon: Sparkles,
      color: 'text-pink-400'
    }
  ];

  const techStack = [
    'Next.js 14 / React 19',
    'TypeScript',
    'Android Native (Kotlin)',
    'Laravel / PHP 8+',
    'PostgreSQL / MySQL',
    'Tailwind CSS & Framer Motion',
    'RESTful APIs & GraphQL',
    'Docker & Cloud Deployments'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-brand-500 uppercase tracking-widest bg-brand-500/10 px-3.5 py-1.5 rounded-full border border-brand-500/20">
          Powerful Architecture
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          System <span className="text-gradient-brand">Features & Add-ons</span>
        </h1>
        <p className="text-sm text-gray-300 leading-relaxed">
          Explore the core feature set, modular add-ons, security controls, and tech capabilities offered by Innovateria.
        </p>
      </div>

      {/* Grid of Core Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mainFeatures.map((f, idx) => {
          const Icon = f.icon;
          return (
            <div key={idx} className="glass-card glass-card-hover rounded-3xl p-6 border border-white/10 space-y-4 group">
              <div className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${f.color} group-hover:scale-110 transition-transform`}>
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-brand-500 transition-colors">{f.title}</h3>
              <p className="text-xs text-gray-300 leading-relaxed">{f.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Tech Stack Banner */}
      <div className="glass-card rounded-3xl p-8 border border-white/10 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl font-bold text-white">Modern Technology Stack</h2>
          <p className="text-xs text-gray-400">We utilize battle-tested tools and frameworks for maximum performance and security.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {techStack.map((tech, idx) => (
            <div key={idx} className="glass-card p-3 rounded-xl border border-white/10 flex items-center space-x-2 text-xs font-semibold text-gray-200">
              <CheckCircle2 size={14} className="text-brand-500 shrink-0" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 text-center space-y-6 relative overflow-hidden">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Need a custom feature tailored to your business?</h2>
        <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto">
          We build bespoke plugins, custom payment gateways, and tailored APIs for your enterprise needs.
        </p>
        <div>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-gradient-brand text-white px-8 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 transition-all"
          >
            <span>Request Technical Demo</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

    </div>
  );
}
