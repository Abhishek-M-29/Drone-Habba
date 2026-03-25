import { useState, useRef } from 'react';
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
  PartyPopper,
  Upload,
  ExternalLink,
  CreditCard,
  ArrowLeft,
  ArrowRight,
  X,
  IndianRupee
} from 'lucide-react';
import { events } from '../data/events';

const courses = [
  { value: "", label: "Select your course" },
  { value: "diploma", label: "Diploma" },
  { value: "btech", label: "B.Tech / B.E." },
  { value: "mtech", label: "M.Tech / M.E." },
  { value: "phd", label: "Ph.D." },
];

const InputField = ({ icon: Icon, name, label, type = 'text', placeholder, value, onChange, error, ...props }) => (
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
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full bg-slate-card border ${
          error ? 'border-red-500' : 'border-slate-border'
        } rounded-lg pl-10 pr-4 py-3 text-white placeholder-steel focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors`}
        {...props}
      />
    </div>
    {error && (
      <p className="mt-1 text-red-400 text-xs flex items-center gap-1">
        <AlertCircle className="w-3 h-3" /> {error}
      </p>
    )}
  </div>
);

const STEPS = [
  { num: '01', label: 'BASIC INFORMATION' },
  { num: '02', label: 'ACADEMIC PROFILE' },
  { num: '03', label: 'PAYMENT VERIFICATION' },
];

const Registration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    course: '',
    year: '',
    teamSize: '3',
    teamName: '',
    selectedEvents: [],
    transactionId: '',
  });
  const [screenshot, setScreenshot] = useState(null);
  const [screenshotPreview, setScreenshotPreview] = useState(null);
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const fileInputRef = useRef(null);

  // Fee calculation
  const totalFee = formData.selectedEvents.reduce((sum, eventId) => {
    const event = events.find(e => e.id === parseInt(eventId));
    return sum + (event?.feeAmount || 0);
  }, 0);

  // --- VALIDATION ---
  const validateStep1 = () => {
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
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.college.trim()) {
      newErrors.college = 'College name is required';
    }
    if (!formData.course) newErrors.course = 'Please select your course';
    if (!formData.year) newErrors.year = 'Please enter your year';
    if (!formData.teamName.trim()) newErrors.teamName = 'Team name is required';
    if (formData.selectedEvents.length === 0) {
      newErrors.selectedEvents = 'Please select at least one event';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors = {};
    if (!formData.transactionId.trim()) {
      newErrors.transactionId = 'Transaction ID is required';
    }
    if (!screenshot) {
      newErrors.screenshot = 'Payment screenshot is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
      setErrors({});
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3);
      setErrors({});
    }
  };

  const handleBack = () => {
    setErrors({});
    setCurrentStep(prev => prev - 1);
  };

  // --- FILE HANDLING ---
  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validTypes = ['image/jpeg', 'image/png'];
    if (!validTypes.includes(file.type)) {
      setErrors(prev => ({ ...prev, screenshot: 'Only JPG and PNG files are allowed' }));
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setErrors(prev => ({ ...prev, screenshot: 'File size must be less than 5MB' }));
      return;
    }

    setScreenshot(file);
    setErrors(prev => ({ ...prev, screenshot: '' }));

    const reader = new FileReader();
    reader.onload = (ev) => setScreenshotPreview(ev.target.result);
    reader.readAsDataURL(file);
  };

  const removeScreenshot = () => {
    setScreenshot(null);
    setScreenshotPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // --- SUBMIT ---
  const readFileAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const base64Full = await readFileAsBase64(screenshot);
      const base64Screenshot = base64Full.split(',')[1];

      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.replace(/\s/g, ''),
        college: formData.college.trim(),
        course: courses.find(c => c.value === formData.course)?.label || formData.course,
        year: formData.year.trim(),
        teamName: formData.teamName.trim(),
        teamSize: parseInt(formData.teamSize),
        selectedEvents: formData.selectedEvents.map(id => {
          const ev = events.find(e => e.id === parseInt(id));
          return { id: ev.id, title: ev.shortTitle, fee: ev.feeAmount };
        }),
        totalFee,
        transactionId: formData.transactionId.trim(),
        screenshot: base64Screenshot,
        screenshotMime: screenshot.type,
      };

      // Convert payload to URLSearchParams directly as Apps Script handles it much better natively
      const formBody = new URLSearchParams();
      Object.keys(payload).forEach(key => {
        if (typeof payload[key] === 'object') {
          formBody.append(key, JSON.stringify(payload[key]));
        } else {
          formBody.append(key, payload[key]);
        }
      });

      await fetch(import.meta.env.VITE_GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });

      setIsSuccess(true);
    } catch (err) {
      console.error('Registration error:', err);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- HANDLERS ---
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
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };



  // --- STEP INDICATOR ---
  const StepIndicator = () => (
    <div className="flex items-center justify-between mb-10">
      {STEPS.map((step, idx) => {
        const stepNum = idx + 1;
        const isActive = currentStep === stepNum;
        const isCompleted = currentStep > stepNum;
        return (
          <div key={step.num} className="flex items-center flex-1 last:flex-initial">
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${
                isCompleted
                  ? 'bg-green-500 border-green-500 text-white'
                  : isActive
                    ? 'bg-white border-white text-black'
                    : 'border-slate-border text-steel'
              }`}>
                {isCompleted ? <CheckCircle className="w-5 h-5" /> : step.num}
              </div>
              <span className={`text-[10px] sm:text-xs mt-2 font-semibold tracking-wide text-center hidden sm:block ${
                isActive ? 'text-white' : isCompleted ? 'text-green-400' : 'text-steel'
              }`}>
                {step.label}
              </span>
            </div>
            {idx < STEPS.length - 1 && (
              <div className={`flex-1 h-0.5 mx-2 sm:mx-4 transition-colors duration-300 ${
                currentStep > stepNum ? 'bg-green-500' : 'bg-slate-border'
              }`} />
            )}
          </div>
        );
      })}
    </div>
  );

  // ================= SUCCESS SCREEN =================
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
              Thank you for registering for AeroXcelerate 2026. We've received your registration.
            </p>
            <div className="bg-slate-card rounded-lg p-4 mb-6 text-left space-y-2">
              <h3 className="text-white font-semibold mb-3">Registration Details:</h3>
              <p className="text-steel text-sm">Team: <span className="text-white">{formData.teamName}</span></p>
              <p className="text-steel text-sm">Events: <span className="text-white">
                {formData.selectedEvents.map(id => events.find(e => e.id === parseInt(id))?.shortTitle).join(', ')}
              </span></p>
              <p className="text-steel text-sm">Total Fee: <span className="text-green-400 font-semibold">₹{totalFee.toLocaleString('en-IN')}</span></p>
              <p className="text-steel text-sm">Transaction ID: <span className="text-white font-mono">{formData.transactionId}</span></p>
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

  // ================= MAIN FORM =================
  return (
    <section id="register" className="py-20 lg:py-32 relative overflow-hidden">
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
          <span className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Join Us</span>
          <h2 className="section-heading mt-2">
            <span className="text-white">Register</span> Now
          </h2>
          <p className="section-subheading">
            Secure your spot at AeroXcelerate 2026. Fill in your details and select the events you want to participate in.
          </p>
        </motion.div>

        {/* Registration Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card"
        >
          <StepIndicator />

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {/* ========== STEP 1: Basic Information ========== */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-lg font-display font-semibold text-white mb-6 flex items-center gap-2">
                    <User className="w-5 h-5 text-gray-300" />
                    Basic Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <InputField
                      icon={User}
                      name="name"
                      label="Full Name *"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      error={errors.name}
                    />
                    <InputField
                      icon={Mail}
                      name="email"
                      label="Email Address *"
                      type="email"
                      placeholder="you@college.edu"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
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
                            } rounded-r-lg pl-10 pr-4 py-3 text-white placeholder-steel focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors`}
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

                  {/* Next button */}
                  <div className="flex justify-end">
                    <motion.button
                      type="button"
                      onClick={handleNext}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-orange px-8 py-3 flex items-center gap-2"
                    >
                      Next
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* ========== STEP 2: Academic Profile + Team + Events ========== */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Academic Info */}
                  <h3 className="text-lg font-display font-semibold text-white mb-4 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-gray-300" />
                    Academic Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <InputField
                      icon={Building2}
                      name="college"
                      label="College / Institution *"
                      placeholder="Enter your college name"
                      value={formData.college}
                      onChange={handleChange}
                      error={errors.college}
                    />

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
                          } rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors appearance-none cursor-pointer`}
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
                      value={formData.year}
                      onChange={handleChange}
                      error={errors.year}
                    />
                  </div>

                  {/* Team Info */}
                  <h3 className="text-lg font-display font-semibold text-white mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-gray-300" />
                    Team Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <InputField
                      icon={Users}
                      name="teamName"
                      label="Team Name *"
                      placeholder="Enter your team name"
                      value={formData.teamName}
                      onChange={handleChange}
                      error={errors.teamName}
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
                          className="w-full bg-slate-card border border-slate-border rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors appearance-none cursor-pointer"
                        >
                          {[1,2,3,4,5,6,7,8,9,10].map(num => (
                            <option key={num} value={num} className="bg-navy-800">{num} member{num > 1 ? 's' : ''}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Event Selection */}
                  <h3 className="text-lg font-display font-semibold text-white mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-gray-300" />
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
                              ? 'bg-white/10 border-white'
                              : 'bg-slate-card border-slate-border hover:border-gray-600'
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
                            isSelected ? 'bg-white border-white' : 'border-slate-border'
                          }`}>
                            {isSelected && <CheckCircle className="w-3 h-3 text-white" />}
                          </div>
                          <div>
                            <span className="text-white font-medium text-sm block">{event.shortTitle}</span>
                            <span className="text-steel text-xs">{event.teamSize}</span>
                            <span className="text-gray-300 text-xs block mt-0.5">₹{event.feeAmount.toLocaleString('en-IN')}</span>
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

                  {/* Running Total */}
                  {formData.selectedEvents.length > 0 && (
                    <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-lg flex items-center justify-between">
                      <span className="text-steel-light text-sm font-medium flex items-center gap-2">
                        <IndianRupee className="w-4 h-4 text-gray-300" />
                        Total Registration Fee
                      </span>
                      <span className="text-white text-xl font-bold font-display">
                        ₹{totalFee.toLocaleString('en-IN')}
                      </span>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="flex justify-between mt-8">
                    <motion.button
                      type="button"
                      onClick={handleBack}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-secondary px-6 py-3 flex items-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={handleNext}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-orange px-8 py-3 flex items-center gap-2"
                    >
                      Next
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* ========== STEP 3: Payment Verification ========== */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-lg font-display font-semibold text-white mb-6 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-gray-300" />
                    Payment Verification
                  </h3>

                  {/* Fee Summary */}
                  <div className="bg-slate-card rounded-lg p-4 mb-6 border border-slate-border">
                    <h4 className="text-white font-semibold text-sm mb-3">Fee Summary</h4>
                    <div className="space-y-2">
                      {formData.selectedEvents.map(id => {
                        const ev = events.find(e => e.id === parseInt(id));
                        return (
                          <div key={id} className="flex justify-between text-sm">
                            <span className="text-steel">{ev?.title}</span>
                            <span className="text-white">₹{ev?.feeAmount.toLocaleString('en-IN')}</span>
                          </div>
                        );
                      })}
                      <div className="border-t border-slate-border pt-2 mt-2 flex justify-between">
                        <span className="text-white font-bold">Total</span>
                        <span className="text-white font-bold text-lg">₹{totalFee.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Payment Instructions */}
                  <div className="bg-orange-alert/10 border border-orange-alert/30 rounded-lg p-4 mb-6">
                    <h4 className="text-orange-alert font-semibold text-sm mb-2 uppercase tracking-wide">
                      Required Payment Step
                    </h4>
                    <p className="text-steel-light text-sm leading-relaxed">
                      Before submitting this form, you must complete the <span className="text-white font-semibold">₹{totalFee.toLocaleString('en-IN')}</span> registration fee. 
                      Click the button below to open the secure Acharya ERP payment portal in a new tab. 
                      Once completed, copy your Transaction ID and take a screenshot to upload below.
                    </p>
                  </div>

                  {/* Open Payment Portal */}
                  <motion.a
                    href="https://www.acharyaerptech.in/ExternalPayment/313"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-orange w-full py-4 flex items-center justify-center gap-2 text-lg mb-8"
                  >
                    <ExternalLink className="w-5 h-5" />
                    OPEN PAYMENT PORTAL
                  </motion.a>

                  {/* Transaction ID */}
                  <div className="mb-6">
                    <InputField
                      icon={CreditCard}
                      name="transactionId"
                      label="Transaction ID *"
                      placeholder="Enter your payment transaction ID"
                      value={formData.transactionId}
                      onChange={handleChange}
                      error={errors.transactionId}
                    />
                  </div>

                  {/* Screenshot Upload */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-steel-light mb-2">
                      Payment Screenshot *
                    </label>
                    
                    {!screenshotPreview ? (
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                          errors.screenshot 
                            ? 'border-red-500 bg-red-500/5' 
                            : 'border-slate-border hover:border-gray-600 bg-slate-card/50'
                        }`}
                      >
                        <Upload className="w-8 h-8 text-steel mx-auto mb-3" />
                        <p className="text-steel text-sm">Click to upload payment screenshot</p>
                        <p className="text-steel/60 text-xs mt-1">JPG or PNG, max 5MB</p>
                      </div>
                    ) : (
                      <div className="relative border border-slate-border rounded-lg p-4 bg-slate-card">
                        <div className="flex items-center gap-4">
                          <img 
                            src={screenshotPreview} 
                            alt="Payment screenshot" 
                            className="w-20 h-20 object-cover rounded-lg border border-slate-border"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-white text-sm font-medium truncate">{screenshot?.name}</p>
                            <p className="text-steel text-xs mt-1">
                              {(screenshot?.size / 1024).toFixed(1)} KB
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={removeScreenshot}
                            className="p-2 text-steel hover:text-red-400 transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    )}

                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/jpeg,image/png"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                    {errors.screenshot && (
                      <p className="mt-1 text-red-400 text-xs flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.screenshot}
                      </p>
                    )}
                  </div>

                  {/* Submit Error */}
                  {submitError && (
                    <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                      <p className="text-red-400 text-sm flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        {submitError}
                      </p>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="flex justify-between">
                    <motion.button
                      type="button"
                      onClick={handleBack}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-secondary px-6 py-3 flex items-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </motion.button>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className="btn-orange px-8 py-3 flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
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
                  </div>

                  <p className="text-center text-steel text-xs mt-4">
                    By registering, you agree to our terms and conditions and privacy policy.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Registration;

