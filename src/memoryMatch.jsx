import React, { useState, useEffect } from "react";

const MemoryGame = () => {

const symbols=[
"🍎","🍎",
"🚗","🚗",
"🐶","🐶",
"⭐","⭐"
];

// Shuffle cards
const shuffle=()=>{

return [...symbols]
.sort(()=>Math.random()-0.5);

};

const [cards,setCards]=useState(shuffle());

const [flipped,setFlipped]=useState([]);

const [matched,setMatched]=useState([]);

const [moves,setMoves]=useState(0);

const [message,setMessage]=
useState("Find Matching Pairs");


// Handle click
const handleClick=(index)=>{

if(
flipped.length===2||
flipped.includes(index)||
matched.includes(index)
)
return;

const newFlip=[...flipped,index];

setFlipped(newFlip);


// Check match
if(newFlip.length===2){

setMoves(moves+1);

if(
cards[newFlip[0]]===
cards[newFlip[1]]
){

setMatched([
...matched,
...newFlip
]);

setFlipped([]);

setMessage("✅ Match Found");

}

else{

setMessage("Try Again");

setTimeout(()=>{

setFlipped([]);

},1000);

}

}

};


// Check win
useEffect(()=>{

if(matched.length===cards.length){

setMessage(
"🏆 All Pairs Matched!"
);

}

},[matched]);


return(

<div className="min-h-screen bg-blue-600 flex flex-col items-center justify-center p-10">


<h1 className="text-5xl font-bold text-white mb-10">

🧠 Memory Match Game

</h1>


<div className="bg-blue-500 p-10 rounded-3xl shadow-xl">


<div className="grid grid-cols-4 gap-6">


{cards.map((card,i)=>(

<div

key={i}

onClick={()=>handleClick(i)}

className="w-24 h-24 bg-blue-200 rounded-xl flex items-center justify-center text-4xl cursor-pointer"

>

{flipped.includes(i)||
matched.includes(i)

?card

:"?"}

</div>

))}


</div>


<div className="mt-8 text-center">


<p className="text-3xl text-white">

Moves: {moves}

</p>


<p className="text-3xl text-yellow-200 mt-3">

{message}

</p>


</div>


</div>


</div>

);

};

export default MemoryGame;