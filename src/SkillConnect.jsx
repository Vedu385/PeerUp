import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";

const students = [
  {
    name: "Ram",
    role: "React Developer",
    skills: ["React", "Node.js", "JavaScript"],
  },
  {
    name: "Riya Sharma",
    role: "AI Enthusiast",
    skills: ["Python", "Machine Learning", "Data Science"],
  },
  {
    name: "Arjun Mehta",
    role: "Full Stack Developer",
    skills: ["MongoDB", "Express", "React", "Node"],
  },
  {
    name: "Sneha Kapoor",
    role: "Cybersecurity Specialist",
    skills: ["Cybersecurity", "Ethical Hacking", "Cloud"],
  },
];

const SkillConnect = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f4f7fb] px-12 py-12 m-0">
      <Navbar/>
      <div className="max-w-7xl mx-auto m-10 bg-white rounded-3xl shadow-xl p-10">

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          SkillConnect
        </h1>

        <p className="text-gray-500 mb-10">
          Find the perfect teammate for your next project.
        </p>

        {/* Student Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {students.map((student, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 hover:shadow-xl transition"
            >
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-600 mb-6">
                {student.name.charAt(0)}
              </div>

              {/* Name */}
              <h2 className="text-xl font-semibold text-gray-800 mb-1">
                {student.name}
              </h2>

              {/* Role */}
              <p className="text-gray-500 text-sm mb-4">
                {student.role}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {student.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Connect Button */}
              <button
              onClick={() => navigate(`/profile/${encodeURIComponent(student.name)}`)}
              className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
              >
                Connect
                </button>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default SkillConnect;