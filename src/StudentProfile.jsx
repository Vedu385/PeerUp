import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaEnvelope, FaPhone, FaVideo } from "react-icons/fa";
import Navbar from "./components/Navbar";
import ReactQuizGame from "./RamQuiz";

const StudentProfile = () => {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);
  const navigate = useNavigate();

  const [showChat, setShowChat] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  return (
      <div className="min-h-screen bg-[#f4f7fb] p-10 m-0">
        <Navbar />
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 m-5 transition"
      >
        ← Back
      </button>

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10 m-10 border border-gray-100">

        {/* Profile Header */}
        <div className="flex items-center gap-6 mb-8">
          <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-3xl font-bold text-blue-600">
            {decodedName.charAt(0)}
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {decodedName}
            </h1>
            <p className="text-gray-500">
              Computer Science Student | React & AI Enthusiast
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-10">
          <button
            onClick={() => setShowChat(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            <FaEnvelope /> Message
          </button>

          <button
            onClick={() => alert("📞 Voice Call Started (Demo Mode)")}
            className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 transition"
          >
            <FaPhone /> Voice Call
          </button>

          <button
            onClick={() => setShowVideo(true)}
            className="flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-xl hover:bg-purple-700 transition"
          >
            <FaVideo /> Video Call
          </button>
        </div>

        {/* About */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            About
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Passionate about building scalable web applications and solving
            real-world problems using Artificial Intelligence and Machine Learning.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {["React", "Node.js", "Machine Learning", "Python", "SQL"].map(
              (skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>

        {/* Tutorial Video */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Featured Tutorial
          </h2>

          <div className="aspect-video rounded-xl overflow-hidden shadow-md">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Ke90Tje7VS0"
              title="React Tutorial"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          <div
            onClick={() => navigate(`/profile/${decodedName}/quiz`)}
            className="bg-blue-100 p-6 rounded-2xl cursor-pointer hover:shadow-lg transition m-10"
          ><button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Start Quiz</button></div>

          <p className="mt-4 text-gray-600 text-sm">
            🎥 Beginner-friendly React tutorial explaining components and hooks.
          </p>
        </div>




      </div>

      {/* Chat Modal */}
      {showChat && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-2xl w-96 shadow-xl">
            <h3 className="text-lg font-semibold mb-4">
              Chat with {decodedName}
            </h3>

            <textarea
              placeholder="Type your message..."
              className="w-full border rounded-lg p-3 mb-4"
            ></textarea>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowChat(false)}
                className="px-4 py-2 bg-gray-200 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert("Message Sent (Demo Mode)");
                  setShowChat(false);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Video Call Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-white p-6 rounded-2xl w-[500px] shadow-xl text-center">
            <h3 className="text-lg font-semibold mb-4">
              🎥 Video Call with {decodedName}
            </h3>

            <div className="bg-gray-200 h-48 rounded-xl mb-4 flex items-center justify-center">
              Video Stream (Demo Mode)
            </div>

            <button
              onClick={() => setShowVideo(false)}
              className="px-6 py-2 bg-red-600 text-white rounded-lg"
            >
              End Call
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default StudentProfile;