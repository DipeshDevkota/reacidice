import styled from "styled-components";

const TotalScore = ({score}) => {
  return (
    
      <StyledDiv>
        <div className="ok">
        <h1>{score}</h1>
        <p>Total Score</p>
        </div>
      </StyledDiv>
    
  );
};

export default TotalScore;

const StyledDiv = styled.div`
  h1 {
    font-size: 5vw;
    line-height:0vw;
    margin-left:4vw;
  }
  p{
    font-size: 2vw;
    font-weight: bold;
    margin-left:1vw;
  }
  .ok
  {
    border:2px solid black;
  }
`;
