import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaPalette, FaMobileAlt } from 'react-icons/fa'; // Import des icônes

const Introduction: React.FC = () => {
    return (
        <motion.section
            id="introduction"
            className="w-full h-screen bg-gray-50 px-8 lg:px-20 mt-20 flex flex-col justify-center items-center"
            whileInView={{ opacity: 1, y: 0 }} // Animation lorsque l'élément est visible
            viewport={{ once: false, amount: 0.3 }} // Se déclenche à chaque fois que 30% de la section est visible
            transition={{ duration: 1 }}
        >
            <div className="max-w-5xl text-center">
                <h2 className="text-xl uppercase font-bold tracking-wider text-gray-600">Introduction</h2>
                <h1 className="text-5xl font-extrabold text-gray-900 mt-4">Overview.</h1>
                <p className="text-gray-500 mt-6 text-lg leading-relaxed">
                    Appren'ce at Equans for 4 years, I'm currently doing a Master's degree specialising in
                    Software and Information Systems at EFREI. My experience has allowed me to master C#
                    development, information systems management and keep up to date with technological monitoring.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-16">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-700 text-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center min-h-[100px] w-full sm:w-[400px]"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1.5, delay: index * 0.5 }}
                    >
                        <div className="text-6xl mb-6">{service.icon}</div>
                        <h3 className="text-2xl font-semibold">{service.title}</h3>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

const services = [
    {
        icon: <FaCode />, // Icône de développement frontend
        title: 'Frontend Developer',
    },
    {
        icon: <FaServer />, // Icône de backend
        title: 'Backend Developer',
    },
    {
        icon: <FaPalette />, // Icône pour le design UI/UX
        title: 'UI/UX Design',
    },
    {
        icon: <FaMobileAlt />, // Icône pour le prototypage logiciel
        title: 'Software Prototyping',
    },
];

export default Introduction;
