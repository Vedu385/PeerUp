import React, { useState } from "react";

const ReactQuizGame = () => {

  const questions = [
    {
      question: "What is React mainly used for?",
      options: [
        "Database management",
        "Building user interfaces",
        "Network security",
        "Operating systems"
      ],
      answer: "Building user interfaces"
    },
    {
      question: "React is a ______.",
      options: [
        "Programming language",
        "Database",
        "JavaScript library",
        "Operating system"
      ],
      answer: "JavaScript library"
    },
    {
      question: "What is JSX?",
      options: [
        "A database language",
        "HTML inside JavaScript",
        "CSS framework",
        "Server language"
      ],
      answer: "HTML inside JavaScript"
    },
    {
      question: "Which command creates a React app?",
      options: [
        "npm start",
        "node create",
        "npx create-react-app",
        "react install"
      ],
      answer: "npx create-react-app"
    },
    {
      question: "React applications are built using ______.",
      options: [
        "Classes only",
        "Functions only",
        "Components",
        "Tables"
      ],
      answer: "Components"
    },
    {
      question: "Props are used to ______.",
      options: [
        "Store database",
        "Pass data between components",
        "Style components",
        "Run loops"
      ],
      answer: "Pass data between components"
    },
    {
      question: "State is used to ______.",
      options: [
        "Store dynamic data",
        "Store CSS",
        "Store HTML",
        "Store images"
      ],
      answer: "Store dynamic data"
    },
    {
      question: "Which hook is used for state?",
      options: [
        "useEffect",
        "useState",
        "useHook",
        "setStateOnly"
      ],
      answer: "useState"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {

    setSelected(option);

    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {

      const next = current + 1;

      if (next < questions.length) {
        setCurrent(next);
        setSelected(null);
      } else {
        setShowScore(true);
      }

    }, 800);
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setShowScore(false);
    setSelected(null);
  };

  const progress =
    ((current) / questions.length) * 100;

  return (

    <div style={styles.container}>

      <div style={styles.card}>

        <h1 style={styles.title}>
          🎮 React Quiz
        </h1>

        {showScore ? (

          <div>

            <h2>
              Score: {score} / {questions.length}
            </h2>

            <h3>
              {score > 6
                ? "🏆 Excellent!"
                : score > 4
                ? "👍 Good Job!"
                : "📘 Keep Learning"}
            </h3>

            <button
              onClick={restartQuiz}
              style={styles.restart}
            >
              Play Again
            </button>

          </div>

        ) : (

          <div>

            <div style={styles.topBar}>

              <span>
                Question {current + 1}/
                {questions.length}
              </span>

              <span>
                ⭐ {score}
              </span>

            </div>

            <div style={styles.progressBg}>

              <div
                style={{
                  ...styles.progressFill,
                  width: progress + "%"
                }}
              />

            </div>

            <h2 style={styles.question}>
              {questions[current].question}
            </h2>

            {questions[current].options.map(
              (option, index) => {

                let bg = "#2196F3";

                if (selected) {

                  if (
                    option ===
                    questions[current].answer
                  )
                    bg = "#4CAF50";

                  else if (
                    option === selected
                  )
                    bg = "#f44336";
                }

                return (

                  <button
                    key={index}
                    style={{
                      ...styles.option,
                      background: bg
                    }}
                    onClick={() =>
                      handleAnswer(option)
                    }
                    disabled={selected}
                  >
                    {option}
                  </button>

                );
              }
            )}

          </div>

        )}

      </div>

    </div>
  );
};

const styles = {

  container: {

    height: "100vh",

    display: "flex",

    justifyContent: "center",

    alignItems: "center",

    background:
      "linear-gradient(#0D47A1,#1976D2)"
  },

  card: {

    background: "white",

    padding: "30px",

    borderRadius: "20px",

    width: "400px",

    textAlign: "center",

    boxShadow:
      "0px 10px 30px rgba(0,0,0,0.2)"
  },

  title: {

    color: "#1976D2"
  },

  topBar: {

    display: "flex",

    justifyContent:
      "space-between",

    marginBottom: "10px",

    fontWeight: "bold"
  },

  progressBg: {

    height: "10px",

    background: "#ddd",

    borderRadius: "10px",

    marginBottom: "20px"
  },

  progressFill: {

    height: "10px",

    background: "#1976D2",

    borderRadius: "10px"
  },

  question: {

    marginBottom: "20px"
  },

  option: {

    display: "block",

    width: "100%",

    border: "none",

    color: "white",

    padding: "12px",

    margin: "10px 0",

    borderRadius: "10px",

    fontSize: "16px",

    cursor: "pointer",

    transition: "0.3s"
  },

  restart: {

    padding: "12px 20px",

    background: "#1976D2",

    color: "white",

    border: "none",

    borderRadius: "10px",

    cursor: "pointer",

    fontSize: "18px"
  }

};

export default ReactQuizGame;