import React from 'react';
import { ExternalLink, TrendingUp } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const { title, description, image, technologies, metrics, demoUrl } = project;

  return (
    <div className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

        {demoUrl && (
          <div className="absolute bottom-4 right-4 flex items-center gap-3">
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-110"
              title="View Demo"
            >
              <ExternalLink className="w-4 h-4 text-white" />
            </a>
          </div>
        )}

        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium text-white bg-black/40 backdrop-blur-sm border border-white/20 rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-lg lg:text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-white/60 leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies?.map((tech, index) => (
            <span key={index} className="px-2.5 py-1 text-[11px] sm:text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors duration-200">
              {tech}
            </span>
          ))}
        </div>

        {metrics && (
          <div className="flex items-center gap-2 pt-3 border-t border-white/10">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <p className="text-sm font-medium text-blue-400">{metrics}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
