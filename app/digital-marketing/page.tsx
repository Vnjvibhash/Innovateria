import Link from 'next/link';
import { TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Digital Marketing Services | Innovateria',
  description: 'Targeted PPC, social media growth, lead generation, and digital marketing strategies by Innovateria.',
};

export default function DigitalMarketingPage() {
  const capabilities = [
    'Targeted Pay-Per-Click (PPC) Ad Campaigns',
    'Social Media Growth (Meta, LinkedIn, Twitter)',
    'Conversion Rate Optimization (CRO)',
    'Content Strategy & Email Marketing Automation',
    'Lead Generation Pipelines for B2B & B2C',
    'Performance Analytics & Monthly ROI Reporting'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs font-bold text-brand-500 uppercase tracking-widest bg-brand-500/10 px-3.5 py-1.5 rounded-full border border-brand-500/20">
            Growth & Performance
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Strategic <span className="text-gradient-brand">Digital Marketing</span>
          </h1>
          <p className="text-sm text-gray-300 leading-relaxed">
            Scale your brand online. We build data-backed performance marketing campaigns designed to acquire customers, increase ROI, and establish brand dominance.
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
              <span>Launch Growth Campaign</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="glass-card rounded-3xl p-6 border border-white/10 relative overflow-hidden">
            <img 
              src="/assets/img/digital-marketing.png" 
              alt="Digital Marketing Growth" 
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>

    </div>
  );
}
