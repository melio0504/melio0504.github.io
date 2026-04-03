import React, { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import CertificationCard from "./CertificationCard";
import ProjectCard from "./ProjectCard.jsx";
import ImageModal from "./ImageModal";
import experiences from "../data/experiences.json";
import certifications from "../data/certifications.json";
import projects from "../data/projects.json";

function MainContent() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="w-full lg:ml-[50%] min-h-screen z-10">
      <div className="max-w-4xl lg:max-w-2xl mx-auto lg:mx-0 py-8 lg:py-20">
        <section id="about" className="mb-10">
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Hi, I’m <b>Romelio</b> from <b>Manila, Philippines</b>. I’m
              currently a 3rd-year BSIT student with a strong interest in web
              technologies and the role they play in making information easier
              and faster to reach. Right now, I’m currently exploring different
              areas of web development and enjoying the process of learning and
              building things along the way.
            </p>
            <p>
              I’m an advocate of <b>open-source software</b> because it makes
              technology more accessible, encourages people to learn from one
              another, and helps communities build better tools together. I’m
              also enthusiastic about <b>Linux</b>, <b>Git</b>, and{" "}
              <b>ThinkPad</b>, and I look up to Linus Torvalds as one of my role
              models in the tech industry. The openness, collaboration, and
              innovation in this space are a big part of what inspires me.
            </p>
            <p>
              Outside of programming, I enjoy listening to music, especially The
              Beatles, with Revolver as my favorite album. I’m also a huge
              Formula 1 fan and, unfortunately, I support Ferrari.
            </p>
          </div>
        </section>
        <section id="experience" className="mb-10">
          <h2 className="text-3xl font-bold text-maroon-300 mb-8">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </section>
        <section id="certifications" className="mb-10">
          <h2 className="text-3xl font-bold text-maroon-300 mb-8">
            Certifications
          </h2>
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <CertificationCard
                key={index}
                {...cert}
                onImageClick={() =>
                  setSelectedImage({ image: cert.image, title: cert.title })
                }
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
          <p className="text-sm text-gray-400 text-center leading-relaxed">
            Design inspired by Brittany Chiang, refined with my own personal
            touch. Built with React.js, Tailwind CSS, and Vite, and deployed
            through GitHub Pages. Crafted with care and attention to detail.
          </p>
        </footer>
      </div>
    </main>
  );
}

export default MainContent;
