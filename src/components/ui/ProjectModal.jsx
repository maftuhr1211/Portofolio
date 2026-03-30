import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const ProjectModal = ({ project, onClose }) => {
    const [activeImage, setActiveImage] = useState(0);
    const touchStartX = useRef(null);

    const nextImage = () => {
        setActiveImage((prev) =>
            prev === project.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setActiveImage((prev) =>
            prev === 0 ? project.images.length - 1 : prev - 1
        );
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;

        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX.current - touchEndX;

        if (diff > 50) {
            nextImage();
        } else if (diff < -50) {
            prevImage();
        }

        touchStartX.current = null;
    };

    // 🔒 Lock scroll background saat modal aktif
    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, []);

    if (!project) return null;

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative bg-neutral-900 rounded-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto p-6 shadow-2xl"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/60 hover:text-white"
                >
                    <X />
                </button>

                {/* Main Image */}
                <div
                    className="relative mb-4 h-80 sm:h-96 lg:h-[550px] overflow-hidden rounded-xl"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <img
                        src={project.images[activeImage]}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        draggable="false"
                    />

                    {/* Arrow Controls */}
                    {project.images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white hover:bg-black/70"
                            >
                                <ChevronLeft />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white hover:bg-black/70"
                            >
                                <ChevronRight />
                            </button>
                        </>
                    )}
                </div>

                {/* Thumbnail Gallery */}
                {project.images.length > 1 && (
                    <div className="flex gap-3 mb-6 overflow-x-auto">
                        {project.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt="preview"
                                onClick={() => setActiveImage(index)}
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                                    activeImage === index
                                        ? "border-primary"
                                        : "border-transparent"
                                }`}
                            />
                        ))}
                    </div>
                )}

                {/* Title */}
                <h3 className="text-2xl text-white mb-2">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 mb-4">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3">
                    {project.technologies?.map((tech, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Demo Link */}
                {/*
                {project.demoUrl && (
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-6 px-5 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition"
                    >
                        Visit Project
                    </a>
                )}
                */}
            </div>
        </div>
    );
};

export default ProjectModal;