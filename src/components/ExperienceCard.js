import React from 'react';
import { ExternalLink } from 'lucide-react';

function ExperienceCard({ date, title, description, technologies, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="flex flex-col md:flex-row gap-6 p-6 rounded-lg hover:bg-maroon-900/10 transition-all duration-300">
        <div className="text-m text-maroon-400 font-medium md:min-w-[100px] pt-1">
          {date}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-semibold text-maroon-300 group-hover:text-maroon-200 transition-colors">
              {title}
            </h3>
            <ExternalLink 
              size={18} 
              className="text-maroon-600 group-hover:text-maroon-400 transition-colors opacity-0 group-hover:opacity-100" 
            />
          </div>
          <p className="text-gray-400 mb-4 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs rounded-full bg-maroon-900/30 text-maroon-300 border border-maroon-800/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}

export default ExperienceCard;
