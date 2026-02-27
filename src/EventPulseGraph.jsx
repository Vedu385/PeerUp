import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", participants: 30 },
  { name: "Feb", participants: 45 },
  { name: "Mar", participants: 60 },
  { name: "Apr", participants: 40 },
  { name: "May", participants: 75 },
];

const EventPulseGraph = () => {
  return (
  <div className="min-h-screen bg-gray-50 py-16 px-6">
    
    {/* Top Heading Section */}
    <div className="text-center mb-14">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        EventPulse
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        "Participation is the heartbeat of a vibrant campus.  
        Show up. Step forward. Leave your mark."
      </p>
    </div>

    {/* Graph Section */}
    <div className="flex justify-center">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-3xl">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Event Participation Trends
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="participants" stroke="#2563eb" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);
};

export default EventPulseGraph;