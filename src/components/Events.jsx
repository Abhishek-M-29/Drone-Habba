import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Users, Clock, Award, ChevronRight, X, IndianRupee, Trophy, Sparkles } from 'lucide-react';
import { events } from '../data/events';

/* ── Featured Hero Card (Event 1 — Drone) ── */
const FeaturedCard = ({ event, onClick }) => {
  const Icon = event.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -3 }}
      className="group cursor-pointer relative rounded-2xl overflow-hidden border border-slate-border hover:border-gray-500 transition-all duration-500 hover:shadow-glow-lg"
      onClick={() => onClick(event)}
    >
      {/* Glow line on hover */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      {/* Details arrow hint */}
      <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center group-hover:bg-white/[0.12] group-hover:border-white/20 transition-all">
        <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
      </div>

      <div className="grid lg:grid-cols-2 min-h-0 lg:min-h-[340px]">
        {/* Image side */}
        <div className="relative h-64 lg:h-full overflow-hidden">
          <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-space-200/90 via-space-200/40 to-transparent lg:from-transparent lg:via-transparent lg:to-space-200" />
          <div className="absolute inset-0 bg-gradient-to-t from-space-200 via-transparent to-transparent lg:hidden" />
          {/* Featured badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1.5 bg-orange-alert text-white text-xs font-bold uppercase tracking-wider rounded-lg flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5" /> Featured Event
            </span>
          </div>
        </div>

        {/* Content side */}
        <div className="relative bg-space-200 p-8 lg:p-10 flex flex-col justify-center">
          <div className="absolute top-6 right-8 text-[50px] sm:text-[80px] font-display font-black text-white/[0.03] leading-none select-none">
            01
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-orange-alert text-xs font-bold uppercase tracking-wider">{event.shortTitle}</p>
              <h3 className="text-2xl font-display font-bold text-white">{event.title}</h3>
            </div>
          </div>

          <p className="text-gray-400 text-sm italic mb-4">"{event.tagline}"</p>
          <p className="text-steel text-sm leading-relaxed line-clamp-3 mb-6">{event.description}</p>

          {/* Stats row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-gray-300">
              <Users className="w-3.5 h-3.5" /> {event.teamSize}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-gray-300">
              <IndianRupee className="w-3.5 h-3.5" /> {event.registrationFee}
            </span>
            {event.awards?.[0] && (
              <span className="inline-flex items-center gap-1.5 bg-orange-alert/10 border border-orange-alert/20 rounded-lg px-3 py-1.5 text-xs text-orange-alert font-semibold">
                <Award className="w-3.5 h-3.5" /> {event.awards[0]}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-white transition-colors">
            View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ── Regular Event Card ── */
const EventCard = ({ event, onClick, index }) => {
  const Icon = event.icon;
  const num = String(event.id).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group cursor-pointer relative rounded-2xl bg-space-200 border border-slate-border hover:border-gray-500 overflow-hidden h-full flex flex-col transition-all duration-500 hover:shadow-card-hover"
      onClick={() => onClick(event)}
    >
      {/* Glow line on hover */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      {/* Details arrow hint */}
      <div className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm border border-white/[0.1] flex items-center justify-center group-hover:bg-white/[0.12] group-hover:border-white/20 transition-all">
        <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
      </div>

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-space-200 via-space-200/30 to-transparent" />

        {/* Event number */}
        <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center">
          <span className="text-white text-xs font-mono font-bold">{num}</span>
        </div>

        {/* Tagline on hover */}
        <div className="absolute bottom-0 inset-x-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-gray-300 text-xs italic">"{event.tagline}"</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/15 transition-colors">
            <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-display font-bold text-white group-hover:text-gray-200 transition-colors truncate">
              {event.title}
            </h3>
            <p className="text-gray-500 text-xs uppercase tracking-wider">{event.shortTitle}</p>
          </div>
        </div>

        <p className="text-steel text-sm leading-relaxed line-clamp-2 flex-1">{event.description}</p>

        {/* Meta */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-border">
          <div className="flex items-center gap-3 text-xs text-steel">
            <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{event.teamSize}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-400 font-medium">
            <IndianRupee className="w-3.5 h-3.5" />{event.registrationFee}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const EventModal = ({ event, onClose }) => {
  if (!event) return null;
  const Icon = event.icon;
  const num = String(event.id).padStart(2, '0');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
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
          <div className="absolute inset-0 bg-gradient-to-t from-navy-800 via-navy-800/60 to-navy-800/20" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full text-steel hover:text-white hover:border-white/30 transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Event number watermark */}
          <div className="absolute top-4 left-6 text-white/[0.06] text-[100px] font-display font-black leading-none select-none">
            {num}
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-gray-300 text-xs font-semibold uppercase tracking-wider">
                Event {num}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white">{event.title}</h2>
            <p className="text-gray-400 text-sm italic mt-1">"{event.tagline}"</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Quick Info Pills */}
          <div className="flex flex-wrap gap-3 mb-8 pb-6 border-b border-slate-border">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl">
              <Users className="w-4 h-4 text-gray-400" />
              <span className="text-gray-200 text-sm font-medium">{event.teamSize}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl">
              <Award className="w-4 h-4 text-gray-400" />
              <span className="text-gray-200 text-sm font-medium">{event.eligibility}</span>
            </div>
            {event.registrationFee && (
              <div className="flex items-center gap-2 bg-orange-alert/10 border border-orange-alert/20 px-4 py-2.5 rounded-xl">
                <IndianRupee className="w-4 h-4 text-orange-alert" />
                <span className="text-orange-alert text-sm font-semibold">{event.registrationFee}</span>
              </div>
            )}
            {event.presentationTime && (
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-gray-200 text-sm font-medium">{event.presentationTime}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
              <span className="w-6 h-px bg-gray-600" /> Overview
            </h3>
            <p className="text-steel leading-relaxed">{event.description}</p>
          </div>

          {/* Categories */}
          {event.categories && (
            <div className="mb-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
                <span className="w-6 h-px bg-gray-600" /> Competition Categories
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {event.categories.map((category, idx) => (
                  <div key={idx} className="bg-white/[0.02] rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <category.icon className="w-5 h-5 text-gray-300" />
                      <h4 className="font-semibold text-white">{category.name}</h4>
                    </div>
                    <ul className="space-y-2">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
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

          {/* Themes */}
          {event.themes && (
            <div className="mb-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                <span className="w-6 h-px bg-gray-600" /> Research Themes
              </h3>
              <div className="flex flex-wrap gap-2">
                {event.themes.map((theme, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-white/5 text-gray-300 text-sm rounded-full border border-white/10">
                    {theme}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Technical Requirements */}
          {event.technicalRequirements && (
            <div className="mb-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                <span className="w-6 h-px bg-gray-600" /> Technical Requirements
              </h3>
              <div className="bg-white/[0.02] rounded-xl p-5 border border-white/5">
                <ul className="space-y-3">
                  {event.technicalRequirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-steel text-sm">
                      <span className="text-gray-500 text-xs font-mono mt-0.5 min-w-[18px]">{String(idx + 1).padStart(2, '0')}</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Evaluation Criteria */}
          {event.evaluationCriteria && (() => {
            const barColors = [
              'bg-white/50',
              'bg-white/30',
              'bg-white/20',
              'bg-orange-alert/50',
              'bg-gray-400/40',
              'bg-white/15',
            ];
            return (
              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-5 flex items-center gap-2">
                  <span className="w-6 h-px bg-gray-600" /> Evaluation Criteria
                </h3>

                {/* Labels row */}
                <div className="flex mb-2" style={{ gap: '2px' }}>
                  {event.evaluationCriteria.map((criteria, idx) => (
                    <div key={idx} className="text-center" style={{ width: `${criteria.weight}%` }}>
                      <p className="text-[11px] text-gray-400 truncate">{criteria.name}</p>
                      <p className="text-[10px] font-mono text-white/60 font-bold">{criteria.weight}%</p>
                    </div>
                  ))}
                </div>

                {/* Single stacked bar */}
                <div className="h-3 rounded-full overflow-hidden flex" style={{ gap: '2px' }}>
                  {event.evaluationCriteria.map((criteria, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${criteria.weight}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: idx * 0.12, ease: 'easeOut' }}
                      className={`h-full ${barColors[idx % barColors.length]} ${idx === 0 ? 'rounded-l-full' : ''} ${idx === event.evaluationCriteria.length - 1 ? 'rounded-r-full' : ''}`}
                    />
                  ))}
                </div>
              </div>
            );
          })()}

          {/* Awards */}
          {event.awards && (
            <div className="mb-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                <span className="w-6 h-px bg-gray-600" /> Awards
              </h3>
              <div className="flex flex-wrap gap-3">
                {event.awards.map((award, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.03] rounded-xl border border-white/10">
                    <Trophy className={`w-4 h-4 ${idx === 0 ? 'text-amber-400' : 'text-gray-400'}`} />
                    <span className="text-gray-200 text-sm font-medium">{award}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-slate-border">
            <motion.a
              href="#register"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              className="btn-orange flex-1 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Register for This Event
            </motion.a>
            {event.whatsappLink && (
              <motion.a
                href={event.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex-1 text-center"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Group
              </motion.a>
            )}
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
  const featuredEvent = events[0]; // Drone event — main attraction
  const otherEvents = events.slice(1);

  return (
    <section id="events" className="py-20 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-space" />
      <div className="absolute inset-0 topo-lines" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-white/[0.03] blur-[120px] rounded-full -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-white/[0.02] blur-[100px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Competitions</span>
          <h2 className="section-heading mt-2">
            <span className="text-white">5 Exciting</span> Events
          </h2>
          <p className="section-subheading">
            From autonomous drone flying to creative poster presentations, 
            find your passion and compete with the best.
          </p>
        </motion.div>

        {/* Quick Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6 mb-14"
        >
          {[
            { label: 'Events', value: '5' },
            { label: 'Total Prizes', value: '₹66K+' },
            { label: 'Categories', value: '3' },
            { label: 'Max Team Size', value: '10' },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-2 text-sm">
              <span className="text-white font-display font-bold">{stat.value}</span>
              <span className="text-gray-500">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Featured Event — Drone */}
        <div className="mb-10">
          <FeaturedCard event={featuredEvent} onClick={setSelectedEvent} />
        </div>

        {/* Other Events — 2×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherEvents.map((event, index) => (
            <EventCard key={event.id} event={event} onClick={setSelectedEvent} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <p className="text-steel mb-4">Interested in participating?</p>
          <motion.a
            href="#register"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-orange inline-flex items-center gap-2"
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
