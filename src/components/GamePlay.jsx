import { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState();
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const rollDice = () => {

    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }



    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);

  }

  const resetScore = () => {
    setScore(0);
  }






  return (
    <MainContainer>
      <div className='top_section'>
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className='btns'>
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={()=>setShowRules((prev)=>!prev)}>
          {
          showRules?"Hide":"Show"
          }
           Rules</Button>
        {showRules && <Rules />}
      </div>
    </MainContainer>
  )
}

export default GamePlay;


const MainContainer = styled.main`
    padding-top: 30px;
    .top_section{
        display: flex;
        justify-content: space-between;
        align-items: end;
    }

    .btns{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap:10px ;
      margin-top: 40px;
    }
`;