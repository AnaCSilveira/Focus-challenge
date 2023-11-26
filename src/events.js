import * as actions from "./actions.js";
import * as controls from "./elements.js";

export function registerControls() {
  controls.controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action;

    if (typeof actions[action] != "function") {
      return;
    }
    actions[action]();
  });
}

export function registersounds() {
  controls.sounds.addEventListener("click", (event) => {
    const action = event.target.dataset.action;

    if (typeof actions[action] != "function") {
      return;
    }
    actions[action]();
   
  });
}
