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
      title: 'Visual Identity & UI',
      desc: 'Crafting high-impact branding, poster designs, and intuitive user interfaces.',
      icon: Sparkles,
    },
    {
      title: 'Data & Workflow',
      desc: 'Building advanced spreadsheet systems to optimize productivity.',
      icon: Zap,
    },
  ];

  const skills = [
    { name: 'Canva', icon: SiCanva },
    { name: 'CorelDRAW', icon: SiCoreldraw },
    { name: 'Figma', icon: SiFigma },
    { name: 'Photoshop', icon: SiAdobephotoshop },
    { name: 'InDesign', icon: SiAdobeindesign },
    { name: 'Spreadsheet', icon: TbTable },
  ];

  return (
    <section id="about" className="relative py-20 md:py-20 bg-black overflow-hidden scroll-mt-1">
      <RadialGradientBackground variant="about" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start mb-16">

          {/* ================= LEFT COLUMN (Bio & Stats) ================= */}
          <div className="flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-6">
              <FadeIn delay={60}>
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/30 bg-primary/10 rounded-full w-fit">
                  <PenTool className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs md:text-sm text-primary font-bold uppercase tracking-wider">
                    Creative Designer & Systems Builder
                  </span>
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                  Creating Superior Digital Experiences
                </h2>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="flex flex-col gap-4">
                  {PERSONAL_INFO.bio.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-sm md:text-base text-white/70 leading-relaxed [&>b]:text-white [&>b]:font-bold"
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))}
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={300}>
              <div className="flex flex-col gap-6">
                {/* Stats Mobile Friendly */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {ABOUT_STATS.map((stat, index) => (
                    <div key={index} className="relative pl-4">
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-transparent rounded-full" />
                      <div className="text-xl md:text-2xl font-bold text-white font-mono">{stat.value}</div>
                      <p className="text-xs text-white/50 uppercase tracking-tighter">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => window.open(PERSONAL_INFO.resume, '_blank')}
                  className="inline-flex w-full md:w-fit justify-center items-center gap-2 bg-white text-black font-bold rounded-xl px-6 py-4 text-sm transition-all hover:bg-primary hover:text-white group"
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Download Resume
                </button>
              </div>
            </FadeIn>
          </div>

          {/* ================= RIGHT COLUMN (Cards) ================= */}
          <FadeIn delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Graphic Design - Full Width Mobile */}
              <div className="sm:col-span-2 relative bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <PenTool className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Graphic Design</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Creating clear and consistent visuals that strengthen product identity.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Cards */}
              {serviceCards.map((item, i) => (
                <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}

              {/* Bottom Mini Stats */}
              <div className="sm:col-span-2 bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-lg md:text-xl font-bold text-primary">98%</div>
                    <div className="text-[10px] text-white/40 uppercase">Satisfaction</div>
                  </div>
                  <div className="border-x border-white/5">
                    <div className="text-lg md:text-xl font-bold text-primary">24/7</div>
                    <div className="text-[10px] text-white/40 uppercase">Support</div>
                  </div>
                  <div>
                    <div className="text-lg md:text-xl font-bold text-primary">Fast</div>
                    <div className="text-[10px] text-white/40 uppercase">Delivery</div>
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
