import { motion } from 'framer-motion';
import { 
  Plane, 
  Shield, 
  Award, 
  Users, 
  Target,
  Lightbulb,
  GraduationCap,
  Globe
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
            What is <span className="gradient-text">Drone Habba</span>?
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
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-navy-800 border border-slate-border rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-electric/20 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-electric" />
                </div>
                <div>
                  <p className="text-white font-semibold">Open to All</p>
                  <p className="text-steel text-sm">Diploma / UG / PG Students</p>
                </div>
              </div>
            </motion.div>
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
              Drone Habba 2026 brings together the brightest engineering minds from across India 
              to compete in challenging aerospace competitions. From high-speed drone racing to 
              complex aircraft accident investigations, participants gain hands-on experience 
              with real-world aviation challenges.
            </p>
            <p className="text-steel mb-8 leading-relaxed">
              Whether you're passionate about UAV technology, aircraft design, or aerospace 
              innovation, Drone Habba offers a platform to showcase your skills, learn from 
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
