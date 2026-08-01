import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Logo & Graphic Designing | Innovateria',
  description: 'Professional logo design, brand identity systems, and visual graphic design by Innovateria.',
};

export default function LogoPage() {
  const capabilities = [
    'Custom Brand Identity & Logo Systems',
    'Vector Graphic Artistry & Iconography',
    'UI/UX Design Kits & Design Tokens',
    'Social Media Banner & Marketing Assets',
    'High-Resolution Print & Merchandise Designs',
    'Brand Guidelines & Color Palette Selection'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs font-bold text-brand-500 uppercase tracking-widest bg-brand-500/10 px-3.5 py-1.5 rounded-full border border-brand-500/20">
            Brand Identity
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Creative <span className="text-gradient-brand">Logo & Graphic Design</span>
          </h1>
          <p className="text-sm text-gray-300 leading-relaxed">
            Craft a memorable brand identity. We design high-impact logos, brand identity packages, and visual assets that resonate with your target market.
          </p>

          <div className="space-y-2.5 pt-2">
            {capabilities.map((c, idx) => (
              <div key={idx} className="flex items-center space-x-3 text-xs text-gray-200">
                <CheckCircle2 size={16} className="text-brand-500 shrink-0" />
                <span>{c}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-brand text-white px-8 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider shadow-lg shadow-brand-500/25"
            >
              <span>Get Logo Design Package</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="glass-card rounded-3xl p-6 border border-white/10 relative overflow-hidden">
            <img 
              src="/assets/img/logo.png" 
              alt="Logo Design Portfolio" 
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>

    </div>
  );
}
