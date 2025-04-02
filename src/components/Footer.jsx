import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1628]/50 border-t border-white/10 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">Partner With Us</h3>
            <p className="text-white/70 mb-6 max-w-md">
              Ready to transform your business with AI? Let's collaborate to create innovative solutions 
              tailored to your needs. Whether you're starting your AI journey or looking to scale, 
              we're here to help you succeed.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="https://www.linkedin.com/company/inceptica"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#3B82F6] transition-colors duration-300 flex items-center"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>Follow us on LinkedIn</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] hover:from-[#60A5FA] hover:to-[#3B82F6] rounded-lg transition-all duration-300 hover:scale-105"
              >
                <span>Start a Project</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-[#3B82F6] transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-[#3B82F6] transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-[#3B82F6] transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/ai-possibilities" className="text-white/70 hover:text-[#3B82F6] transition-colors duration-300">
                  AI Possibilities
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-white/70 hover:text-[#3B82F6] transition-colors duration-300">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/technology" className="text-white/70 hover:text-[#3B82F6] transition-colors duration-300">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-[#3B82F6] transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@theinceptica.com"
                  className="text-white/70 hover:text-[#3B82F6] transition-colors duration-300 flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  hello@theinceptica.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="text-center text-white/60">
            © {currentYear} Inceptica. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
