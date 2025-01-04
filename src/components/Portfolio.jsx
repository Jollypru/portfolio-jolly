import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Icons for GitHub and live demo links
import SectionTitle from './SectionTitle';

const projects = [
  {
    name: "Visa Navigator",
    description: "A platform that simplifies checking visa requirements, applying for visas online, and tracking applications.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Node.js"],
    github: "https://github.com/Jollypru/Visa-Navigator", 
    liveDemo: "https://assignment-10-your-next-visa.surge.sh/", 
  },
  {
    name: "Portfolio Website",
    description: "A personal portfolio website built using React, Tailwind CSS, and animations to showcase my skills and projects.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/yourusername/portfolio", // Replace with actual GitHub link
    liveDemo: "https://yourportfolio.com", // Replace with live demo link
  },
  {
    name: "Lingo Bingo",
    description: "An app designed to help users learn Korean, with vocabulary, grammar, and quizzes for efficient learning.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Jollypru/Lingo-Bingo", 
    liveDemo: "https://assignment-9-lingo-bingo.surge.sh",
  },
];

const Portfolio = () => {
  return (
    <section id="projects" className="w-11/12 mx-auto my-20">
      <SectionTitle heading={'Portfolio'}></SectionTitle>    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 j gap-8 mt-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-500">
            <h3 className="text-2xl font-semibold text-gray-800">{project.name}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-500">Technologies:</p>
              <ul className="list-disc pl-5 mt-2 text-gray-700">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 mt-6">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl text-gray-700 hover:text-black transition duration-300" />
              </a>
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt className="text-2xl text-gray-700 hover:text-black transition duration-300" />
              </a>
            </div>
          </div>
        ))}
      </div>
      <button className='py-1 px-10 rounded-md mt-5 bg-gradient-to-r from-blue-500 to-pink-500 text-white'>See More</button>
    </section>
  );
};

export default Portfolio;
