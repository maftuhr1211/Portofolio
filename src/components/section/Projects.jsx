import React, { useState, useRef } from "react"
import { projects, categories } from '../../data/projects'
import { Target, FileSpreadsheet, Image, BarChart3, Layout, Sparkles, Briefcase, ChevronLeft, ChevronRight } from "lucide-react"
import ProjectCard from '../ui/ProjectCard'
import FadeIn from "../animations/FadeIn"

const Projects = () => {

    const [activeCategory, setActiveCategory] = useState('All');
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.category === activeCategory)

    // Atur ulang carousel saat kategori berubah
    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setCurrentIndex(0);
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
    };

    const getVisibleCards = () => {
        const w = window.innerWidth;
        if (w < 640) return 1;       // mobile
        if (w < 1024) return 2;      // tablet
        return 3;                   // desktop
    };

    const scrollToIndex = (index) => {
        setCurrentIndex(index);

        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;

            const isMobile = window.innerWidth < 768;
            const visibleCards = isMobile ? 1 : 3;

            const cardWidth = container.offsetWidth / visibleCards;

            container.scrollTo({
                left: cardWidth * index,
                behavior: 'smooth',
            });
        }
    };


    const nextSlide = () => {
        const isMobile = window.innerWidth < 768;
        const visibleCards = isMobile ? 1 : 3;

        const maxIndex = Math.max(
            0,
            filteredProjects.length - visibleCards
        );

        const newIndex = Math.min(currentIndex + 1, maxIndex);
        scrollToIndex(newIndex);
    };


    const prevSlide = () => {
        const newIndex = Math.max(currentIndex - 1, 0);
        scrollToIndex(newIndex);
    };

    // Category icons mapping
    const categoryIcons = {
        'All': Target,
        'Spreadsheets': FileSpreadsheet,
        'Poster': Image,
        'Infografis': BarChart3,
        'UI Design': Layout,
        'Other': Sparkles,
    };

    return (
        <section id="projects" className="relative scroll-mt-4 bg-black overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl" />
                <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl" />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-13">
                <FadeIn delay={0}>
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
                            <Briefcase className="w-4 h-4 text-primary" />
                            <span className="text-sm text-primary font-medium">My Work</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-normal text-white mb-3">
                            Featured Projects
                        </h2>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto">
                            Showcasing my best work and achievements
                        </p>
                    </div>
                </FadeIn>

                {/* Category Filter */}
                <FadeIn delay={100}>
                    <div className="flex flex-wrap justify-center gap-3 mb-14">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                                    ? 'text-white'
                                    : 'text-white/60 hover:text-white'
                                    }`}
                            >
                                <div className={`absolute inset-0 rounded-full transition-all duration-300 ${activeCategory === category
                                    ? 'bg-primary/10 opacity-100'
                                    : 'bg-white/5 border border-white/10 group-hover:bg-white/10'
                                    }`} />

                                <div className="relative flex items-center gap-2">
                                    {React.createElement(categoryIcons[category] || Target, {
                                        className: "w-4 h-4",
                                    })}
                                    <span className="text-sm">
                                        {category}
                                    </span>
                                </div>


                                {activeCategory === category && (
                                    <div className="absolute inset-0 rounded-full bg-primary blur-xl opacity-50 z-10" />
                                )}
                            </button>
                        ))}
                    </div>
                </FadeIn>

                {/* Projects Carousel */}
                <FadeIn delay={200}>
                    <div className="relative">
                        <div
                            ref={scrollContainerRef}
                            className="overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
                        >
                            <div className="flex gap-6 pb-4">
                                {filteredProjects.map((project, index) => (
                                    <div
                                        key={project.id}
                                        className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start"
                                    >
                                        <ProjectCard project={project} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        {filteredProjects.length > getVisibleCards() && (
                            <>
                                <button
                                    onClick={prevSlide}
                                    disabled={currentIndex === 0}
                                    className="flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10"
                                    aria-label="Previous projects"
                                >
                                    <ChevronLeft className="w-6 h-6 text-white" />
                                </button>

                                <button
                                    onClick={nextSlide}
                                    disabled={currentIndex >= filteredProjects.length - getVisibleCards()}
                                    className="flex absolute right-0 top-1/2 -transalte-y-1/2 -translate-x-2 lg:-translate-x-4 items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10"
                                    aria-label="Next projects"
                                >
                                    <ChevronRight className="w-6 h-6 text-white" />
                                </button>
                            </>
                        )}

                        {/* Navigation Dots */}
                        {filteredProjects.length > 3 && (
                            <div className="flex items-center justify-center gap-2 mt-8">
                                {Array.from({ length: Math.max(0, filteredProjects.length - getVisibleCards() + 1), }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => scrollToIndex(index)}
                                        className={`transition-all duration-300 rounded-full ${index === currentIndex
                                            ? 'bg-primary w-6 h-2'
                                            : 'bg-white/30 w-2 h-2 hover:bg-white/50'
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}

export default Projects
