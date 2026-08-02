import Link from 'next/link';
import { ShoppingBag, Wallet, Pill, PenTool, ShieldCheck, Car, Github, ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Our Projects | Innovateria',
  description: 'Explore featured mobile, web, and software engineering projects created by Innovateria.',
};

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'Shop-Orbit 🛍️',
      category: 'E-Commerce Mobile App',
      tech: ['Flutter', 'Firebase', 'Dart', 'Payment Gateway'],
      status: 'Live & Open Source',
      desc: 'A modern e-commerce mobile platform with a seamless shopping experience and intuitive UI.',
      bullets: [
        'Developed with Flutter for cross-platform iOS & Android support',
        'Integrated Firebase real-time database and secure authentication',
        'Built-in cart, wishlist, order tracking, and payment gateways'
      ],
      github: 'https://github.com/Vnjvibhash/Shop-Orbit',
      icon: ShoppingBag,
      color: 'from-amber-500/20 to-orange-500/10'
    },
    {
      id: 2,
      title: 'BuddyExpense 💰',
      category: 'Finance & Expense Management',
      tech: ['Flutter', 'Firebase', 'Dart'],
      status: 'Live & Open Source',
      desc: 'Smart expense tracking app for friends and groups to manage shared costs effortlessly.',
      bullets: [
        'Built with Flutter for iOS & Android devices',
        'Group-based expense tracking with dynamic split options',
        'Data sync with Firebase for real-time group collaboration'
      ],
      github: 'https://github.com/Vnjvibhash/BuddyExpense',
      icon: Wallet,
      color: 'from-emerald-500/20 to-teal-500/10'
    },
    {
      id: 3,
      title: 'MediMinder 💊',
      category: 'Healthcare Companion',
      tech: ['Flutter', 'Firebase', 'Dart', 'Notifications'],
      status: 'Live & Open Source',
      desc: 'A health companion app that reminds users to take medicines on time.',
      bullets: [
        'Schedule medicine reminders with push notifications',
        'Supports dosage tracking and logs complete history',
        'Syncs health data securely with Firebase database'
      ],
      github: 'https://github.com/Vnjvibhash/MediMinder',
      icon: Pill,
      color: 'from-blue-500/20 to-cyan-500/10'
    },
    {
      id: 4,
      title: 'SoulScripter ✍️',
      category: 'Creative Writing Platform',
      tech: ['React', 'Firebase', 'JavaScript', 'Tailwind CSS'],
      status: 'Live & Open Source',
      desc: 'A creative writing platform for poets & storytellers to express themselves.',
      bullets: [
        'Developed with React frontend and Firebase backend',
        'Users can write, publish, and save creative literature',
        'Integrated likes, comments, and community engagement'
      ],
      github: 'https://github.com/Vnjvibhash/SoulScripter',
      icon: PenTool,
      color: 'from-purple-500/20 to-pink-500/10'
    },
    {
      id: 5,
      title: 'iDVault – Aadhaar Scanner & Manager 🛡️',
      category: 'Identity OCR & Security',
      tech: ['Flutter', 'Firebase', 'Dart', 'OCR Processing'],
      status: 'Live & Open Source',
      desc: 'A Flutter app allowing users to scan/upload Aadhaar cards, extract data, and manage records securely.',
      bullets: [
        'Integrated image processing / OCR for data extraction',
        'Secure database storage with Firebase Realtime Database',
        'Allows exporting and backing up identity records'
      ],
      github: 'https://github.com/Vnjvibhash/iDVault',
      icon: ShieldCheck,
      color: 'from-brand-500/20 to-red-500/10'
    },
    {
      id: 6,
      title: 'Rangi Cabs – Premium Travel Solutions 🚕',
      category: 'Travel & Booking Web System',
      tech: ['HTML5', 'CSS3', 'Bootstrap', 'jQuery'],
      status: 'Live & Open Source',
      desc: 'A responsive and interactive cab booking website designed to deliver a premium travel experience.',
      bullets: [
        'Multi-page UI with clean, modern Bootstrap layouts',
        'Used jQuery for smooth DOM animations and event handling',
        'Integrated dynamic booking forms and location inputs'
      ],
      github: 'https://github.com/Vnjvibhash/RangiCabs',
      icon: Car,
      color: 'from-yellow-500/20 to-amber-500/10'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 sm:space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-brand-500 uppercase tracking-widest bg-brand-500/10 px-3.5 py-1.5 rounded-full border border-brand-500/20">
          Our Open Source & Client Projects
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Featured <span className="text-gradient-brand">Software Projects</span>
        </h1>
        <p className="text-sm text-gray-300 leading-relaxed">
          High-performance mobile applications, web platforms, and custom software systems engineered by Innovateria.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => {
          const IconComponent = p.icon;
          return (
            <div 
              key={p.id} 
              className="glass-card glass-card-hover rounded-3xl p-6 border border-white/10 flex flex-col justify-between space-y-6 relative overflow-hidden group"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${p.color} rounded-full blur-2xl pointer-events-none`}></div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                    <IconComponent size={24} />
                  </div>
                  <span className="text-[10px] uppercase font-bold text-brand-400 bg-brand-500/15 border border-brand-500/30 px-2.5 py-1 rounded-full">
                    {p.status}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-brand-500 uppercase tracking-wider block mb-1">
                    {p.category}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-500 transition-colors">
                    {p.title}
                  </h3>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {p.desc}
                </p>

                <ul className="space-y-1.5 pt-2 border-t border-white/10">
                  {p.bullets.map((bullet, i) => (
                    <li key={i} className="text-[11px] text-gray-400 flex items-start space-x-2">
                      <CheckCircle2 size={12} className="text-brand-500 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-medium bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <a 
                    href={p.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-gray-300 hover:text-white transition-colors"
                  >
                    <Github size={14} className="text-brand-500" />
                    <span>View Repository</span>
                    <ExternalLink size={12} />
                  </a>

                  <Link 
                    href="/contact" 
                    className="inline-flex items-center space-x-1 text-xs font-semibold text-brand-500 hover:text-white transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
