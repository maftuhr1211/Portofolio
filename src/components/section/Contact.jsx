"use client";

import React, { useState } from 'react';
import { Mail, Linkedin, Instagram, MessageSquare, Send, MapPin, Loader2 } from 'lucide-react';
import FadeIn from '../animations/FadeIn';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../utils/constants';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi Dasar
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all fields' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email' });
      return;
    }

    setIsSending(true);

    // SESUAIKAN DENGAN VARIABLE DI DASHBOARD EMAILJS KAMU
    const templateParams = {
      name: formData.name,    // Harus 'name' agar terbaca {{name}} di dashboard
      email: formData.email,  // Harus 'email' agar terbaca {{email}} di dashboard
      message: formData.message,
      reply_to: formData.email
    };

    emailjs.send(
      "service_12mroy",
      "template_zsscd93",
      templateParams,
      "ChVeU371MCGGKNdoN"
    )
      .then(() => {
        setStatus({
          type: 'success',
          message: "Thanks Roy! Your message is in my inbox. I'll get back to you soon."
        });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus({
          type: 'error',
          message: "Failed to send message. Please try again or email me directly."
        });
      })
      .finally(() => {
        setIsSending(false);
        // Hilangkan notifikasi setelah 5 detik
        setTimeout(() => {
          setStatus({ type: '', message: '' });
        }, 5000);
      });
  };

  const socialIcons = {
    linkedin: Linkedin,
    instagram: Instagram,
    mail: Mail
  };

  return (
    <section id="contact" className="relative scroll-mt-20 bg-black overflow-hidden py-20">
      {/* Background Decorative Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-xs text-primary font-bold tracking-[0.2em] uppercase">
                Get In Touch
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let’s Work Together
            </h2>
            <p className="text-white/60 max-w-xl mx-auto text-lg">
              Have a project in mind? Reach out for collaborations or just a friendly hello.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* LEFT: FORM */}
          <FadeIn delay={100}>
            <div className="h-full bg-white/[0.03] border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-white/20 transition-all focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-white/20 transition-all focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="How can I help you?"
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-white/20 resize-none transition-all focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-4 rounded-xl bg-primary text-white font-bold flex justify-center items-center gap-2 transition-all duration-300 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed group shadow-lg shadow-primary/20"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                </button>

                {status.message && (
                  <div className={`p-4 rounded-lg text-sm text-center animate-in fade-in slide-in-from-top-2 ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}>
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </FadeIn>

          {/* RIGHT: CONTACT INFO */}
          <FadeIn delay={200}>
            <div className="flex flex-col justify-between h-full space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white">Let's Connect</h3>
                <p className="text-white/60 text-lg leading-relaxed">
                  I'm currently open to new opportunities and interesting projects.
                  Let's discuss how we can build something amazing together.
                </p>

                <div className="grid gap-4">
                  <div className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/10 rounded-2xl">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-wider font-bold">Email</p>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:text-primary transition-colors">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/10 rounded-2xl">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-wider font-bold">Location</p>
                      <p className="text-white">{PERSONAL_INFO.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-sm text-white/40 font-bold uppercase tracking-widest mb-6">Social Profiles</p>
                <div className="flex gap-4">
                  {Object.entries(SOCIAL_LINKS).map(([platform, url]) => {
                    const Icon = socialIcons[platform];
                    return Icon ? (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
                      >
                        <Icon className="w-6 h-6 text-white/60 group-hover:text-primary transition-colors" />
                      </a>
                    ) : null;
                  })}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;