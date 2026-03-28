import React, { useState, useMemo } from "react";

function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "Spotiyfy Clone",
      category: "Frontend",
      tech: ["HTML", "CSS", "JavaScript"],
      description:
        "A full-featured contact management system with authentication, CRUD operations, and secure REST APIs.",
      github: "#",
      link: "https://spotify-project-opal.vercel.app/c",
    },
    {
      id: 2,
      title: "text-utils-react",
      category: "Frontend",
      tech: ["React", "Redux", "Tailwind"],
      description:
        "Modern shopping platform with cart system, product filtering, and responsive UI.",
      github: "#",
      link: "https://text-utils-react-peach.vercel.app/",
    },
    {
      id: 3,
      title: "Task Manager API",
      category: "Backend",
      tech: ["Java", "Spring Boot", "JWT"],
      description:
        "RESTful API with authentication, role-based authorization, and database integration.",
      github: "#",
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "Full Stack",
      tech: ["React", "Tailwind", "Framer Motion"],
      description:
        "RESTful API with authentication, role-based authorization, and database integration.",
      github: "#",
      link: "https://portfolio-sameer-4k9j.onrender.com",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  // Filtering + Searching (Optimized with useMemo)
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const matchesSearch = project.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, search]);

  return (
    <section className="min-h-screen bg-gray-100 p-10 py-30">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          My Projects Portfolio
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Here are some of the real-world applications I have built using modern
          technologies like React, Spring Boot, and MySQL.
        </p>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <input
            type="text"
            placeholder="Search project..."
            className="px-4 py-2 border rounded-lg w-full md:w-1/3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="flex gap-3">
            {["All", "Frontend", "Backend", "Full Stack"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white"
                    : "bg-white border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex justify-between items-center">
                <button
                  
                  className="text-blue-600 font-semibold"

                >
                  
                  <a href={project.link} target="_blank" rel="noreferrer">
                    View Details
                  </a>
                </button>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 hover:text-black"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-xl max-w-lg w-full relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 text-gray-500"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold mb-4">
                {selectedProject.title}
              </h2>

              <p className="text-gray-600 mb-4">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
