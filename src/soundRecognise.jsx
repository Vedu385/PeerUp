import React, { useState } from "react";

const sounds = [
  {
    name: "Dog",
    sound: "/sounds/dog.mp3",
    emoji: "🐶",
    correct: "bark"
  },
  {
    name: "Cat",
    sound: "/sounds/cat.mp3",
    emoji: "🐱",
    correct: "meow"
  },
  {
    name: "Bird",
    sound: "/sounds/bird.mp3",
    emoji: "🐦",
    correct: "chirp"
  }
];

const options = ["bark", "meow", "chirp"];

export default function SoundRecognitionGame() {

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("Press play and guess the sound");

  const playSound = () => {
    const audio = new Audio(sounds[current].sound);
    audio.play();
  };

  const checkAnswer = (option) => {

    if(option === sounds[current].correct){

      setScore(score + 1);

      setMessage("✅ Excellent listening!");

      nextSound();

    }
    else{
      setMessage("❌ Listen carefully and try again");
    }
  };

  const nextSound = () => {

    setTimeout(()=>{

      setCurrent((current + 1) % sounds.length);

      setMessage("Press play and guess the sound");

    },1500)

  };

  return (

    <div className="min-h-screen bg-blue-200 text-center p-10">

      <h1 className="text-5xl font-bold mb-6">

        Sound Recognition Game

      </h1>

      <p className="text-2xl mb-6">

        Listen and choose the correct sound

      </p>

      <h2 className="text-3xl mb-6">

        Score: {score}

      </h2>

      <div className="text-8xl mb-6">

        {sounds[current].emoji}

      </div>

      <button
        onClick={playSound}
        className="bg-white text-3xl px-10 py-5 rounded-xl shadow-lg mb-8"
      >
        🔊 PLAY SOUND
      </button>

      <div className="flex justify-center gap-6 mb-8">

        {options.map(option => (

          <button
            key={option}
            onClick={()=>checkAnswer(option)}
            className="bg-white text-3xl px-8 py-4 rounded-xl shadow-lg"
          >

            {option}

          </button>

        ))}

      </div>

      <div className="text-2xl font-bold">

        {message}

      </div>

    </div>

  );
}