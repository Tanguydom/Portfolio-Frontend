import React from 'react';
import { motion } from 'framer-motion';

const AboutMe: React.FC = () => {
    return (
        <motion.section
            id="about-me"
            className="h-screen w-full bg-cover bg-center relative flex justify-center items-center"
            style={{
                backgroundImage: "url('./src/assets/logo/fond1.jpg')",
            }}
            whileInView={{opacity: 1, y: 0}} // L'animation se déclenche uniquement à l'apparition
            viewport={{once: true, amount: 0.3}} // Animation une seule fois lorsque 30% est visible
            transition={{duration: 1}}
        >

            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 text-white text-center max-w-3xl px-6">
                <h2 className="text-4xl sm:text-6xl font-extrabold leading-snug">
                    Hi there! I’m <span className="text-white">Tanguy Domergue</span>.
                </h2>
                <p className="mt-6 text-lg sm:text-2xl leading-relaxed">
                    A Software and Information Systems Engineer. Take a look at my work and discover my passion for
                    technology!
                </p>
            </div>
        </motion.section>
    );
};

export default AboutMe;
