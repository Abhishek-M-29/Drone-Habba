import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  Building2, 
  GraduationCap, 
  Users, 
  CheckCircle, 
  AlertCircle,
  Loader2,
  Send,
  PartyPopper
} from 'lucide-react';
import { events } from '../data/events';

const colleges = [
  "Select your college",
  "Indian Institute of Technology (IIT)",
  "National Institute of Technology (NIT)",
  "Indian Institute of Science (IISc)",
  "BITS Pilani",
  "VIT University",
  "SRM Institute of Science and Technology",
  "Manipal Institute of Technology",
  "PES University",
  "RV College of Engineering",
  "BMS College of Engineering",
  "Other"
];

const courses = [
  { value: "", label: "Select your course" },
  { value: "diploma", label: "Diploma" },
  { value: "btech", label: "B.Tech / B.E." },
  { value: "mtech", label: "M.Tech / M.E." },
  { value: "phd", label: "Ph.D." },
];

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    otherCollege: '',
    course: '',
    year: '',
    teamSize: '3',
    teamName: '',
    selectedEvents: [],
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Enter valid 10-digit Indian mobile number';
    }
    
    if (!formData.college || formData.college === 'Select your college') {
      newErrors.college = 'Please select your college';
    }

    if (formData.college === 'Other' && !formData.otherCollege.trim()) {
      newErrors.otherCollege = 'Please enter your college name';
    }
    
    if (!formData.course) newErrors.course = 'Please select your course';
    
    if (!formData.year) newErrors.year = 'Please enter your year';
    
    if (formData.selectedEvents.length === 0) {
      newErrors.selectedEvents = 'Please select at least one event';
    }

    if (!formData.teamName.trim()) newErrors.teamName = 'Team name is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        selectedEvents: checked
          ? [...prev.selectedEvents, value]
          : prev.selectedEvents.filter(id => id !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const InputField = ({ icon: Icon, name, label, type = 'text', placeholder, ...props }) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-steel-light mb-2">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-steel">
          <Icon className="w-5 h-5" />
        </div>
        <input
          type={type}
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          placeholder={placeholder}
          className={`w-full bg-slate-card border ${
            errors[name] ? 'border-red-500' : 'border-slate-border'
          } rounded-lg pl-10 pr-4 py-3 text-white placeholder-steel focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors`}
          {...props}
        />
      </div>
      {errors[name] && (
        <p className="mt-1 text-red-400 text-xs flex items-center gap-1">
          <AlertCircle className="w-3 h-3" /> {errors[name]}
        </p>
      )}
    </div>
  );

  if (isSuccess) {
    return (
      <section id="register" className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-space" />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card text-center py-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
              className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <PartyPopper className="w-10 h-10 text-green-400" />
            </motion.div>
            <h2 className="text-2xl font-display font-bold text-white mb-4">
              Registration Successful! 🎉
            </h2>
            <p className="text-steel mb-6">
              Thank you for registering for Xcelerate 2026. We've sent a confirmation email to{' '}
              <span className="text-electric">{formData.email}</span>
            </p>
            <div className="bg-slate-card rounded-lg p-4 mb-6 text-left">
              <h3 className="text-white font-semibold mb-2">Registration Details:</h3>
              <p className="text-steel text-sm">Team: <span className="text-white">{formData.teamName}</span></p>
              <p className="text-steel text-sm">Events: <span className="text-white">{formData.selectedEvents.map(id => events.find(e => e.id === parseInt(id))?.shortTitle).join(', ')}</span></p>
            </div>
            <p className="text-steel text-sm mb-6">
              Join our WhatsApp group for updates and announcements.
            </p>
            <motion.a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Join WhatsApp Group
            </motion.a>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-space" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-orange-alert/5 blur-[150px] rounded-full" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-electric text-sm font-semibold uppercase tracking-wider">Join Us</span>
          <h2 className="section-heading mt-2">
            <span className="gradient-text">Register</span> Now
          </h2>
          <p className="section-subheading">
            Secure your spot at Xcelerate 2026. Fill in your details and select the events you want to participate in.
          </p>
        </motion.div>

        {/* Registration Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="card"
        >
          {/* Personal Information */}
          <div className="mb-8">
            <h3 className="text-lg font-display font-semibold text-white mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-electric" />
              Personal Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <InputField
                icon={User}
                name="name"
                label="Full Name *"
                placeholder="Enter your full name"
              />
              <InputField
                icon={Mail}
                name="email"
                label="Email Address *"
                type="email"
                placeholder="you@college.edu"
              />
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-steel-light mb-2">
                  Phone Number *
                </label>
                <div className="relative flex">
                  <span className="inline-flex items-center px-3 bg-slate-card border border-r-0 border-slate-border rounded-l-lg text-steel text-sm">
                    +91
                  </span>
                  <div className="relative flex-1">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-steel">
                      <Phone className="w-5 h-5" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="9876543210"
                      maxLength={10}
                      className={`w-full bg-slate-card border ${
                        errors.phone ? 'border-red-500' : 'border-slate-border'
                      } rounded-r-lg pl-10 pr-4 py-3 text-white placeholder-steel focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors`}
                    />
                  </div>
                </div>
                {errors.phone && (
                  <p className="mt-1 text-red-400 text-xs flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.phone}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div className="mb-8">
            <h3 className="text-lg font-display font-semibold text-white mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-electric" />
              Academic Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="college" className="block text-sm font-medium text-steel-light mb-2">
                  College / Institution *
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-steel">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <select
                    id="college"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    className={`w-full bg-slate-card border ${
                      errors.college ? 'border-red-500' : 'border-slate-border'
                    } rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors appearance-none cursor-pointer`}
                  >
                    {colleges.map((college, idx) => (
                      <option key={idx} value={college} className="bg-navy-800">
                        {college}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.college && (
                  <p className="mt-1 text-red-400 text-xs flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.college}
                  </p>
                )}
              </div>

              {formData.college === 'Other' && (
                <InputField
                  icon={Building2}
                  name="otherCollege"
                  label="College Name *"
                  placeholder="Enter your college name"
                />
              )}

              <div>
                <label htmlFor="course" className="block text-sm font-medium text-steel-light mb-2">
                  Course *
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-steel">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className={`w-full bg-slate-card border ${
                      errors.course ? 'border-red-500' : 'border-slate-border'
                    } rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors appearance-none cursor-pointer`}
                  >
                    {courses.map((course) => (
                      <option key={course.value} value={course.value} className="bg-navy-800">
                        {course.label}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.course && (
                  <p className="mt-1 text-red-400 text-xs flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.course}
                  </p>
                )}
              </div>

              <InputField
                icon={GraduationCap}
                name="year"
                label="Year of Study *"
                placeholder="e.g., 2nd Year"
              />
            </div>
          </div>

          {/* Team Information */}
          <div className="mb-8">
            <h3 className="text-lg font-display font-semibold text-white mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-electric" />
              Team Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <InputField
                icon={Users}
                name="teamName"
                label="Team Name *"
                placeholder="Enter your team name"
              />
              <div>
                <label htmlFor="teamSize" className="block text-sm font-medium text-steel-light mb-2">
                  Team Size
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-steel">
                    <Users className="w-5 h-5" />
                  </div>
                  <select
                    id="teamSize"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    className="w-full bg-slate-card border border-slate-border rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors appearance-none cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num} className="bg-navy-800">{num} member{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Event Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-display font-semibold text-white mb-2 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-electric" />
              Select Events *
            </h3>
            <p className="text-steel text-sm mb-4">Choose the events you want to participate in:</p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {events.map((event) => {
                const isSelected = formData.selectedEvents.includes(String(event.id));
                return (
                  <label
                    key={event.id}
                    className={`relative flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-electric/10 border-electric'
                        : 'bg-slate-card border-slate-border hover:border-electric/50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      name="selectedEvents"
                      value={event.id}
                      checked={isSelected}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      isSelected ? 'bg-electric border-electric' : 'border-slate-border'
                    }`}>
                      {isSelected && <CheckCircle className="w-3 h-3 text-white" />}
                    </div>
                    <div>
                      <span className="text-white font-medium text-sm block">{event.shortTitle}</span>
                      <span className="text-steel text-xs">{event.teamSize}</span>
                    </div>
                  </label>
                );
              })}
            </div>
            {errors.selectedEvents && (
              <p className="mt-2 text-red-400 text-xs flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.selectedEvents}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className="w-full btn-orange text-lg py-4 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Submit Registration
              </>
            )}
          </motion.button>

          <p className="text-center text-steel text-xs mt-4">
            By registering, you agree to our terms and conditions and privacy policy.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default Registration;

