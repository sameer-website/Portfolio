import { Link } from "react-router-dom";
import portfolioImage from "../img/portfolio.jpg";
import { useState, useEffect } from "react";

function Home() {

  // Typing Effect
  const roles = [
    "Full Stack Developer",
    "MCA Student",
    "Java & Spring Boot Developer",
    "Problem Solver",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);

  useEffect(() => {
    if (subIndex < roles[index].length) {
      const timeout = setTimeout(() => {
        setSubIndex(subIndex + 1);
        setText(roles[index].substring(0, subIndex + 1));
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setSubIndex(0);
        setIndex((prev) => (prev + 1) % roles.length);
      }, 1500);
    }
  }, [subIndex, index]);

  // Skills Array (Using map concept)
  const skills = [
    { title: "Frontend", tech: "React, HTML, CSS, Bootstrap, JavaScript" },
    { title: "Backend", tech: "Java, Spring Boot, Node.js, REST APIs" },
    { title: "Database", tech: "MySQL, SQL Optimization" },
    { title: "Tools", tech: "GitHub, Spring Tool Suite, VS Code" },
  ];

  // Counter Animation
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setProjects(count);
      if (count === 10) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="bg-gray-50 overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="min-h-screen flex flex-col items-center text-center px-8 pt-24 pb-12 bg-linear-to-r from-blue-600 to-indigo-400 text-white">
        <div className="max-w-4xl">
          <h1 className="text-6xl font-extrabold mb-6 leading-tight">
            Hi, I'm <span className="text-yellow-400">Sameer Khan</span>
          </h1>

          {/* Typing Role */}
          <h2 className="text-2xl font-semibold mb-6 h-8">{text}</h2>

          {/* Professional Summary */}
          <p className="text-lg mb-8 text-gray-100 leading-relaxed">
            I am a passionate Full Stack Developer currently pursuing MCA. I
            specialize in building scalable and high-performance web
            applications using React and Spring Boot. I enjoy solving real-world
            problems through clean and efficient code.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-6 mb-12">
            <Link
              to="/projects"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
            >
              Explore Projects
            </Link>

            <Link
              to="/contact"
              className="border-2 border-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition"
            >
              Hire Me
            </Link>
          </div>

          {/* Skills Section using map */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="bg-white text-gray-800 p-6 rounded-xl shadow-lg"
              >
                <h3 className="font-bold text-xl mb-2">{skill.title}</h3>
                <p>{skill.tech}</p>
              </div>
            ))}
          </div>

          {/* Stats Counter */}
          <div className="flex justify-center gap-10 text-white">
            <div>
              <h2 className="text-3xl font-bold">{projects}+</h2>
              <p>Projects Completed</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">100+</h2>
              <p> Problems Solved</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">3+</h2>
              <p>Years Coding Practice</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="relative py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-blue-600 font-semibold mb-2 tracking-widest uppercase">
              Get To Know Me
            </p>

            <h2 className="text-5xl font-bold mb-6 text-gray-800">About Me</h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I am passionate about building scalable and high-performance
              applications using React, Spring Boot, and MySQL. I focus on clean
              architecture, optimized performance, and user-friendly design.
            </p>

            {/* Skills Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
                React
              </span>
              <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
                Java
              </span>
              <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-medium">
                MySQL
              </span>
              <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium">
                REST APIs
              </span>
            </div>

            {/* Button */}
            <Link
              to="/about"
              className="inline-block bg-linear-to-r from-blue-600 to-indigo-600 
        text-white px-8 py-3 rounded-full shadow-lg 
        hover:scale-105 hover:shadow-xl transition duration-300"
            >
              Read More →
            </Link>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="relative flex justify-center">
            {/* Glow Background */}
            <div className="absolute -z-10 w-80 h-80 bg-blue-300 rounded-full blur-3xl opacity-40"></div>

            <img
              src={portfolioImage}
              alt="Sameer portfolio"
              className="w-80 rounded-3xl shadow-2xl border-4 border-white object-cover"
            />
          </div>
        </div>
      </section>
      {/* ================= STATISTICS SECTION ================= */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 text-center gap-10">
          {[
            { number: "10+", label: "Projects Completed" },
            { number: "2+", label: "Internships" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "3+", label: "Technologies Mastered" },
          ].map((item, index) => (
            <div key={index}>
              <h3 className="text-4xl font-bold text-blue-600">
                {item.number}
              </h3>
              <p className="text-gray-600 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-14 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-16">What I Offer</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            "Frontend Development",
            "Backend Development",
            "Full Stack Applications",
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                {service}
              </h3>
              <p className="text-gray-600">
                High-quality scalable applications using modern technologies.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROJECT SECTION ================= */}
      <section className="py-14 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Main Projects</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-4">Text Utils</h3>
            <p className="text-gray-600 mb-6">
              Full-stack CRM built with Spring Boot & React.
            </p>
            <a
              href="https://text-utils-react-peach.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold"
            >
              View Details →
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-4">Spotify Clone</h3>
            <p className="text-gray-600 mb-6">
              Modern responsive personal portfolio.
            </p>
            <a
              href="https://spotify-project-opal.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold"
            >
              View Details →
            </a>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className=" py-14 text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
        <p className="mb-8 text-gray-950">
          Ready to bring your ideas to life? Let's connect today.
        </p>

        <Link
          to="/contact"
          className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow hover:scale-105 transition"
        >
          Contact Me Now
        </Link>
      </section>
    </div>
  );
}

export default Home;
