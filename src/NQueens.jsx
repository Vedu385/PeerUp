import React, { useState } from "react";

const NQueensManual = () => {

  const [n,setN]=useState(4);
  const [board,setBoard]=useState([]);
  const [message,setMessage]=useState("Press Start");
  const [startTime,setStartTime]=useState(null);
  const [score,setScore]=useState(0);
  const [timeTaken,setTimeTaken]=useState(0);

  // Start Game
  const startGame=()=>{

    setBoard(new Array(n).fill(-1));
    setMessage("Place Queens");
    setStartTime(Date.now());
    setScore(0);
    setTimeTaken(0);

  };

  // Validate board
  const isValidBoard=(b)=>{

    for(let i=0;i<n;i++){

      if(b[i]===-1)
      return false;

      for(let j=i+1;j<n;j++){

        if(b[i]===b[j])
        return false;

        if(
          Math.abs(i-j)===
          Math.abs(b[i]-b[j])
        )
        return false;

      }

    }

    return true;

  };

  // Human comments
  const getComment=(time)=>{

    if(time<20)
    return "🔥 Genius level solving!";

    else if(time<40)
    return "⚡ Excellent work!";

    else if(time<60)
    return "🙂 Good solving!";

    else
    return "🐢 Nice effort, keep practicing!";

  };


  // Click
  const handleClick=(row,col)=>{

    let newBoard=[...board];

    if(newBoard[row]===col)
    newBoard[row]=-1;

    else
    newBoard[row]=col;

    setBoard(newBoard);

    // Check solution
    if(isValidBoard(newBoard)){

      const time=
      Math.floor(
      (Date.now()-startTime)/1000
      );

      setTimeTaken(time);

      // Score formula
      const finalScore=
      Math.max(
      100-time,
      10
      );

      setScore(finalScore);

      const comment=
      getComment(time);

      setMessage(
      `🏆 Solved in ${time}s - ${comment}`
      );

    }

    else{

      setMessage("Keep Trying");

    }

  };


return(

<div className="min-h-screen bg-blue-600 p-12">

<h1 className="text-5xl font-bold text-white mb-8">

⚔️ Gamified Skill Battles

</h1>


<div className="max-w-4xl mx-auto bg-blue-500 p-10 rounded-3xl shadow-xl">


<h1 className="text-4xl font-bold text-white mb-6">

♟ N-Queens Challenge

</h1>


<div className="flex gap-4 mb-6">

<input

type="number"
min="4"
max="10"
value={n}

onChange={(e)=>
setN(Number(e.target.value))
}

className="px-4 py-2 rounded-lg text-xl w-24"

/>


<button

onClick={startGame}

className="bg-white text-blue-700 px-6 py-3 rounded-xl text-xl font-bold"

>

Start

</button>

</div>



{board.length>0 &&(

<div

className="grid mx-auto"

style={{

gridTemplateColumns:
`repeat(${n},60px)`

}}

>

{board.map((col,row)=>

Array.from({length:n})
.map((_,c)=>(

<div

key={`${row}-${c}`}

onClick={()=>handleClick(row,c)}

className={`

w-14 h-14
flex
items-center
justify-center
text-3xl
cursor-pointer

${(row+c)%2===0
?"bg-blue-200"
:"bg-blue-300"}

`}

>

{col===c && "♛"}

</div>

))

)}

</div>

)}


<div className="mt-8 text-center">

<p className="text-3xl text-white">

Score: {score}

</p>


<p className="text-3xl text-white mt-2">

Time: {timeTaken}s

</p>


<p className="text-3xl text-yellow-200 mt-3">

{message}

</p>

</div>


</div>

</div>

);

};

export default NQueensManual;



// import React, { useState } from "react";

// const NQueens = () => {
//   const [n, setN] = useState(4);
//   const [board, setBoard] = useState([]);

//   const solveNQueens = (size) => {
//     const solutions = [];
//     const board = new Array(size).fill(-1);

//     const isSafe = (row, col) => {
//       for (let i = 0; i < row; i++) {
//         if (
//           board[i] === col ||
//           board[i] - i === col - row ||
//           board[i] + i === col + row
//         ) {
//           return false;
//         }
//       }
//       return true;
//     };

//     const solve = (row) => {
//       if (row === size) {
//         solutions.push([...board]);
//         return;
//       }

//       for (let col = 0; col < size; col++) {
//         if (isSafe(row, col)) {
//           board[row] = col;
//           solve(row + 1);
//         }
//       }
//     };

//     solve(0);
//     return solutions[0] || [];
//   };

//   const handleSolve = () => {
//     const solution = solveNQueens(n);
//     setBoard(solution);
//   };

//   return (
    
//     <div className="min-h-screen bg-[#f4f7fb] p-12">
//         <h1 className="text-4xl font-bold text-gray-900 mb-8">
//                 ⚔️ Gamified Skill Battles
//                 </h1>
//       <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl">


        

//         <h1 className="text-3xl font-bold mb-6 text-black">
//           ♟ N-Queens Challenge
//         </h1>

//         <div className="flex items-center gap-4 mb-6">
//           <input
//             type="number"
//             min="4"
//             max="10"
//             value={n}
//             onChange={(e) => setN(Number(e.target.value))}
//             className="border px-4 py-2 rounded-lg w-24"
//           />

//           <button
//             onClick={handleSolve}
//             className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             Solve
//           </button>
//         </div>

//         {/* Chess Board */}
//         {board.length > 0 && (
//           <div
//             className="grid"
//             style={{
//               gridTemplateColumns: `repeat(${n}, 50px)`
//             }}
//           >
//             {board.map((col, row) =>
//               Array.from({ length: n }).map((_, c) => (
//                 <div
//                   key={`${row}-${c}`}
//                   className={`w-12 h-12 flex items-center justify-center ${
//                     (row + c) % 2 === 0
//                       ? "bg-gray-200"
//                       : "bg-gray-400"
//                   }`}
//                 >
//                   {col === c && "♛"}
//                 </div>
//               ))
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NQueens;