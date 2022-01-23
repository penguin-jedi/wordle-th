import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Attempt from './Attempt';
import AttemptList from './AttemptList';
import Keyboard, { keyMap } from './Keyboard';

const MAX_TRY = 9;
const UPPER_CONSONANT = ['ึ', 'ั', 'ี', '๊', '้', '็', '่', '๋', 'ิ', 'ื', '์'];
const LOWER_CONSONANT = ['ุ', 'ู'];
const isNextCharacter = (keyId) => {
  const checkingLabel = keyMap[keyId].labels[0];
  return !(UPPER_CONSONANT.includes(checkingLabel) || LOWER_CONSONANT.includes(checkingLabel));
};
const noop = () => null;
// const isArrayEqual = (arrA, arrB) => arrA.length === arrB && arrA.every((valueA, index) => valueA === arrB[index]);

function App() {
  //               'เ'    'ห'    'ม'    'ื'    'อ'    'น'
  const answer = [[305], [302], [408, 406], [404], [209]];
  const flattenAnswer = answer.flat();

  const [attempts, setAttempts] = useState([]);
  const [trying, setTrying] = useState([]);
  const [finish, setFinish] = useState(false);

  const attemptingHandler = (keyId) => {
    const currentIndex = trying.length;
    if (currentIndex === 0) {
      if (isNextCharacter(keyId)) {
        setTrying([[keyId]]);
      }
    }
    else {
      if (isNextCharacter(keyId)) {
        if (currentIndex < answer.length) {
          setTrying([...trying, [keyId]]);
        }
      }
      else {
        if (!trying[currentIndex - 1].includes(keyId)) {
          trying[currentIndex - 1].push(keyId);
          setTrying([...trying]);
        }
      }
    }
  };
  const clearTryingHandler = () => setTrying([]);
  const delHandler = () => setTrying(trying.slice(0, -1));
  const checkTryingHandler = () => {
    if (trying.length !== answer.length) return;
    const flattenTrying = trying.flat();
    flattenTrying.forEach((keyId) => {
      keyMap[keyId].color = 'black';
      if (flattenAnswer.includes(keyId)) {
        keyMap[keyId].color = 'yellow';
      }
    });
    let allGreen = true;
    for (let i=0; i < answer.length; i++) {
      trying[i].forEach((keyId) => {
        if (answer[i].includes(keyId)) keyMap[keyId].color = 'green';
        else allGreen = false;
      });
    }
    if (allGreen) setFinish(true);
    setAttempts([...attempts, trying]);
    clearTryingHandler();
  };

  return (
    <div className="App">
      <AttemptList attempts={attempts} />
      <Attempt attempt={trying} />
      <AttemptList attempts={new Array(MAX_TRY - 1 - attempts.length).fill(new Array(answer.length).fill([]))} />
      <Keyboard attemptingHandler={finish ? noop : attemptingHandler}  />
      {finish
        ? (
          <button type="button" className="btn btn-primary"   onClick={noop}>Share</button>
        )
        : (
          <>
            <button type="button" className="btn btn-success"   onClick={checkTryingHandler}>Submit</button>
            <button type="button" className="btn btn-danger"    onClick={clearTryingHandler}>Clear</button>
            <button type="button" className="btn btn-secondary" onClick={delHandler}>{'<x'}</button>
          </>
        )
      }
    </div>
  );
}

export default App;
