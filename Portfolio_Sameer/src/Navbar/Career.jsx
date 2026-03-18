import React, { useState, useEffect } from "react";

function Career() {
  // Career Goals Data
  const careerData = [
    {
      id: 1,
      title: "Full Stack Developer",
      description:
        "Build scalable web applications using React, Spring Boot, and SQL.",
      progress: 85,
    },
    {
      id: 2,
      title: "Backend Specialist",
      description:
        "Master Java, Spring Boot, REST APIs, and Node.js.",
      progress: 75,
    },
    {
      id: 3,
      title: "Problem Solver",
      description:
        "Solve 100+ leetcode problems and improve system design knowledge.",
      progress: 60,
    },
  ];

  const [selected, setSelected] = useState(null);
  const [animatedProgress, setAnimatedProgress] = useState({});

  // Animate progress bars
  useEffect(() => {
    const timer = setTimeout(() => {
      const progressObj = {};
      careerData.forEach((item) => {
        progressObj[item.id] = item.progress;
      });
      setAnimatedProgress(progressObj);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">
          Career Vision & Growth
        </h1>

        <p className="text-lg text-gray-700 mb-12">
          As an MCA student, my focus is to become a high-level Full Stack
          Developer capable of building scalable and production-ready
          applications. Below is my current career roadmap.
        </p>

        {/* Career Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {careerData.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-xl shadow-lg transition hover:scale-105"
            >
              <h2 className="text-xl font-bold mb-3">{item.title}</h2>

              {/* Expand Button */}
              <button
                onClick={() =>
                  setSelected(selected === item.id ? null : item.id)
                }
                className="text-blue-600 font-semibold mb-3"
              >
                {selected === item.id ? "Hide Details" : "View Details"}
              </button>

              {/* Expandable Description */}
              {selected === item.id && (
                <p className="text-gray-600 mb-4">{item.description}</p>
              )}

              {/* Progress Bar */}
              <div className="w-full bg-gray-300 rounded-full h-3 mt-4">
                <div
                  className="bg-blue-600 h-3 rounded-full transition-all duration-1000"
                  style={{
                    width: `${animatedProgress[item.id] || 0}%`,
                  }}
                ></div>
              </div>

              <p className="mt-2 text-sm text-gray-500">
                {animatedProgress[item.id] || 0}% Completed
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Career;
