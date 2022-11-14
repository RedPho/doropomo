import './style.css';
import {startTimer, stopTimer, resetTimer, timeAmount} from './modules/pomodoro';
console.log("doromopo from index.js!");

let startBtn = document.getElementById("start");
startBtn.addEventListener("click", startTimer);

let stopBtn = document.getElementById("stop");
stopBtn.addEventListener("click", stopTimer);

let resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", resetTimer);