import { ChevronDown, Star } from 'lucide-react';
import {
  SiCanva,
  SiCoreldraw,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeindesign
} from 'react-icons/si';
import { PERSONAL_INFO, STATS } from '../../utils/constants';
import { scrollToSection } from '../../hooks/useScrollSpy';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <RadialGradientBackground variant="hero" />

      {/* FULL WIDTH CONTAINER */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-6 items-start">

          {/* LEFT CONTENT */}
          <div className="text-left max-w-xl lg:max-w-none relative">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 px-[16px] py-[9px] mb-6 bg-linear-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full">
                <Star className="w-4 h-4 text-white fill-white" />
                <span className="text-xs md:text-sm text-white tracking-[1.2px]">
                  {PERSONAL_INFO.title} | Based in {PERSONAL_INFO.location}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="text-2xl min-[850px]:text-4xl min-[1000px]:text-5xl font-normal text-white mb-5 leading-snug">
                Digital Product Designer
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-[14px] min-[850px]:text-[15px] min-[1000px]:text-[16px] text-white/70 mb-3 min-[850px]:mb-5 lg:mb-6 leading-relaxed">
                I am a Digital Product & Productivity Designer focused on designing digital products that are functional, efficient, and user-centered.
                I have experience in crafting structured, scalable digital products and systems that support user productivity.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center mb-3 min-[850px]:md:mb-5 lg:mb-6"
              >
                <div className="bg-white text-[#212121] font-medium border border-white rounded-[14px] md:rounded-[16px] lg:rounded-[17px] px-4 py-2 min-[850px]:px-5 min-[850px]:py-2.5 lg:px-[26px] lg:py-[13px] text-sm min-[850px]:text-base lg:text-base transition-all duration-300 ease-out hover:bg-[#1e293b] hover:text-white hover:scale-[1.02] hover:shadow-[0_0_18px_rgba(30,41,59,0.45)] active:scale-[0.97]">
                  Get in Touch
                </div>
              </button>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8">
                {STATS.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center border-r border-white/40 pr-3 md:pr-6 -translate-x-[2px] last:border-r-0"
                  >
                    <div className="ml-[-9px] text-[25px] font-normal text-primary mb-0 font-mono">
                      {stat.value}
                    </div>
                    <p className="ml-[-9px] text-[10px] md:text-xs lg:text-[14px] text-white leading-relaxed max-w-[120px]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>


          </div>

          {/* RIGHT IMAGE */}
          <FadeIn delay={200}>
            <div className=" relative flex justify-center md:justify-end md:items-start ">
              <div className="relative overflow-hidden rounded-2xl aspect-4/5 w-full max-w-[min(90vw,380px)]">
                <div className="absolute inset-[-2px] bg-linear-to-r from-primary/20 via-primary/10 to-primary animate-spin-slow rounded-2xl" />

                <div className="relative rounded-2xl overflow-hidden m-[1.5px] h-[calc(100%-3px)]">
                  <img
                    src="/assets/Royfoto.png"
                    alt="Developer at Work"
                    className="w-full h-full object-cover"
                  />
                </div>


                {/* TOOLS */}
                <div className="absolute bottom-6 left-6">
                  <FadeIn delay={500}>
                    <div className="flex items-center gap-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
                      <SiCanva className="w-6 h-6 text-primary transition-all duration-300 ease-out hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                      <SiCoreldraw className="w-6 h-6 text-primary transition-all duration-300 ease-out hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                      <SiFigma className="w-6 h-6 text-primary transition-all duration-300 ease-out hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                      <SiAdobephotoshop className="w-6 h-6 text-primary transition-all duration-300 ease-out hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                      <SiAdobeindesign className="w-6 h-6 text-primary transition-all duration-300 ease-out hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* SCROLL INDICATOR */}
          <button
            onClick={() => scrollToSection('about')}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          >
            <ChevronDown className="w-8 h-8 text-primary" />
          </button>

        </div>
      </div>

    </section>
  );
};

export default Hero;
