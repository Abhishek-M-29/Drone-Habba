import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { 
  Award, 
  Users, 
  Target,
  Lightbulb,
  GraduationCap,
  Globe,
  ArrowRight,
  Building2,
  Cpu,
  Rocket,
  Zap,
  Trophy,
} from 'lucide-react';

const stats = [
  { icon: Users, value: 500, suffix: '+', label: 'Participants' },
  { icon: Award, value: 5, suffix: '', label: 'Events' },
  { icon: GraduationCap, value: 100, suffix: '+', label: 'Colleges' },
  { icon: Trophy, value: 70, prefix: '₹', suffix: 'K+', label: 'Prize Pool' },
];

const highlights = [
  { icon: Zap, text: 'Hands-on Challenges' },
  { icon: Trophy, text: 'Cash Prizes' },
  { icon: Users, text: 'Team-based Events' },
  { icon: GraduationCap, text: 'Expert Judges' },
];

/* Animated counter hook */
function useCounter(target, inView, duration = 1.6) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration * 60);
    const id = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(id); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(id);
  }, [inView, target, duration]);
  return count;
}

/* Bento stat card — supports large hero variant */
const BentoStatCard = ({ stat, index, className = '', large = false }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const count = useCounter(stat.value, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative group ${className}`}
    >
      <div className="relative bg-white/[0.03] border border-white/[0.06] rounded-2xl hover:border-white/15 transition-all duration-300 h-full overflow-hidden">
        {/* Top glow line */}
        <div className="absolute top-0 inset-x-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {/* Watermark */}
        <span className={`absolute -top-4 -right-2 font-display font-bold text-white/[0.02] select-none leading-none group-hover:text-white/[0.04] transition-colors ${large ? 'text-[140px]' : 'text-[80px]'}`}>
          {index + 1}
        </span>

        <div className={`relative flex flex-col items-center justify-center h-full ${large ? 'p-8 sm:p-12' : 'p-6 sm:p-8'}`}>
          <div className={`bg-white/[0.06] rounded-xl flex items-center justify-center group-hover:bg-white/[0.1] transition-colors ${large ? 'w-16 h-16 mb-6' : 'w-12 h-12 mb-5'}`}>
            <stat.icon className={`text-gray-400 group-hover:text-white transition-colors ${large ? 'w-8 h-8' : 'w-6 h-6'}`} />
          </div>
          <p className={`font-display font-bold text-white mb-1 tabular-nums ${large ? 'text-5xl sm:text-7xl' : 'text-3xl sm:text-5xl'}`}>
            {stat.prefix || ''}{count}{stat.suffix}
          </p>
          <p className={`text-gray-500 ${large ? 'text-base mt-2' : 'text-sm'}`}>{stat.label}</p>
        </div>
      </div>
    </motion.div>
  );
};

/* Bento info card */
const BentoInfoCard = ({ icon: Icon, title, subtitle, delay = 0.4, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`relative group ${className}`}
  >
    <div className="relative bg-white/[0.03] border border-white/[0.06] rounded-2xl hover:border-white/15 transition-all duration-300 h-full overflow-hidden flex flex-col items-center justify-center text-center p-6">
      <div className="absolute top-0 inset-x-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="w-10 h-10 bg-white/[0.06] rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/[0.1] transition-colors">
        <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
      </div>
      <p className="text-xl font-display font-bold text-white mb-1">{title}</p>
      <p className="text-gray-500 text-xs uppercase tracking-wider">{subtitle}</p>
    </div>
  </motion.div>
);

/* Parallax layered background */
const ParallaxBackground = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Hexagon wireframe */}
      <motion.div style={{ y: y1, rotate: rotate1 }} className="absolute top-[15%] left-[8%] w-32 h-32 opacity-[0.04]">
        <svg viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="0.5">
          <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" />
          <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" />
        </svg>
      </motion.div>

      {/* Concentric circles — radar style */}
      <motion.div style={{ y: y2, rotate: rotate2 }} className="absolute top-[40%] right-[5%] w-48 h-48 opacity-[0.03]">
        <svg viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="0.4">
          <circle cx="50" cy="50" r="45" />
          <circle cx="50" cy="50" r="30" />
          <circle cx="50" cy="50" r="15" />
          <line x1="5" y1="50" x2="95" y2="50" />
          <line x1="50" y1="5" x2="50" y2="95" />
        </svg>
      </motion.div>

      {/* Grid dots */}
      <motion.div style={{ y: y3 }} className="absolute top-[60%] left-[20%] w-64 h-64 opacity-[0.03]">
        <svg viewBox="0 0 200 200" fill="white">
          {Array.from({ length: 8 }).map((_, row) =>
            Array.from({ length: 8 }).map((_, col) => (
              <circle key={`${row}-${col}`} cx={col * 28 + 10} cy={row * 28 + 10} r="1.5" />
            ))
          )}
        </svg>
      </motion.div>

      {/* Rotated squares — diamond */}
      <motion.div style={{ y: y2, rotate: rotate1 }} className="absolute top-[75%] left-[65%] w-24 h-24 opacity-[0.04]">
        <svg viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="0.6">
          <rect x="15" y="15" width="70" height="70" transform="rotate(45 50 50)" />
          <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" />
        </svg>
      </motion.div>

      {/* Triangle */}
      <motion.div style={{ y: y1 }} className="absolute top-[25%] right-[20%] w-20 h-20 opacity-[0.03]">
        <svg viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="0.5">
          <polygon points="50,10 90,85 10,85" />
        </svg>
      </motion.div>
    </div>
  );
};

/* Section divider component */
const SectionDivider = ({ icon: Icon }) => (
  <div className="flex items-center justify-center gap-4 my-6">
    <div className="flex-1 max-w-[120px] h-px bg-gradient-to-r from-transparent to-white/10" />
    <div className="w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center">
      <Icon className="w-3.5 h-3.5 text-gray-600" />
    </div>
    <div className="flex-1 max-w-[120px] h-px bg-gradient-to-l from-transparent to-white/10" />
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-36 relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-space-100" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-white/[0.025] blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-white/[0.015] blur-[120px] rounded-full" />
      {/* Topo lines, faint for texture */}
      <div className="absolute inset-0 topo-lines opacity-30" />
      <ParallaxBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ─── Section Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 relative"
        >
          {/* Large watermark text */}
          <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-[clamp(40px,12vw,160px)] font-display font-bold text-white/[0.015] select-none pointer-events-none leading-none">
            AERO
          </span>
          <span className="inline-flex items-center gap-2 text-gray-500 text-xs font-semibold uppercase tracking-[0.25em] mb-4 relative">
            <span className="w-8 h-px bg-gray-600" />About the Event<span className="w-8 h-px bg-gray-600" />
          </span>
          <h2 className="section-heading mt-2 !text-3xl sm:!text-5xl md:!text-6xl relative">
            What is <span className="text-white">AeroXcelerate</span>?
          </h2>
          <p className="section-subheading max-w-3xl mx-auto mt-5 text-gray-400/80 leading-relaxed relative">
            Organized by the Department of Aeronautical Engineering, AeroXcelerate provides a platform 
            for students to explore aviation, aerospace technologies, and engineering innovation through 
            five technical and creative competition tracks.
          </p>

          {/* Highlight pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mt-8 relative"
          >
            {highlights.map((h) => (
              <span key={h.text} className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-2 text-xs text-gray-400">
                <h.icon className="w-3.5 h-3.5 text-gray-500" />
                {h.text}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* ─── About Content ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mb-16"
        >
          {/* Outer decorative frame */}
          <div className="relative bg-gradient-to-b from-white/[0.03] via-white/[0.015] to-transparent border border-white/[0.06] rounded-3xl p-5 sm:p-12 lg:p-16 overflow-hidden">
            {/* Corner HUD brackets */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-white/[0.12] rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-white/[0.12] rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-white/[0.12] rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-white/[0.12] rounded-br-lg" />

            {/* Animated scan line */}
            <motion.div
              className="absolute left-0 right-0 h-px pointer-events-none"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }}
              animate={{ top: ['0%', '100%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            />

            {/* Top-right HUD label */}
            <div className="absolute top-6 right-14 text-[9px] font-mono text-white/15 tracking-widest hidden sm:block">
              AXR-26 · MISSION BRIEF
            </div>

            <div className="text-center max-w-3xl mx-auto mb-12">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Empowering Future <span className="text-gray-400">Aerospace Engineers</span>
              </h3>
              <p className="text-gray-400/80 leading-relaxed max-w-2xl mx-auto text-base sm:text-lg">
                AeroXcelerate 2026 brings together students from across India to compete in challenging 
                aerospace competitions — encouraging creativity, analytical thinking, teamwork, 
                and practical application of engineering concepts.
              </p>
            </div>

            {/* Gradient divider */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="flex-1 max-w-[200px] h-px bg-gradient-to-r from-transparent to-white/10" />
              <div className="w-2 h-2 rounded-full bg-white/10" />
              <div className="flex-1 max-w-[200px] h-px bg-gradient-to-l from-transparent to-white/10" />
            </div>

            {/* Value proposition blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  icon: Target,
                  title: 'Compete',
                  desc: 'Five rigorous competition tracks testing drone flight, design thinking, investigation skills, and research presentation.',
                },
                {
                  icon: Lightbulb,
                  title: 'Innovate',
                  desc: 'Push boundaries with hands-on challenges that bridge classroom theory and real-world aerospace engineering.',
                },
                {
                  icon: Users,
                  title: 'Connect',
                  desc: 'Network with 500+ students from 100+ colleges, guided by expert judges and industry mentors.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 * i }}
                  className="group text-center"
                >
                  <div className="w-14 h-14 bg-white/[0.04] border border-white/[0.06] rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-white/[0.08] group-hover:border-white/[0.12] transition-all duration-300">
                    <item.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <SectionDivider icon={Award} />

        {/* ─── Bento Stats Grid ─── */}
        <div className="mb-16 relative">
          <div className="absolute inset-x-0 inset-y-[-40px] bg-gradient-to-r from-transparent via-white/[0.01] to-transparent rounded-3xl" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-10 relative"
          >
            <span className="text-gray-600 text-[10px] font-semibold uppercase tracking-[0.3em]">By the Numbers</span>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 relative auto-rows-[minmax(130px,auto)] sm:auto-rows-[minmax(160px,auto)]">
            {/* Hero card — Participants */}
            <BentoStatCard stat={stats[0]} index={0} className="col-span-2 row-span-2" large />
            {/* Events */}
            <BentoStatCard stat={stats[1]} index={1} />
            {/* Colleges */}
            <BentoStatCard stat={stats[2]} index={2} />
            {/* Prize Pool */}
            <BentoStatCard stat={stats[3]} index={3} />
            {/* Launch Date */}
            <BentoInfoCard icon={Rocket} title="March 2026" subtitle="Launch Date" delay={0.5} />
          </div>
        </div>

        <SectionDivider icon={Building2} />

        {/* ─── Hosted By ─── */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 text-gray-500 text-xs font-semibold uppercase tracking-[0.25em] mb-4">
              <span className="w-8 h-px bg-gray-600" />Hosted By<span className="w-8 h-px bg-gray-600" />
            </span>
            <h3 className="section-heading !text-3xl sm:!text-4xl md:!text-5xl mb-3">Hosted By</h3>
            <div className="w-20 h-0.5 bg-gradient-to-r from-gray-600 via-white/30 to-gray-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-8">
            {/* Acharya Institute of Technology */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-7 sm:p-8 hover:border-white/15 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/[0.02] rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-11 h-11 bg-white/[0.06] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.1] transition-colors">
                    <Building2 className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold text-white group-hover:text-gray-100 transition-colors">Acharya Institute of Technology</h4>
                    <p className="text-gray-500 text-xs mt-1">Est. 2000 · Bengaluru, Karnataka</p>
                  </div>
                </div>
                <p className="text-gray-400/80 text-sm leading-relaxed">
                  A leading engineering institution known for its strong academic environment and focus on innovation. Approved by AICTE, affiliated with VTU, offering a wide range of UG & PG programs with modern infrastructure, industry collaborations, and research-driven education.
                </p>
              </div>
            </motion.div>

            {/* Department of Aeronautical Engineering */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-7 sm:p-8 hover:border-white/15 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/[0.02] rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute -bottom-6 -right-3 text-[90px] font-display font-bold text-white/[0.015] select-none pointer-events-none leading-none">AERO</span>
              <div className="relative">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-11 h-11 bg-white/[0.06] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.1] transition-colors">
                    <Rocket className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold text-white group-hover:text-gray-100 transition-colors">Department of Aeronautical Engineering</h4>
                    <p className="text-gray-500 text-xs mt-1">Acharya Institute of Technology</p>
                  </div>
                </div>
                <p className="text-gray-400/80 text-sm leading-relaxed mb-3">
                  Focused on the design, analysis, and development of aircraft and aerospace systems. The program covers aerodynamics, aircraft structures, propulsion systems, avionics, and flight mechanics with state-of-the-art laboratories and project-based learning.
                </p>
                <p className="text-gray-400/80 text-sm leading-relaxed">
                  Through research initiatives, technical competitions, and industry interaction, the department prepares students for careers in aviation, aerospace research, and advanced engineering sectors.
                </p>
              </div>
            </motion.div>
          </div>

          {/* ─── The Big O ─── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-white/[0.02] rounded-2xl border border-white/[0.06] overflow-hidden hover:border-white/15 transition-all duration-300 group max-w-3xl mx-auto"
          >
            <div className="absolute top-0 right-0 w-[250px] h-[180px] bg-white/[0.025] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 group-hover:bg-white/[0.04] transition-colors" />

            <div className="relative z-10 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
                    <div className="w-9 h-9 bg-white/[0.06] rounded-xl flex items-center justify-center">
                      <Cpu className="w-4 h-4 text-gray-400" />
                    </div>
                    <span className="text-gray-500 text-xs font-semibold uppercase tracking-[0.2em]">Organized By</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                    The <span className="text-gray-300">Big O</span>
                  </h3>
                  <p className="text-gray-400/80 leading-relaxed text-sm max-w-xl">
                    Acharya's premier Tech Club, established in 2023. What started with a handful of members 
                    has grown into a thriving community of 200+ passionate students committed to continuous learning 
                    and technological excellence.
                  </p>
                </div>
                <a 
                  href="https://thebigo.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-white text-black rounded-full font-semibold text-sm hover:bg-gray-200 transition-all transform hover:scale-105 flex-shrink-0"
                >
                  Visit Us
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

