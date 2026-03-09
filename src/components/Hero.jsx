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
  Target,
  ArrowRight
} from 'lucide-react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown to March 27, 2026
  useEffect(() => {
    const targetDate = new Date('2026-03-27T09:00:00').getTime();

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
    <div className="flex flex-col items-center flex-1 sm:flex-initial">
      <div className="relative bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm rounded-xl sm:rounded-2xl p-2.5 sm:p-5 w-full sm:min-w-[90px] group hover:border-white/20 transition-all duration-300">
        <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent" />
        <span className="relative block text-2xl sm:text-5xl font-display font-bold text-white text-center tabular-nums">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-[10px] sm:text-xs text-gray-500 mt-2.5 uppercase tracking-[0.2em] font-medium">{label}</span>
    </div>
  );

  /* Separator colon between countdown blocks */
  const CountdownSep = () => (
    <div className="flex flex-col items-center gap-2 pt-2 sm:pt-3">
      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
    </div>
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Layered Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#030303] via-[#0A0A0A] to-[#111111]" />
      <div className="absolute inset-0 topo-lines opacity-60" />

      {/* Radial Fog Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.04),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.015),transparent_60%)]" />

      {/* Breathing Glow */}
      <div className="absolute top-1/4 left-1/3 w-[900px] h-[500px] bg-white/[0.02] blur-[180px] rounded-full animate-breathe" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] bg-orange-alert/[0.02] blur-[120px] rounded-full animate-breathe animation-delay-200" />

      {/* Grid lines for depth */}
      <div className="absolute inset-0 grid-blueprint opacity-40" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 hidden lg:block">
        <div className="flex items-center gap-3 text-white/[0.08]">
          <div className="w-12 h-px bg-white/10" />
          <span className="text-[10px] font-mono tracking-widest uppercase">AXR-26</span>
        </div>
      </div>
      <div className="absolute top-8 right-8 hidden lg:block">
        <div className="flex items-center gap-3 text-white/[0.08]">
          <span className="text-[10px] font-mono tracking-widest">27.03.2026</span>
          <div className="w-12 h-px bg-white/10" />
        </div>
      </div>

      {/* Main Content — 2-col on lg */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 w-full">
        <div className="grid lg:grid-cols-[1fr,420px] xl:grid-cols-[1fr,500px] gap-12 lg:gap-8 items-center">
        <div className="text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm rounded-full px-5 py-2.5 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-alert opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-alert" />
            </span>
            <span className="text-sm font-medium text-gray-300">Registrations Open — March 27, 2026</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 tracking-tight"
          >
            <span className="block text-gray-400 text-xl sm:text-2xl md:text-4xl font-medium mb-2 tracking-normal">Welcome to</span>
            <span className="block">
              Aero<span className="relative inline-block">
                <span className="gradient-text">Xcelerate</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5Q50 1 100 5.5T199 5.5" stroke="url(#underline-grad)" strokeWidth="2" strokeLinecap="round"/>
                  <defs><linearGradient id="underline-grad" x1="0" y1="0" x2="200" y2="0"><stop stopColor="rgba(255,255,255,0.4)"/><stop offset="1" stopColor="rgba(255,255,255,0.05)"/></linearGradient></defs>
                </svg>
              </span>
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            India's premier student aerospace competition — Drone Flying, 
            Egg Parachute, Aircraft Investigation, Design & Poster Presentation.
          </motion.p>

          {/* Event Details — pill style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10"
          >
            {[
              { icon: Calendar, text: 'March 27, 2026' },
              { icon: MapPin, text: 'Bangalore, India' },
              { icon: Users, text: '5 Events' },
              { icon: Sparkles, text: '₹70K+ Prizes' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] rounded-full px-4 py-2 text-sm text-gray-300">
                <item.icon className="w-4 h-4 text-gray-500" />
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection('#register')}
              className="btn-orange text-lg px-10 py-4 flex items-center justify-center gap-2.5 rounded-xl"
            >
              <Rocket className="w-5 h-5" />
              Register Now
              <ArrowRight className="w-4 h-4 ml-1" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection('#events')}
              className="btn-secondary text-lg px-10 py-4 rounded-xl"
            >
              Explore Events
            </motion.button>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <p className="text-gray-500 text-xs mb-5 uppercase tracking-[0.25em] font-medium">Event Starts In</p>
            <div className="flex justify-center lg:justify-start items-start gap-1.5 sm:gap-3 w-full max-w-sm sm:max-w-none mx-auto lg:mx-0">
              <CountdownBlock value={timeLeft.days} label="Days" />
              <CountdownSep />
              <CountdownBlock value={timeLeft.hours} label="Hours" />
              <CountdownSep />
              <CountdownBlock value={timeLeft.minutes} label="Mins" />
              <CountdownSep />
              <CountdownBlock value={timeLeft.seconds} label="Secs" />
            </div>
          </motion.div>
        </div>

          {/* ─── Right: Animated Visual ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            {/* Outer glow */}
            <div className="absolute w-[420px] h-[420px] bg-white/[0.015] blur-[100px] rounded-full" />

            <div className="relative w-[380px] h-[380px] xl:w-[440px] xl:h-[440px]">
              {/* Orbit Ring 1 — slow */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute inset-0 rounded-full border border-white/[0.06]" />
                {/* Orbiting dot */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white/30 shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
              </motion.div>

              {/* Orbit Ring 2 — medium, offset */}
              <motion.div
                className="absolute inset-6 xl:inset-8"
                animate={{ rotate: -360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute inset-0 rounded-full border border-dashed border-white/[0.05]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-orange-alert/50 shadow-[0_0_12px_rgba(243,111,33,0.4)]" />
              </motion.div>

              {/* Orbit Ring 3 — fast, inner */}
              <motion.div
                className="absolute inset-14 xl:inset-16"
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute inset-0 rounded-full border border-white/[0.04]" />
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/20" />
              </motion.div>

              {/* Center Element — Drone wireframe graphic */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  {/* Drone body SVG */}
                  <svg width="160" height="160" viewBox="0 0 160 160" fill="none" className="xl:w-[190px] xl:h-[190px]">
                    {/* Center body */}
                    <rect x="60" y="60" width="40" height="40" rx="8" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
                    <rect x="68" y="68" width="24" height="24" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                    
                    {/* Arms */}
                    <line x1="60" y1="70" x2="25" y2="35" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
                    <line x1="100" y1="70" x2="135" y2="35" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
                    <line x1="60" y1="90" x2="25" y2="125" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
                    <line x1="100" y1="90" x2="135" y2="125" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
                    
                    {/* Rotors */}
                    <circle cx="25" cy="35" r="18" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 3" />
                    <circle cx="135" cy="35" r="18" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 3" />
                    <circle cx="25" cy="125" r="18" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 3" />
                    <circle cx="135" cy="125" r="18" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 3" />
                    
                    {/* Rotor centers */}
                    <circle cx="25" cy="35" r="3" fill="rgba(255,255,255,0.15)" />
                    <circle cx="135" cy="35" r="3" fill="rgba(255,255,255,0.15)" />
                    <circle cx="25" cy="125" r="3" fill="rgba(255,255,255,0.15)" />
                    <circle cx="135" cy="125" r="3" fill="rgba(255,255,255,0.15)" />

                    {/* Center indicator */}
                    <circle cx="80" cy="80" r="3" fill="rgba(243,111,33,0.6)" />
                    <circle cx="80" cy="80" r="6" stroke="rgba(243,111,33,0.2)" strokeWidth="1" />
                  </svg>

                  {/* Spinning rotor effect */}
                  <motion.div
                    className="absolute top-[10px] left-[3px] xl:top-[8px] xl:left-[0px]"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-9 h-9 xl:w-11 xl:h-11 rounded-full border border-white/[0.06] border-t-white/20" />
                  </motion.div>
                  <motion.div
                    className="absolute top-[10px] right-[3px] xl:top-[8px] xl:right-[0px]"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-9 h-9 xl:w-11 xl:h-11 rounded-full border border-white/[0.06] border-t-white/20" />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-[10px] left-[3px] xl:bottom-[8px] xl:left-[0px]"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-9 h-9 xl:w-11 xl:h-11 rounded-full border border-white/[0.06] border-t-white/20" />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-[10px] right-[3px] xl:bottom-[8px] xl:right-[0px]"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.3, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-9 h-9 xl:w-11 xl:h-11 rounded-full border border-white/[0.06] border-t-white/20" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Floating data labels */}
              <motion.div
                className="absolute top-6 right-0 xl:right-[-16px]"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm rounded-lg px-3 py-1.5 text-[10px] font-mono text-gray-500">
                  ALT <span className="text-white/60">120m</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-10 left-[-10px] xl:left-[-24px]"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm rounded-lg px-3 py-1.5 text-[10px] font-mono text-gray-500">
                  SPD <span className="text-white/60">45km/h</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-[40%] left-[-20px] xl:left-[-40px]"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm rounded-lg px-3 py-1.5 text-[10px] font-mono text-gray-500">
                  GPS <span className="text-green-400/60">LOCK</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center gap-2 text-white/20 hover:text-white/50 transition-colors"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;

