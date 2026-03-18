import React from "react";
import AboutCard from "./AboutCard";
import Skills from "./AboutSkills";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
        <AboutCard />
        <Skills />
      </div>
    </section>
  );
};

export default About;
