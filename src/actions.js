import state from "./state.js";
import * as timer from "./timer.js";
import * as sounds from "./sounds.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countDown();
}

export function plus() {
  state.minutes += 5;
  timer.updateDisplay();
}

export function minus() {
  state.minutes -= 5;
  timer.updateDisplay();
}

export function fire() {
  state.isMute = document.documentElement.classList.toggle("Music-on");
  if (state.isMute) {
    sounds.soundFire.play();
    return;
  }
  sounds.soundFire.pause();
}

export function rain() {
  state.isMute = document.documentElement.classList.toggle("Music-on");
  if (state.isMute) {
    sounds.soundRain.play();
    
    return;
  }
  sounds.soundRain.pause();
}

export function tree() {
  state.isMute = document.documentElement.classList.toggle("Music-on");
  if (state.isMute) {
    sounds.soundTree.play();
    return;
  }
  sounds.soundTree.pause();
}

export function coffeeStore() {
  state.isMute = document.documentElement.classList.toggle("Music-on");
  if (state.isMute) {
    sounds.soundCoffeeStore.play();
    return;
  }
  sounds.soundCoffeeStore.pause();

}
