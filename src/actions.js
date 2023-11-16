import state from "./state.js";
import * as timer from "./timer.js";


export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countDown();
}

export function plus() {
  state.minutes += 5;
  
  
}

export function minus() {
  state.minutes -= 5;
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle("Music-on");
}


