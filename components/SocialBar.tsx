'use client';

import { usePathname } from 'next/navigation';
import { Github, Facebook, MessageCircle, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function SocialBar() {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) return null;

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/VnjVibhash',
      hoverClass: 'hover:bg-[#24292e] hover:border-[#24292e] hover:shadow-[0_0_20px_rgba(36,41,46,0.6)]',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://facebook.com/Vivekajee',
      hoverClass: 'hover:bg-[#1877F2] hover:border-[#1877F2] hover:shadow-[0_0_20px_rgba(24,119,242,0.6)]',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/917762974716',
      hoverClass: 'hover:bg-[#25D366] hover:border-[#25D366] hover:shadow-[0_0_20px_rgba(37,211,102,0.6)]',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com/Vnjvibhash',
      hoverClass: 'hover:bg-[#1DA1F2] hover:border-[#1DA1F2] hover:shadow-[0_0_20px_rgba(29,161,242,0.6)]',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/Vivekajee',
      hoverClass: 'hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:shadow-[0_0_20px_rgba(10,102,194,0.6)]',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/Vivekajee',
      hoverClass: 'hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] hover:border-[#fd1d1d] hover:shadow-[0_0_20px_rgba(253,29,29,0.6)]',
    },
  ];

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col items-start space-y-1.5 pointer-events-auto">
      {socialLinks.map((item) => {
        const IconComponent = item.icon;
        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center h-11 w-11 hover:w-36 bg-[#131A29]/90 backdrop-blur-md border border-l-0 border-white/10 text-gray-300 rounded-r-2xl transition-all duration-300 ease-out hover:text-white ${item.hoverClass} shadow-lg overflow-hidden shrink-0`}
            title={item.name}
          >
            <div className="w-11 h-11 flex items-center justify-center shrink-0">
              <IconComponent size={18} className="transition-transform duration-300 group-hover:scale-110" />
            </div>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-bold whitespace-nowrap pr-3 tracking-wide">
              {item.name}
            </span>
          </a>
        );
      })}
    </div>
  );
}
