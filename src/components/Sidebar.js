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
    <div className="w-full lg:fixed lg:left-0 lg:top-0 lg:w-1/2 lg:h-screen flex flex-col justify-center items-center p-6 lg:p-8 z-10 py-12 lg:py-8">
      <div className="max-w-md flex flex-col items-center lg:items-start">
        <div className="w-56 h-56 min-w-[224px] min-h-[224px] flex-shrink-0 rounded-full mb-6 flex items-center justify-center overflow-hidden">
          <img 
            src={profilePicture} 
            alt="Profile" 
            className="object-cover rounded-full flex-shrink-0 select-none"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 w-full whitespace-nowrap text-center lg:text-left">Romelio Teodoro</h1>
        <h1 className="text-2xl mb-4 text-center lg:text-left w-full">Full-stack Web Developer</h1>
        <a 
          href="mailto:romelioteodoro1005@gmail.com" 
          className="text-gray-400 mb-8 hover:brightness-150 transition-all duration-300 flex items-center gap-2 justify-center lg:justify-start text-center lg:text-left w-full"
        >
          <Mail size={20} />
          <span>romelioteodoro1005@gmail.com</span>
        </a>
        <nav className="hidden lg:block mb-8 w-full">
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className={`text-center lg:text-left hover:brightness-150 transition-all duration-300 w-full flex items-center group ${
                  activeSection === 'about'
                    ? 'brightness-150'
                    : 'text-gray-400'
                }`}
              >
                <span className={`mr-4 inline-block transition-all duration-300 origin-left scale-x-150 ${
                  activeSection === 'about'
                    ? 'scale-x-[4]'
                    : 'group-hover:scale-x-[4]'
                }`}>—</span>
                <span className={`transition-all duration-300 ${
                  activeSection === 'about'
                    ? 'translate-x-12'
                    : 'group-hover:translate-x-12'
                }`}>About</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('experience')}
                className={`text-center lg:text-left hover:brightness-150 transition-all duration-300 w-full flex items-center group ${
                  activeSection === 'experience'
                    ? 'brightness-150'
                    : 'text-gray-400'
                }`}
              >
                <span className={`mr-4 inline-block transition-all duration-300 origin-left scale-x-150 ${
                  activeSection === 'experience'
                    ? 'scale-x-[4]'
                    : 'group-hover:scale-x-[4]'
                }`}>—</span>
                <span className={`transition-all duration-300 ${
                  activeSection === 'experience'
                    ? 'translate-x-12'
                    : 'group-hover:translate-x-12'
                }`}>Experience</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('certifications')}
                className={`text-center lg:text-left hover:brightness-150 transition-all duration-300 w-full flex items-center group ${
                  activeSection === 'certifications'
                    ? 'brightness-150'
                    : 'text-gray-400'
                }`}
              >
                <span className={`mr-4 inline-block transition-all duration-300 origin-left scale-x-150 ${
                  activeSection === 'certifications'
                    ? 'scale-x-[4]'
                    : 'group-hover:scale-x-[4]'
                }`}>—</span>
                <span className={`transition-all duration-300 ${
                  activeSection === 'certifications'
                    ? 'translate-x-12'
                    : 'group-hover:translate-x-12'
                }`}>Certifications</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projects')}
                className={`text-center lg:text-left hover:brightness-150 transition-all duration-300 w-full flex items-center group ${
                  activeSection === 'projects'
                    ? 'brightness-150'
                    : 'text-gray-400'
                }`}
              >
                <span className={`mr-4 inline-block transition-all duration-300 origin-left scale-x-150 ${
                  activeSection === 'projects'
                    ? 'scale-x-[4]'
                    : 'group-hover:scale-x-[4]'
                }`}>—</span>
                <span className={`transition-all duration-300 ${
                  activeSection === 'projects'
                    ? 'translate-x-12'
                    : 'group-hover:translate-x-12'
                }`}>Projects</span>
              </button>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-4 justify-center lg:justify-start">
          <a
            href="https://github.com/melio0504"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:brightness-150 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/romelioteodoro/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:brightness-150 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://www.goodreads.com/user/show/170015699-romelio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:brightness-150 transition-all duration-300"
            aria-label="Goodreads"
          >
            <BookOpen size={24} />
          </a>
          <a
            href="https://www.instagram.com/melio0504/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:brightness-150 transition-all duration-300"
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
