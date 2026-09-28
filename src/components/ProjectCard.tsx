import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

export interface ProjectCardProps {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  technologies: string[];
  badge?: string;
  note?: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  description,
  image,
  technologies,
  badge,
  note,
  githubUrl,
  liveUrl,
}) => {
  return (
    <article className="group flex flex-col h-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden hover:border-blue-400/30 hover:-translate-y-1 transition duration-300">
      <div className="relative overflow-hidden bg-gray-900 aspect-[16/9]">
        <img
          src={image}
          alt={`${title} preview`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
        {badge && (
          <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-blue-500 text-[11px] font-semibold uppercase tracking-wide text-white">
            {badge}
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        {subtitle && (
          <p className="text-xs font-medium uppercase tracking-wider text-blue-400 mb-1.5">
            {subtitle}
          </p>
        )}
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-4">{description}</p>

        <ul className="flex flex-wrap gap-1.5 mb-5" aria-label="Technologies">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-xs text-gray-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <div className="flex items-center gap-5 text-sm font-medium">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
              >
                Live Demo
                <ArrowUpRight size={15} />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
              >
                <Github size={15} />
                Source
              </a>
            )}
          </div>
          {note && <p className="mt-3 text-[11px] leading-snug text-gray-500">{note}</p>}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
