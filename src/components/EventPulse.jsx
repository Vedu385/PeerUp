import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", attendees: 40 },
  { name: "Tue", attendees: 60 },
  { name: "Wed", attendees: 30 },
  { name: "Thu", attendees: 80 },
  { name: "Fri", attendees: 50 },
];

const EventPulse = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-blue-700">
        EventPulse: Participation Trends
      </h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="attendees" stroke="#2563eb" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EventPulse;