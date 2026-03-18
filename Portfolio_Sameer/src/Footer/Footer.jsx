import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* ================= BRAND SECTION ================= */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Sameer Khan</h2>
          <p className="text-gray-400 leading-relaxed">
            Full Stack Developer passionate about building scalable, modern web
            applications using React and Spring Boot.
          </p>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-blue-400 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* ================= SERVICES ================= */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-3 text-gray-400">
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>Full Stack Applications</li>
            <li>API Integration</li>
          </ul>
        </div>

        {/* ================= CONTACT & SOCIAL ================= */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Connect With Me
          </h3>

          <p className="text-gray-400 mb-4">
            Email:
            <a
              href="mailto:iamsameer6805@gmail.com"
              className="text-blue-400 hover:underline ml-1"
            >
              iamsameer6805@gmail.com
            </a>
          </p>

          <div className="flex gap-4 text-xl">
            <a
              href="https://github.com/sameer-website"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sameer-khan-1472832a7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/siddiquisameer03?igsh=MTRycWQwZGVtdXFscQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM LINE ================= */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Sameer Khan. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
