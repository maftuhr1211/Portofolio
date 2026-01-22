import React from 'react';
import { Download, PenTool, Sparkles, Zap } from 'lucide-react';
import { SiCanva, SiCoreldraw, SiFigma, SiAdobephotoshop, SiAdobeindesign } from 'react-icons/si';
import { TbTable } from 'react-icons/tb';
import { PERSONAL_INFO, ABOUT_STATS } from '../../utils/constants';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

const About = () => {

  const serviceCards = [
    {
      title: 'Graphic Design',
      desc: 'Creating clear and consistent visuals that strengthen product identity.',
      icon: Sparkles,
    },
    {
      title: 'Performance',
      desc: 'Designing efficient interfaces that reduce friction.',
      icon: Zap,
    },
  ];

  const skills = [
    { name: 'Canva', icon: SiCanva },
    { name: 'CorelDRAW', icon: SiCoreldraw },
    { name: 'Figma', icon: SiFigma },
    { name: 'Adobe Photoshop', icon: SiAdobephotoshop },
    { name: 'Adobe InDesign', icon: SiAdobeindesign },
    { name: 'Spreadsheet', icon: TbTable },
  ];

  return (
    <section
      id="about"
      className="relative py-14 bg-black overflow-hidden scroll-mt-12"
    >
      <RadialGradientBackground variant="about" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          {/* ================= LEFT COLUMN ================= */}
          <div className="flex flex-col gap-12">

            {/* Heading & Bio */}
            <div className="flex flex-col gap-8">

              <FadeIn delay={60}>
                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit">
                  <PenTool className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">
                    Digital Design Developer
                  </span>
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight">
                  Creating Superior Digital Experiences
                </h2>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="flex flex-col gap-3">
                  {PERSONAL_INFO.bio.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-[14px] md:text-[15px] lg:text-[16px] text-white/70 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </FadeIn>

            </div>

            {/* ================= STATS + CTA (FIXED) ================= */}
            <FadeIn delay={300}>
              <div className="flex flex-col gap-5">

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8">
                  {ABOUT_STATS.map((stat, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-primary via-primary/50 to-primary/20 rounded-full"></div>
                      <div className="text-2xl font-normal text-white mb-2 font-mono">
                        {stat.value}
                      </div>
                      <p className="text-sm text-white/60 leading-snug">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="w-16 h-px bg-white/20"></div>

                {/* CTA */}
                <button
                  onClick={() => window.open(PERSONAL_INFO.resume, '_blank')}
                  className="inline-flex w-fit items-center gap-2 bg-white text-[#212121] font-medium border border-white rounded-xl px-4 py-4 text-sm transition-all duration-300 hover:bg-[#1e293b] hover:text-white hover:scale-[1.02] active:scale-[0.97]"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </button>

              </div>
            </FadeIn>

          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <FadeIn delay={200}>
            <div className="grid grid-cols-2 gap-4">

              {/* Expertise */}
              <div className="col-span-2 relative group">
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <PenTool className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Expertise
                      </h3>
                      <p className="text-sm text-white/70 leading-relaxed">
                        Designing digital products with a strong focus on user experience, visual clarity, and scalable design systems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cards */}
              {serviceCards.map((item, i) => (
                <div
                  key={i}
                  className="relative bg-white/5 border border-white/10 rounded-2xl p-6"
                >
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>

                  <h3 className="text-base font-semibold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-white/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}

              {/* Bottom Stats */}
              <div className="col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="grid grid-cols-3 text-center gap-6">
                  <div>
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-xs text-white/60">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-xs text-white/60">Support</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">Fast</div>
                    <div className="text-xs text-white/60">Delivery</div>
                  </div>
                </div>
              </div>

            </div>
          </FadeIn>

        </div>

        {/* ================= SKILLS ================= */}
        <FadeIn delay={500}>
          <div className="flex flex-col items-center gap-8">
            <h3 className="text-2xl text-white">Tech Stack & Expertise</h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-4xl">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 ease-out hover:scale-105 hover:border-primary/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]"
                >
                  <div className="flex items-center justify-center h-10">
                    <skill.icon className="text-3xl text-primary block" />
                  </div>

                  <span className="text-sm text-white/80 text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default About;
