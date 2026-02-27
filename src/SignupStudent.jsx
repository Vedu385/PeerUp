import React, { useState } from "react";
import { Link } from "react-router-dom";

const skillOptions = [
  "Python",
  "Java",
  "C++",
  "Machine Learning",
  "Data Science",
  "Web Development",
  "React",
  "Node.js",
  "UI/UX Design",
  "Cybersecurity",
  "Cloud Computing",
  "AI",
  "SQL",
  "DSA",
  "DevOps"
];

function SignupStudent() {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [input, setInput] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const addSkill = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const removeSkill = (skill) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.placeholder.includes("Name")
        ? "name"
        : e.target.placeholder.includes("Email")
        ? "email"
        : e.target.placeholder.includes("Confirm")
        ? "confirmPassword"
        : "password"]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const response = await fetch("http://localhost:4000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        skills: selectedSkills
      })
    });

    if (response.ok) {
      alert("Student Registered Successfully!");

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
      setSelectedSkills([]);
    } else {
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f7fb]">
      <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl border border-gray-100">

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          PeerUP
        </h1>

        <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Student Sign Up
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />

          {/* Skills Section */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Add Skills
            </label>

            <input
              type="text"
              placeholder="Search skills..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full mt-2 p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            {input && (
              <div className="mt-2 bg-gray-50 border rounded-xl max-h-32 overflow-y-auto">
                {skillOptions
                  .filter((skill) =>
                    skill.toLowerCase().includes(input.toLowerCase())
                  )
                  .map((skill) => (
                    <div
                      key={skill}
                      onClick={() => {
                        addSkill(skill);
                        setInput("");
                      }}
                      className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-sm"
                    >
                      {skill}
                    </div>
                  ))}
              </div>
            )}

            <div className="flex flex-wrap gap-2 mt-3">
              {selectedSkills.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="text-blue-500 hover:text-red-500"
                  >
                    
                  </button>
                </span>
              ))}
            </div>
          </div>

          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-xl font-medium hover:from-blue-700 hover:to-blue-600 transition"
          >
            Create Student Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupStudent;