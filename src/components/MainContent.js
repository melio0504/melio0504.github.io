import React, { useState } from 'react';
import ExperienceCard from './ExperienceCard';
import CertificationCard from './CertificationCard';
import ProjectCard from './ProjectCard';
import ImageModal from './ImageModal';

function MainContent() {
  const [selectedImage, setSelectedImage] = useState(null);

  const experiences = [
    {
      date: '2025 - present',
      title: 'Open Source Developer at BetterGov.ph',
      description: 'I started contributing to BetterGov.ph, an open-source initiative launched on September 19, 2025, with the mission to make Philippine government services more accessible and user-friendly online. I joined the project on September 25, 2025, and since then I’ve helped improve the portal by updating outdated links, refining design elements, and enhancing accessibility features. Through these volunteer efforts, I support the team’s vision of building a modern, inclusive, and reliable government portal for all citizens.',
      technologies: ['TypeScript', 'Vite', 'npm', 'Docker', 'Git/GitHub'],
      link: 'https://bettergov.ph/'
    }
  ];

  const certifications = [
    {
      image: '/images/SOSCONPH-2025.jpg',
      title: 'Samsung Open Source Conference Philippines 2025',
      description: 'This introduced me to the real impact of open-source in the Philippines, from industry talks to practical innovations. With their workshop, I learned all about Docker. Attending it helped me understand how collaboration shapes modern software development.'
    },
    {
      image: '/images/OSS_BetterGovPH.jpg',
      title: 'OSStober Weekends 2025 | BetterGovPH for a Better Philippines',
      description: 'From the creator, Mr. Jason Torres, I learned about BetterGovPH and its open-source initiatives that promote government transparency and accessibility. I explored projects like the Kapwa Design System, Open Budget Data, and Open Congress Data, which are designed to make public information easier to access and understand. He also shared the story of how and why he decided to begin this initiative.'
    },
    {
      image: '/images/OSS101.jpg',
      title: 'OSS101: Introduction to Open Source Software',
      description: 'I had the opportunity to learn from Mr. Joff Tiquez, founder of OSSPH, who introduced the fundamentals of Open Source Software and its impact on modern development. He explained the benefits of contributing to open source projects and highlighted the importance of understanding various OSS licenses. To apply what we learned, we also opened our first Pull Request on GitHub through a hands-on activity.'
    },
    {
      image: '/images/LFC112.jpg',
      title: 'LFC112: Creating Effective Documentation for Developers',
      description: 'This taught me how to write clearer and more useful documentation. I learned the importance of structure, consistency, and communication when creating developer guides.'
    },
    {
      image: '/images/LFD102.jpg',
      title: `LFD102: A Beginner's Guide to Open Source Software Development`,
      description: 'This helped me understand the full workflow of contributing to OSS, from version control to licensing. It boosted my confidence in participating in open-source communities.'
    },
    {
      image: '/images/LFS101.jpg',
      title: 'Introduction to Linux (LFS101)',
      description: 'This strengthened my understanding of Linux basics and terminal commands. It helped me become more comfortable working in a Linux environment, especially as someone who uses it daily for development.'
    }
  ];

  const projects = [
    {
      image: '/images/blepnote.png',
      title: 'BlepNote',
      description: 'A mental health tracker designed to help you monitor your daily mood and reflect on your thoughts, all with the support of a friendly cat companion.',
      technologies: ['JavaScript', 'TailwindCSS', 'HTML5'],
      link: 'https://blepnote.vercel.app/'
    },
    {
      image: '/images/restaurant-page.png',
      title: 'Restaurant Page',
      description: 'A minimal restaurant website built with Webpack, npm, ES6 modules, and vanilla JavaScript.',
      technologies: ['JavaScript', 'Webpack', 'npm', 'CSS3', 'HTML5'],
      link: 'https://melio0504.github.io/restaurant-page/'
    },
    {
      image: '/images/akda.png',
      title: 'Akda',
      description: `Akda is a simple website designed to help you track, manage, and organize books you've read and plan to read.`,
      technologies: ['JavaScript', 'CSS3', 'HTML5'],
      link: 'https://melio0504.github.io/akda/'
    },
    {
      image: '/images/calculator.png',
      title: 'Calculator',
      description: 'A website that lets you easily access and use a simple calculator for quick calculations.',
      technologies: ['JavaScript', 'CSS3', 'HTML5'],
      link: 'https://melio0504.github.io/calculator/'
    },
    {
      image: '/images/etch-a-sketch.png',
      title: 'Etch-a-Sketch',
      description: 'A website that lets you create pixel art with Etch A Sketch.',
      technologies: ['JavaScript', 'CSS3', 'HTML5'],
      link: 'https://melio0504.github.io/etch-a-sketch/'
    },
    {
      image: '/images/rock-paper-scissors.png',
      title: 'Rock-Paper-Scissors',
      description: 'A website that lets you play the classic Rock-Paper-Scissors game.',
      technologies: ['JavaScript', 'CSS3', 'HTML5'],
      link: 'https://melio0504.github.io/rock-paper-scissors/'
    },
    {
      image: '/images/tic-tac-toe.png',
      title: 'Tic Tac Toe',
      description: 'A simple web application to play Tic Tac Toe but with cats.',
      technologies: ['JavaScript', 'CSS3', 'HTML5'],
      link: 'https://melio0504.github.io/tic-tac-toe/'
    },
  ];

  return (
    <div className="w-full md:ml-[50%] md:w-1/2 min-h-screen">
      <div className="max-w-4xl mx-auto md:px-10 py-8 md:py-16">
        <section id="about" className="mb-10">
          <h2 className="text-3xl font-bold text-maroon-300 mb-6">About</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Hi, I’m Romelio from Manila, Philippines. I’m currently a 3rd-year BSIT student with a strong 
              interest in web technologies and the role they play in making information easier and 
              faster to reach. Right now, I’m currently exploring different areas of web development and enjoying 
              the process of learning and building things along the way.
            </p>
            <p>
              I’m an advocate of open source software and daily-drive Linux on my ThinkPad T480. 
              I’m also enthusiastic about Git and I look up to Linus Torvalds as one of my role models 
              in the tech industry. The openness, collaboration, and innovation in this space are a big 
              part of what inspires me.
            </p>
            <p>
              Outside of programming, I love listening to music, especially The Beatles, with Revolver 
              being my favorite album. I’m also a big Formula 1 fan and, unfortunately, I support Ferrari.
            </p>
          </div>
        </section>
        <section id="experience" className="mb-10">
          <h2 className="text-3xl font-bold text-maroon-300 mb-8">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </section>
        <section id="certifications" className="mb-10">
          <h2 className="text-3xl font-bold text-maroon-300 mb-8">Certifications</h2>
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <CertificationCard 
                key={index} 
                {...cert}
                onImageClick={() => setSelectedImage({ image: cert.image, title: cert.title })}
              />
            ))}
          </div>
        </section>
        
        {selectedImage && (
          <ImageModal
            image={selectedImage.image}
            title={selectedImage.title}
            onClose={() => setSelectedImage(null)}
          />
        )}
        <section id="projects" className="mb-24">
          <h2 className="text-3xl font-bold text-maroon-300 mb-8">Projects</h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
        <footer className="mt-24 pt-8">
          <p className="text-sm text-gray-500 text-center leading-relaxed">
            Design inspired by Brittany Chiang, refined with my own personal touch. 
            Built with React.js, Tailwind CSS, and Webpack, and deployed through GitHub Pages. 
            Crafted with care and attention to detail.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default MainContent;
