import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => (
    <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
            {/* Section gauche - Texte */}
            <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} - Made by by <span className="font-bold">Tanguy Domergue</span>
            </p>

            {/* Section droite - Icônes */}
            <div className="flex gap-6 mt-4 sm:mt-0">
                <a
                    href="https://www.linkedin.com/in/tanguy-domergue-493b0b205/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-500 transition duration-300"
                >
                    <FaLinkedin size={30} />
                </a>
                <a
                    href="https://github.com/Tanguydom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-400 transition duration-300"
                >
                    <FaGithub size={30} />
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;
