'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Phone, 
  Mail, 
  ChevronDown, 
  Menu, 
  X, 
  Globe, 
  Smartphone, 
  Code2, 
  Globe2, 
  Palette, 
  Search, 
  TrendingUp, 
  Users, 
  Briefcase, 
  FolderKanban, 
  Sparkles, 
  HelpCircle, 
  Info 
} from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0B0F17]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-2' : 'bg-[#0B0F17]/80 backdrop-blur-sm border-b border-white/5 py-3'
    }`}>
      {/* Top Info Bar */}
      <div className="hidden md:block border-b border-white/10 pb-2 mb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs text-gray-300">
          <div className="flex items-center space-x-6">
            <a href="tel:+917762974716" className="flex items-center space-x-2 hover:text-brand-500 transition-colors">
              <Phone size={14} className="text-brand-500" />
              <span>+91-7762974716</span>
            </a>
            <a href="mailto:info@innovateria.in" className="flex items-center space-x-2 hover:text-brand-500 transition-colors">
              <Mail size={14} className="text-brand-500" />
              <span>info@innovateria.in</span>
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-gray-400">Always Innovation is key to stay Relevant</span>
            <a 
              href="https://vivekajee.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 bg-gradient-brand text-white px-2.5 py-1 rounded text-xs font-medium transition-all hover:shadow-md hover:shadow-brand-500/20"
              title="Visit Vivek Kumar's Personal 3D Portfolio"
            >
              <Globe size={12} />
              <span>3D Portfolio</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-28 sm:w-36 h-10 transition-transform group-hover:scale-105">
            <img 
              src="/assets/img/logo.png" 
              alt="Innovateria Logo" 
              className="h-10 w-auto object-contain" 
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          <Link 
            href="/" 
            className={`transition-colors hover:text-brand-500 ${isActive('/') ? 'text-brand-500 font-semibold' : 'text-gray-200'}`}
          >
            Home
          </Link>

          {/* Who We Are Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 py-2 text-gray-200 hover:text-brand-500 transition-colors">
              <span>Who We Are?</span>
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute left-0 mt-1 w-56 glass-card rounded-xl shadow-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 border border-white/10">
              <Link href="/about" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-xs text-gray-300 hover:text-white hover:bg-brand-500/20 transition-colors">
                <Info size={16} className="text-brand-500" />
                <span>About Us</span>
              </Link>
              <Link href="/team" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-xs text-gray-300 hover:text-white hover:bg-brand-500/20 transition-colors">
                <Users size={16} className="text-brand-500" />
                <span>Our Team</span>
              </Link>
              <Link href="/projects" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-xs text-gray-300 hover:text-white hover:bg-brand-500/20 transition-colors">
                <FolderKanban size={16} className="text-brand-500" />
                <span>Our Projects</span>
              </Link>
              <Link href="/portfolio" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-xs text-gray-300 hover:text-white hover:bg-brand-500/20 transition-colors">
                <Briefcase size={16} className="text-brand-500" />
                <span>Portfolio</span>
              </Link>
              <Link href="/feature" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-xs text-gray-300 hover:text-white hover:bg-brand-500/20 transition-colors">
                <Sparkles size={16} className="text-brand-500" />
                <span>Features</span>
              </Link>
              <Link href="/faq" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-xs text-gray-300 hover:text-white hover:bg-brand-500/20 transition-colors">
                <HelpCircle size={16} className="text-brand-500" />
                <span>FAQs</span>
              </Link>
            </div>
          </div>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 py-2 text-gray-200 hover:text-brand-500 transition-colors">
              <span>Services</span>
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute left-0 mt-1 w-60 glass-card rounded-xl shadow-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 border border-white/10">
              <Link href="/mobile" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-xs text-gray-300 hover:text-white hover:bg-brand-500/20 transition-colors">
                <Smartphone size={16} className="text-brand-500" />
                <span>App Development</span>
              </Link>
              <Link href="/software" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-xs text-gray-300 hover:text-white hover:bg-brand-500/20 transition-colors">
                <Code2 size={16} className="text-brand-500" />
                <span>Software Development</span>
              </Link>
              <Link href="/web" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-xs text-gray-300 hover:text-white hover:bg-brand-500/20 transition-colors">
                <Globe2 size={16} className="text-brand-500" />
                <span>Web Development</span>
              </Link>
              <Link href="/logo" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-xs text-gray-300 hover:text-white hover:bg-brand-500/20 transition-colors">
                <Palette size={16} className="text-brand-500" />
                <span>Logo Designing</span>
              </Link>
            </div>
          </div>

          {/* Our Marketing Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 py-2 text-gray-200 hover:text-brand-500 transition-colors">
              <span>Our Marketing</span>
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute left-0 mt-1 w-56 glass-card rounded-xl shadow-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 border border-white/10">
              <Link href="/seo-services" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-xs text-gray-300 hover:text-white hover:bg-brand-500/20 transition-colors">
                <Search size={16} className="text-brand-500" />
                <span>SEO Services</span>
              </Link>
              <Link href="/digital-marketing" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-xs text-gray-300 hover:text-white hover:bg-brand-500/20 transition-colors">
                <TrendingUp size={16} className="text-brand-500" />
                <span>Digital Marketing</span>
              </Link>
            </div>
          </div>

          <Link 
            href="/contact" 
            className={`transition-colors hover:text-brand-500 ${isActive('/contact') ? 'text-brand-500 font-semibold' : 'text-gray-200'}`}
          >
            Contact Us
          </Link>
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <Link 
            href="/contact" 
            className="hidden sm:inline-flex items-center space-x-2 bg-gradient-brand text-white px-4 py-2 rounded-full text-xs font-semibold hover:shadow-lg hover:shadow-brand-500/30 transition-all transform hover:-translate-y-0.5"
          >
            <span>Get Started</span>
          </Link>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-300 hover:text-white p-2 rounded-lg focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-card mt-3 border-t border-white/10 px-4 pt-4 pb-6 space-y-3 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2.5 text-sm font-medium ${isActive('/') ? 'text-brand-500 font-semibold' : 'text-gray-300'}`}
          >
            Home
          </Link>

          {/* Mobile Who We Are */}
          <div className="border-t border-white/5 pt-2">
            <button 
              onClick={() => toggleDropdown('who')}
              className="flex justify-between items-center w-full py-2.5 text-sm font-medium text-gray-300"
            >
              <span>Who We Are?</span>
              <ChevronDown size={16} className={`transform transition-transform ${activeDropdown === 'who' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'who' && (
              <div className="pl-4 space-y-2 py-1 text-xs text-gray-400 border-l border-white/10 ml-2">
                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-brand-500">About Us</Link>
                <Link href="/team" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-brand-500">Our Team</Link>
                <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-brand-500">Our Projects</Link>
                <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-brand-500">Portfolio</Link>
                <Link href="/feature" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-brand-500">Features</Link>
                <Link href="/faq" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-brand-500">FAQs</Link>
              </div>
            )}
          </div>

          {/* Mobile Services */}
          <div className="border-t border-white/5 pt-2">
            <button 
              onClick={() => toggleDropdown('services')}
              className="flex justify-between items-center w-full py-2.5 text-sm font-medium text-gray-300"
            >
              <span>Services</span>
              <ChevronDown size={16} className={`transform transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'services' && (
              <div className="pl-4 space-y-2 py-1 text-xs text-gray-400 border-l border-white/10 ml-2">
                <Link href="/mobile" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-brand-500">App Development</Link>
                <Link href="/software" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-brand-500">Software Development</Link>
                <Link href="/web" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-brand-500">Web Development</Link>
                <Link href="/logo" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-brand-500">Logo Designing</Link>
              </div>
            )}
          </div>

          {/* Mobile Marketing */}
          <div className="border-t border-white/5 pt-2">
            <button 
              onClick={() => toggleDropdown('marketing')}
              className="flex justify-between items-center w-full py-2.5 text-sm font-medium text-gray-300"
            >
              <span>Our Marketing</span>
              <ChevronDown size={16} className={`transform transition-transform ${activeDropdown === 'marketing' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'marketing' && (
              <div className="pl-4 space-y-2 py-1 text-xs text-gray-400 border-l border-white/10 ml-2">
                <Link href="/seo-services" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-brand-500">SEO Services</Link>
                <Link href="/digital-marketing" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-brand-500">Digital Marketing</Link>
              </div>
            )}
          </div>

          <Link 
            href="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2.5 text-sm font-medium border-t border-white/5 ${isActive('/contact') ? 'text-brand-500 font-semibold' : 'text-gray-300'}`}
          >
            Contact Us
          </Link>

          {/* Mobile Quick Contact & Action */}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <Link 
              href="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 bg-gradient-brand text-white py-3 rounded-xl text-xs font-semibold uppercase tracking-wider shadow-lg"
            >
              <span>Get Started</span>
            </Link>
            <div className="flex justify-around items-center text-xs text-gray-400 pt-1">
              <a href="tel:+917762974716" className="flex items-center space-x-1.5 hover:text-brand-500">
                <Phone size={14} className="text-brand-500" />
                <span>Call Us</span>
              </a>
              <a href="mailto:info@innovateria.in" className="flex items-center space-x-1.5 hover:text-brand-500">
                <Mail size={14} className="text-brand-500" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
