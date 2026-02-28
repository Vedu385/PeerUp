import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";

const GamifiedBattles = () => {
  const navigate = useNavigate();

  return (
    
      <div className="min-h-screen bg-[#f4f7fb] p-12">
        <Navbar />
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-10 m-10">
        

        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          ⚔️ Gamified Skill Battles
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          {/* N Queens Card */}
          <div
            onClick={() => navigate("/battles/nqueens")}
            className="bg-blue-100 p-6 rounded-2xl cursor-pointer hover:shadow-lg transition"
          >
            <h2 className="font-semibold text-lg mb-3 text-gray-800">
              ♟ N-Queens Challenge 
            </h2>
            <p className="text-sm text-gray-800 font-bold">
              Solve the classic N-Queens backtracking problem.
            </p>
          </div>

          <div 
            onClick={() => navigate("/battles/colormatch")}
            className="bg-purple-100 p-6 rounded-2xl cursor-pointer hover:shadow-lg transition"
            >
            
            <h2 className="font-semibold text-lg mb-3 text-gray-800">
              🧠 Color Matching Game
            </h2>
            <p className="text-sm text-gray-800 font-bold">
              Match the correct color to the target emoji.
            </p>
          </div>

          <div 
            onClick={() => navigate("/battles/memory")}
            className="bg-purple-100 p-6 rounded-2xl cursor-pointer hover:shadow-lg transition"
            >
            
            <h2 className="font-semibold text-lg mb-3 text-gray-800">
              🧠 Memory Matching Game
            </h2>
            <p className="text-sm text-gray-800 font-bold">
              Memory Match Game for autism support is ideal because it builds memory, focus, and pattern recognition.
            </p>
          </div>

          <div 
            onClick={() => navigate("/battles/reaction")}
            className="bg-green-100 p-6 rounded-2xl cursor-pointer hover:shadow-lg transition"
            >
            <h2 className="font-semibold text-lg mb-3 text-gray-800">
              🚀 React Speed Challenge
            </h2>
            <p className="text-sm text-gray-800 font-bold">
              Test your reaction time in this fast-paced challenge.
            </p>
          </div>
          <div 
            onClick={() => navigate("/battles/sorting")}
            className="bg-yellow-100 p-6 rounded-2xl cursor-pointer hover:shadow-lg transition"
            >
            <h2 className="font-semibold text-lg mb-3 text-gray-800">
              🧠 Sorting Game
            </h2>
            <p className="text-sm text-gray-800 font-bold">
              Drag and drop items into the correct categories.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default GamifiedBattles;