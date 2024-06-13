import Home from './components/Home'
import GamePlay from './components/GamePlay';
import './App.css'
import { useState } from 'react'
function App() {
  const [isStarted, setIsStarted] = useState(false);

  const  toggleGamePlay =()=>
  {
    setIsStarted((prev)=>!prev);
  }
  return (
    <>
     {isStarted? <GamePlay/>: <Home toggle={toggleGamePlay}/>}


      </>
  )
}

export default App
