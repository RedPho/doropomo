import './style.css';
import {createPomodoroPage, startTimer, stopTimer, resetTimer, timeAmount, setFirstMinAndSec} from './modules/pomodoro';
console.log("doromopo from index.js!");

let createPomodoroBtn = document.getElementById("create-pomodoro");
createPomodoroBtn.addEventListener("click", () => {
  createPomodoroPage();
  
} );

