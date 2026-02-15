import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Plane, 
  Calendar, 
  MapPin, 
  Users, 
  ChevronDown,
  Sparkles,
  Rocket,
  Target
} from 'lucide-react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown to April 10, 2026
  useEffect(() => {
    const targetDate = new Date('2026-04-10T09:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const CountdownBlock = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <motion.div
        key={value}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-navy-800/80 backdrop-blur-sm border border-slate-border rounded-xl p-3 sm:p-4 min-w-[60px] sm:min-w-[80px]"
      >
        <span className="text-2xl sm:text-4xl font-display font-bold text-white">
          {String(value).padStart(2, '0')}
        </span>
      </motion.div>
      <span className="text-xs sm:text-sm text-steel mt-2 uppercase tracking-wider">{label}</span>
    </div>
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-glow-gradient opacity-50" />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 163, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 163, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating Drone Animation */}
      <motion.div
        className="absolute right-10 top-1/4 hidden lg:block"
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="relative">
          <Plane className="w-32 h-32 text-electric/30 transform -rotate-12" />
          <div className="absolute inset-0 blur-xl bg-electric/20" />
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute left-20 bottom-1/3 hidden lg:block"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Target className="w-16 h-16 text-cyan-glow/20" />
      </motion.div>
      
      <motion.div
        className="absolute right-1/4 bottom-1/4 hidden lg:block"
        animate={{ y: [0, -15, 0], rotate: [0, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles className="w-8 h-8 text-orange-alert/30" />
      </motion.div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="text-center lg:text-left max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-electric/10 border border-electric/30 rounded-full px-4 py-2 mb-6"
          >
            <Rocket className="w-4 h-4 text-electric" />
            <span className="text-sm font-medium text-electric">Aerospace & Aviation Event 2026</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6"
          >
            <span className="block">Welcome to</span>
            <span className="gradient-text">Drone Habba</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-steel max-w-2xl mx-auto lg:mx-0 mb-8"
          >
            India's Premier Student Aerospace Competition featuring Drone Racing, 
            Aircraft Investigation, Engineering Challenges & Innovation Showcases.
          </motion.p>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-10"
          >
            <div className="flex items-center gap-2 text-steel-light">
              <Calendar className="w-5 h-5 text-electric" />
              <span className="font-medium">April 10-12, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-steel-light">
              <MapPin className="w-5 h-5 text-electric" />
              <span className="font-medium">Bangalore, India</span>
            </div>
            <div className="flex items-center gap-2 text-steel-light">
              <Users className="w-5 h-5 text-electric" />
              <span className="font-medium">5 Events</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#register')}
              className="btn-orange text-lg px-8 py-4 flex items-center justify-center gap-2"
            >
              <Rocket className="w-5 h-5" />
              Register Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#events')}
              className="btn-secondary text-lg px-8 py-4"
            >
              Explore Events
            </motion.button>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-steel text-sm mb-4 uppercase tracking-wider">Event Starts In</p>
            <div className="flex justify-center lg:justify-start gap-3 sm:gap-4">
              <CountdownBlock value={timeLeft.days} label="Days" />
              <CountdownBlock value={timeLeft.hours} label="Hours" />
              <CountdownBlock value={timeLeft.minutes} label="Mins" />
              <CountdownBlock value={timeLeft.seconds} label="Secs" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center gap-2 text-steel hover:text-electric transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
