import { useState } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}>
            {/* Navbar */}
            <nav className="flex justify-between items-center p-4 shadow-md">
                <h1 className="text-2xl font-bold">Ranveer.dev</h1>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded"
                >
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </nav>

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col items-center justify-center text-center p-8">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-extrabold mb-4"
                >
                    Hi 👋 I'm Ranveer
                </motion.h2>
                <p className="text-xl mb-6">Full Stack Developer in the making 🚀</p>
                <div className="flex gap-4">
                    <a href="#projects" className="px-4 py-2 bg-blue-500 text-white rounded shadow">
                        View Projects
                    </a>
                    <a href="#contact" className="px-4 py-2 border border-blue-500 text-blue-500 rounded">
                        Contact Me
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="p-8 max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-2">About Me</h3>
                <p>
                    I'm a 12th pass student currently learning full stack development. Passionate
                    about building web apps and becoming a great developer.
                </p>
            </section>

            {/* Projects Section */}
            <section id="projects" className="p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-center">Projects</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 shadow rounded bg-gray-100 dark:bg-gray-800">
                        <h4 className="font-semibold text-lg">Blog App</h4>
                        <p>React + Express + MongoDB blog with login and CRUD features.</p>
                    </div>
                    <div className="p-4 shadow rounded bg-gray-100 dark:bg-gray-800">
                        <h4 className="font-semibold text-lg">Test/Quiz App</h4>
                        <p>Upload JSON, take tests, see scores. Full stack app.</p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
                <p>Email: ranveer@example.com</p>
                <div className="mt-4 flex justify-center gap-4">
                    <a href="https://github.com/ranveer" className="text-blue-600">GitHub</a>
                    <a href="https://linkedin.com/in/rnveer007" className="text-blue-600">LinkedIn</a>
                </div>
            </section>
        </div>
    );
}
