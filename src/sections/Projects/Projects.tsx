import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface Project {
    id: number;
    name: string;
    description: string;
    techStack: string;
    gitRepo: string;
    demoUrl: string;
}

const projects: Project[] = [
    { id: 1, name: "Filmotech", description: "A movie directory app built with pure HTML, CSS, and JavaScript.", techStack: "HTML / CSS / JavaScript", gitRepo: "https://github.com/Tanguydom/Portfolio-Movies", demoUrl: "http://localhost:8081" },
    { id: 2, name: "Ruinard", description: "Creating an exact copy of a commercial site like Ruinart", techStack: "Html / CSS / Javascript", gitRepo: "https://github.com/Tanguydom/Portfolio-Ruinard", demoUrl: "http://localhost:8083" }, // OK
    { id: 3, name: "Serveur SMTP / Express", description: "Creating backend to send email", techStack: "React / Tailwind / Framer Motion", gitRepo: "https://github.com/Tanguydom/Portfolio-SMNP", demoUrl: "http://localhost:8080/api-docs/" }, //OK
    { id: 4, name: "My Portfolio", description: "Creating my portfolio using React", techStack: "React / Tailwind / Framer Motion", gitRepo: "", demoUrl: "http://localhost:3000/" },
    { id: 5, name: "Real Estate App", description: "A real estate web application built with React for frontend.", techStack: "React / TypeScript / TailwindCSS", gitRepo: "", demoUrl: "https://localhost:8082" },
    { id: 6, name: "API Express (Real Estate)", description: "A real estate API built with Express.js and documented with Swagger.", techStack: "Node.js / Express / Swagger", gitRepo: "", demoUrl: "https://localhost:8084" },
    { id: 7, name: "API Flask (Real Estate)", description: "A real estate API built with Flask and documented with Swagger.", techStack: "Python / Flask / Swagger", gitRepo: "", demoUrl: "https://localhost:8085" },

];

const Projects: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <section id="projects" className="w-full h-screen bg-gray-50 px-8 lg:px-20 py-16 flex flex-col items-center justify-center">
            <h2 className="text-5xl font-extrabold text-center mb-12">Projects.</h2>

            {/* Carousel Wrapper */}
            <div className="relative w-full max-w-18 overflow-hidden">
                <motion.div
                    className="flex gap-12"
                    initial={{ x: 0 }}
                    animate={{ x: -currentIndex * 350 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {projects.map((project) => (
                        <div key={project.id} className="min-w-[400px] sm:min-w-[450px] lg:min-w-[450px] bg-white rounded-xl shadow-lg p-16 flex flex-col">
                            <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                            <p className="text-sm text-gray-700">{project.techStack}</p>
                            <p className="text-gray-700 mt-4">{project.description}</p>
                            <div className="flex justify-between mt-6">
                                <a href={project.gitRepo} target="_blank" rel="noopener noreferrer" className="bg-gray-200 hover:bg-gray-300 text-gray-900 py-2 px-4 rounded-lg shadow-md transition">
                                    GitHub Repo
                                </a>
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md transition">
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Navigation Arrows */}
                <button
                    className="absolute top-1/2 -left-10 transform -translate-y-1/2 bg-gray-300 p-4 lg:p-6 rounded-full shadow-lg hover:bg-gray-400"
                    onClick={handlePrev}
                >
                    <FiChevronLeft size={14} />
                </button>
                <button
                    className="absolute top-1/2 -right-10 transform -translate-y-1/2 bg-gray-300 p-4 lg:p-6 rounded-full shadow-lg hover:bg-gray-400"
                    onClick={handleNext}
                >
                    <FiChevronRight size={14} />
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="mt-6 flex gap-2">
                {projects.map((_, index) => (
                    <div
                        key={index}
                        className={`w-4 h-4 rounded-full ${index === currentIndex ? "bg-blue-600" : "bg-gray-300"}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
