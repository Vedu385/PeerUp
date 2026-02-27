import React, { useState } from "react";
import Navbar from "./components/Navbar";
const ColorGame=()=>{    

  const colors = [
    {name:"Red", value:"#ff4d4d"},
    {name:"Blue", value:"#3399ff"},
    {name:"Green", value:"#33cc66"},
    {name:"Yellow", value:"#ffcc00"}
  ];

  const randomColor=()=>colors[
    Math.floor(Math.random()*colors.length)
  ];

  const [target,setTarget]=useState(randomColor());
  const [score,setScore]=useState(0);
  const [message,setMessage]=useState("");

  const checkAnswer=(color)=>{

    if(color.name===target.name){

      setScore(score+1);

      setMessage("✅ Correct!");

      setTarget(randomColor());

    }
    else{

      setMessage("❌ Try Again");

    }

  };

  return(

<div className="min-h-screen bg-blue-600 flex flex-col items-center justify-center p-10">
    

    <Navbar />

<h1 className="text-5xl font-bold text-white mb-10">

🎨 Color Recognition Game

</h1>


<div className="bg-blue-500 p-10 rounded-3xl shadow-2xl text-center">


<h2 className="text-4xl text-white mb-6">

Click the Color:

</h2>


<div
className="text-6xl font-bold text-white mb-10"
>

{target.name}

</div>


<div className="grid grid-cols-2 gap-6">

{colors.map((c)=> (

<button

key={c.name}

onClick={()=>checkAnswer(c)}

className="w-40 h-40 rounded-2xl shadow-xl text-2xl font-bold text-white hover:scale-110 transition"

style={{background:c.value}}

>

{c.name}

</button>

))}

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

// export default ColorRecognitionGame;



export default ColorGame;   

// const colors=["🍎Red","🔵Blue","🟢Green","🟡Yellow"];

// const [target,setTarget]=useState("Red");

// return(

// <div>

// <h1>🎨 Color Match</h1>

// <p>Click: {target}</p>

// {colors.map(c=>(

// <button
// key={c}
// onClick={()=>alert(c===target?"Correct":"Try again")}
// >

// {c}

// </button>

// ))}

// </div>

// )