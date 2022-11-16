var secInterval;
var minInterval;
var minFirst;
var secFirst;
let pomodoro_notification = document.getElementById("notification");

function createPomodoroPage() {
  let mainDiv = document.getElementById("main");
  mainDiv.innerHTML = `<h1>How to study more effectively with Doromopo?</h1>
                      <ol id="effectivity">
                        <li>Start with a pomodoro: ~25mins</li>
                        <li>Then take a break: ~5mins</li>
                        <li>Take another break: ~30mins</li>
                        <div>(You get more motivated when you take 2 breaks in a row)</div>
                        <div>Repeat</div>
                      </ol>
                      <div class="buttons">
                        <button id="chooseP">Pomodoro</button>
                        <button id="chooseSB">Short Break</button>
                        <button id="chooseLB">Long Break</button>
                      </div>
                      <div id="time">
                        <p id="min">25</p>
                        <p>:</p>
                        <p id="sec">00</p>
                      </div>
                      <div class="buttons">
                        <button id="start">Start</button>
                        <button id="stop">Pause</button>
                        <button id="reset">Reset</button>
                      </div>
                      <div class="input-container">
                        <label>Pomodoro: <input type="number" name="pomodoro" id="pomodoro" value="25"><span>mins</span></label>
                        <label>Short Break: <input type="number" name="short" id="short" value="5"><span>mins</span></label>
                        <label>Long Break: <input type="number" name="long" id="long" value="30"><span>mins</span></label>
                      </div>`;
  let startBtn = document.getElementById("start");
  startBtn.addEventListener("click", startTimer);

  let stopBtn = document.getElementById("stop");
  stopBtn.addEventListener("click", stopTimer);

  let resetBtn = document.getElementById("reset");
  resetBtn.addEventListener("click", resetTimer);
  setFirstMinAndSec();
  
  let pomodoroBtn = document.getElementById("chooseP");
  pomodoroBtn.addEventListener("click", clickPomodoroBtn);

  let shortBreakBtn = document.getElementById("chooseSB");
  shortBreakBtn.addEventListener("click", clickShortBreakBtn);

  let longBreakBtn = document.getElementById("chooseLB");
  longBreakBtn.addEventListener("click", clickLongBreakBtn);
}

function setFirstMinAndSec() {
  minFirst = document.getElementById("min").innerText;
  secFirst = document.getElementById("sec").innerText;
  secInterval;
  minInterval;
}

function startTimer(){
  if ((secInterval == undefined) && (minInterval == undefined)) {
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");

    if (min.innerText == minFirst) {
      min.innerText--;
    }
    if (sec.innerText == "00") {
      sec.innerText = 59;
    }
    
    minInterval = setInterval(() => {
      if(minInterval.innerText <= 0) {
        clearInterval(minInterval);
      }
      else {
        min.innerText--;
      }
      
    }, 60000);
    secInterval = setInterval(() => {
      if (sec.innerText <= 0) {
        sec.innerText = 60;
        if(min.innerText <= 0) {
          stopTimer()
          sec.innerText = "0";
          min.innerText = "0";
          clearInterval(secInterval);
          pomodoro_notification.play();
        }
      }
      else {
        sec.innerText--;
      }
    }, 1000);
    }
};

function stopTimer() {
  clearInterval(secInterval);
  clearInterval(minInterval);
  secInterval = undefined;
  minInterval = undefined;
  pomodoro_notification.currentTime = 0;
  pomodoro_notification.pause();
}

function resetTimer() {
  document.getElementById("min").innerText = minFirst;
  document.getElementById("sec").innerText = secFirst;
  stopTimer();
}

function timeAmount(x) {
  let min = document.getElementById("min");
  if (x > 0) {
    min.innerText = x;
    minFirst = document.getElementById("min").innerText;
  }
  resetTimer();
}

function clickPomodoroBtn() {
  let pomodoroInput = document.getElementById("pomodoro").value;
  timeAmount(pomodoroInput);
}

function clickShortBreakBtn() {
  let shortBreakInput = document.getElementById("short").value;
  timeAmount(shortBreakInput);
}

function clickLongBreakBtn() {
  let longBreakInput = document.getElementById("long").value;
  timeAmount(longBreakInput);
}

export {setFirstMinAndSec, createPomodoroPage, startTimer, stopTimer, resetTimer, timeAmount};