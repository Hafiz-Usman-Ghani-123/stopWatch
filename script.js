var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var timer = false;
// start btn click function
function start() {
  timer = true;
  timing();
}

// stop btn click function
function stop() {
  timer = false;
}
// reset btn click function
function reset() {
  window.location.reload();
}
// timing function

function timing() {
  if (timer == true) {
    setInterval(() => {
      count++;
      if (count == 10) {
        count = 0;
        sec++;
        if (sec == 60) {
          sec = 0;
          min++;
        }
        if (sec <= 9) {
          sec = "0" + sec;
        }
      }
      // ////
      if (count < 11) {
        count = "0" + count;
      }
      document.getElementById("count").innerHTML = count;

      if (min == 60) {
        min = 0;
        hr++;
      }
      // ///

      document.getElementById("min").innerHTML = min;
      document.getElementById("sec").innerHTML = sec;
      document.getElementById("hr").innerHTML = hr;
    }, 100);
  }
}
