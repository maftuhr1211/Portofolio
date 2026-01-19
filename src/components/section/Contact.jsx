import React, { useState } from 'react';
import {
    Mail,
    Linkedin,
    Instagram,
    MessageSquare,
    Send,
    MapPin
} from 'lucide-react';
import FadeIn from '../animations/FadeIn';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../utils/constants';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState({ type: '', message: '' });

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

        setStatus({
            type: 'success',
            message: "Message sent successfully! I'll get back to you soon."
        });

        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    };

    const socialIcons = {
        linkedin: Linkedin,
        instagram: Instagram,
        mail: Mail
    };

    return (
        <section id="contact" className="relative py-20 bg-black overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 opacity-30 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn delay={0}>
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                            <MessageSquare className="w-4 h-4 text-primary" />
                            <span className="text-sm text-primary font-medium tracking-wider uppercase">
                                Get In Touch
                            </span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-normal text-white mb-3">
                            Let’s Work Together
                        </h2>

                        <p className="text-lg text-white/60 max-w-2xl mx-auto">
                            Feel free to reach out for collaborations or just a friendly hello 👋
                        </p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-12">
                    <FadeIn delay={100}>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm text-white/80 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder-white/40 focus:text-white"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-white/70 mb-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder-white/40 focus:text-white"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-white/70 mb-1">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder-white/40 focus:text-white resize-none"
                                    />
                                </div>

                                <button type="submit" className="w-full px-6 py-3 rounded-xl bg-primary text-white flex justify-center gap-2">
                                    Send Message <Send className="w-5 h-5" />
                                </button>

                                {status.message && (
                                    <div className="text-sm">{status.message}</div>
                                )}
                            </form>
                        </div>
                    </FadeIn>

                    {/* Contact Info */}
                    <FadeIn delay={200}>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold text-white mb-4">
                                    Let's Contact
                                </h3>
                                <p className="text-white/60 leading-relaxed">
                                    I'm always open to discussing new project, creative ideas, or oppertunities to be part of your vision. Feel free to reach out!
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-linear-to-br from-primary/20 to-primary/20 border border-primary/30 rounded-xl">
                                            <Mail className="w-6 h-6 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-white/60 mb-1">Email</p>
                                            <a href={`mailto:${PERSONAL_INFO.email}`}
                                                className="text-white hover:text-primary transition-colors font-medium"
                                            >
                                                {PERSONAL_INFO.email}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none" />
                                </div>

                                <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-linear-to-br from-primary/20 to-primary/20 border border-primary/30 rounded-xl">
                                            <MapPin className="w-6 h-6 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-white/60 mb-1">Location</p>
                                            <p className="text-white font-medium">{PERSONAL_INFO.location}</p>
                                        </div>
                                    </div>
                                    <div />
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
                                                <a key={platform}
                                                    href={url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-primary/50 hover:scale-110 transition-all duration-300 group"
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
