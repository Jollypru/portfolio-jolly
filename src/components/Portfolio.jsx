import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import { useNavigate } from 'react-router-dom';
import ProjectModal from './ProjectModal';

const projects = [
    {
        name: "Visa Navigator",
        description: "A platform that simplifies checking visa requirements, applying for visas online, and tracking applications.",
        image: 'https://i.ibb.co.com/qMcCjhC/Screenshot-2025-01-05-141159.png',
        technologies: ["React", "Tailwind CSS", "JavaScript", "Node.js"],
        github: "https://github.com/Jollypru/Visa-Navigator",
        liveDemo: "https://assignment-10-your-next-visa.surge.sh",
        keyFeatures: ['Get detailed information about visa requirements for different countries, including application fees, processing times, and validity periods.', 'Easily apply for visas online through the platform with a smooth and secure application process.', 'Track the status of your visa application in real-time to stay updated on its progress.', 'Create and manage your account to save visa preferences, application history, and personal details for faster future applications.', 'Access the website on any device, whether you are on a desktop, tablet, or smartphone, with a fully responsive and user-friendly interface.']
    },
    {
        name: "TravelCove",
        description: "A tourism management system which allow users to view, manage and book various travel packages.",
        image: 'https://i.ibb.co.com/BHh1Cs4w/Screenshot-2025-02-06-132950.png',
        technologies: ['React', 'JavaScript', 'Express.js', 'Node.js', 'Tailwind CSS'],
        github: 'https://github.com/Jollypru/TravelCove',
        liveDemo: 'https://travelcove-cc125.web.app',
        keyFeatures: ['Allow users to explore various tour package, tour-guides and book packages and pay via card.', 'It has a centralized panel for managing users, packages, bookings for admin use only.', 'Has an option to share their travel story and share it on social media.', 'Fully responsive for small, medium and large devices.']
    },
   {
    name: 'Artifact Atlas',
    description: 'A website designed to allow users to store, view, and manage information about various historical artifacts.',
    image: 'https://i.ibb.co.com/GvtjxQsn/Screenshot-2025-02-06-191838.png',
    technologies: ['React', 'JavaScript', 'Express.js', 'Node.js', 'Tailwind CSS'],
    github:'https://github.com/Jollypru/Artifact-Atlas-website',
    liveDemo: 'https://artifact-atlas-cc3af.web.app',
    keyFeatures: ['Users can add, view, edit, and delete artifacts with detailed information, including name, type, historical context, and images.','Users can search artifacts by name and filter them by type (Tools, Weapons, Documents, Writings, etc.), making it easy to find relevant items.', 'Can like artifacts and view their liked artifacts.', 'Responsive for all type of devices.']
   }
];

const Portfolio = () => {

    const [selectedProject, setSelectedProject] = useState(null);
    const navigate = useNavigate();
    return (
        <section id="projects" className="w-11/12 mx-auto my-14">
            <SectionTitle heading={'Portfolio'}></SectionTitle>
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
                                <button onClick={() => setSelectedProject(project)} className='py-0 px-2 text-gray-200 hover:text-white  bg-gradient-to-r from-pink-500 to-blue-500 rounded-md'>View Details</button>
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
            {/* <button onClick={() => navigate('/allProjects')} className='py-1 px-10 rounded-md mt-5 bg-gradient-to-r from-blue-500 to-pink-500 text-white'>See More</button> */}
            {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
        </section>
    );
};

export default Portfolio;
