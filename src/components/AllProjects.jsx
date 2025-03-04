import React from 'react';
import SectionTitle from './SectionTitle';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const AllProjects = () => {

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
            name: "TravelCove",
            description: "A tourism management system which allow users to view, manage and book various travel packages.",
            image: 'https://i.ibb.co.com/BHh1Cs4w/Screenshot-2025-02-06-132950.png',
            technologies: ['React', 'JavaScript', 'Express.js', 'Node.js', 'Tailwind CSS'],
            github: 'https://github.com/Jollypru/TravelCove',
            liveDemo: 'https://travelcove-cc125.web.app/'
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
        {
            name: "Lingo Bingo",
            description: "An app designed to help users learn Korean, with vocabulary, grammar, and quizzes for efficient learning.",
            image: 'https://i.ibb.co.com/5GvB5Pc/Screenshot-2025-01-05-141114.png',
            technologies: ["React", "Tailwind CSS", "JavaScript", "express.js"],
            github: "https://github.com/Jollypru/Lingo-Bingo",
            liveDemo: "https://assignment-9-lingo-bingo.surge.sh",
        },
    ];
    return (
        <div>
            <section className="w-11/12 mx-auto my-10">
                <SectionTitle heading={'My Projects'}></SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-800 p-5 rounded-lg shadow-lg hover:scale-105 transform transition duration-500 ">
                            <div>
                                <img className='h-[150px] w-full' src={project.image} alt="" />
                            </div>
                            <div className='flex flex-col justify-between'>
                                <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                                <p className="text-gray-300 mt-2">{project.description}</p>

                                <div className="mt-4">
                                    <p className="text-sm font-medium text-gray-200">Technologies:</p>
                                    <div className="mt-2 text-gray-400">
                                        {project.technologies.map((tech, index) => (
                                            <div key={index} className='badge badge-outline mr-2'>{tech}</div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-6">
                                    <button className='py-0 px-2 text-gray-200 hover:text-white  bg-gradient-to-r from-pink-500 to-blue-500 rounded-md'>View Details</button>
                                    <div className='flex gap-4'>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <FaGithub className="text-2xl text-gray-200 hover:text-black  transition duration-300" />
                                        </a>
                                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                            <FaExternalLinkAlt className="text-xl text-gray-200 hover:text-black transition duration-300" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AllProjects;