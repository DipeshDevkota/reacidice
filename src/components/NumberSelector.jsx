import styled from "styled-components";
import { useState } from "react";
const NumberSelector = ({error,setError,selectedNumb,setSelectedNumb}) => {
  const arr = [1, 2, 3, 4, 5, 6];

   const NumberSelectorHandler =(value)=>
   {
    setSelectedNumb(value)
    setError("")
   }

  return (
    <div className="number">
      <p className="error">{error}</p>
      {arr.map((value, i) =>(
        <Box 
         isSelected={value=== selectedNumb}
         key={i}
          onClick={()=>NumberSelectorHandler(value)}
        >
            {value}</Box>
      ))}
    <section className="select">Select Number</section>
       
    </div>
  );
};

export default NumberSelector;

const Box = styled.div`
      height:72px;
      width:72px;
      border:1px solid black;
      display:grid;
      place-items:center;
      font-size:24px;
      font-weight:700;
      background-color: ${(props)=>(props.isSelected ? "black":"white")};
      color: ${(props)=>(!props.isSelected ? "black":"white")};




`;
