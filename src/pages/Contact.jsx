import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Dribbble,
  Palette,
  Twitter,
  Send,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@sania.design",
      link: "mailto:hello@sania.design",
      description: "For project inquiries and collaborations",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      description: "Available Monday to Friday, 9AM - 6PM EST",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      link: "#",
      description: "Working remotely with clients worldwide",
    },
  ];

  const socialLinks = [
    {
      icon: Dribbble,
      label: "Dribbble",
      url: "https://dribbble.com/sania",
      color: "hover:text-pink-600",
    },
    {
      icon: Palette,
      label: "Behance",
      url: "https://behance.net/sania",
      color: "hover:text-blue-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/sania",
      color: "hover:text-blue-700",
    },
    {
      icon: Twitter,
      label: "Twitter",
      url: "https://twitter.com/sania",
      color: "hover:text-sky-500",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error("EmailJS error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Let's<span className="text-primary"> Connect</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate to create something
            exceptional together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

            <div className="space-y-6 mb-12">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-bg-secondary transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-text-primary mb-1 group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {item.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Follow my work</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    whileHover={{ y: -4 }}
                    className={`flex items-center gap-2 px-5 py-3 rounded-full bg-bg-secondary ${social.color} transition-all`}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 p-6 rounded-2xl bg-linear-to-br from-primary/10 via-secondary/10 to-transparent"
            >
              <h3 className="text-xl font-semibold mb-4">
                Current Availability
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="font-medium">
                  Available for select projects
                </span>
              </div>
              <p className="text-text-secondary">
                I'm currently open to 1-2 new projects starting March 2024.
                Let's discuss your ideas!
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-bg-secondary rounded-2xl p-8 md:p-10">
              <h2 className="text-3xl font-bold mb-2">Send a Message</h2>
              <p className="text-text-secondary mb-8">
                Fill out the form below and I'll get back to you within 24
                hours.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-text-secondary mb-6">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-bg-primary rounded-xl border border-accent/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-bg-primary rounded-xl border border-accent/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-bg-primary rounded-xl border border-accent/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-bg-primary rounded-xl border border-accent/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <p className="text-sm text-text-secondary text-center pt-4">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </form>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-center"
                >
                  {error}
                </motion.div>
              )}
            </div>

            {/* Process Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <h3 className="text-xl font-semibold mb-6">My Process</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    number: "01",
                    title: "Discovery",
                    desc: "Understand your needs",
                  },
                  { number: "02", title: "Design", desc: "Create solutions" },
                  { number: "03", title: "Deliver", desc: "Launch & support" },
                ].map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="p-4 rounded-xl bg-bg-secondary text-center"
                  >
                    <div className="text-2xl font-bold text-primary mb-2">
                      {step.number}
                    </div>
                    <div className="font-semibold mb-1">{step.title}</div>
                    <div className="text-sm text-text-secondary">
                      {step.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Map/CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 p-8 rounded-2xl bg-linear-to-r from-primary/5 via-secondary/5 to-primary/5 border border-accent/10"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Let's Build Something Amazing
              </h3>
              <p className="text-text-secondary mb-6">
                Whether you're looking to redesign an existing product or create
                something entirely new, I'm here to help bring your vision to
                life.
              </p>
              <a
                href="mailto:hello@sania.design"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Start a Conversation
              </a>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden bg-linear-to-br from-primary/20 to-secondary/20">
                {/* Decorative map placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <span className="text-text-secondary">
                      San Francisco Bay Area
                    </span>
                  </div>
                </div>

                {/* Animated dots */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full bg-primary"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-secondary"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
