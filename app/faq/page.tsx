'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HelpCircle, ChevronDown, Search, ArrowRight, MessageSquare } from 'lucide-react';

export default function FaqPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      q: 'How can I buy or order software solutions from Innovateria?',
      a: 'You can request software development by filling out our Contact Form or emailing innovateria.in@gmail.com with your project requirements. Our technical team will respond within 24 hours with a detailed scope of work and quotation. Payment can be processed via direct bank wire transfer, online card payments, or UPI.'
    },
    {
      q: 'Can I try a live demo before placing an order?',
      a: 'Yes, we provide live interactive demos for our software, mobile applications, and web platforms so you can evaluate the admin dashboard, user interface, and features before committing.'
    },
    {
      q: 'Do you offer white-label software development?',
      a: 'Yes! All software, mobile applications, and web platforms developed by Innovateria can be fully white-labeled under your organization’s branding, logo, domain, and server infrastructure.'
    },
    {
      q: 'What is the pricing model for custom software projects?',
      a: 'We offer fixed milestone-based pricing as well as flexible sprint engagements. For custom software development, payments are typically split across 3 transparent milestones (Project Kickoff, Beta Delivery, and Final Production Deployment).'
    },
    {
      q: 'Do you provide server setup, deployment, and ongoing technical support?',
      a: 'Yes, we handle complete deployment to AWS, DigitalOcean, Google Cloud, or your private VPS servers. We also provide post-launch maintenance, monitoring, security updates, and 24/7 technical support.'
    },
    {
      q: 'What platforms do you support for mobile app development?',
      a: 'We specialize in native Android development (Kotlin / Java) as well as cross-platform mobile solutions (Flutter & React Native) with native performance and offline data synchronization.'
    },
    {
      q: 'Can your web apps integrate third-party payment gateways and APIs?',
      a: 'Absolutely. We regularly integrate Stripe, Razorpay, PayPal, Bank APIs, SMS gateways, WhatsApp business APIs, and custom RESTful / GraphQL endpoints.'
    }
  ];

  const filteredFaqs = faqs.filter(f => 
    f.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
    f.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header Banner */}
      <div className="text-center space-y-4">
        <span className="text-xs font-bold text-brand-500 uppercase tracking-widest bg-brand-500/10 px-3.5 py-1.5 rounded-full border border-brand-500/20">
          Knowledge Base
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Frequently Asked <span className="text-gradient-brand">Questions</span>
        </h1>
        <p className="text-sm text-gray-300 max-w-2xl mx-auto">
          Got questions about our development process, pricing, timeline, or technology stack? Find answers below.
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto relative pt-4">
          <Search size={18} className="absolute left-4 top-7 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs..."
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#131A29] border border-white/10 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-brand-500 transition-colors shadow-lg"
          />
        </div>
      </div>

      {/* FAQs Accordion */}
      <div className="space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 glass-card rounded-2xl text-gray-400 text-xs">
            No FAQs match your search query. Try searching for &quot;demo&quot;, &quot;payment&quot;, or &quot;pricing&quot;.
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center p-5 text-left text-sm font-bold text-white hover:text-brand-500 transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown size={18} className={`transform transition-transform shrink-0 ${isOpen ? 'rotate-180 text-brand-500' : 'text-gray-400'}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-gray-300 leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Still Have Questions CTA */}
      <div className="glass-card rounded-3xl p-8 border border-white/10 text-center space-y-4">
        <h3 className="text-xl font-bold text-white">Still have questions?</h3>
        <p className="text-xs text-gray-400 max-w-md mx-auto">
          Our team is available 24/7 to discuss your project requirements and answer any technical questions.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center space-x-2 bg-gradient-brand text-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-lg"
        >
          <MessageSquare size={14} />
          <span>Contact Technical Team</span>
        </Link>
      </div>

    </div>
  );
}
