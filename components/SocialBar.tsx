'use client';

import { usePathname } from 'next/navigation';
import { Github, Facebook, MessageCircle, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function SocialBar() {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) return null;
  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/VnjVibhash', color: 'hover:bg-[#333]' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/Vivekajee', color: 'hover:bg-[#1877F2]' },
    { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/917762974716', color: 'hover:bg-[#25D366]' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/Vnjvibhash', color: 'hover:bg-[#1DA1F2]' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/Vivekajee', color: 'hover:bg-[#0A66C2]' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/Vivekajee', color: 'hover:bg-[#E4405F]' },
  ];

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col space-y-1">
      {socialLinks.map((item) => {
        const IconComponent = item.icon;
        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center bg-[#131A29]/90 backdrop-blur-md border border-r-0 border-white/10 text-gray-300 py-2.5 px-3 rounded-r-xl transition-all duration-300 ${item.color} hover:text-white transform hover:translate-x-1 shadow-lg`}
            title={item.name}
          >
            <IconComponent size={18} />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-xs font-semibold whitespace-nowrap">
              {item.name}
            </span>
          </a>
        );
      })}
    </div>
  );
}
