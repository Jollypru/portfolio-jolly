import React from 'react';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg w-11/12 md:w-3/4 relative max-h-[100vh] overflow-hidden">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-white text-xl font-bold"
                >
                    ✖
                </button>
                <div className="overflow-y-auto max-h-[90vh] p-2">
                    <img className="w-full h-64 rounded" src={project.image} alt={project.name} />
                    <h2 className="text-2xl font-semibold text-white mt-4">{project.name}</h2>
                    <p className="text-gray-300 mt-2">{project.description}</p>
                    <div>
                        <p className="text-xl mt-3 font-medium text-gray-200">Key Features:</p>
                        <ul className=''>
                            {
                                project.keyFeatures.map((feature, index) => (
                                    <li key={index} className='list-decimal list-inside'>{feature}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="mt-4">
                        <p className="text-xl font-medium text-gray-200">Technologies:</p>
                        <div className="flex flex-wrap mt-2 text-gray-400">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="px-2 py-1 border border-gray-400 rounded text-sm mr-2">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-5 mt-6">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white px-3 border">
                            GitHub Repo
                        </a>
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white px-3 border">
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
