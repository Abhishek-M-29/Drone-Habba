import { motion } from 'framer-motion';
import { 
  Plane, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowUp,
  Heart
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Register', href: '#register' },
  ];

  const eventLinks = [
    { name: 'Drone Competition', href: '#events' },
    { name: 'Accident Investigation', href: '#events' },
    { name: 'Poster Presentation', href: '#events' },
    { name: 'Egg Parachute', href: '#events' },
    { name: 'Aircraft Design', href: '#events' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  ];

  return (
    <footer id="contact" className="bg-navy-900 border-t border-slate-border relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-electric/5 blur-[100px] rounded-full" />

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-electric rounded-lg flex items-center justify-center shadow-glow">
                <Plane className="w-6 h-6 text-white transform -rotate-45" />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white">
                  Drone <span className="text-electric">Habba</span>
                </span>
                <span className="text-xs text-steel block">2026</span>
              </div>
            </a>
            <p className="text-steel text-sm leading-relaxed mb-6">
              India's premier aerospace and aviation technology competition for engineering students. 
              Showcasing innovation in drone technology, aircraft design, and aerospace research.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-slate-card border border-slate-border rounded-lg flex items-center justify-center text-steel hover:text-electric hover:border-electric/50 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-steel hover:text-electric transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Events */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Events</h3>
            <ul className="space-y-3">
              {eventLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-steel hover:text-electric transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:dronehabba@college.edu"
                  className="flex items-start gap-3 text-steel hover:text-electric transition-colors text-sm group"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:text-electric" />
                  <span>dronehabba@college.edu</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+919876543210"
                  className="flex items-start gap-3 text-steel hover:text-electric transition-colors text-sm group"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:text-electric" />
                  <span>+91 98765 43210</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-steel text-sm">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>
                    College of Engineering<br />
                    Aerospace Department<br />
                    Bangalore, Karnataka 560001
                  </span>
                </div>
              </li>
            </ul>

            {/* WhatsApp Quick Contact */}
            <motion.a
              href="https://wa.me/919876543210?text=Hi%2C%20I%27m%20interested%20in%20Drone%20Habba%202026"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors text-sm w-full justify-center"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-slate-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-steel text-sm text-center sm:text-left">
              © 2026 Drone Habba. Credits to <span className="text-electric">The Big O club</span> of Acharya Institute of Technology.
            </p>
            <div className="flex items-center gap-6 text-sm text-steel">
              <a href="#" className="hover:text-electric transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-electric transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 right-6 w-12 h-12 bg-electric rounded-full flex items-center justify-center shadow-glow hover:shadow-glow-lg transition-all z-40"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </motion.button>
    </footer>
  );
};

export default Footer;
