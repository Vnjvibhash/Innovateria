import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import { 
  Smartphone, 
  Code2, 
  Globe2, 
  Palette, 
  Search, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Award, 
  Users, 
  FolderCheck, 
  Clock, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function HomePage() {
  const services = [
    {
      title: 'App Development',
      desc: 'Native Android and cross-platform mobile apps crafted with seamless UI, high speed, and robust offline sync.',
      icon: Smartphone,
      link: '/mobile',
      color: 'from-blue-500/20 to-indigo-500/10'
    },
    {
      title: 'Software Development',
      desc: 'Enterprise custom software solutions tailored to automate business workflows and improve operational efficiency.',
      icon: Code2,
      link: '/software',
      color: 'from-purple-500/20 to-pink-500/10'
    },
    {
      title: 'Web Development',
      desc: 'Modern, responsive, SEO-ready web applications built with Next.js, React, Laravel, and cloud architectures.',
      icon: Globe2,
      link: '/web',
      color: 'from-brand-500/20 to-orange-500/10'
    },
    {
      title: 'Logo & Graphic Design',
      desc: 'Stunning brand identities, logos, marketing collateral, and UI/UX design systems that leave a lasting impression.',
      icon: Palette,
      link: '/logo',
      color: 'from-emerald-500/20 to-teal-500/10'
    },
    {
      title: 'SEO Services',
      desc: 'Search engine optimization, keyword auditing, backlink strategy, and organic traffic growth packages.',
      icon: Search,
      link: '/seo-services',
      color: 'from-amber-500/20 to-yellow-500/10'
    },
    {
      title: 'Digital Marketing',
      desc: 'Targeted PPC campaigns, social media management, brand awareness, and lead generation solutions.',
      icon: TrendingUp,
      link: '/digital-marketing',
      color: 'from-cyan-500/20 to-blue-500/10'
    }
  ];

  const metrics = [
    { number: '150+', label: 'Successful Projects', icon: FolderCheck },
    { number: '99%', label: 'Client Satisfaction', icon: Award },
    { number: '15+', label: 'Core Technologies', icon: Zap },
    { number: '24/7', label: 'Dedicated Support', icon: Clock }
  ];

  const features = [
    { title: 'Always Innovative', desc: 'We leverage the latest frameworks and technology stacks to deliver future-proof products.' },
    { title: 'Agile Methodology', desc: 'Rapid sprints, continuous deployment, and transparent client updates at every project stage.' },
    { title: 'Robust Security', desc: 'Enterprise-grade encryption, data protection, and secure server deployments standard.' },
    { title: 'Scaled Growth', desc: 'Architectures engineered to handle massive user growth and high transactional throughput.' }
  ];

  const portfolioSamples = [
    { title: 'Android App Suite', category: 'App Development', image: '/assets/img/android.png', link: '/portfolio' },
    { title: 'Modern E-Commerce Portal', category: 'Web Development', image: '/assets/img/pweb.png', link: '/portfolio' },
    { title: 'Enterprise ERP System', category: 'Software Development', image: '/assets/img/soft.png', link: '/portfolio' },
    { title: 'Organic SEO & Growth', category: 'SEO Services', image: '/assets/img/g-seo.png', link: '/portfolio' }
  ];

  return (
    <div className="space-y-24 pb-16">
      
      {/* ======= HERO SECTION ======= */}
      <section className="relative pb-16 sm:pb-24 overflow-hidden bg-grid-pattern">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,78,46,0.16),transparent_45%)]"></div>
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-brand-500/15 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4 sm:pt-6 lg:pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-7 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3 sm:px-3.5 py-1.5 rounded-full glass-card border border-brand-500/30 text-brand-500 text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
                <Sparkles size={14} className="animate-spin shrink-0" />
                <span className="truncate">Always Innovation Is Key To Stay Relevant</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Transforming Ideas Into <span className="text-gradient-brand">Digital Solutions</span>
              </h1>

              <p className="text-sm sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Innovateria provides high-performance Android App Development, Enterprise Software Engineering, Custom Web Systems, and Strategic Digital Marketing to scale your business.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
                <Link
                  href="/contact"
                  className="group w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-brand text-white px-7 sm:px-8 py-3.5 rounded-full font-semibold text-xs sm:text-sm shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Start Your Project</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/portfolio"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 glass-card hover:bg-white/10 text-white px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm border border-white/15 transition-all"
                >
                  <span>View Our Work</span>
                </Link>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 size={16} className="text-brand-500 shrink-0" />
                  <span>On-Time Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck size={16} className="text-brand-500 shrink-0" />
                  <span>100% Secure Code</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award size={16} className="text-brand-500 shrink-0" />
                  <span>Agile Developers</span>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-amber-500 rounded-[2rem] blur-xl opacity-30 animate-pulse-slow"></div>
                <div className="relative glass-card rounded-[2rem] p-3 sm:p-4 border border-white/15 shadow-2xl">
                  <img
                    src="/assets/img/hero-img.png"
                    alt="Innovateria Hero Solutions"
                    className="w-full h-auto object-contain rounded-[1.25rem] animate-float"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= METRICS BANNER ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="glass-card rounded-[2rem] p-4 sm:p-8 border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center shadow-2xl shadow-brand-500/10">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className="space-y-1.5 sm:space-y-2 group p-2">
                <div className="inline-flex p-2.5 sm:p-3 rounded-2xl bg-brand-500/10 text-brand-500 group-hover:scale-110 transition-transform">
                  <Icon size={20} className="sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white">{m.number}</h3>
                <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">{m.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ======= SERVICES SECTION ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-bold text-brand-500 uppercase tracking-widest bg-brand-500/10 px-3.5 py-1.5 rounded-full border border-brand-500/20">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Comprehensive Digital Services
          </h2>
          <p className="text-sm text-gray-400">
            From intuitive Android apps to custom enterprise software, we engineer solutions designed for scale and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((s, idx) => {
            const IconComponent = s.icon;
            return (
              <div 
                key={idx} 
                className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between space-y-6 relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${s.color} rounded-full blur-2xl pointer-events-none`}></div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-500 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <Link 
                  href={s.link} 
                  className="inline-flex items-center space-x-2 text-xs font-semibold text-brand-500 group-hover:text-white transition-colors"
                >
                  <span>Learn More</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* ======= TECHNOLOGIES GRID ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-brand-500 uppercase tracking-widest bg-brand-500/10 px-3.5 py-1.5 rounded-full border border-brand-500/20">
            Tech Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Our Core Technologies
          </h2>
          <p className="text-sm text-gray-400">
            We build with world-class frameworks, languages, and platforms to deliver high performance.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {[
            { name: 'React', img: '/assets/img/004-react.png' },
            { name: 'CodeIgniter', img: '/assets/img/white-ci.png' },
            { name: 'Flutter', img: '/assets/img/flutter.png' },
            { name: 'WordPress', img: '/assets/img/005-wordpress.png' },
            { name: 'Android', img: '/assets/img/008-android.png' },
            { name: 'jQuery', img: '/assets/img/jquery.png' },
            { name: 'Laravel', img: '/assets/img/laravel.png' },
            { name: 'Magento', img: '/assets/img/magento.png' },
            { name: 'Node.js', img: '/assets/img/node.png' },
            { name: 'PHP', img: '/assets/img/001-php.png' },
            { name: 'HTML5', img: '/assets/img/002-html-5.png' },
            { name: 'CSS3', img: '/assets/img/003-css-3.png' }
          ].map((t, idx) => (
            <div key={idx} className="tech_inr flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl glass-card glass-card-hover border border-white/10 group">
              <img 
                src={t.img} 
                alt={t.name} 
                className="h-8 sm:h-10 w-auto object-contain transition-transform group-hover:scale-110" 
              />
              <span className="text-[10px] font-semibold text-gray-400 mt-2 group-hover:text-brand-500 transition-colors">{t.name}</span>
            </div>
          ))}
        </div>
      </section>
      
      {/* ======= WHY CHOOSE US / FEATURES ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="text-xs font-bold text-brand-500 uppercase tracking-widest bg-brand-500/10 px-3 py-1 rounded-full">
              Why Innovateria?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Engineered For Speed, Reliability & Growth
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              We combine deep technical expertise with a user-first philosophy to create robust software products that solve real-world problems.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {features.map((f, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-4 border border-white/10 space-y-2 hover:border-brand-500/30 transition-all">
                  <div className="flex items-center space-x-2 text-brand-500">
                    <CheckCircle2 size={16} />
                    <h4 className="text-xs font-bold text-white">{f.title}</h4>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-normal">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link 
                href="/feature" 
                className="inline-flex items-center space-x-2 text-xs font-semibold text-brand-500 hover:text-white transition-colors"
              >
                <span>Explore All Technical Capabilities</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="glass-card rounded-3xl p-6 border border-white/10 relative overflow-hidden">
              <img 
                src="/assets/img/digital-marketing-tree.png" 
                alt="Innovateria Architecture" 
                className="w-full h-auto object-contain rounded-2xl" 
              />
            </div>
          </div>

        </div>
      </section>

      {/* ======= PORTFOLIO SHOWCASE ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs font-bold text-brand-500 uppercase tracking-widest">Our Work</span>
            <h2 className="text-3xl font-bold text-white tracking-tight mt-1">Featured Projects</h2>
          </div>
          <Link href="/portfolio" className="inline-flex items-center space-x-2 text-xs font-semibold text-brand-500 hover:underline">
            <span>View Full Portfolio</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioSamples.map((p, idx) => (
            <div key={idx} className="glass-card glass-card-hover rounded-[1.5rem] overflow-hidden border border-white/10 group flex flex-col justify-between">
              <div className="relative h-48 bg-[#131A29] p-4 flex items-center justify-center overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="max-h-36 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 space-y-2 bg-[#0E1422]">
                <span className="text-[10px] uppercase font-bold text-brand-500 tracking-wider">{p.category}</span>
                <h3 className="text-sm font-bold text-white group-hover:text-brand-500 transition-colors">{p.title}</h3>
                <Link href={p.link} className="inline-flex items-center space-x-1 text-xs text-gray-400 group-hover:text-white pt-1">
                  <span>View Details</span>
                  <ChevronRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======= CONTACT CTA & FORM SECTION ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-brand-500 uppercase tracking-widest bg-brand-500/10 px-3.5 py-1.5 rounded-full border border-brand-500/20">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Ready to Innovate & Build Your Next Platform?
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              We work with startups, businesses, and enterprises to build customized mobile apps, enterprise software, and growth strategies.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center space-x-4 glass-card p-4 rounded-2xl border border-white/10 hover:border-brand-500/30 transition-all">
                <div className="w-10 h-10 rounded-lg bg-brand-500/20 flex items-center justify-center text-brand-500">
                  <Smartphone size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Call / WhatsApp Direct</h4>
                  <p className="text-xs text-gray-400">+91 77629 74716</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 glass-card p-4 rounded-2xl border border-white/10 hover:border-brand-500/30 transition-all">
                <div className="w-10 h-10 rounded-lg bg-brand-500/20 flex items-center justify-center text-brand-500">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Instant Email Consultation</h4>
                  <p className="text-xs text-gray-400">info@innovateria.in</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

    </div>
  );
}
