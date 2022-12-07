import './style.css';
import {createPomodoroPage} from './modules/pomodoro';
import {createToDoPage} from './modules/todo';

let createPomodoroBtn = document.getElementById("create-pomodoro");
createPomodoroBtn.addEventListener("click", createPomodoroPage);

let createToDoPageBtn = document.getElementById("create-todo");
createToDoPageBtn.addEventListener("click", createToDoPage);