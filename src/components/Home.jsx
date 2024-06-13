import React from 'react'

const Home = ({toggle}) => {
  return (
    <div className='dice'>
        <div className="photo">
            <img src="/dice.png"></img>
        </div>
        <div className="title">
            <div className="tit1">DICE GAME</div>
            <div className="tit2"><button className='btn1' onClick={toggle}>PLAY NOW</button></div>
        </div>
      



    </div>
  )
}

export default Home
