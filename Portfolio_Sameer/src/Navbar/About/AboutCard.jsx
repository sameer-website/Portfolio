import React from "react";

const AboutCard = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // file in public folder
    link.download = "Sameer_Khan_Resume.pdf";
    link.click();
  };
  return (
    <div className="bg-white shadow-xl rounded-2xl p-10 transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">About Me</h1>

      <p className="text-gray-600 leading-relaxed text-lg">
        I am <span className="font-semibold text-gray-800">Sameer Khan</span>,
        an MCA student and passionate Full Stack Developer. I enjoy building
        modern and scalable web applications using technologies like
        <span className="text-blue-600 font-medium"> React</span>,
        <span className="text-green-600 font-medium"> Node.js</span>,
        <span className="text-yellow-600 font-medium"> Java</span> and
        <span className="text-purple-600 font-medium"> Spring Boot</span>.
      </p>

      <div className="mt-6">
        <button
          onClick={handleDownload}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default AboutCard;
