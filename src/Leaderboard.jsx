import React from "react";
import Navbar from "./components/Navbar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Ram", points: 1200 },
  { name: "Riya", points: 1100 },
  { name: "Arjun", points: 950 },
  { name: "Bheem", points: 900 },
  { name: "Kabir", points: 850 },
];

const Leaderboard = () => {
  return (
      <div className="min-h-screen bg-[#f4f7fb] p-12 m-0">
        <Navbar/>
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-10 m-10 border border-gray-100">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          🏆 Campus Leaderboard
        </h1>

        {/* Ranking List */}
        <div className="space-y-4 mb-10">
          {data.map((user, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-blue-50 px-6 py-4 rounded-xl"
            >
              <div className="font-semibold text-gray-800">
                #{index + 1} {user.name}
              </div>
              <div className="text-blue-600 font-bold">
                {user.points} pts
              </div>
            </div>
          ))}
        </div>

        {/* Bar Graph */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            📊 Performance Overview
          </h2>

          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="points" fill="#2563eb" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="bg-yellow-100 p-6 rounded-2xl text-center">
          <p className="text-lg font-semibold text-gray-800">
            “Success is not about being the best. It’s about being better than yesterday.”
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Compete. Learn. Grow. 🚀
          </p>
        </div>

      </div>
    </div>
  );
};

export default Leaderboard;