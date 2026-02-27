import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaMicrophone, FaTrophy, FaGamepad } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [accessibility, setAccessibility] = useState(false);
  const [listening, setListening] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  /* ============================= */
  /* Close Dropdown on Outside Click */
  /* ============================= */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /* ============================= */
  /* Load Accessibility Preference */
  /* ============================= */
  useEffect(() => {
    const savedPreference = localStorage.getItem("accessibility");
    if (savedPreference === "true") {
      setAccessibility(true);
      document.body.classList.add("accessibility-mode");
    }
  }, []);

  /* ============================= */
  /* Apply Accessibility Mode */
  /* ============================= */
  useEffect(() => {
    if (accessibility) {
      document.body.classList.add("accessibility-mode");
      localStorage.setItem("accessibility", "true");
    } else {
      document.body.classList.remove("accessibility-mode");
      localStorage.setItem("accessibility", "false");
    }
  }, [accessibility]);

  /* ============================= */
  /* Voice Navigation */
  /* ============================= */
  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.start();
    setListening(true);

    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript.toLowerCase();

      if (command.includes("home")) {
        navigate("/");
      } else if (command.includes("skill")) {
        navigate("/skillconnect");
      } else if (command.includes("safe")) {
        navigate("/safevoice");
      } else if (command.includes("event")) {
        navigate("/eventpulse");
      } else if (command.includes("leader")) {
        navigate("/leaderboard");
      } else if (command.includes("battle")) {
        navigate("/battles");
      } else if (command.includes("student")) {
        navigate("/signup-student");
      } else if (command.includes("faculty")) {
        navigate("/signup-faculty");
      } else if (command.includes("login")) {
        navigate("/login");
      } else {
        alert("Command not recognized");
      }

      setListening(false);
    };

    recognition.onerror = () => {
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };
  };

  return (
    <div className="bg-gradient-to-r from-[#1e40af] via-[#2563eb] to-[#3b82f6] shadow-md">
      <div className="max-w-7xl mx-auto px-12 py-5 flex justify-between items-center text-white">

        {/* Logo */}
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-semibold tracking-wide cursor-pointer"
        >
          PeerUP
        </h1>

        {/* Navigation Links */}
        <div className="space-x-8 text-sm font-medium hidden md:block">
          <button onClick={() => navigate("/")} className="hover:opacity-80">
            Home
          </button>
          <button onClick={() => navigate("/skillconnect")} className="hover:opacity-80">
            SkillConnect
          </button>
          <button onClick={() => navigate("/safevoice")} className="hover:opacity-80">
            SafeVoice
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">

          {/* Leaderboard */}
          <button
        onClick={() => window.open("/leaderboard", "_blank")}
        className="flex items-center gap-2 bg-yellow-400 text-black px-3 py-2 rounded-xl text-sm font-medium hover:bg-yellow-500 transition"
    >
  <FaTrophy size={14} />
   Leaderboard
   </button>
            

          {/* Gamified Battles */}
          <button
            onClick={() => navigate("/battles")}
            className="flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-red-600 transition"
          >
            <FaGamepad size={14} />
            Battles
          </button>

          {/* Accessibility Toggle */}
          <button
            onClick={() => setAccessibility(!accessibility)}
            className="bg-white text-blue-700 px-3 py-1 rounded-lg text-sm font-medium hover:bg-blue-100 transition"
          >
            {accessibility ? "Accessibility: ON" : "Accessibility: OFF"}
          </button>

          {/* Voice Navigation */}
          <button
            onClick={startListening}
            className={`flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-medium transition
              ${listening
                ? "bg-red-500 text-white animate-pulse"
                : "bg-white text-blue-700 hover:bg-blue-100"}`}
          >
            <FaMicrophone size={14} />
            {listening ? "Listening..." : "Voice"}
          </button>

          {/* Get Started Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition-all"
            >
              Get Started
            </button>

            {open && (
              <div className="absolute right-0 mt-3 w-48 bg-white text-gray-700 rounded-xl shadow-xl border border-gray-100 overflow-hidden animate-fadeIn">
                <Link
                  to="/signup-student"
                  className="block px-4 py-3 hover:bg-blue-50"
                >
                  Sign up as Student
                </Link>
                <Link
                  to="/signup-faculty"
                  className="block px-4 py-3 hover:bg-blue-50"
                >
                  Sign up as Faculty
                </Link>
                <Link
                  to="/signup-admin"
                  className="block px-4 py-3 hover:bg-blue-50"
                >
                  Sign up as Admin
                </Link>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;