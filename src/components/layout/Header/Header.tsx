import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 w-full h-20 z-50 bg-white shadow-md">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8" aria-label="Global">
                    {/* Logo à gauche */}
                    <div className="flex lg:flex-1">
                        <Link
                            to="about-me"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="-m-1.5 p-1.5 cursor-pointer"
                        >
                            <img className="w-auto h-20 w-20" src="./src/assets/logo/logo.png" alt="Logo" />
                        </Link>
                    </div>

                    {/* Menu desktop centré */}
                    <div className="hidden lg:flex lg:gap-x-12">
                        <Link
                            to="introduction"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="text-sm font-semibold text-gray-900 hover:text-blue-500 transition cursor-pointer"
                        >
                            Introduction
                        </Link>
                        <Link
                            to="technologies"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="text-sm font-semibold text-gray-900 hover:text-blue-500 transition cursor-pointer"
                        >
                            My Technologies
                        </Link>
                        <Link
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="text-sm font-semibold text-gray-900 hover:text-blue-500 transition cursor-pointer"
                        >
                            My Projects
                        </Link>
                        <Link
                            to="academic"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="text-sm font-semibold text-gray-900 hover:text-blue-500 transition cursor-pointer"
                        >
                            School and Work Experience
                        </Link>
                        <Link
                            to="form"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="text-sm font-semibold text-gray-900 hover:text-blue-500 transition cursor-pointer"
                        >
                            Contact Me
                        </Link>
                    </div>

                    {/* Image de profil à droite */}
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <div className="ml-6 flex-shrink-0">
                            <img
                                src="./src/assets/profile/pp.png"
                                alt="Profile"
                                className="rounded-full w-20 h-20 object-cover border-2 shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Bouton mobile */}
                    <div className="lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                )}
                            </svg>
                        </button>
                    </div>
                </nav>

                {/* Menu mobile */}
                {mobileMenuOpen && (
                    <div className="absolute top-20 left-0 w-full bg-white shadow-md p-6 lg:hidden">
                        <div className="flex flex-col gap-4">
                            <Link
                                to="about-me"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="text-sm font-semibold text-gray-900 hover:text-blue-500 cursor-pointer"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                About Me
                            </Link>
                            <Link
                                to="introduction"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="text-sm font-semibold text-gray-900 hover:text-blue-500 cursor-pointer"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Introduction
                            </Link>
                            <Link
                                to="technologies"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="text-sm font-semibold text-gray-900 hover:text-blue-500 cursor-pointer"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                My Technologies
                            </Link>
                            <Link
                                to="projects"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="text-sm font-semibold text-gray-900 hover:text-blue-500 cursor-pointer"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                My Projects
                            </Link>
                            <Link
                                to="academic"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="text-sm font-semibold text-gray-900 hover:text-blue-500 transition cursor-pointer"
                            >
                                School and Work Experience
                            </Link>
                            <Link
                                to="form"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="text-sm font-semibold text-gray-900 hover:text-blue-500 transition cursor-pointer"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </div>
                )}
            </header>

            {/* Ajoute un padding-top pour compenser la navbar */}
            <div className="h-20"></div>
        </>
    );
};

export default Header;
