import React, { useState } from 'react';
import Profile from "./assets/profile.webp";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiGmail } from 'react-icons/si';
import { FaHandsClapping } from "react-icons/fa6";

import { FiSend } from 'react-icons/fi';

function Portfolio() {
    const [activeSection, setActiveSection] = useState('about');


    return (
        <div className="bg-[#161616] min-h-screen pt-5 md:pt-10 flex flex-col items-center px-4 sm:px-6 lg:px-8 pb-20">
            {/* Header */}
            <header className='Header flex flex-col justify-between sm:flex-row h-auto sm:h-[50px] items-center max-w-[1400px] w-full gap-4 sm:gap-0 mb-8 sm:mb-0'>
                <div className='flex items-center  gap-3 text-xl sm:text-2xl mr-0 sm:mr-4 w-full sm:w-auto text-center sm:text-left'> <span className='text-yellow-500'> <FaHandsClapping /></span> <h1 className='text-[#F25134] '>Welcome</h1>
                </div>

                <div className=' border-gray-700 bg-[#1B1B1B] rounded-3xl px-4 sm:px-8 md:px-20 py-3 sm:py-4'>
                    <ul className='flex justify-between gap-2 sm:gap-4 text-sm sm:text-base'>
                        <li
                            className={`cursor-pointer hover:opacity-80 transition ${activeSection === 'about' ? 'text-[#F25134]' : 'text-white'}`}
                            onClick={() => setActiveSection('about')}
                        >
                            ABOUT
                        </li>
                        <li
                            className={`cursor-pointer hover:opacity-80 transition ${activeSection === 'portfolio' ? 'text-[#F25134]' : 'text-white'}`}
                            onClick={() => setActiveSection('portfolio')}
                        >
                            PORTFOLIO
                        </li>
                        <li
                            className={`cursor-pointer hover:opacity-80 transition ${activeSection === 'contact' ? 'text-[#F25134]' : 'text-white'}`}
                            onClick={() => setActiveSection('contact')}
                        >
                            CONTACT
                        </li>
                    </ul>
                </div>
            </header>

            {/* Hero Section */}
            <div className="Hero w-full max-w-[1400px] min-h-[350px] border border-gray-700 mt-6 sm:mt-10 flex flex-col lg:flex-row justify-between items-center gap-8 p-6 sm:p-8 md:p-10 rounded-lg mb-16">
                <div className="Info text-center lg:text-left order-2 lg:order-1">
                    <h1 className='text-[#C0C0C0] text-sm sm:text-base mb-6 sm:mb-8 md:mb-12'>FULL STACK DEVELOPER</h1>
                    <h1 className='text-white font-bold text-2xl sm:text-3xl md:text-4xl mb-3'>I'm <span className='text-[#F25134]'>Ranveer</span></h1>
                    <p className='text-[#C0C0C0] text-sm sm:text-base md:text-lg mb-4'>
                        {activeSection === 'about' && 'Passionate about creating web applications with modern technologies'}
                        {activeSection === 'portfolio' && 'Check out my learning projects and experiments'}
                        {activeSection === 'contact' && 'Get in touch to discuss opportunities'}
                    </p>

                </div>

                <div className="Profile text-center order-1 lg:order-2">
                    <p className='text-[#C0C0C0] text-xs sm:text-sm mb-4 sm:mb-6 md:mb-8'>AVAILABLE FOR JOB</p>
                    <div className="relative">
                        <img
                            src={Profile}
                            alt="Ranveer's profile"
                            className='border border-amber-50 rounded-full h-[120px] w-[120px] sm:h-[150px] sm:w-[150px] md:h-[180px] md:w-[180px] lg:h-[200px] lg:w-[200px] object-cover mx-auto'
                        />
                    </div>
                </div>
            </div>

            <div className='w-full max-w-[1400px] flex flex-col lg:flex-row justify-between gap-8'>
                {/* Main Content Sections */}
                <div className="w-full lg:max-w-[1400px]">
                    {/* About Section */}
                    {activeSection === 'about' && (
                        <div className="About-section text-white p-6 sm:p-8 border-gray-700 rounded-lg">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#F25134]">About Me</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Background</h3>
                                    <div className="space-y-6">
                                        <div className="border-l-2 border-[#F25134] pl-4">
                                            <p className="text-[#C0C0C0] text-sm">12th Pass • 2017</p>
                                            <p className="mt-2 text-[#C0C0C0]">Completed my higher secondary education with focus on computer science fundamentals</p>
                                        </div>
                                        <div className="border-l-2 border-[#F25134] pl-4">
                                            <h4 className="font-medium">Self-Taught Developer</h4>
                                            <p className="text-[#C0C0C0] text-sm">2024 - Present</p>
                                            <p className="mt-2 text-[#C0C0C0]">"Dedicated to learning full-stack development through online resources and personal projects."</p>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-semibold mt-8 mb-4">Education</h3>
                                    <div className="border-l-2 border-[#F25134] pl-4">
                                        <h4 className="font-medium">Higher Secondary Education</h4>
                                        <p className="text-[#C0C0C0] text-sm">RBSE Board • 2021 - 2023</p>
                                        <p className="mt-2 text-[#C0C0C0]">Specialized in Computer Science and Mathematics</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>


            {/* Portfolio Section */}
            {activeSection === 'portfolio' && (
                <div className="Portfolio-section text-white p-6 sm:p-8 border border-gray-700 rounded-lg">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#F25134]">My Projects</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <ProjectCard
                            title="Personal Portfolio"
                            description="The website you're viewing right now, built with React and Tailwind CSS"
                            technologies={['React', 'Tailwind CSS', 'Responsive Design']}
                        />
                        <ProjectCard
                            title="E-commerce Demo"
                            description="A mock e-commerce site with product listings and cart functionality"
                            technologies={['React', 'Node.js', 'MongoDB']}
                        />
                        <ProjectCard
                            title="Task Manager"
                            description="A simple task management application with CRUD operations"
                            technologies={['JavaScript', 'Firebase', 'CSS3']}
                        />
                        <ProjectCard
                            title="Weather App"
                            description="Displays current weather using a public API"
                            technologies={['HTML5', 'CSS3', 'JavaScript']}
                        />
                    </div>
                </div>
            )}

            {/* Sidebar Section */}
            <div className='w-full lg:max-w-[1400px] text-white p-6 sm:p-8 border-gray-700 rounded-lg h-fit mt-10'>
                <h3 className="text-xl font-semibold mb-6 text-[#F25134] text-center">Skills</h3>
                <div className="flex justify-center col-3 sm:scol-4 gap-6 mb-10">
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
                {/* <h3 className="text-xl font-semibold mt-10 mb-4 text-[#F25134]">Learning Journey</h3>
                <div className="border-l-2 border-[#F25134] pl-4 space-y-2">
                    <p className="text-[#C0C0C0] flex items-start gap-2">
                        <span className="text-[#F25134]">•</span> Joined Offline courses in Full Stack Learning
                    </p>
                    <p className="text-[#C0C0C0] flex items-start gap-2">
                        <span className="text-[#F25134]">•</span> Built several personal projects to apply my knowledge
                    </p>
                    <p className="text-[#C0C0C0] flex items-start gap-2">
                        <span className="text-[#F25134]">•</span> Continually expanding my skills through hands-on practice
                    </p>
                </div> */}
            </div>

            <div className='w-full max-w-[1400px] text-center mt-10 p-6 sm:p-8 border border-gray-700 rounded-lg'>
                <h3 className="text-xl font-semibold mb-6 text-[#F25134]">Connect With Me</h3>
                <div className="space-y-4">

                    <div className="bg-[#1B1B1B] p-2 rounded-full flex items-center gap-3 text-[#C0C0C0] hover:text-[#F25134] transition">
                        <SiGmail className="w-5 h-5 text-[#F25134]" />
                        <span>rvs523474@example.com</span>
                    </div>

                    <div className="Contact-section bg-[#1B1B1B] p-2 rounded-full flex items-center gap-3 text-[#C0C0C0] hover:text-[#F25134] transition">
                        <svg className="w-5 h-5 text-[#F25134]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>7297838962</span>
                    </div>

                    <div className="flex gap-4 mt-6">
                        <a href="https://www.linkedin.com/in/ranveer-71458a1b5/" className="bg-[#1B1B1B] p-3 rounded-full hover:bg-[#F25134] transition">
                            <FaLinkedin className="w-5 h-5 text-[#C0C0C0] hover:text-white" />
                        </a>
                        <a href="https://github.com/Rnveer007" className="bg-[#1B1B1B] p-3 rounded-full hover:bg-[#F25134] transition">
                            <FaGithub className="w-5 h-5 text-[#C0C0C0] hover:text-white" />
                        </a>
                        <a href="#" className="bg-[#1B1B1B] p-3 rounded-full hover:bg-[#F25134] transition">
                            <FaTwitter className="w-5 h-5 text-[#C0C0C0] hover:text-white" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="w-full max-w-[1400px] mt-16 text-center text-[#C0C0C0] text-sm border-t border-gray-700 pt-8">
                <p>© {2025} Ranveer. All rights reserved.</p>
            </footer>
        </div>
    );
}

// Skill Icon Component
function SkillIcon({ icon, name }) {
    return (
        <div className="flex flex-col items-center group">
            <div className="bg-[#1B1B1B] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-2 group-hover:bg-[#F25134] transition">
                {icon}
            </div>
            <span className="text-xs text-center">{name}</span>
        </div>
    );
}

// Project Card Component
function ProjectCard({ title, description, technologies }) {
    return (
        <div className="border border-gray-700 rounded-lg overflow-hidden hover:border-[#F25134] transition group">
            <div className="bg-[#1B1B1B] h-48 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[#F25134] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <span className="text-[#C0C0C0] group-hover:text-white transition">Project Preview</span>
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
        </div>
    );
}

export default Portfolio;