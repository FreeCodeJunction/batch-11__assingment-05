// completed button
const tasksContainer = document.querySelector(".tasks-container");
const taskAssignedBtn = document.getElementById("js-task-assigned");
const taskCompletion = document.getElementById("js-task-completion");
const taskHistories = document.getElementById("js-task-histories");
const currentDateElement = document.getElementById("js-current-date");
const clearHistoryBtn = document.getElementById("js-clear-history-btn");
const discoverBtn = document.getElementById("js-discover-btn");
let taskCompletedNumber = 25;
let tasksActiveNumber = Array.from(
  document.querySelectorAll(".complete-btn")
).filter((element) => element.disabled == false).length;

// adding eventlistener to discover btn
discoverBtn.addEventListener("click", function () {
  location.href = "./blog.html";
});

// setting the current date in nav section
currentDateElement.innerText = new Date().toDateString().slice(4);

// setting the active task
taskAssignedBtn.innerText = tasksActiveNumber.toString().padStart(2, "0");
taskCompletion.innerText = taskCompletedNumber;

function createAndRenderHistory(element) {
  const title =
    element.parentElement.previousElementSibling.previousElementSibling
      .children[1].innerText;
  const historyHtml = `You have completed the task ${title} at ${new Date().toLocaleTimeString()}`;
  const p = document.createElement("p");
  p.classList.add("p-[10px]", "bg-[rgba(244,247,255,1)]");
  p.innerText = historyHtml;

  taskHistories.insertAdjacentElement("afterbegin", p);
}

tasksContainer.addEventListener("click", function (event) {
  const element = event.target;
  if (element.classList.contains("complete-btn")) {
    element.setAttribute("disabled", true);
    element.classList.add("opacity-[0.2]", "transition-all");
    tasksActiveNumber--;
    taskAssignedBtn.innerText = tasksActiveNumber.toString().padStart(2, "0");
    taskCompletedNumber++;
    taskCompletion.innerText = taskCompletedNumber;
    createAndRenderHistory(element);
    alert("Board updated Successfully");
    if (tasksActiveNumber === 0) {
      alert("congrats! You have completed all the task");
    }
  }
});

clearHistoryBtn.addEventListener("click", function () {
  taskHistories.innerHTML = "";
});

// random background task
document
  .getElementById("js-change-bg-btn")
  .addEventListener("click", setRandomBackgroundColor);

function setRandomBackgroundColor() {
  const rgbColor = `rgba(${randomNumber()},${randomNumber()},${randomNumber()}, ${
    (Math.floor(Math.random() * 91) + 10) / 100
  })`;
  const backgroundElement = document.getElementById("js-random-background");
  backgroundElement.style.backgroundColor = rgbColor;
}

function randomNumber() {
  return Math.floor(Math.random() * 266);
}
