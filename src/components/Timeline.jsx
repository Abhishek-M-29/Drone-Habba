import { motion } from 'framer-motion';
import { 
  Calendar, 
  FileText, 
  CheckCircle, 
  Clock, 
  Video, 
  Flag, 
  Trophy, 
  Award 
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

const TimelineItem = ({ item, index, isLast }) => {
  const Icon = iconMap[item.icon] || Calendar;
  const isLeft = index % 2 === 0;

  return (
    <div className={`flex items-start gap-4 md:gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}
      >
        <div className={`card ${isLeft ? 'md:ml-auto' : 'md:mr-auto'} max-w-md`}>
          <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
            <div className="w-10 h-10 rounded-lg bg-electric/20 flex items-center justify-center">
              <Icon className="w-5 h-5 text-electric" />
            </div>
            <span className="text-electric text-sm font-semibold">{item.date}</span>
          </div>
          <h3 className="text-lg font-display font-bold text-white mb-2">{item.title}</h3>
          <p className="text-steel text-sm">{item.description}</p>
          
          {/* Event Details (if available) */}
          {item.events && (
            <div className={`mt-4 pt-4 border-t border-slate-border ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
              <ul className="space-y-2">
                {item.events.map((event, i) => (
                  <li key={i} className="text-steel-light text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-electric rounded-full flex-shrink-0" />
                    {event}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.div>

      {/* Timeline Line & Dot (Desktop) */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="w-4 h-4 rounded-full bg-electric shadow-glow z-10"
        />
        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            className="w-0.5 bg-gradient-to-b from-electric to-slate-border flex-1 min-h-[100px]"
          />
        )}
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block flex-1" />
    </div>
  );
};

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-space-100" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-electric/5 blur-[150px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-electric text-sm font-semibold uppercase tracking-wider">Schedule</span>
          <h2 className="section-heading mt-2">
            Event <span className="gradient-text">Timeline</span>
          </h2>
          <p className="section-subheading">
            Mark your calendars! Here's everything you need to know about important dates and the event schedule.
          </p>
        </motion.div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-6">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-slate-border"
            >
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-electric shadow-glow" />
              <div className="card">
                <span className="text-electric text-sm font-semibold">{item.date}</span>
                <h3 className="text-lg font-display font-bold text-white mt-1 mb-2">{item.title}</h3>
                <p className="text-steel text-sm">{item.description}</p>
                {item.events && (
                  <ul className="mt-3 pt-3 border-t border-slate-border space-y-1.5">
                    {item.events.map((event, i) => (
                      <li key={i} className="text-steel-light text-xs flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-electric rounded-full" />
                        {event}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          {timelineData.map((item, index) => (
            <TimelineItem 
              key={item.id} 
              item={item} 
              index={index} 
              isLast={index === timelineData.length - 1}
            />
          ))}
        </div>

        {/* Download Calendar CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-steel mb-4">Don't miss any important dates!</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Add to Calendar
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
