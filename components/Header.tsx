'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  Globe,
  Moon,
  Sun,
} from 'lucide-react';
import { dropdownGroups, type NavLinkItem } from '@/components/navigationData';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const dropdownCloseTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const savedTheme = window.localStorage.getItem('innovateria-theme') as 'dark' | 'light' | null;
    const preferredTheme = savedTheme ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(preferredTheme);
    document.documentElement.setAttribute('data-theme', preferredTheme);
    document.documentElement.style.colorScheme = preferredTheme;

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem('innovateria-theme', theme);
  }, [theme]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  const clearDropdownCloseTimer = () => {
    if (dropdownCloseTimerRef.current) {
      window.clearTimeout(dropdownCloseTimerRef.current);
      dropdownCloseTimerRef.current = null;
    }
  };

  const openDropdown = (name: string) => {
    clearDropdownCloseTimer();
    setHoveredDropdown(name);
  };

  const scheduleDropdownClose = () => {
    clearDropdownCloseTimer();
    dropdownCloseTimerRef.current = window.setTimeout(() => {
      setHoveredDropdown(null);
    }, 180);
  };

  useEffect(() => {
    return () => {
      clearDropdownCloseTimer();
    };
  }, []);

  const isActive = (path: string) => pathname === path;
  const isInDropdown = (paths: string[]) => paths.includes(pathname);
  const isWhoActive = isInDropdown(['/about', '/team', '/projects', '/portfolio', '/feature', '/faq']);
  const isServicesActive = isInDropdown(['/mobile', '/software', '/web', '/logo']);
  const isMarketingActive = isInDropdown(['/seo-services', '/digital-marketing']);

  const renderDropdownLinks = (links: NavLinkItem[]) =>
    links.map(({ href, label, icon: Icon }) => (
      <Link
        key={href}
        href={href}
        className="flex items-center space-x-3 px-3 py-2 rounded-lg text-xs text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:bg-brand-500/20 transition-colors"
      >
        <Icon size={16} className="text-brand-500 shrink-0" />
        <span>{label}</span>
      </Link>
    ));

  if (pathname?.startsWith('/admin')) return null;

  return (
    <header
      style={{ backgroundColor: 'var(--header-bg)' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md border-b border-[color:var(--border-color)] shadow-2xl py-2' : 'backdrop-blur-sm border-b border-[color:var(--border-color)] py-3'
      }`}
    >
      {/* Top Info Bar */}
      <div className={`hidden md:block transition-all duration-300 overflow-hidden ${
        isScrolled ? 'max-h-0 opacity-0 pb-0 mb-0 border-b-0 pointer-events-none' : 'max-h-12 opacity-100 pb-2 mb-2 border-b border-[color:var(--border-color)]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs text-gray-300">
          <div className="flex items-center space-x-6">
            <a href="tel:+917762974716" className="flex items-center space-x-2 hover:text-brand-500 transition-colors">
              <Phone size={14} className="text-brand-500" />
              <span>+91-7762974716</span>
            </a>
            <a href="mailto:innovateria.in@gmail.com" className="flex items-center space-x-2 hover:text-brand-500 transition-colors">
              <Mail size={14} className="text-brand-500" />
              <span>innovateria.in@gmail.com</span>
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

          {dropdownGroups.map(({ key, label, links, activePaths, widthClass }) => {
            const groupActive = isInDropdown(activePaths);

            return (
              <div
                key={key}
                className="relative group/menu"
                onMouseEnter={() => openDropdown(key)}
                onMouseLeave={() => scheduleDropdownClose()}
              >
                <button className={`flex items-center space-x-1 py-2 transition-colors hover:text-brand-500 ${groupActive ? 'text-brand-500 font-semibold' : 'text-[color:var(--text-secondary)]'}`}>
                  <span>{label}</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${hoveredDropdown === key ? 'rotate-180' : ''}`} />
                </button>
                <div
                  onMouseEnter={() => openDropdown(key)}
                  onMouseLeave={() => scheduleDropdownClose()}
                  className={`absolute left-0 top-full mt-2 rounded-xl border border-[color:var(--border-color)] bg-[color:var(--card-bg)] p-2 transition-all duration-200 shadow-2xl shadow-[color:var(--shadow-color)] z-50 ${widthClass} ${hoveredDropdown === key ? 'opacity-100 visible translate-y-0 pointer-events-auto' : 'opacity-0 invisible translate-y-2 pointer-events-none'}`}
                >
                  {renderDropdownLinks(links)}
                </div>
              </div>
            );
          })}

          <Link 
            href="/contact" 
            className={`transition-colors hover:text-brand-500 ${isActive('/contact') ? 'text-brand-500 font-semibold' : 'text-gray-200'}`}
          >
            Contact Us
          </Link>
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button
            onClick={toggleTheme}
            className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-gray-200 transition-colors hover:bg-white/20 hover:text-white"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

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
              className={`flex justify-between items-center w-full py-2.5 text-sm font-medium ${isWhoActive ? 'text-brand-500 font-semibold' : 'text-gray-300'}`}
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
              className={`flex justify-between items-center w-full py-2.5 text-sm font-medium ${isServicesActive ? 'text-brand-500 font-semibold' : 'text-gray-300'}`}
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
              className={`flex justify-between items-center w-full py-2.5 text-sm font-medium ${isMarketingActive ? 'text-brand-500 font-semibold' : 'text-gray-300'}`}
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
              <a href="mailto:innovateria.in@gmail.com" className="flex items-center space-x-1.5 hover:text-brand-500">
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
