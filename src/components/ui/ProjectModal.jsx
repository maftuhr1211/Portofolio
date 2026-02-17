import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

const ProjectModal = ({ project, onClose }) => {
    const [activeImage, setActiveImage] = useState(0);
    const touchStartX = useRef(null);
    const nextImage = () => {
        setActiveImage((prev) =>
            prev === project.images.length - 1 ? 0 : prev + 1
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
            nextImage(); // swipe kiri → next
        } else if (diff < -50) {
            prevImage(); // swipe kanan → prev
        }

        touchStartX.current = null;
    };

    const prevImage = () => {
        setActiveImage((prev) =>
            prev === 0 ? project.images.length - 1 : prev - 1
        );
    };


    if (!project) return null;

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative bg-neutral-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/60 hover:text-white"
                >
                    <X />
                </button>

                {/* Main Image */}
                <div
                    className="relative mb-4"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}>
                    <img
                        src={project.images[activeImage]}
                        alt={project.title}
                        className="rounded-xl w-full select-none"
                        draggable="false"
                    />

                    {project.images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm p-2 rounded-full hover:bg-black/70 transition"
                            >
                                <ChevronLeft className="w-5 h-5 text-white" />
                            </button>

                            <button
                                onClick={nextImage}
                                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm p-2 rounded-full hover:bg-black/70 transition"
                            >
                                <ChevronRight className="w-5 h-5 text-white" />
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
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${activeImage === index
                                    ? "border-primary"
                                    : "border-transparent"
                                    }`}
                            />
                        ))}
                    </div>
                )}

                <h3 className="text-2xl text-white mb-2">
                    {project.title}
                </h3>

                <p className="text-white/60 mb-4">
                    {project.description}
                </p>

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
            </div>
        </div>
    );
};

export default ProjectModal;
