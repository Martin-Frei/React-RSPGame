import React, { useState, useEffect } from "react";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";

function RSPgame() {
  const option = ["rock", "paper", "scissor"];

  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [round, setRound] = useState(0);
  const [finalResult, setFinalResult] = useState("");
  const [score, setScore] = useState({ win: 0, lose: 0, draw: 0 });

 
  
  function restartGame() {
    setPlayerChoice("");
    setComputerChoice("");
    setResult("");
    setRound(0);
    setFinalResult("");
    setScore({ win: 0, lose: 0, draw: 0 });
  }

  
  
  // GAME LOGIC
 
  
  useEffect(() => {
    if (playerChoice === "" || round >= 5) return;

    const timer = setTimeout(() => {
      const random = option[Math.floor(Math.random() * option.length)];
      setComputerChoice(random);

      // Winner
      
      if (playerChoice === random) {
        setResult("Round Draw!");
        setScore((prev) => ({ ...prev, draw: prev.draw + 1 }));
      } else if (
        (playerChoice === "rock" && random === "scissor") ||
        (playerChoice === "paper" && random === "rock") ||
        (playerChoice === "scissor" && random === "paper")
      ) {
        setResult("You win this round!");
        setScore((prev) => ({ ...prev, win: prev.win + 1 }));
      } else {
        setResult("You lose this round!");
        setScore((prev) => ({ ...prev, lose: prev.lose + 1 }));
      }

      const newRound = round + 1;
      setRound(newRound);

      // Match end
      if (newRound === 5) {
        setTimeout(() => {
          if (score.win > score.lose) {
            setFinalResult("You win this match!");
          } else if (score.win < score.lose) {
            setFinalResult("You lose this match!");
          } else {
            setFinalResult("This match is a draw!");
          }
        }, 900);
      }

      // reset round 
      setTimeout(() => {
        setPlayerChoice("");
        setComputerChoice("");
        setResult("");
      }, 3000);
    }, 600);

    return () => clearTimeout(timer);
  }, [playerChoice]);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-900 to-black text-white p-6">
      <h1 className="text-4xl text-yellow-300 font-bold my-5 text-center">
        Rock Paper Scissors Game
      </h1>

      {/* disable buttons when match ended */}
      <div className="flex gap-6">
        <button
          onClick={() => finalResult === "" && setPlayerChoice("rock")}
          className="bg-gray-800 text-4xl text-yellow-300 font-bold p-5 rounded m-4 hover:bg-yellow-300 hover:text-gray-900 transition duration-300"
        >
          <FaHandRock />
        </button>

        <button
          onClick={() => finalResult === "" && setPlayerChoice("paper")}
          className="bg-gray-800 text-4xl text-yellow-300 font-bold p-5 rounded m-4 hover:bg-yellow-300 hover:text-gray-900 transition duration-300"
        >
          <FaHandPaper />
        </button>

        <button
          onClick={() => finalResult === "" && setPlayerChoice("scissor")}
          className="bg-gray-800 text-4xl text-yellow-300 font-bold p-5 rounded m-4 hover:bg-yellow-300 hover:text-gray-900 transition duration-300"
        >
          <FaHandScissors />
        </button>
      </div>

      <p className="text-lg text-yellow-300 mt-4">
        Wins: {score.win} | Lose: {score.lose} | Draws: {score.draw}
      </p>

      {/* FINAL RESULT */}
      {finalResult && (
        <div className="mt-6 bg-gray-800 p-4 rounded text-xl text-center text-yellow-300">
          <h2>{finalResult}</h2>

          {/* RESTART BUTTON */}
          <button
            onClick={restartGame}
            className="mt-4 bg-yellow-300 text-gray-900 px-6 py-2 rounded font-bold hover:bg-yellow-400 transition"
          >
            Restart Game
          </button>
        </div>
      )}

      {/* Round information */}
      <div className="mt-6 text-center">
        <p>You: {playerChoice || "-"}</p>
        <p>Computer: {computerChoice || "-"}</p>
        <p>Result: {result || "-"}</p>
        <p>Round: {round}/5</p>
      </div>
    </div>
  );
}

export default RSPgame;
