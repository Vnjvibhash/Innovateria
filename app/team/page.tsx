import { Github, Twitter, Facebook, Instagram, Linkedin, Phone } from 'lucide-react';

export const metadata = {
  title: 'Our Team | Innovateria',
  description: 'Meet the team behind Innovateria software development solutions.',
};

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Vivek Kumar',
      role: 'CEO & Founder',
      phone: '+91 7762 9747 16',
      image: '/assets/img/team/vivekajee.png',
      socials: {
        github: 'https://github.com/VnjVibhash',
        twitter: 'https://twitter.com/Vnjvibhash',
        facebook: 'https://facebook.com/Vivekajee',
        instagram: 'https://instagram.com/Vivekajee',
        linkedin: 'https://linkedin.com/in/Vivekajee'
      }
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-brand-500 uppercase tracking-widest bg-brand-500/10 px-3.5 py-1.5 rounded-full border border-brand-500/20">
          Our Leadership & Developers
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Meet The <span className="text-gradient-brand">Innovateria Team</span>
        </h1>
        <p className="text-sm text-gray-300 leading-relaxed">
          We provide high quality software development solutions that help businesses achieve new heights in performance and digital authority.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="glass-card glass-card-hover rounded-3xl p-6 border border-white/10 text-center space-y-4 relative overflow-hidden group">
            <div className="absolute top-4 right-4 bg-gradient-brand text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full shadow-lg">
              {member.role}
            </div>

            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-brand-500/40 p-1 bg-[#131A29]">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-brand-500 transition-colors">{member.name}</h3>
              <p className="text-xs text-brand-500 font-semibold mt-1">{member.role}</p>
              <p className="text-xs text-gray-400 mt-2 flex items-center justify-center space-x-1">
                <Phone size={12} />
                <span>{member.phone}</span>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-3 pt-2">
              {member.socials.github && (
                <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg glass-card hover:text-brand-500 text-gray-300 transition-colors">
                  <Github size={16} />
                </a>
              )}
              {member.socials.twitter && (
                <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg glass-card hover:text-brand-500 text-gray-300 transition-colors">
                  <Twitter size={16} />
                </a>
              )}
              {member.socials.facebook && (
                <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg glass-card hover:text-brand-500 text-gray-300 transition-colors">
                  <Facebook size={16} />
                </a>
              )}
              {member.socials.instagram && (
                <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg glass-card hover:text-brand-500 text-gray-300 transition-colors">
                  <Instagram size={16} />
                </a>
              )}
              {member.socials.linkedin && (
                <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg glass-card hover:text-brand-500 text-gray-300 transition-colors">
                  <Linkedin size={16} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
