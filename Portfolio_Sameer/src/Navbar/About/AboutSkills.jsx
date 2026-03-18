import React, { useEffect, useState } from "react";

const skillData = [
  { name: "React.js", level: 85 },
  { name: "Java", level: 80 },
  { name: "Spring Boot", level: 75 },
  { name: "SQL", level: 70 },
  { name: "HTML & CSS", level: 90 },
];

const Skills = () => {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(skillData.map((skill) => skill.level));
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white shadow-xl rounded-2xl p-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Technical Skills
      </h2>

      <div className="space-y-5">
        {skillData.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700 font-medium">{skill.name}</span>
              <span className="text-gray-500 text-sm">{skill.level}%</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all duration-1000"
                style={{ width: progress[index] + "%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
