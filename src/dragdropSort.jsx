import React, { useState } from "react";

const itemsData = [
  { id: 1, name: "Apple", category: "Fruits", emoji: "🍎" },
  { id: 2, name: "Banana", category: "Fruits", emoji: "🍌" },
  { id: 3, name: "Car", category: "Vehicles", emoji: "🚗" },
  { id: 4, name: "Bus", category: "Vehicles", emoji: "🚌" },
  { id: 5, name: "Dog", category: "Animals", emoji: "🐶" },
  { id: 6, name: "Cat", category: "Animals", emoji: "🐱" },
];

export default function SortingGame() {
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("Drag items to the correct box");
  const [completed, setCompleted] = useState([]);

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData("item", JSON.stringify(item));
  };

  const handleDrop = (e, category) => {
    const item = JSON.parse(e.dataTransfer.getData("item"));

    if (item.category === category && !completed.includes(item.id)) {
      setScore(score + 1);
      setCompleted([...completed, item.id]);
      setMessage("✅ Great job! Correct match!");
    } else {
      setMessage("❌ Try again!");
    }
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-blue-100 p-8 text-center">

      <h1 className="text-4xl font-bold mb-4">
        Drag & Drop Sorting Game
      </h1>

      <p className="text-xl mb-4">
        Sort items into correct groups
      </p>

      <h2 className="text-2xl mb-4">
        Score: {score}
      </h2>

      <div className="text-xl mb-6 font-semibold">
        {message}
      </div>

      {/* Items */}
      <div className="flex justify-center gap-6 mb-10 flex-wrap">

        {itemsData.map(item => (
          !completed.includes(item.id) && (
            <div
              key={item.id}
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
              className="text-6xl cursor-grab p-4 bg-white rounded-xl shadow-lg"
            >
              {item.emoji}
            </div>
          )
        ))}

      </div>

      {/* Categories */}

      <div className="flex justify-center gap-10 flex-wrap">

        <div
          onDrop={(e) => handleDrop(e, "Fruits")}
          onDragOver={allowDrop}
          className="w-48 h-48 bg-green-200 rounded-2xl flex items-center justify-center text-2xl font-bold"
        >
          Fruits 🍎
        </div>

        <div
          onDrop={(e) => handleDrop(e, "Vehicles")}
          onDragOver={allowDrop}
          className="w-48 h-48 bg-yellow-200 rounded-2xl flex items-center justify-center text-2xl font-bold"
        >
          Vehicles 🚗
        </div>

        <div
          onDrop={(e) => handleDrop(e, "Animals")}
          onDragOver={allowDrop}
          className="w-48 h-48 bg-pink-200 rounded-2xl flex items-center justify-center text-2xl font-bold"
        >
          Animals 🐶
        </div>

      </div>

    </div>
  );
}