import { motion } from 'framer-motion';
import { Ticket, Users, GraduationCap, CheckCircle2 } from 'lucide-react';

const Eligibility = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-space-100" />
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-alert/5 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-space-200 border border-slate-border rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />

          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 border border-electric/20 text-electric text-xs font-bold uppercase tracking-wider mb-6"
              >
                <Ticket className="w-3.5 h-3.5" />
                Who Can Participate?
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight"
              >
                Open to <span className="text-electric">All Students</span> Across India
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-steel text-lg mb-8 leading-relaxed"
              >
                Whether you're pursuing a diploma, undergraduate, or postgraduate degree, 
                Drone Habba invites you to showcase your innovation and engineering skills.
              </motion.p>

              <div className="space-y-4">
                {[
                  "Diploma Students (Polytechnic)",
                  "Undergraduate Students (BE/B.Tech)",
                  "Postgraduate Students (ME/M.Tech)",
                  "Ph.D. Scholars & Researchers"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-electric/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-electric" />
                    </div>
                    <span className="text-steel-light font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-electric via-purple-500 to-orange-alert rounded-2xl blur-xl opacity-20" />
              <div className="bg-space-100 border border-slate-border rounded-2xl p-8 relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-space-200 rounded-xl p-6 text-center border border-slate-border group hover:border-electric/50 transition-colors">
                    <div className="w-12 h-12 mx-auto bg-electric/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-6 h-6 text-electric" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">UG/PG</div>
                    <div className="text-xs text-steel uppercase tracking-wider">Degrees</div>
                  </div>
                  <div className="bg-space-200 rounded-xl p-6 text-center border border-slate-border group hover:border-orange-alert/50 transition-colors">
                    <div className="w-12 h-12 mx-auto bg-orange-alert/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Users className="w-6 h-6 text-orange-alert" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">Teams</div>
                    <div className="text-xs text-steel uppercase tracking-wider">3-6 Members</div>
                  </div>
                  <div className="col-span-2 bg-gradient-to-r from-electric/10 to-transparent rounded-xl p-6 flex items-center gap-4 border border-electric/20">
                    <div className="w-12 h-12 bg-electric rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-electric/20">
                      <Ticket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">Cross-College Teams</div>
                      <div className="text-steel text-sm">Students from different colleges can form a team</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
