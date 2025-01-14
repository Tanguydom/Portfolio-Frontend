import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
    title: string;
    subtitle: string;
    date: string;
    description: string[];
}

const timelineData: TimelineItem[] = [
    {
        title: "Apprentice Fullstack Developer - Bouygues | EQUANS",
        subtitle: "Lieusaint",
        date: "Since 2021",
        description: [
            "Developed front-end applications using React and XAML, and back-end services with Express and C#.",
            "Created IoT drivers integrated via REST APIs.",
            "Designed and implemented a 3D virtual tour of the Smart City showroom (React, Three.js, Node.js).",
            "Managed remote IT infrastructures (VMware, Hyper-V, RDP)."
        ],
    },
    {
        title: "Engineering in Information Systems – EFREI Paris / Université Panthéon-Assas",
        subtitle: "Since 2022",
        date: "Since 2022",
        description: [
            "Software development (Java, Python, JavaScript).",
            "database management (SQL/NoSQL). ",
            "DevOps (Docker, Kubernetes, Ansible).",
            "Participated in a university exchange program at VSB Technical University in Ostrava, Czech Republic."
        ],
    },
    {
        title: "Computer Science Bachelor – UPEC, Université de Paris-Est Créteil",
        subtitle: "2020 - 2022",
        date: "2020 - 2022",
        description: [
            "Network administration. ",
            "client-server architecture. ",
            "graphical user interface development (Java Swing)."
        ],
    },
];

const Academic: React.FC = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section
            className="min-h-screen w-full bg-cover bg-center relative flex flex-col justify-center items-center py-10 sm:py-16 pt-26"
            id='academic'
            style={{
                backgroundImage: "url('./src/assets/logo/fond3.jpg')",
                opacity: 0.9,
            }}
        >
            {/* Overlay clair */}
            <h2 className="text-4xl font-extrabold text-center mb-12 text-white bg-black/60 shadow-xl py-2 px-4 rounded-lg sticky top-0 z-20">
                Academic & Professional Journey
            </h2>
            <div className="absolute inset-0 bg-white/-30"></div>

            {/* Contenu principal */}
            <div className="w-full max-w-4xl px-4 sm:px-8 relative z-10">
                <div className="relative border-l-4 border-gray-900">
                    {timelineData.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`relative pl-8 pr-4 py-4 mb-6 rounded-lg shadow-md transition-all duration-300 ${
                                expandedIndex === index ? "bg-gray-700/80 text-white shadow-lg scale-105" : "bg-gray-100 text-gray-900 hover:bg-blue-600 hover:scale-105"
                            }`}
                            onClick={() => handleToggle(index)}
                        >
                            <span
                                className="absolute top-4 left-[-30px] w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold text-xl">
                                {index + 1}
                            </span>
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <span className="text-gray-200 italic">{item.date}</span>
                            </div>
                            <p className="text-gray-300 text-sm">{item.subtitle}</p>
                            {expandedIndex === index && (
                                <motion.ul
                                    className="mt-4 space-y-2"
                                    initial={{opacity: 0, y: -10}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5}}
                                >
                                    {item.description.map((desc, i) => (
                                        <li key={i} className="list-disc list-inside">
                                            {desc}
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </motion.div>

                    ))}
                </div>

                {/* Section de téléchargement du CV */}
                <div className="mt-12 text-center">
                    <a
                        href="./src/assets/profile/CV_Tanguy_Domergue.pdf"
                        download
                        className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-500 transition duration-300 inline-block"
                    >
                        Download CV (PDF)
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Academic;
