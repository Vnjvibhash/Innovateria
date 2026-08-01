import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock, MessageCircle, Globe } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Innovateria',
  description: 'Get in touch with Innovateria for software development, app engineering, web solutions, or digital marketing.',
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-brand-500 uppercase tracking-widest bg-brand-500/10 px-3.5 py-1.5 rounded-full border border-brand-500/20">
          Reach Out To Us
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Contact <span className="text-gradient-brand">Innovateria</span>
        </h1>
        <p className="text-sm text-gray-300 leading-relaxed">
          We would love to hear from you! Whether you have a new app project idea or need technical consultation, our engineering team is ready.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-card rounded-3xl p-6 border border-white/10 space-y-6">
            <h3 className="text-xl font-bold text-white border-b border-white/10 pb-3">Contact Details</h3>

            <div className="space-y-4 text-xs">
              <a href="tel:+917762974716" className="flex items-start space-x-4 text-gray-300 hover:text-brand-500 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500 shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <strong className="block text-white font-semibold mb-0.5">Phone Number</strong>
                  <span>+91 77629 74716</span>
                </div>
              </a>

              <a href="https://wa.me/917762974716" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-4 text-gray-300 hover:text-brand-500 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 shrink-0">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <strong className="block text-white font-semibold mb-0.5">WhatsApp Direct</strong>
                  <span>+91 77629 74716</span>
                </div>
              </a>

              <a href="mailto:info@innovateria.in" className="flex items-start space-x-4 text-gray-300 hover:text-brand-500 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500 shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <strong className="block text-white font-semibold mb-0.5">Email Address</strong>
                  <span>info@innovateria.in</span>
                </div>
              </a>

              <div className="flex items-start space-x-4 text-gray-300">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500 shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <strong className="block text-white font-semibold mb-0.5">Support Hours</strong>
                  <span>24/7 Technical Consultation Available</span>
                </div>
              </div>

              <div className="flex items-start space-x-4 text-gray-300">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <strong className="block text-white font-semibold mb-0.5">Development Hub</strong>
                  <span>Bangalore / Mysore / Punjab, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="glass-card rounded-3xl p-6 border border-white/10 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Connect Online</h4>
            <div className="flex flex-wrap gap-2 text-xs">
              <a href="https://github.com/VnjVibhash" target="_blank" rel="noopener noreferrer" className="px-3.5 py-2 rounded-xl glass-card hover:bg-white/10 text-gray-300 hover:text-white transition-colors">
                GitHub
              </a>
              <a href="https://facebook.com/Vivekajee" target="_blank" rel="noopener noreferrer" className="px-3.5 py-2 rounded-xl glass-card hover:bg-white/10 text-gray-300 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="https://twitter.com/Vnjvibhash" target="_blank" rel="noopener noreferrer" className="px-3.5 py-2 rounded-xl glass-card hover:bg-white/10 text-gray-300 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="https://linkedin.com/in/Vivekajee" target="_blank" rel="noopener noreferrer" className="px-3.5 py-2 rounded-xl glass-card hover:bg-white/10 text-gray-300 hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

      </div>

    </div>
  );
}
