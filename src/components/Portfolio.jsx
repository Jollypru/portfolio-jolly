import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const projects = [
    {
        name: "Visa Navigator",
        description: "A platform that simplifies checking visa requirements, applying for visas online, and tracking applications.",
        image: 'https://i.ibb.co.com/qMcCjhC/Screenshot-2025-01-05-141159.png',
        technologies: ["React", "Tailwind CSS", "JavaScript", "Node.js"],
        github: "https://github.com/Jollypru/Visa-Navigator",
        liveDemo: "https://assignment-10-your-next-visa.surge.sh/",
    },
    {
        name: "BPL Dream Team",
        description: "A dynamic website build with react that allows users to select players, manage their selection and participate in a bidding process.",
        image: "https://i.ibb.co.com/vkHVPYt/Screenshot-2025-01-05-140730.png",
        technologies: ["React", "Tailwind CSS", "JavaScript"],
        github: "https://github.com/programming-hero-web-course1/b10a7-dream-11-Jollypru",
        liveDemo: "https://assignment-7-dream-team.surge.sh",
    },
    {
        name: "Lingo Bingo",
        description: "An app designed to help users learn Korean, with vocabulary, grammar, and quizzes for efficient learning.",
        image: 'https://i.ibb.co.com/5GvB5Pc/Screenshot-2025-01-05-141114.png',
        technologies: ["React", "Tailwind CSS", "JavaScript", "express.js"],
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
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-500 ">
                        <div>
                            <img className='h-[150px] w-full' src={project.image} alt="" />
                        </div>
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

                        <div className="flex items-center justify-between mt-6">
                            <button className='py-1 px-3 text-gray-500 hover:text-white border border-blue-500 hover:bg-blue-500 rounded-md'>View Details</button>
                            <div className='flex gap-4'>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="text-2xl text-gray-700 hover:text-black  transition duration-300" />
                                </a>
                                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                    <FaExternalLinkAlt className="text-2xl text-gray-700 hover:text-black transition duration-300" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className='py-1 px-10 rounded-md mt-5 bg-gradient-to-r from-blue-500 to-pink-500 text-white'>See More</button>
        </section>
    );
};

export default Portfolio;
