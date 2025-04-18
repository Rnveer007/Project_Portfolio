import React, { useState } from 'react';
import { motion } from "framer-motion";

import Profile from "../dist/assets/profile.jpeg";
import portfolio from '../dist/assets/portfolio.gif'
import gridProject from '../dist/assets/gridSystem.gif'
import pokemon from '../dist/assets/pokemon.gif'
import game from '../dist/assets/game.gif'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiGmail } from 'react-icons/si';
import { FaHandsClapping } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";


function Portfolio() {
    const [activeSection, setActiveSection] = useState('about');
    const [menuOpen, setMenuOpen] = useState(false);



    return (
        <div className="bg-[#161616] min-h-screen pt-5 md:pt-10 flex flex-col items-center px-4 sm:px-6 lg:px-8 pb-20">
            {/* Header */}
            <header className='Header fixed top-0 z-[99] bg-[#1B1B1B] py-6 sm:py-7 md:py-9 flex flex-col sm:flex-row justify-between items-center w-full gap-4 sm:gap-0 px-4 sm:px-12 md:px-24 lg:px-36 h-auto sm:h-[60px]'>
                <motion.div
                    className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl w-full sm:w-auto text-center sm:text-left"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.span
                        className="text-yellow-500 inline-block origin-bottom-left"
                        animate={{ rotate: [0, 20, -20, 20, -20, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <FaHandsClapping />
                    </motion.span>
                    <motion.h1
                        className="text-[#F25134]"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                    >
                        Welcome
                    </motion.h1>

                    <div className="sm:hidden w-full flex justify-end">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </motion.div>

                <div className={`border-gray-700 bg-[#161616] rounded-2xl px-6 py-4 sm:px-6 sm:py-3 md:px-10 lg:px-20  w-[250px] sm:w-auto transition-all duration-300 ease-in-out  ${menuOpen ? 'block' : 'hidden'} sm:block absolute right-10`}>

                    <ul className='flex flex-col sm:flex-row justify-between sm:justify-center gap-4 sm:gap-6 text-sm sm:text-base text-center'>
                        <li>
                            <a
                                href="#about"
                                onClick={() => {
                                    setActiveSection("about");
                                    setMenuOpen(false);
                                }}
                                className={`cursor-pointer hover:opacity-80 transition ${activeSection === 'about' ? 'text-[#F25134]' : 'text-white'
                                    }`}
                            >
                                ABOUT
                            </a>
                        </li>
                        <li>
                            <a
                                href="#portfolio"
                                onClick={() => {
                                    setActiveSection("portfolio");
                                    setMenuOpen(false);
                                }}
                                className={`cursor-pointer hover:opacity-80 transition ${activeSection === 'portfolio' ? 'text-[#F25134]' : 'text-white'
                                    }`}
                            >
                                PROJECTS
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                onClick={() => {
                                    setActiveSection("contact");
                                    setMenuOpen(false);
                                }}
                                className={`cursor-pointer hover:opacity-80 transition ${activeSection === 'contact' ? 'text-[#F25134]' : 'text-white'
                                    }`}
                            >
                                CONTACT
                            </a>
                        </li>
                    </ul>

                </div>
            </header>

            {/* Hero Section */}
            <div className="Hero w-full max-w-[1400px] min-h-[350px] border border-gray-700 mt-[7rem] sm:mt-10 flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-12 p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg mb-16">
                <div className="Info text-center lg:text-left order-2 lg:order-1">
                    <h1 className='text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3'>
                        Hey! I'm <span className='text-[#F25134]'>Ranveer</span>
                    </h1>
                    <h1 className='text-[#C0C0C0] text-xs sm:text-sm md:text-base mb-4 sm:mb-6 md:mb-8'>I AM A FULL STACK DEVELOPER</h1>
                    <p className='text-[#C0C0C0] text-xs sm:text-sm md:text-base lg:text-lg mb-3 sm:mb-4'>
                        {activeSection === 'about' && 'Passionate about creating web applications with modern technologies'}
                        {activeSection === 'portfolio' && 'Check out my learning projects and experiments'}
                        {activeSection === 'contact' && 'Get in touch to discuss opportunities'}
                    </p>
                </div>

                <div className="Profile text-center order-1 lg:order-2">
                    <p className="text-[#C0C0C0] text-xs mx-10 sm:text-sm mb-3 sm:mb-4 md:mb-6 relative before:content-[''] before:absolute before:left-[20px] before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-red-500  px-8 border-1 rounded-2xl border-gray-700">
                        AVAILABLE FOR JOB
                    </p>

                    <div className="relative">
                        <img
                            src={Profile}
                            alt="Ranveer's profile"
                            className='border border-amber-50 rounded-full h-[100px] w-[100px] sm:h-[130px] sm:w-[130px] md:h-[160px] md:w-[160px] lg:h-[200px] lg:w-[200px] object-cover mx-auto'
                        />
                    </div>
                </div>
            </div>


            {/* Skills Section */}
            <div className='Skills w-full max-w-[1400px] min-h-[500px] text-white p-4 sm:p-6 md:p-8 border border-gray-700 rounded-lg mt-10 flex justify-center items-center mx-auto'>
                <div className="w-full">
                    <h3 className="text-lg sm:text-xl font-semibold mb-6 text-[#F25134] text-center">Skills</h3>
                    <div className="flex flex-wrap justify-center gap-6 p-4 sm:p-6 md:p-8 bg-[#1B1B1B] rounded-xl">
                        <SkillIcon icon={<FaReact className="w-full h-full" />} name="React" />
                        <SkillIcon icon={<FaNodeJs className="w-full h-full" />} name="Node.js" />
                        <SkillIcon icon={<SiExpress className="w-full h-full" />} name="Express" />
                        <SkillIcon icon={<SiMongodb className="w-full h-full" />} name="MongoDB" />
                        <SkillIcon icon={<FaHtml5 className="w-full h-full" />} name="HTML5" />
                        <SkillIcon icon={<FaCss3Alt className="w-full h-full" />} name="CSS3" />
                        <SkillIcon icon={<FaJs className="w-full h-full" />} name="JavaScript" />
                        <SkillIcon icon={<SiTailwindcss className="w-full h-full" />} name="Tailwind" />
                        <SkillIcon icon={<SiFirebase className="w-full h-full" />} name="Firebase" />
                        <SkillIcon icon={<FaGitAlt className="w-full h-full" />} name="Git" />
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div id='about' className="About-section w-full max-w-[1400px] text-white p-4 sm:p-6 md:p-8 border-gray-700 mx-auto flex items-center min-h-[600px] sm:min-h-[650px]">
                <div className="w-full">
                    <h2 className="text-xl sm:text-2xl md:text-3xl text-center mb-8 sm:mb-10 md:mb-12 font-bold text-[#F25134]">About Me</h2>
                    <div className="text-center text-base sm:text-lg md:text-xl w-full max-w-[900px] mx-auto">
                        <p className='text-justify'>
                            Hi, I'm Ranveer — a passionate developer who thrives on creating visually striking and highly functional web experiences. I combine creativity with clean code to build responsive, user-friendly interfaces that don’t just work great — they feel great to use. Whether I’m building something from scratch or refining an existing project, I aim to deliver digital experiences that are both efficient and enjoyable.
                        </p>
                        <div className='text-left'>
                            <h1 className='text-[#F25134] my-3 py-3'>In My Free Time</h1>
                            <ul className='text-[#C0C0C0] list-disc pl-5'>
                                <li className='my-2 sm:my-3'>Playing chess</li>
                                <li className='my-2 sm:my-3'>Watching anime</li>
                                <li className='my-2 sm:my-3'>Hitting the gym or practicing calisthenics</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <hr className='border border-gray-700 w-full max-w-[1400px] mx-auto' />


            {/* Portfolio Section */}
            <div id='portfolio' className="Portfolio-section w-full max-w-[1400px] mt-10 text-white p-4 sm:p-6 md:p-8 border border-gray-700 rounded-lg overflow-hidden mx-auto">
                <h2 className="text-xl sm:text-2xl md:text-3xl text-center font-bold mb-12 sm:mb-16 text-[#F25134]">My Projects</h2>
                <div className="flex flex-wrap gap-6 justify-center">
                    <ProjectCard
                        title="Personal Portfolio"
                        description="The website you're viewing right now, built with React and Tailwind CSS"
                        technologies={['React', 'Tailwind CSS', 'Responsive Design']}
                        Preview="Preview"
                        gifSrc={portfolio}
                        projectLink="https://project-portfolio-ke38.vercel.app"
                    />
                    <ProjectCard
                        title="Avatar Game"
                        description="A game site with your favorite avatar"
                        technologies={['React', 'Node.js', 'Tailwind']}
                        Preview="Preview"
                        gifSrc={game}
                        projectLink="project-react-avatar-game-xqd8.vercel.app"
                    />
                    <ProjectCard
                        title="Poke-World"
                        description="Poke-World, a fully interactive Pokémon discovery app! Dynamic, responsive design with real-time API integration"
                        technologies={['JavaScript', 'React', 'CSS3']}
                        Preview="Preview"
                        gifSrc={pokemon}
                        projectLink="https://react-project-pokemon-32sb.vercel.app"
                    />
                    <ProjectCard
                        title="Interactive Grid system"
                        description="Dynamic grid generation Interactive UI with event handling Clean and responsive design"
                        technologies={['HTML5', 'CSS3', 'JavaScript']}
                        Preview="Preview"
                        gifSrc={gridProject}
                        projectLink="https://project-dynamic-grid-interaction.vercel.app"
                    />
                </div>
            </div>

            {/* Learning Journey */}
            <div className='flex justify-center w-full max-w-[1400px] min-h-[300px] my-10 items-center mx-auto p-4 sm:p-6'>
                <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-4 text-[#F25134]">Learning Journey</h3>
                    <div className="border-l-2 border-[#F25134] pl-4 space-y-3">
                        <p className="text-[#C0C0C0] flex items-start gap-2 text-sm sm:text-base">
                            <span className="text-[#F25134]">•</span> Full Stack Developer Intern @ FSL Learning. <span className='text-white'>2024 May - Present</span>
                        </p>
                        <p className="text-[#C0C0C0] flex items-start gap-2 text-sm sm:text-base">
                            <span className="text-[#F25134]">•</span> Built several personal projects to apply my knowledge
                        </p>
                        <p className="text-[#C0C0C0] flex items-start gap-2 text-sm sm:text-base">
                            <span className="text-[#F25134]">•</span> Continually expanding my skills through hands-on practice
                        </p>
                        <p className="text-[#C0C0C0] flex items-start gap-2 text-sm sm:text-base">
                            <span className="text-[#F25134]">•</span> Worked on developing responsive web applications using React.js, Tailwind CSS, and integrated APIs to enhance user experience.
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div id='contact' className='w-full max-w-[1400px] text-center mt-10 p-4 sm:p-6 md:p-8 border border-gray-700 rounded-lg mx-auto'>
                <h3 className="text-lg sm:text-xl font-semibold mb-6 text-[#F25134]">Connect With Me</h3>
                <div className="space-y-4">
                    <div className="bg-[#1B1B1B] p-2 rounded-full flex items-center justify-center gap-3 text-[#C0C0C0] hover:text-[#F25134] transition text-sm sm:text-base">
                        <SiGmail className="w-5 h-5 text-[#F25134]" />
                        <span>rvs523474@gmail.com</span>
                    </div>

                    <div className="Contact-section bg-[#1B1B1B] p-2 rounded-full flex items-center justify-center gap-3 text-[#C0C0C0] hover:text-[#F25134] transition text-sm sm:text-base">
                        <svg className="w-5 h-5 text-[#F25134]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>7297838962</span>
                    </div>

                    <div className="flex gap-4 mt-6 justify-center">
                        <a href="https://www.linkedin.com/in/ranveer-71458a1b5/" className="bg-[#1B1B1B] p-3 rounded-full hover:bg-[#F25134] transition">
                            <FaLinkedin className="w-5 h-5 text-[#C0C0C0] hover:text-white" />
                        </a>
                        <a href="https://github.com/Rnveer007" className="bg-[#1B1B1B] p-3 rounded-full hover:bg-[#F25134] transition">
                            <FaGithub className="w-5 h-5 text-[#C0C0C0] hover:text-white" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="w-full max-w-[1400px] mt-16 text-center text-[#C0C0C0] text-xs sm:text-sm border-t border-gray-700 pt-6 sm:pt-8 mx-auto px-4">
                <p>© {2025} Ranveer. All rights reserved.</p>
            </footer>
        </div >
    );
}

// Skill Icon Component
function SkillIcon({ icon, name }) {
    return (
        <motion.div
            className="flex flex-col items-center group"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
        >
            <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="bg-[#1B1B1B] p-3 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-2 group-hover:bg-[#F25134] transition"
            >
                {icon}
            </motion.div>
            <span className="text-xs sm:text-sm text-center">{name}</span>
        </motion.div>
    );
}

// Project Card Component
function ProjectCard({ title, description, technologies, Preview, gifSrc, projectLink }) {
    return (
        <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border w-[300px] border-gray-700 rounded-lg overflow-hidden hover:border-[#F25134] transition group cursor-pointer block"
        >
            <div className="bg-[#1B1B1B] h-48 relative overflow-hidden">

                <h3 className="font-bold text-lg mb-2 text-center mt-20 group-hover:text-[#F25134] transition underline">{Preview}</h3>
                {/* GIF on hover */}
                <img
                    src={gifSrc}
                    alt={`${title} preview gif`}
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-[#F25134] opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </div>
            <div className="p-4">
                <h3 className="font-bold text-lg mb-2 group-hover:text-[#F25134] transition">{title}</h3>
                <p className="text-[#C0C0C0] text-sm mb-3 group-hover:text-white transition">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {technologies.map(tech => (
                        <span key={tech} className="bg-[#1B1B1B] px-2 py-1 rounded-full text-xs group-hover:bg-[#2B2B2B] transition">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    );
}




export default Portfolio;