let item_index = 0;
let buffer = [];
let rot = 0;
let inc = 0;
let speed = 80;

let outputE1;
let outputE2;

function loop() {
  let elementId1 = "gif1";
  let width = window.innerWidth;
  let len = 7.8; // Char size
  let x = width / len;
  let char = "╱╱╱╱╱╱╱╱╱╱╱╱╱╲╲╲╲╲╲╲╲╲╲╲╲╲╲";
  if (inc++ % speed == 0) {
    buffer = char[rot++ % char.length] + buffer;
  }
  if (buffer.length < x) {
    buffer = buffer + char.repeat(x / char.length + 1);
  }
  buffer = buffer.slice(0, x);

  outputE1.textContent = buffer;
  outputE2.textContent = buffer.split("").reverse().join("");
  requestAnimationFrame(loop);
}

function begin() {
  let elementId1 = "gif1";
  let elementId2 = "gif2";

  outputE1 = document.getElementById(elementId1);
  outputE2 = document.getElementById(elementId2);

  let width = window.innerWidth;
  let len = 7.8; // Char size
  let x = width / len;
  buffer = "╱".repeat(x);

  if (outputE1 && outputE2) {
    loop();
  } else {
    console.error(`Element with ID "${elementId1}" not found.`);
  }
}

// Example usage:
begin();
// window.addEventListener("resize", (event) => {
//   writeStringToWindowWidth();
// });
