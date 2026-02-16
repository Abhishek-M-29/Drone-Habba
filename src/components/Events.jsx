import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Users, Clock, Award, ChevronRight, X } from 'lucide-react';
import { events } from '../data/events';

const EventCard = ({ event, onClick }) => {
  const Icon = event.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="card group cursor-pointer overflow-hidden"
      onClick={() => onClick(event)}
    >
      {/* Image */}
      <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-card via-transparent to-transparent" />
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${event.color} text-white text-xs font-semibold`}>
          Event {event.id}
        </div>
      </div>

      {/* Content */}
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${event.color} flex items-center justify-center flex-shrink-0`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-display font-bold text-white mb-1 group-hover:text-electric transition-colors">
            {event.title}
          </h3>
          <p className="text-electric text-sm font-medium mb-2">{event.tagline}</p>
        </div>
      </div>

      <p className="text-steel text-sm mt-4 line-clamp-2">{event.description}</p>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-slate-border">
        <div className="flex items-center gap-1.5 text-xs text-steel">
          <Users className="w-4 h-4" />
          <span>{event.teamSize}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-steel">
          <Award className="w-4 h-4" />
          <span>{event.awards?.length || 3} Awards</span>
        </div>
      </div>

      {/* View Details */}
      <div className="flex items-center gap-2 mt-4 text-electric text-sm font-medium group-hover:gap-3 transition-all">
        <span>View Details</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </motion.div>
  );
};

const EventModal = ({ event, onClose }) => {
  if (!event) return null;
  const Icon = event.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-space/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-navy-800 border border-slate-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-800 via-navy-800/50 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-space/80 backdrop-blur-sm rounded-full text-steel hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${event.color} text-white text-sm font-semibold mb-3`}>
              <Icon className="w-4 h-4" />
              Event {event.id}
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white">{event.title}</h2>
            <p className="text-electric font-medium mt-1">{event.tagline}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Quick Info */}
          <div className="flex flex-wrap gap-4 mb-8 pb-6 border-b border-slate-border">
            <div className="flex items-center gap-2 bg-slate-card px-4 py-2 rounded-lg">
              <Users className="w-5 h-5 text-electric" />
              <span className="text-steel-light text-sm font-medium">{event.teamSize}</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-card px-4 py-2 rounded-lg">
              <Award className="w-5 h-5 text-electric" />
              <span className="text-steel-light text-sm font-medium">{event.eligibility}</span>
            </div>
            {event.presentationTime && (
              <div className="flex items-center gap-2 bg-slate-card px-4 py-2 rounded-lg">
                <Clock className="w-5 h-5 text-electric" />
                <span className="text-steel-light text-sm font-medium">{event.presentationTime}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-lg font-display font-semibold text-white mb-3">Overview</h3>
            <p className="text-steel leading-relaxed">{event.description}</p>
          </div>

          {/* Categories (if applicable) */}
          {event.categories && (
            <div className="mb-8">
              <h3 className="text-lg font-display font-semibold text-white mb-4">Competition Categories</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {event.categories.map((category, idx) => (
                  <div key={idx} className="bg-slate-card rounded-xl p-4 border border-slate-border">
                    <div className="flex items-center gap-2 mb-3">
                      <category.icon className="w-5 h-5 text-electric" />
                      <h4 className="font-semibold text-white">{category.name}</h4>
                    </div>
                    <ul className="space-y-2">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-electric mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-steel-light text-sm font-medium">{item.title}</span>
                            {item.description && (
                              <p className="text-steel text-xs mt-0.5">{item.description}</p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Themes (for poster presentation) */}
          {event.themes && (
            <div className="mb-8">
              <h3 className="text-lg font-display font-semibold text-white mb-3">Research Themes</h3>
              <div className="flex flex-wrap gap-2">
                {event.themes.map((theme, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1.5 bg-electric/10 text-electric text-sm rounded-full border border-electric/30"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Technical Requirements */}
          {event.technicalRequirements && (
            <div className="mb-8">
              <h3 className="text-lg font-display font-semibold text-white mb-3">Technical Requirements</h3>
              <ul className="space-y-2">
                {event.technicalRequirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-steel text-sm">
                    <ChevronRight className="w-4 h-4 text-electric mt-0.5 flex-shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Evaluation Criteria */}
          {event.evaluationCriteria && (
            <div className="mb-8">
              <h3 className="text-lg font-display font-semibold text-white mb-4">Evaluation Criteria</h3>
              <div className="space-y-3">
                {event.evaluationCriteria.map((criteria, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-steel-light text-sm">{criteria.name}</span>
                        <span className="text-electric text-sm font-semibold">{criteria.weight}%</span>
                      </div>
                      <div className="h-2 bg-slate-card rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${criteria.weight}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: idx * 0.1 }}
                          className={`h-full bg-gradient-to-r ${event.color}`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Awards */}
          {event.awards && (
            <div className="mb-8">
              <h3 className="text-lg font-display font-semibold text-white mb-3">Awards</h3>
              <div className="flex flex-wrap gap-2">
                {event.awards.map((award, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 px-3 py-2 bg-slate-card rounded-lg border border-slate-border"
                  >
                    <Award className="w-4 h-4 text-amber-400" />
                    <span className="text-steel-light text-sm">{award}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-border">
            <motion.a
              href="#register"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              className="btn-orange text-center flex-1"
            >
              Register for this Event
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              className="btn-secondary"
            >
              Close
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section id="events" className="py-20 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-space" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-electric/5 blur-[120px] rounded-full -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-glow/5 blur-[100px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-electric text-sm font-semibold uppercase tracking-wider">Competitions</span>
          <h2 className="section-heading mt-2">
            <span className="gradient-text">5 Exciting</span> Events
          </h2>
          <p className="section-subheading">
            From high-speed drone racing to complex engineering challenges, 
            find your passion and compete with the best.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <EventCard event={event} onClick={setSelectedEvent} />
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-steel mb-4">Interested in participating?</p>
          <motion.a
            href="#register"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2"
          >
            Register for Events
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>

      {/* Event Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Events;
