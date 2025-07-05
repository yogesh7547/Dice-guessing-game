
import styled from "styled-components";
const RollDice = ({currentDice,rollDice}) => {


  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
        <p>Click on Dice to roll</p>
      </div>
    </DiceContainer>
  )
}


export default RollDice;

const DiceContainer=styled.div`
 margin-top: 48px;
 display: flex;
 flex-direction: column;
 align-items: center;
 
 .dice{
  cursor: pointer;
  text-align: center;
 }

 p{
  font-size: 24px;
 }
`;