import React, { useState, useEffect } from 'react';
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
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    // ✅ INIT EMAILJS
    useEffect(() => {
        emailjs.init("ChVeU371MCGGKNdoN");
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
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

        setLoading(true);

        try {
            await emailjs.send(
                "service_12mroy",
                "template_zsscd93",
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                }
            );

            setStatus({
                type: 'success',
                message: "Message sent successfully! I'll get back to you soon."
            });

            setFormData({ name: '', email: '', message: '' });

        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus({
                type: 'error',
                message: "Failed to send message. Please try again."
            });
        }

        setLoading(false);
        setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    };

    const socialIcons = {
        linkedin: Linkedin,
        instagram: Instagram,
        mail: Mail
    };

    return (
        <section id="contact" className="relative scroll-mt-5 bg-black overflow-hidden">
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
                            Feel free to reach out for collaborations 👋
                        </p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <FadeIn delay={100}>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                            <form onSubmit={handleSubmit} className="space-y-4">

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white"
                                />

                                <textarea
                                    name="message"
                                    rows={5}
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white"
                                />

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full px-5 py-2.5 rounded-lg bg-primary text-white flex justify-center items-center gap-2"
                                >
                                    {loading ? "Sending..." : "Send Message"}
                                    <Send className="w-4 h-4" />
                                </button>

                                {status.message && (
                                    <div className={`text-sm mt-2 ${status.type === 'success'
                                        ? 'text-green-400'
                                        : 'text-red-400'
                                        }`}>
                                        {status.message}
                                    </div>
                                )}
                            </form>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default Contact;
