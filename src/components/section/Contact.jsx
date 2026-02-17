import React, { useState } from 'react';
import { Mail, Linkedin, Instagram, MessageSquare, Send, MapPin } from 'lucide-react';
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all fields' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email' });
      return;
    }

    emailjs.send(
      "service_12mroy",     // ganti
      "template_zsscd93",    // ganti
      {
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message,
      },
      "ChVeU371MCGGKNdoN"      // ganti
    )
    .then(() => {
      setStatus({
        type: 'success',
        message: "Message sent successfully! I'll get back to you soon."
      });
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(() => {
      setStatus({
        type: 'error',
        message: "Failed to send message. Please try again."
      });
    });

    setTimeout(() => {
      setStatus({ type: '', message: '' });
    }, 5000);
  };

  const socialIcons = {
    linkedin: Linkedin,
    instagram: Instagram,
    mail: Mail
  };

  return (
    <section id="contact" className="relative scroll-mt-5 bg-black overflow-hidden">

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 opacity-30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <FadeIn delay={0}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium tracking-wider uppercase">
                Get In Touch
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-normal text-white mb-2">
              Let’s Work Together
            </h2>

            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Feel free to reach out for collaborations or just a friendly hello 👋
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* FORM */}
          <FadeIn delay={100}>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                  <label className="block text-sm text-white/80 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white transition-all duration-300 hover:border-primary/40 focus:outline-none focus:border-primary/60"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/70 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white transition-all duration-300 hover:border-primary/40 focus:outline-none focus:border-primary/60"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/70 mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white resize-none transition-all duration-300 hover:border-primary/40 focus:outline-none focus:border-primary/60"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-5 py-2.5 rounded-lg bg-primary text-white flex justify-center items-center gap-2 transition-all duration-300 hover:bg-[#1e293b] group"
                >
                  Send Message
                  <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </button>

                {status.message && (
                  <div className={`text-sm mt-2 ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {status.message}
                  </div>
                )}

              </form>
            </div>
          </FadeIn>

          {/* CONTACT INFO */}
          <FadeIn delay={200}>
            <div className="space-y-6">

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Let's Contact
                </h3>
                <p className="text-white/60 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities.
                </p>
              </div>

              <div className="space-y-3">

                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-white/60 mb-1">Email</p>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-white hover:text-primary transition-colors font-medium"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-white/60 mb-1">Location</p>
                      <p className="text-white font-medium">
                        {PERSONAL_INFO.location}
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              <div>
                <p className="text-sm text-white/60 mb-4">Connect with me</p>
                <div className="flex gap-4">
                  {Object.entries(SOCIAL_LINKS)
                    .slice(0, 3)
                    .map(([platform, url]) => {
                      const Icon = socialIcons[platform];
                      return Icon ? (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                        >
                          <Icon className="w-6 h-6 text-white/60 hover:text-primary transition-colors" />
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
