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

                    <FadeIn delay={200}>
                        <div>
                            <div>
                                <Mail />
                                <a href={`mailto:${PERSONAL_INFO.email}`}>
                                    {PERSONAL_INFO.email}
                                </a>
                            </div>

                            <div>
                                <MapPin />
                                <p>{PERSONAL_INFO.location}</p>
                            </div>

                            <div>
                                {Object.entries(SOCIAL_LINKS)
                                    .slice(0, 3)
                                    .map(([platform, url]) => {
                                        const Icon = socialIcons[platform];
                                        return Icon ? (
                                            <a key={platform} href={url} target="_blank" rel="noopener noreferrer">
                                                <Icon />
                                            </a>
                                        ) : null;
                                    })}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default Contact;
