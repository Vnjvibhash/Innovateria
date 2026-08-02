import Link from 'next/link';
import { 
  GraduationCap, 
  Briefcase, 
  University, 
  Laptop, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Github,
  ExternalLink,
  ShoppingBag,
  Wallet,
  Pill,
  PenTool,
  ShieldCheck,
  Car,
  Sparkles
} from 'lucide-react';

export const metadata = {
  title: 'Portfolio & Journey | Innovateria',
  description: 'Explore our technology timeline, career journey, and portfolio showcase at Innovateria.',
};

export default function PortfolioPage() {
  const timeline = [
    {
      period: '2017 - 2020',
      title: 'Diploma in CSE',
      institution: 'Hindustan Electronics Academy',
      location: 'Bangalore, IN',
      type: 'education',
      icon: GraduationCap,
      details: ['Computer Science Fundamentals', 'Data Structures & Algorithms', 'Software Engineering Basics']
    },
    {
      period: '2020 - 2021',
      title: 'Junior Software Developer',
      company: 'Connectwings Infotech',
      location: 'Mysore, IN',
      type: 'experience',
      icon: Briefcase,
      details: [
        'Android & Laravel development',
        'Payment gateway integration',
        'Git version control & code deployment'
      ]
    },
    {
      period: '2021 - 2024',
      title: 'B.E. in Computer Science',
      institution: 'Chandigarh University',
      location: 'Punjab, IN',
      type: 'education',
      icon: University,
      details: ['Advanced Software Architecture', 'Database Management Systems', 'Cloud Computing & Networks']
    },
    {
      period: '2022',
      title: 'Android Developer Intern',
      company: 'Web Digital Mantra',
      location: 'Bangalore, IN',
      type: 'experience',
      icon: Briefcase,
      details: [
        'Full Android development lifecycle',
        'REST API integration & memory optimization',
        'Payment gateway implementation'
      ]
    },
    {
      period: '2024 - Present',
      title: 'Full Stack Developer & Founder',
      company: 'Innovateria',
      location: 'India / Remote',
      type: 'experience',
      icon: Laptop,
      details: [
        'Custom web & mobile solutions development',
        'Laravel, Next.js & Android specialization',
        'End-to-end client project management'
      ]
    }
  ];

  const featuredProjects = [
    {
      title: 'Shop-Orbit 🛍️',
      category: 'Mobile E-Commerce',
      tech: ['Flutter', 'Firebase', 'Dart'],
      desc: 'Modern cross-platform shopping platform with cart, wishlist, and payment integration.',
      github: 'https://github.com/Vnjvibhash/Shop-Orbit',
      icon: ShoppingBag
    },
    {
      title: 'BuddyExpense 💰',
      category: 'Finance & Expense Tracker',
      tech: ['Flutter', 'Firebase', 'Dart'],
      desc: 'Smart expense tracking app for friends and groups to split shared costs.',
      github: 'https://github.com/Vnjvibhash/BuddyExpense',
      icon: Wallet
    },
    {
      title: 'MediMinder 💊',
      category: 'Healthcare Companion',
      tech: ['Flutter', 'Firebase', 'Notifications'],
      desc: 'Health companion reminding users to take medicines with dosage logs.',
      github: 'https://github.com/Vnjvibhash/MediMinder',
      icon: Pill
    },
    {
      title: 'SoulScripter ✍️',
      category: 'Creative Writing Platform',
      tech: ['React', 'Firebase', 'JavaScript'],
      desc: 'Distraction-free literature platform for poets and storytellers.',
      github: 'https://github.com/Vnjvibhash/SoulScripter',
      icon: PenTool
    },
    {
      title: 'iDVault – Aadhaar OCR 🛡️',
      category: 'Identity Security',
      tech: ['Flutter', 'Firebase', 'OCR'],
      desc: 'Aadhaar document scanner and manager with OCR data extraction.',
      github: 'https://github.com/Vnjvibhash/iDVault',
      icon: ShieldCheck
    },
    {
      title: 'Rangi Cabs 🚕',
      category: 'Cab Booking Web System',
      tech: ['HTML5', 'Bootstrap', 'jQuery'],
      desc: 'Responsive travel booking system with interactive location forms.',
      github: 'https://github.com/Vnjvibhash/RangiCabs',
      icon: Car
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-20">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-brand-500 uppercase tracking-widest bg-brand-500/10 px-3.5 py-1.5 rounded-full border border-brand-500/20">
          Career & Technology Track
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Education & <span className="text-gradient-brand">Career Journey</span>
        </h1>
        <p className="text-sm text-gray-300 leading-relaxed">
          The engineering experience and foundation behind Innovateria&apos;s software solutions.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Vertical Track */}
        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-500 via-brand-500/50 to-transparent"></div>

        <div className="space-y-8 relative">
          {timeline.map((item, idx) => {
            const Icon = item.icon;
            const isEven = idx % 2 === 0;

            return (
              <div 
                key={idx}
                className={`flex flex-col md:flex-row items-start md:items-center relative pl-10 md:pl-0 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Mobile Icon Badge */}
                <div className="md:hidden absolute left-0 top-3 w-8 h-8 rounded-full bg-[#131A29] border-2 border-brand-500 flex items-center justify-center text-brand-500 z-10 shadow-lg shadow-brand-500/20">
                  <Icon size={14} />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 p-2 sm:p-4">
                  <div className="glass-card glass-card-hover rounded-2xl p-5 sm:p-6 border border-white/10 space-y-3 relative">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        item.type === 'education' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'bg-brand-500/20 text-brand-400 border border-brand-500/30'
                      }`}>
                        {item.type}
                      </span>
                      <div className="flex items-center space-x-1 text-xs font-semibold text-gray-400">
                        <Calendar size={12} className="text-brand-500" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-xs text-brand-500 font-medium">
                      {item.company || item.institution}
                    </p>
                    <p className="text-[11px] text-gray-400 flex items-center space-x-1">
                      <MapPin size={11} />
                      <span>{item.location}</span>
                    </p>

                    <ul className="space-y-1.5 pt-2 border-t border-white/10">
                      {item.details.map((d, i) => (
                        <li key={i} className="text-xs text-gray-300 flex items-start space-x-2">
                          <CheckCircle2 size={12} className="text-brand-500 shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Desktop Central Icon Badge */}
                <div className="hidden md:flex w-10 h-10 rounded-full bg-[#131A29] border-2 border-brand-500 items-center justify-center text-brand-500 z-10 my-4 md:my-0 shadow-lg shadow-brand-500/20">
                  <Icon size={18} />
                </div>

                {/* Empty spacer for grid alignment */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Featured Projects Grid Showcase */}
      <div className="pt-10 space-y-8 border-t border-white/10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <span className="text-xs font-bold text-brand-500 uppercase tracking-widest bg-brand-500/10 px-3.5 py-1.5 rounded-full border border-brand-500/20">
              GitHub Repositories Showcase
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
              Featured Software Projects
            </h2>
          </div>

          <a 
            href="https://github.com/Vnjvibhash/3D-Portfolio" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center space-x-2 bg-gradient-brand text-white px-5 py-2.5 rounded-full text-xs font-semibold shadow-lg hover:shadow-brand-500/30 transition-all"
          >
            <Sparkles size={14} />
            <span>Explore 3D Portfolio Repo</span>
            <ExternalLink size={12} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx} 
                className="glass-card glass-card-hover rounded-2xl p-5 border border-white/10 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] font-semibold text-brand-400 uppercase tracking-wider">
                      {p.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-brand-500 transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-xs text-gray-300 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t, i) => (
                      <span key={i} className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={p.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-brand-500 hover:text-white transition-colors pt-1"
                  >
                    <Github size={14} />
                    <span>View Repository on GitHub</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
