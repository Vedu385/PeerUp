import React, { useState } from "react";

const ReactionGame=()=>{

  const [color,setColor]=useState("red");
  const [message,setMessage]=useState("Press Start");
  const [startTime,setStartTime]=useState(null);
  const [score,setScore]=useState(0);

  const startGame=()=>{

    setColor("red");
    setMessage("Wait for Green...");

    const delay=Math.random()*3000+2000;

    setTimeout(()=>{

      setColor("green");
      setStartTime(Date.now());
      setMessage("CLICK NOW!");

    },delay);

  };

  const handleClick=()=>{

    if(color==="green"){

      const reaction=
      Date.now()-startTime;

      let comment="";

      // Reaction comments
      if(reaction<200)
      comment="🔥 Amazing reflexes! Super fast!";

      else if(reaction<400)
      comment="⚡ Great reaction!";

      else if(reaction<700)
      comment="🙂 Good job!";

      else
      comment="🐢 Try to react faster!";


      setMessage(
      `⚡ Reaction Time: ${reaction} ms - ${comment}`
      );

      setScore(score+1);

    }
    else{

      setMessage(
      "❌ Too Early! Wait for Green"
      );

    }

  };

  return(

<div className="min-h-screen bg-blue-600 flex flex-col items-center justify-center p-10">

<h1 className="text-5xl font-bold text-white mb-10">

⚡ Reaction Speed Game

</h1>


<div className="bg-blue-500 p-10 rounded-3xl shadow-2xl text-center">


<h2 className="text-4xl text-white mb-8">

Click when it turns GREEN

</h2>


<button

onClick={handleClick}

className="w-64 h-64 rounded-3xl shadow-xl text-4xl font-bold text-white mb-8 transition"

style={{background:color}}

>

CLICK

</button>


<div className="flex gap-6 justify-center">

<button

onClick={startGame}

className="bg-white text-blue-700 px-8 py-4 text-2xl rounded-xl font-bold"

>

Start

</button>

</div>


<div className="mt-8">

<p className="text-3xl text-white">

Score: {score}

</p>

<p className="text-3xl text-yellow-200 mt-3">

{message}

</p>

</div>


</div>

</div>

  );

};

export default ReactionGame;




// import React, { useState } from "react";

// const ReactionGame=()=>{

//   const [color,setColor]=useState("red");
//   const [message,setMessage]=useState("Press Start");
//   const [startTime,setStartTime]=useState(null);
//   const [score,setScore]=useState(0);

//   const startGame=()=>{

//     setColor("red");
//     setMessage("Wait for Green...");

//     const delay=Math.random()*3000+2000;

//     setTimeout(()=>{

//       setColor("green");
//       setStartTime(Date.now());
//       setMessage("CLICK NOW!");

//     },delay);

//   };

//   const handleClick=()=>{

//     if(color==="green"){

//       const reaction=
//       Date.now()-startTime;

//       setMessage(
//       `⚡ Reaction Time: ${reaction} ms`
//       );

//       setScore(score+1);

//     }
//     else{

//       setMessage(
//       "❌ Too Early!"
//       );

//     }

//   };

//   return(

// <div className="min-h-screen bg-blue-600 flex flex-col items-center justify-center p-10">

// <h1 className="text-5xl font-bold text-white mb-10">

// ⚡ Reaction Speed Game

// </h1>


// <div className="bg-blue-500 p-10 rounded-3xl shadow-2xl text-center">


// <h2 className="text-4xl text-white mb-8">

// Click when it turns GREEN

// </h2>


// <button

// onClick={handleClick}

// className="w-64 h-64 rounded-3xl shadow-xl text-4xl font-bold text-white mb-8 transition"

// style={{background:color}}

// >

// CLICK

// </button>


// <div className="flex gap-6 justify-center">

// <button

// onClick={startGame}

// className="bg-white text-blue-700 px-8 py-4 text-2xl rounded-xl font-bold"

// >

// Start

// </button>

// </div>


// <div className="mt-8">

// <p className="text-3xl text-white">

// Score: {score}

// </p>

// <p className="text-3xl text-yellow-200 mt-3">

// {message}

// </p>

// </div>


// </div>

// </div>

//   );

// };

// export default ReactionGame;
// const [color,setColor]=useState("red");

// const start=()=>{

// setColor("red");

// setTimeout(()=>{

// setColor("green");

// },2000);

// }

// return(

// <div>

// <h1>⚡ Reaction Test</h1>

// <button
// style={{background:color}}
// onClick={()=>alert("Clicked")}
// >

// Click Me

// </button>

// <button onClick={start}>
// Start
// </button>

// </div>

// )