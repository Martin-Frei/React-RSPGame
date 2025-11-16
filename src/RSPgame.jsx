
import React, {useState} from 'react'

import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";

function RSPgame() {

  const option = ["rock", "paper", "scissor"]

  //state for computer choice player choise and result 

  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setcomputerChoice] = useState ('');
  const [result, setResult] = useState('');
  const [round, setRound] = useState(0);
  const [finalResult, setFinalResult] = useState('');
  const [score, setScore] = useState({win : 0, lose : 0, draw : 0 });


  return (
    <div className='min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-900 to-black text-white p-6'>
      <h1 className='text-4xl text-yellow-300 font-bold my-5 text-center '>Rock Paper Siccors Game</h1>

      <div className='flex gap-6'>
      <button className='bg-gray-800 text-4xl text-yellow-300 font-bold p-5 rounded m-4 hover:bg-yellow-300 hober:text-gray-900 transition duration-300'>
    <FaHandRock />
      </button>
      <button className='bg-gray-800 text-4xl text-yellow-300 font-bold p-5 rounded m-4 hover:bg-yellow-300 hober:text-gray-900 transition duration-300'>
    <FaHandPaper />
      </button>
      <button className='bg-gray-800 text-4xl text-yellow-300 font-bold p-5 rounded m-4 hover:bg-yellow-300 hober:text-gray-900 transition duration-300'>
    <FaHandScissors />
      </button>
    </div>
    </div>
  )
}

export default RSPgame