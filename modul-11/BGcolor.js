const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const refs = {
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector("body"),
  isActive: false,
  color: ""
};
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.btnStart.addEventListener("click", changeColor);
refs.btnStop.addEventListener("click", stop);
function changeColor(e) {
  e.preventDefault();
  if (refs.isActive) {
    return;
  }
  refs.isActive = true;
  refs.color = setInterval(() => {
    refs.body.style.background =
      colors[randomIntegerFromInterval(0, colors.length)];
  }, 1000);
}

function stop(e) {
  e.preventDefault();

  refs.isActive = false;
  clearInterval(refs.color);
}
