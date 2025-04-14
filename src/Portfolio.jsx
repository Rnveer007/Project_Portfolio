import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-gradient-to-br from-[#1e1e2f] to-[#121212] text-white font-sans transition-colors duration-500 min-h-screen dark:bg-gradient-to-br dark:from-[#1e1e2f] dark:to-[#121212]">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 shadow-md bg-[#1e1e2f] sticky top-0 z-50">
        <h1 className="text-3xl font-extrabold tracking-tight text-pink-400">Ranveer<span className="text-purple-500">.dev</span></h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-br from-[#2c003e] to-[#1a0022]">
        {/* Profile Picture */}
        <motion.img
          src="profile.jpg"  // Replace with your image path
          alt="Ranveer's Profile"
          className="w-32 h-32 rounded-full border-4 border-pink-400 mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-4"
        >
          Hi 👋 I'm <span className="text-pink-400">Ranveer</span>
        </motion.h2>
        <p className="text-2xl mb-6">Full Stack Developer in the making 🚀</p>
        <div className="flex gap-4">
          <a href="#projects" className="px-6 py-3 bg-pink-600 text-white rounded-xl shadow hover:bg-pink-700 transition-all">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 border border-pink-400 text-pink-400 rounded-xl hover:bg-pink-800 transition-all">
            Contact Me
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="p-10 max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-4 text-pink-300">About Me</h3>
        <p className="text-lg leading-relaxed text-gray-300">
          I'm a 12th pass student currently learning full stack development. Passionate about creating web apps, exploring new technologies, and on a mission to become a top developer.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="p-10 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-center text-pink-300">Skills</h3>
        <div className="flex col-3 sm:col-6 gap-6 justify-center">
          <FaHtml5 size={40} className="text-orange-500" />
          <FaCss3Alt size={40} className="text-blue-400" />
          <FaJs size={40} className="text-yellow-400" />
          <FaReact size={40} className="text-blue-300" />
          <FaNodeJs size={40} className="text-green-400" />
          <FaGithub size={40} className="text-white" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-10 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-center text-pink-300">Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 shadow-xl rounded-2xl bg-[#2c003e] backdrop-blur bg-opacity-20 hover:scale-105 transition-transform">
            <h4 className="font-semibold text-xl mb-2 text-white">Blog App</h4>
            <p className="text-gray-400">React + Express + MongoDB blog with login and CRUD features.</p>
          </div>
          <div className="p-6 shadow-xl rounded-2xl bg-[#2c003e] backdrop-blur bg-opacity-20 hover:scale-105 transition-transform">
            <h4 className="font-semibold text-xl mb-2 text-white">Test/Quiz App</h4>
            <p className="text-gray-400">Upload JSON, take tests, see scores. Full stack app.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-10 text-center">
        <h3 className="text-3xl font-bold mb-6 text-pink-300">Contact Me</h3>
        <p className="text-lg mb-4 text-gray-300">Email: <a href="mailto:ranveer@example.com" className="text-pink-400 hover:underline">rvs523474@example.com</a></p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="https://github.com/Rnveer007" className="text-pink-400 hover:underline flex items-center gap-2">
            <FaGithub /> GitHub
          </a>
          <a href="https://linkedin.com/in/ranveer-71458a1b5" className="text-pink-400 hover:underline flex items-center gap-2">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </section>

      {/* Footer with CV Download */}
      <footer className="text-center p-6 text-gray-400">
        <a href="/Ranveer_CV.pdf" download className="text-pink-400 hover:underline">Download CV</a>
        <p className="mt-2">© 2025 Ranveer.dev. All rights reserved.</p>
      </footer>
    </div>
  );
}
