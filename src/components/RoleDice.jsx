import { useState } from "react"
const RoleDice = ({roleDice,currentDice}) => {

 




  return (
    <>
<div className="dice">
    <div className="dice1" onClick={roleDice}>
       <img  className="one"src={`/photos/dice_${currentDice}.png` } alt="dice 1"></img>

</div><h3>Click on Dice to roll</h3></div>
    
    </>
  )
}

export default RoleDice
