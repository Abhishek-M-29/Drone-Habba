import { motion } from 'framer-motion';
import { 
  Calendar, 
  FileText, 
  CheckCircle, 
  Clock, 
  Video, 
  Flag, 
  Trophy, 
  Award,
  ArrowRight,
  Plane
} from 'lucide-react';
import { timelineData } from '../data/timeline';

const iconMap = {
  calendar: Calendar,
  file: FileText,
  check: CheckCircle,
  clock: Clock,
  video: Video,
  flag: Flag,
  trophy: Trophy,
  award: Award,
};

const PhaseCard = ({ item, index, total }) => {
  const Icon = iconMap[item.icon] || Calendar;

  return (
    <div className="flex flex-col items-center flex-1 relative">
      {/* Connector line (not on first) */}
      {index > 0 && (
        <div className="absolute top-8 right-1/2 w-full h-0.5 bg-gradient-to-r from-gray-400/60 to-gray-700/20 -z-10 hidden lg:block" />
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        className={`w-full rounded-2xl border p-6 transition-all duration-300 ${
          item.highlight
            ? 'bg-gradient-to-br from-white/5 to-gray-500/3 border-gray-500/40 shadow-glow'
            : 'bg-space-200 border-slate-border hover:border-gray-600'
        }`}
      >
        {/* Phase badge + Icon */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
            item.highlight ? 'bg-white/15' : 'bg-white/10'
          }`}>
            <Icon className={`w-6 h-6 ${item.highlight ? 'text-white' : 'text-gray-300'}`} />
          </div>
          <div>
            <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">{item.phase}</span>
            <h3 className="text-lg font-display font-bold text-white">{item.title}</h3>
          </div>
        </div>

        <p className="text-steel text-sm leading-relaxed">{item.description}</p>

        {/* Sub-events list */}
        {item.events && (
          <div className="mt-4 pt-4 border-t border-slate-border">
            <p className="text-white text-xs font-semibold uppercase tracking-wider mb-3">Concurrent Events</p>
            <ul className="space-y-2">
              {item.events.map((event, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <Plane className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                  <span className="text-steel-light">{event}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </div>
  );
};

const MobilePhaseCard = ({ item, index, isLast }) => {
  const Icon = iconMap[item.icon] || Calendar;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-10"
    >
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-[15px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-gray-400/60 to-slate-border" />
      )}

      {/* Dot */}
      <div className={`absolute left-0 top-3 w-8 h-8 rounded-full flex items-center justify-center z-10 ${
        item.highlight ? 'bg-white shadow-glow' : 'bg-space-200 border-2 border-gray-500/50'
      }`}>
        <Icon className={`w-4 h-4 ${item.highlight ? 'text-black' : 'text-gray-300'}`} />
      </div>

      <div className={`rounded-xl border p-5 mb-6 ${
        item.highlight
          ? 'bg-gradient-to-br from-white/5 to-gray-500/3 border-gray-500/40'
          : 'bg-space-200 border-slate-border'
      }`}>
        <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">{item.phase}</span>
        <h3 className="text-lg font-display font-bold text-white mt-1 mb-2">{item.title}</h3>
        <p className="text-steel text-sm">{item.description}</p>

        {item.events && (
          <div className="mt-3 pt-3 border-t border-slate-border">
            <ul className="space-y-1.5">
              {item.events.map((event, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <Plane className="w-3 h-3 text-gray-400 flex-shrink-0" />
                  <span className="text-steel-light">{event}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-space-100" />
      <div className="absolute inset-0 topo-lines" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-white/[0.03] blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/[0.02] blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Schedule</span>
          <h2 className="section-heading mt-2">
            Event <span className="text-white">Day Flow</span>
          </h2>
          <p className="section-subheading">
            Here's how the day unfolds — all competitions run concurrently across different venues!
          </p>
        </motion.div>

        {/* Desktop: Horizontal Phase Flow */}
        <div className="hidden lg:flex gap-6">
          {timelineData.map((item, index) => (
            <PhaseCard
              key={item.id}
              item={item}
              index={index}
              total={timelineData.length}
            />
          ))}
        </div>

        {/* Horizontal flow arrows (desktop only) */}
        <div className="hidden lg:flex justify-around mt-6 px-16">
          {timelineData.slice(0, -1).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.15 }}
              className="text-gray-500/40"
            >
              <ArrowRight className="w-6 h-6" />
            </motion.div>
          ))}
        </div>

        {/* Mobile: Vertical Stacked */}
        <div className="lg:hidden">
          {timelineData.map((item, index) => (
            <MobilePhaseCard
              key={item.id}
              item={item}
              index={index}
              isLast={index === timelineData.length - 1}
            />
          ))}
        </div>

        {/* Info Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 bg-space-200 border border-slate-border rounded-full px-6 py-3">
            <Calendar className="w-4 h-4 text-gray-300" />
            <span className="text-steel text-sm">March 27, 2026 &bull; Acharya Institute of Technology, Bangalore</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
