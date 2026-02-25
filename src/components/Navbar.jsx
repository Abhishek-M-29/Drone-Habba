import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Plane, ChevronDown } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Events', href: '#events' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-navy-900/95 backdrop-blur-md shadow-lg border-b border-slate-border/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-electric rounded-lg flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-all">
                <Plane className="w-6 h-6 text-white transform -rotate-45" />
              </div>
              <div className="absolute -inset-1 bg-electric/20 rounded-lg blur-sm group-hover:bg-electric/30 transition-all -z-10" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl text-white">
                Xcelerate <span className="text-electric">2026</span>
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  activeSection === link.href.slice(1)
                    ? 'text-electric'
                    : 'text-steel-light hover:text-white'
                }`}
              >
                {link.name}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-electric/10 rounded-lg -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="#register"
              onClick={(e) => scrollToSection(e, '#register')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-sm"
            >
              Register Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-card border border-slate-border"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-steel-light" />
            ) : (
              <Menu className="w-6 h-6 text-steel-light" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-navy-900/98 backdrop-blur-md border-b border-slate-border"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'bg-electric/10 text-electric'
                      : 'text-steel-light hover:bg-slate-card hover:text-white'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#register"
                onClick={(e) => scrollToSection(e, '#register')}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="block btn-orange text-center mt-4"
              >
                Register Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
