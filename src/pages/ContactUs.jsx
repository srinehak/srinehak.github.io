import { useState } from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from '../components/Particles';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'company', 'message'];
    const emptyFields = requiredFields.filter(field => !formData[field].trim());
    
    if (emptyFields.length > 0) {
      setStatus({
        submitting: false,
        submitted: false,
        error: `Please fill in the following required fields: ${emptyFields.join(', ')}`
      });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch('https://formspree.io/f/mblggzgj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send message. Please try again.',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#060B14] pt-24 pb-20 relative">
      <ParticlesBackground theme="about" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#0A1628]/90 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-[#1E293B] hover:border-[#3B82F6]/50 transition-colors"
        >
          <div className="px-6 py-12 sm:px-12">
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
                className="text-4xl sm:text-5xl font-bold text-white inline-block relative mb-4"
              >
                Get in Touch
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/80 to-transparent origin-left"
                />
              </motion.h2>
            </div>
            <p className="text-xl text-gray-400 text-center mb-12">
              Have questions about our AI solutions? We'd love to hear from you and explore how we can help transform your business.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg bg-[#1E293B]/50 border-[#3B82F6]/20 text-white shadow-sm focus:border-[#3B82F6] focus:ring-[#3B82F6]/50 transition-all placeholder-gray-500 px-4 py-3 text-base"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg bg-[#1E293B]/50 border-[#3B82F6]/20 text-white shadow-sm focus:border-[#3B82F6] focus:ring-[#3B82F6]/50 transition-all placeholder-gray-500 px-4 py-3 text-base"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg bg-[#1E293B]/50 border-[#3B82F6]/20 text-white shadow-sm focus:border-[#3B82F6] focus:ring-[#3B82F6]/50 transition-all placeholder-gray-500 px-4 py-3 text-base"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+1 (123) 456-7890"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg bg-[#1E293B]/50 border-[#3B82F6]/20 text-white shadow-sm focus:border-[#3B82F6] focus:ring-[#3B82F6]/50 transition-all placeholder-gray-500 px-4 py-3 text-base"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                  Subject (Optional)
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg bg-[#1E293B]/50 border-[#3B82F6]/20 text-white shadow-sm focus:border-[#3B82F6] focus:ring-[#3B82F6]/50 transition-all placeholder-gray-500 px-4 py-3 text-base"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={8}
                  required
                  placeholder="Tell us about your project or requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg bg-[#1E293B]/50 border-[#3B82F6]/20 text-white shadow-sm focus:border-[#3B82F6] focus:ring-[#3B82F6]/50 transition-all placeholder-gray-500 px-4 py-3 text-base"
                />
              </div>

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full sm:w-auto px-8 py-4 text-base font-medium rounded-lg text-white bg-[#3B82F6] hover:bg-[#60A5FA] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ease-in-out"
                >
                  {status.submitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/20 border-t-white mr-2" />
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>

            {status.submitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 p-4 bg-green-900/50 border border-green-500 rounded-md"
              >
                <p className="text-green-400 text-center">
                  Thank you for your message! We'll get back to you soon.
                </p>
              </motion.div>
            )}

            {status.error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 p-4 bg-red-900/50 border border-red-500 rounded-md"
              >
                <p className="text-red-400 text-center">{status.error}</p>
              </motion.div>
            )}
          </div>
        </motion.div>
        </div>
      </div>
    </div>
  );
}
