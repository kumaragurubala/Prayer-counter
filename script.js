let count = 0;
const countElement = document.getElementById("count");

function countUp() {
  count++;
  countElement.textContent = count;
}

function resetCount() {
  count = 0;
  countElement.textContent = count;
}
