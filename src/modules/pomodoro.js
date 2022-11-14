var minFirst = document.getElementById("min").innerText;
var secFirst = document.getElementById("sec").innerText;
var secInterval;
var minInterval;


console.log(secInterval);

function startTimer(){
  if ((secInterval == undefined) && (minInterval == undefined)) {
    console.log("hii from pomodoro.js");
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
        if(min.innerText <= 0) {
            clearInterval(secInterval);

        }
        sec.innerText = 60;
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
}

function resetTimer() {
  document.getElementById("min").innerText = minFirst;
  document.getElementById("sec").innerText = secFirst;
  stopTimer();
}

function timeAmount(x) {
  let min = document.getElementById("min");
  min.innerText = x;
  minFirst = document.getElementById("min").innerText;
}

export {startTimer, stopTimer, resetTimer, timeAmount};