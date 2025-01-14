import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Form: React.FC = () => {
const [formData, setFormData] = useState({ name: '', email: '', message: '' });
const [successMessage, setSuccessMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:8080/email/sendEmail', {  // Port du backend
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
        });

        if (response.ok) {
            setSuccessMessage('Votre message a été envoyé avec succès !');
            setFormData({ name: '', email: '', message: '' });
            setErrorMessage('');
        } else {
            setErrorMessage("Erreur lors de l'envoi du message.");
        }
    } catch (error) {
        console.error(error);
        setErrorMessage("Erreur lors de l'envoi du message.");
    }
};
return (
    <motion.section
        id="form"
        className="min-h-screen flex flex-col justify-center items-center text-white py-12 px-6"
        style={{ marginBottom: '-30px', marginTop: '-130px' }}
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: 50}}
        viewport={{once: false, amount: 0.3}}
        transition={{duration: 0.8}}
    >
        <h2 className="text-4xl font-extrabold text-center mb-8">Contact.</h2>
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg"
        >
            <div>
                <label htmlFor="name" className="block font-semibold mb-2">Your Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="What's your name?"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 text-white"
                    required
                />
            </div>
            <div>
                <label htmlFor="email" className="block font-semibold mb-2">Your Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="What's your email?"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 text-white"
                    required
                />
            </div>
            <div>
                <label htmlFor="message" className="block font-semibold mb-2">Your Message</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="What's your message?"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 text-white h-32"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-md shadow-lg transition duration-300"
            >
                SEND ✉️
            </button>
            {successMessage && <p className="text-green-400 mt-4">{successMessage}</p>}
            {errorMessage && <p className="text-red-400 mt-4">{errorMessage}</p>}
        </form>
    </motion.section>
);
};

export default Form;
