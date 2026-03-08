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
  { icon: Globe, value: '₹70K+', label: 'Prize Pool' },
];

const features = [
  {
    icon: Plane,
    title: 'Drone Flying Competition',
    description: 'Build and fly autonomous drones with geofencing, waypoints, and precision hovering.',
  },
  {
    icon: Shield,
    title: 'Egg Parachute Challenge',
    description: 'Design and build a parachute system to protect an egg during a free-fall drop.',
  },
  {
    icon: Target,
    title: 'Aircraft Investigation',
    description: 'Analyze aircraft accident videos and investigate probable causes.',
  },
  {
    icon: Lightbulb,
    title: 'Aircraft Design & Sketching',
    description: 'Design aircraft configurations based on given engineering parameters.',
  },
  {
    icon: GraduationCap,
    title: 'Poster Presentation',
    description: 'Present research posters on aviation and aerospace technology topics.',
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
            What is <span className="gradient-text">AeroXcelerate 2026</span>?
          </h2>
          <p className="section-subheading">
            This event is organized by the Department of Aeronautical Engineering to provide a platform 
            for students to explore aviation, aerospace technologies, and engineering innovation. The competition 
            features multiple technical and creative challenges including drone design, aircraft investigation, 
            aircraft design challenges, engineering problem-solving activities, and technical poster presentations.
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
              AeroXcelerate 2026 brings together students from across India to compete in challenging 
              aerospace competitions. The event aims to encourage creativity, analytical thinking, teamwork, 
              and practical application of aerospace engineering concepts.
            </p>
            <p className="text-steel mb-8 leading-relaxed">
              Participants will have the opportunity to demonstrate their technical knowledge, innovative ideas, 
              and problem-solving skills while engaging with fellow aviation enthusiasts. From autonomous drone 
              flying to poster presentations, there's something for every aspiring engineer.
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
                Acharya Institute of Technology
              </h4>
              <p className="text-steel text-lg leading-relaxed mb-6">
                Acharya Institute of Technology is a leading engineering institution located in Bengaluru, Karnataka, known for its strong academic environment and focus on innovation and research. Established in 2000, the institute is approved by AICTE and affiliated with Visvesvaraya Technological University. The institution offers a wide range of undergraduate and postgraduate programs in engineering, management, and technology. With modern infrastructure, digital classrooms, industry collaborations, and research-driven education, Acharya Institute of Technology aims to provide students with the skills and knowledge required to excel in modern engineering and technological fields.
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
                Acharya Institutes
              </h4>
              <p className="text-steel text-lg leading-relaxed mb-6">
                Nestled on a vast 120-acre campus in Bangalore, Acharya Institutes is a premier educational hub offering 100+ programs across 50 academic streams. With top-notch facilities and a vibrant student community from around the globe, the Acharya Experience goes beyond academics to shape future leaders through innovation, cultural fusion, and industry collaborations.
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
                    The Department of Aeronautical Engineering at Acharya Institute of Technology focuses on the design, analysis, and development of aircraft and aerospace systems. The program covers major areas such as aerodynamics, aircraft structures, propulsion systems, avionics, and flight mechanics. The department provides state-of-the-art laboratories, project-based learning opportunities, and research activities that allow students to gain practical exposure to aerospace technologies.
                  </p>
                  <p className="text-steel text-lg leading-relaxed">
                    Through research initiatives, technical competitions, and industry interaction, the department aims to prepare students for careers in aviation, aerospace research, and advanced engineering sectors.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* The Big O Section - Compact */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-space-200 rounded-2xl border border-slate-border overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-electric/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10 p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1 text-center md:text-left">
                  <span className="text-electric font-bold tracking-wider uppercase text-xs mb-2 block">Organized By</span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                    The <span className="text-electric">Big O</span>
                  </h3>
                  <p className="text-steel leading-relaxed text-sm">
                    The Big O is Acharya's premier Tech Club, established in 2023. What started with just a handful of members 
                    has grown into a thriving community of over 200 passionate students committed to continuous learning 
                    and technological excellence.
                  </p>
                </div>
                <a 
                  href="https://www.instagram.com/thisisthebigo/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-electric text-white rounded-full font-semibold text-sm hover:bg-electric-light transition-all transform hover:scale-105 flex-shrink-0"
                >
                  Follow on Instagram
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

