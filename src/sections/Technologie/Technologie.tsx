import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { src: "./src/assets/skills/html.png", name: "HTML5" },
    { src: "./src/assets/skills/css.png", name: "CSS3" },
    { src: "./src/assets/skills/javascript.png", name: "JavaScript" },
    { src: "./src/assets/skills/typescript.png", name: "TypeScript" },
    { src: "./src/assets/skills/node.png", name: "Node.js" },
    { src: "./src/assets/skills/react.png", name: "React" },
    { src: "./src/assets/skills/docker.png", name: "Docker" },
    { src: "./src/assets/skills/tailwind.png", name: "Tailwind CSS" },
    { src: "./src/assets/skills/kube.png", name: "Kubernetes" },
    { src: "./src/assets/skills/git.png", name: "Git" },
    { src: "./src/assets/skills/mysql.png", name: "MySQL" },
    { src: "./src/assets/skills/postgre.png", name: "PostgreSQL" },
    { src: "./src/assets/skills/terraform.png", name: "Terraform" },
    { src: "./src/assets/skills/ansible.png", name: "Ansible" },
    { src: "./src/assets/skills/jenkins.png", name: "Jenkins" },
    { src: "./src/assets/skills/jira.png", name: "Jira" },
];

const Technologies: React.FC = () => {
    return (
        <motion.section
            id="technologies"
            className="min-h-screen w-full bg-cover bg-center flex flex-col justify-center items-center py-10 sm:py-16 pt-20"
            style={{
                backgroundImage: "url('./src/assets/logo/fond2.jpg')",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="text-white text-center px-4">
                <h2 className="text-4xl sm:text-5xl font-extrabold mt-12 mb-8 sm:mb-12 leading-tight">
                    My Skills & Technologies
                </h2>

                {/* Grille des icônes avec effet 3D */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12 sm:gap-10 lg:gap-12 mt-4 sm:mt-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="flex justify-center items-center w-32 h-32 sm:w-24 sm:h-24 bg-gradient-to-br from-gray-100 via-white to-gray-200 shadow-2xl rounded-lg transform-gpu transition-transform hover:scale-105 hover:rotate-3"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1, rotate: [0, 3, -3, 0] }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                        >
                            <div className="relative w-full h-full flex justify-center items-center rounded-lg bg-gradient-to-t from-gray-300 via-white to-gray-100 p-4 shadow-inner">
                                <img
                                    src={skill.src}
                                    alt={skill.name}
                                    className="w-20 h-20 object-contain transform hover:translate-y-1"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Technologies;
