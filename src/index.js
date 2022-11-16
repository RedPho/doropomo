import './style.css';
import {createPomodoroPage} from './modules/pomodoro';

let createPomodoroBtn = document.getElementById("create-pomodoro");
createPomodoroBtn.addEventListener("click", createPomodoroPage);

