import { init } from '@emailjs/browser';

// Initialize EmailJS with your public key
init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export const EMAIL_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
