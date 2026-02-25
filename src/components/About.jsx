import { motion } from 'framer-motion';
import { 
  Plane, 
  Shield, 
  Award, 
  Users, 
  Target,
  Lightbulb,
  GraduationCap,
  Globe,
  Ticket,
  ArrowRight
} from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Expected Participants' },
  { icon: Award, value: '5', label: 'Competition Events' },
  { icon: GraduationCap, value: '100+', label: 'Colleges' },
  { icon: Globe, value: '₹1L+', label: 'Prize Pool' },
];

const features = [
  {
    icon: Plane,
    title: 'Drone Competitions',
    description: 'Experience high-octane drone racing, precision payload delivery, and autonomous navigation challenges.',
  },
  {
    icon: Shield,
    title: 'Defense Simulations',
    description: 'Engage in simulated surveillance, reconnaissance, and tactical supply drop missions.',
  },
  {
    icon: Target,
    title: 'Real-World Skills',
    description: 'Develop practical engineering and aviation skills applicable to industry careers.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Showcase',
    description: 'Present cutting-edge aerospace research and engineering innovations.',
  },
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-space-100" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-electric/5 blur-[100px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-electric text-sm font-semibold uppercase tracking-wider">About the Event</span>
          <h2 className="section-heading mt-2">
            What is <span className="gradient-text">Xcelerate 2026</span>?
          </h2>
          <p className="section-subheading">
            A premier aerospace and aviation technology competition designed for engineering 
            students to showcase their skills in drone technology, aircraft design, and innovation.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&auto=format&fit=crop&q=80"
                alt="Drone flying at event"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-space via-transparent to-transparent" />
            </div>
            
            {/* Floating Card - REMOVED */}
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Empowering Future Aerospace Engineers
            </h3>
            <p className="text-steel mb-6 leading-relaxed">
              Xcelerate 2026 brings together the brightest engineering minds from across India 
              to compete in challenging aerospace competitions. From high-speed drone racing to 
              complex aircraft accident investigations, participants gain hands-on experience 
              with real-world aviation challenges.
            </p>
            <p className="text-steel mb-8 leading-relaxed">
              Whether you're passionate about UAV technology, aircraft design, or aerospace 
              innovation, Xcelerate 2026 offers a platform to showcase your skills, learn from 
              industry experts, and connect with like-minded enthusiasts.
            </p>

            {/* Feature List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 bg-electric/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-electric" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">{feature.title}</h4>
                    <p className="text-steel text-xs mt-1">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* About Institutions & Department */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="section-heading text-4xl mb-4">Hosted By</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-electric to-orange-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Acharya Institute */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 lg:col-span-1 bg-navy-800 border border-slate-border rounded-3xl p-8 hover:border-electric/50 transition-all hover:shadow-2xl hover:shadow-electric/10 group"
            >
              <h4 className="text-3xl font-display font-bold text-white mb-6 group-hover:text-electric transition-colors">
                Acharya Institutes
              </h4>
              <p className="text-steel text-lg leading-relaxed mb-6">
                Nestled on a vast 120-acre campus in Bangalore, Acharya Institutes is a premier educational hub offering 100+ programs across 50 academic streams. With top-notch facilities and a vibrant student community from around the globe, "The Acharya Experience" goes beyond academics to shape future leaders through innovation, cultural fusion, and industry collaborations.
              </p>
            </motion.div>

            {/* AIT - Now taking equal prominence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-2 lg:col-span-1 bg-navy-800 border border-slate-border rounded-3xl p-8 hover:border-electric/50 transition-all hover:shadow-2xl hover:shadow-electric/10 group"
            >
              <h4 className="text-2xl font-display font-bold text-white mb-6 group-hover:text-electric transition-colors">
                Acharya Institute of Technology
              </h4>
              <p className="text-steel text-lg leading-relaxed mb-6">
                Acharya Institute of Technology (AIT) is a cornerstone of technical education, known for its cutting-edge research and comprehensive engineering programs. We empower students with essential skills, fostering critical thinking and creativity to influence the future of technology and engineering.
              </p>
            </motion.div>

            {/* Aeronautical Department - Full Width Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 bg-gradient-to-br from-navy-800 to-navy-900 border border-slate-border rounded-3xl p-10 hover:border-electric/50 transition-all hover:shadow-2xl hover:shadow-electric/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-electric/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-electric/10 transition-colors" />
              
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="flex-1">
                  <h4 className="text-3xl font-display font-bold text-white mb-6 group-hover:text-electric transition-colors">
                    Department of Aeronautical Engineering
                  </h4>
                  <p className="text-steel text-lg leading-relaxed mb-6">
                    The Aeronautical Engineering Department at AIT is dedicated to excelling in aerospace education and research. Through specific capability enhancement programs and hands-on competitions like Xcelerate 2026, we nurture the next generation of aviation experts and drone technologists.
                  </p>
                  <p className="text-steel text-lg leading-relaxed">
                    With state-of-the-art laboratories, wind tunnels, and flight simulation facilities, we bridge the gap between theoretical knowledge and practical application.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* The Big O Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-black rounded-3xl border border-white/10 overflow-hidden"
          >
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-electric/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <span className="text-electric font-bold tracking-wider uppercase mb-4 block">Organized By</span>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                  The <span className="text-electric">Big O</span>
                </h3>
                <p className="text-xl text-steel leading-relaxed">
                  The Big O is Acharya's premier Tech Club, established in 2023. What started with just a handful of members 
                  has grown into a thriving community of over 200 passionate students committed to continuous learning 
                  and technological excellence.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="text-4xl font-bold text-white mb-2">700+</div>
                  <div className="text-electric font-medium">Registrations</div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="text-4xl font-bold text-white mb-2">200+</div>
                  <div className="text-electric font-medium">Active Members</div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="text-4xl font-bold text-white mb-2">30k+</div>
                  <div className="text-electric font-medium">Social Engagement</div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-steel max-w-3xl mx-auto mb-8">
                  We regularly host hackathons, workshops, and interactive sessions to help members 
                  strengthen their technical skills, explore emerging technologies, and build their 
                  professional networks.
                </p>
                <a 
                  href="https://www.instagram.com/thisisthebigo/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-electric text-white rounded-full font-semibold hover:bg-electric-light transition-all transform hover:scale-105"
                >
                  Follow Us on Instagram
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="card text-center group"
            >
              <div className="w-14 h-14 bg-electric/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-electric/20 transition-colors">
                <stat.icon className="w-7 h-7 text-electric" />
              </div>
              <p className="text-3xl font-display font-bold text-white mb-1">{stat.value}</p>
              <p className="text-steel text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

