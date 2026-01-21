import React, { useState } from 'react';
import { Download, PenTool, Sparkles } from 'lucide-react';
import { SiCanva, SiCoreldraw, SiFigma, SiAdobephotoshop, SiAdobeindesign } from 'react-icons/si';
import { TbTable } from 'react-icons/tb';
import { PERSONAL_INFO, ABOUT_STATS } from '../../utils/constants';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';
import { BiParagraph } from 'react-icons/bi';

const About = () => {

  //Skills
  const skills = [
    { name: 'Canva', icon: SiCanva, color: '#00C4CC' },
    { name: 'CorelDRAW', icon: SiCoreldraw, color: '#46A049' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    { name: 'Adobe Photoshop', icon: SiAdobephotoshop, color: '#31A8FF' },
    { name: 'Adobe InDesign', icon: SiAdobeindesign, color: '#FF3366' },
    { name: 'Spreadsheet', icon: TbTable, color: '#217346' },
  ];


  return <section id="about" className="relative py-6 md:py-10 bg-black overflow-hidden scroll-mt-12">
    <RadialGradientBackground variant="about" />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-12 md:mb-20">
        {/* Left Colomn - Content */}
        <div className="flex flex-col mb-12 md:mb-20">
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
              <h2 className="text-2xl min-[850px]:text-4xl min-[1000px]:text-5xl font-normal text-white leading-light">
                Creating Superior Digital Experiences
              </h2>
            </FadeIn>

            {/* Isi konten ngambil dari constants.js */}
            <FadeIn delay={200}>
              <div className="flex flex-col gap-3 md:gap-2.5">
                {PERSONAL_INFO.bio.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-[14px] min-[850px]:text-[15px] min-[1000px]:text-[16px] text-white/70 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>


            </FadeIn>
          </div>

          <FadeIn delay={300}>
            <div className="grid grid-cols-3 gap-8">
              {ABOUT_STATS.map((stat, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-primary via-primary/50 to-primary/20 rounded-full"></div>
                  <div className="text-3xl font-normal text-white mb-2 font-mono">
                    {stat.value}
                  </div>
                  <p className="text-sm text-white/60 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <button
              onClick={() => window.open(PERSONAL_INFO.resume, '_blank')}
              className="inline-flex items-center gap-2 bg-white text-[#212121] font-medium border border-white rounded-[14px] md:rounded-[16px] lg:rounded-[17px] px-4 py-2 min-[850px]:px-5 min-[850px]:py-2.5 lg:px-[26px] lg:py-[13px] text-sm min-[850px]:text-base transition-all duration-300 ease-out hover:bg-[#1e293b] hover:text-white hover:scale-[1.02] hover:shadow-[0_0_18px_rgba(30,41,59,0.45)] active:scale-[0.97]"
            >
              <Download className="w-5 h-5 transition-transform duration-300" />
              Download Resume
            </button>

          </FadeIn>
        </div>

        {/* Right Column - Info Grid */}
        <FadeIn delay={200}>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 relative group">
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity duration-300"></div>
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <PenTool className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">Expertise</h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">Graphic Design</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                  <Download className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">Performance</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>

            <div className="col-span-2 relative group">
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">100%</div>
                    <div className="text-xs text-white/60">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-xs text-white/60">Support Available</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">Fast</div>
                    <div className="text-xs text-white/60">Delivery Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Skills Grid Section */}
      <FadeIn delay={500}>
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-normal text-white mb-2">
              Tech Stack & Expertise
            </h3>
            <p className="text-sm text-white/60">
              Technologies I work with to build amazing product
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-4xl">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-105"
              >
                <skill.icon className="text-3xl text-primary" />
                <div className="text-sm text-white/80 font-medium text-center">
                  {skill.name}
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primari/0 group-hover:from-primary/10 group-hover:to-primary/10 rounded-2xl transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  </section>

};

export default About;
