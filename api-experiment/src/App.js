import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Fretboard, { chordNotes } from 'react-fretboard';
import { generateRandomNoteAll, generateRandomNoteSingle } from "./script.js";

const note = generateRandomNoteSingle();
let showLabel = false;

function showSolution(){
  return (<h1 id="solution" className="hidden">{note}</h1>)
}
function removeClass(){
  const solution = document.getElementById("solution");
  solution.classList.toggle("hidden"); 
  
  showLabel = true;
  //rerender fretboard component here
}

const fretboardElement =  <Fretboard
skinType="strings"
selectedNotes={[note]}
showSelectionLabels={showLabel}
/>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        <div className="App-fretboard">
          {fretboardElement}
          {/* turn fretboard into a component */}
        </div>
        <button onClick={removeClass}>
          Show/Hide Solution
        </button>
        {showSolution()}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
