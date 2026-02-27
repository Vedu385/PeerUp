import React from "react";
import { FaUserSecret } from "react-icons/fa";
import Navbar from "./components/Navbar";

const SafeVoice = () => {
  const users = [
    { id: 1, alias: "ShadowFox", mood: "Feeling stressed about exams" },
    { id: 2, alias: "MidnightSoul", mood: "Need someone to talk to" },
    { id: 3, alias: "SilentStorm", mood: "Looking for advice" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8 m-10">
      <Navbar/>
      {/* Header */}
      <div className="text-center mb-10 m-10">
        <h1 className="text-3xl font-bold text-gray-800">
          SafeVoice 🕊️
        </h1>
        <p className="text-gray-500 mt-2">
          Anonymous space to express and connect safely.
        </p>
      </div>

      {/* Chat Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaUserSecret className="text-blue-600 text-xl" />
              <h2 className="font-semibold text-lg">{user.alias}</h2>
            </div>

            <p className="text-gray-600 mb-4 text-sm">
              {user.mood}
            </p>

            <button
              className="
              bg-blue-600
              text-white
              px-4 py-2
              rounded-xl
              text-sm
              transition-all
              duration-300
              hover:bg-purple-700
              hover:shadow-lg
              hover:scale-105
              active:scale-95
              "
            >
              Start Anonymous Chat
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SafeVoice;