import React, { useState, useEffect } from 'react';
import { Github, Linkedin, BookOpen, Instagram, Mail } from 'lucide-react';
import profilePicture from '../../public/images/picture.jpg';

function Sidebar() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'certifications', 'projects'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full md:fixed md:left-0 md:top-0 md:w-1/2 md:h-screen flex flex-col justify-center items-center p-6 md:p-8 z-10 py-12 md:py-8">
      <div className="max-w-md flex flex-col items-center md:items-start">
        <div className="w-56 h-56 min-w-[224px] min-h-[224px] flex-shrink-0 rounded-full bg-maroon-800/50 border-2 border-maroon-600 mb-6 flex items-center justify-center overflow-hidden">
          <img 
            src={profilePicture} 
            alt="Profile" 
            className="object-cover rounded-full flex-shrink-0 select-none"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
        <h1 className="text-5xl font-bold text-maroon-300 mb-4 w-full whitespace-nowrap text-center md:text-left">Romelio Teodoro</h1>
        <h1 className="text-2xl text-maroon-300 mb-4 text-center md:text-left w-full">Full-stack Web Developer</h1>
        <a 
          href="mailto:romelioteodoro1005@gmail.com" 
          className="text-gray-400 hover:text-maroon-300 mb-8 transition-colors flex items-center gap-2 justify-center md:justify-start text-center md:text-left w-full"
        >
          <Mail size={20} />
          <span>romelioteodoro1005@gmail.com</span>
        </a>
        <nav className="mb-8 w-full">
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className={`text-center md:text-left transition-colors w-full ${
                  activeSection === 'about'
                    ? 'text-maroon-300'
                    : 'text-gray-400 hover:text-maroon-400'
                }`}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('experience')}
                className={`text-center md:text-left transition-colors w-full ${
                  activeSection === 'experience'
                    ? 'text-maroon-300'
                    : 'text-gray-400 hover:text-maroon-400'
                }`}
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('certifications')}
                className={`text-center md:text-left transition-colors w-full ${
                  activeSection === 'certifications'
                    ? 'text-maroon-300'
                    : 'text-gray-400 hover:text-maroon-400'
                }`}
              >
                Certifications
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projects')}
                className={`text-center md:text-left transition-colors w-full ${
                  activeSection === 'projects'
                    ? 'text-maroon-300'
                    : 'text-gray-400 hover:text-maroon-400'
                }`}
              >
                Projects
              </button>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-4 justify-center md:justify-start">
          <a
            href="https://github.com/melio0504"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-maroon-300 transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/romelioteodoro/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-maroon-300 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://www.goodreads.com/user/show/170015699-romelio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-maroon-300 transition-colors"
            aria-label="Goodreads"
          >
            <BookOpen size={24} />
          </a>
          <a
            href="https://www.instagram.com/melio0504/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-maroon-300 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
