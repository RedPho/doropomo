import './style.css';
import {createPomodoroPage} from './modules/pomodoro';
console.log("doromopo from index.js!");

let createPomodoroBtn = document.getElementById("create-pomodoro");
createPomodoroBtn.addEventListener("click", createPomodoroPage);

