import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RoleDice from './RoleDice'
import {useState} from 'react';
import Rules from './Rules';
const GamePlay = () => {


  const [selectedNumb, setSelectedNumb] = useState()
  const [currentDice, setCurrentDice] = useState(1)
  const [score,setScore]= useState(0);
  const [error,setError]=useState("");
  const [showRules,setShowRules] =useState(false);

  const generateRandomNumber=(min,max)=>
  {  
     return Math.floor(Math.random()* (max-min)+min);
  };
 
 const roleDice =()=>
 {   

  if(!selectedNumb)
  {
   setError("You have not selected any number")
  return ;
 } 
     const randomNumber = generateRandomNumber(1,7);
     setCurrentDice((prev)=>randomNumber);

   

     if(selectedNumb === randomNumber)
     {
      setScore((prev)=> prev +randomNumber);
     }
     else{
      setScore((prev)=>prev -2);
     }
     setSelectedNumb(undefined);
 };

const resetBtn =()=>
{
  setScore(0);
}
 


  return (
    <>
    <div className='top'>
        <TotalScore score={score}/>
        <NumberSelector
        setError={setError}
        error={error} 
        selectedNumb={selectedNumb}
        setSelectedNumb={setSelectedNumb}
        />
    </div>
    
      <RoleDice currentDice={currentDice}
      roleDice={roleDice}/>
      <div className="rst">
     <button onClick={resetBtn} className="reset">Reset Game</button>
     <button 
      onClick={()=>setShowRules((prev)=>!prev)}
     className="rules">{showRules? "Hide":"Show"}Rules</button>

     </div>
     {showRules && <Rules/>}
      
      </>
  )
}

export default GamePlay
