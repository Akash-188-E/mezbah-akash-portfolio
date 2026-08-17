import { useState, FormEvent } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Phone, 
  Send, 
  Check, 
  Copy, 
  Eye, 
  EyeOff, 
  MessageSquare, 
  Sparkles,
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a message or inquiry.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate interactive client submission and direct mailto link creation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Construct a pre-filled mailto
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formData.subject || `Message from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      // Open mail client
      window.location.href = mailtoUrl;
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/5 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="text-[10px] uppercase tracking-widest text-blue-400 font-bold mb-2 flex items-center gap-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>09 / GET IN TOUCH</span>
          </div>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white"
          >
            Let's Build Something Together.
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mt-3">
            Have an idea, project, or opportunity? Feel free to get in touch.
          </p>
          <div className="w-12 h-0.5 bg-blue-500 rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="bg-white/5 p-6 sm:p-7 rounded-3xl border border-white/10 space-y-4 shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-code text-gray-400 uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-blue-300 transition-colors break-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  id="contact-copy-email-btn"
                  onClick={handleCopyEmail}
                  className="p-3 rounded-full bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-colors border border-white/10 flex items-center gap-1 text-xs cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedEmail && (
                <span className="text-xs text-emerald-400 font-mono-code block text-right">
                  Copied to clipboard!
                </span>
              )}
            </div>

            {/* Phone Card (with Reveal Interaction) */}
            <div className="bg-white/5 p-6 rounded-3xl border border-white/10 space-y-3 shadow-md backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-purple-600/20 text-purple-400 border border-purple-500/30">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-code text-gray-400 uppercase tracking-wider block">
                      Phone / Mobile
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-gray-200">
                      {showPhone ? PERSONAL_INFO.phone : '+880 1785-••••••'}
                    </span>
                  </div>
                </div>
                <button
                  id="contact-toggle-phone-btn"
                  onClick={() => setShowPhone(!showPhone)}
                  className="px-4 py-2 rounded-full bg-white/5 text-xs font-semibold uppercase tracking-wider text-gray-300 hover:text-white hover:bg-white/10 transition-colors border border-white/10 flex items-center gap-1.5 cursor-pointer"
                >
                  {showPhone ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  <span>{showPhone ? 'Hide' : 'Show Number'}</span>
                </button>
              </div>
              <p className="text-[11px] text-gray-500 font-mono-code">
                * Email and GitHub are the preferred channels for project discussions.
              </p>
            </div>

            {/* Social Channels Wall */}
            <div className="bg-white/5 p-6 rounded-3xl border border-white/10 space-y-4 shadow-md backdrop-blur-md">
              <h3 className="text-[10px] font-mono-code font-bold uppercase tracking-widest text-gray-300">
                Connected Profiles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                {/* GitHub */}
                <a
                  id="contact-link-github"
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-[#050508]/80 border border-white/10 hover:border-blue-500/40 hover:bg-white/5 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-gray-300 group-hover:text-blue-400" />
                    <span className="text-xs font-semibold text-gray-200">GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* LinkedIn */}
                <a
                  id="contact-link-linkedin"
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-[#050508]/80 border border-white/10 hover:border-blue-500/40 hover:bg-white/5 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-gray-300 group-hover:text-blue-400" />
                    <span className="text-xs font-semibold text-gray-200">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Facebook */}
                <a
                  id="contact-link-facebook"
                  href={PERSONAL_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-[#050508]/80 border border-white/10 hover:border-blue-500/40 hover:bg-white/5 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Facebook className="w-4 h-4 text-gray-300 group-hover:text-blue-400" />
                    <span className="text-xs font-semibold text-gray-200">Facebook</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Instagram */}
                <a
                  id="contact-link-instagram"
                  href={PERSONAL_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-[#050508]/80 border border-white/10 hover:border-blue-500/40 hover:bg-white/5 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Instagram className="w-4 h-4 text-gray-300 group-hover:text-blue-400" />
                    <span className="text-xs font-semibold text-gray-200">Instagram</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

              </div>
            </div>

          </div>

          {/* Right Column: Interactive Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl relative backdrop-blur-md">
              <h3 className="text-xl font-bold font-display text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-gray-400 mb-6">
                Fill out the fields below to initiate a conversation or proposal directly.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">Message Prepared!</h4>
                  <p className="text-xs text-gray-300 leading-relaxed max-w-md mx-auto">
                    Your email client is opening with your formatted message to <strong className="text-emerald-300">{PERSONAL_INFO.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-600 text-white hover:bg-emerald-500 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form id="portfolio-contact-form" onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono-code text-gray-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Johnson"
                        className={`w-full px-4 py-3 rounded-2xl bg-[#050508]/80 border text-xs sm:text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          errors.name ? 'border-rose-500 ring-1 ring-rose-500' : 'border-white/10'
                        }`}
                      />
                      {errors.name && <span className="text-[11px] text-rose-400 mt-1 block">{errors.name}</span>}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono-code text-gray-300 mb-1">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@example.com"
                        className={`w-full px-4 py-3 rounded-2xl bg-[#050508]/80 border text-xs sm:text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-white/10'
                        }`}
                      />
                      {errors.email && <span className="text-[11px] text-rose-400 mt-1 block">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono-code text-gray-300 mb-1">
                      Subject (Optional)
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Software Project Collaboration / Inquiry"
                      className="w-full px-4 py-3 rounded-2xl bg-[#050508]/80 border border-white/10 text-xs sm:text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono-code text-gray-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your note or project requirements here..."
                      className={`w-full px-4 py-3 rounded-2xl bg-[#050508]/80 border text-xs sm:text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none ${
                        errors.message ? 'border-rose-500 ring-1 ring-rose-500' : 'border-white/10'
                      }`}
                    />
                    {errors.message && <span className="text-[11px] text-rose-400 mt-1 block">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Preparing Client...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
