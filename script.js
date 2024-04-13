const task = document.querySelector("input");
const section = document.querySelector("section");

const tasksArray = ["First Task", "Second Task"];
console.log(tasksArray);

document.querySelector(".first-task").textContent = tasksArray[0];
document.querySelector(".second-task").textContent = tasksArray[1];

document.querySelector("form").onsubmit = function (event) {
  event.preventDefault();
  const taskValue = task.value;
  tasksArray.push(`${taskValue}`);
  console.log(tasksArray);

  section.innerHTML += `<div><input type="checkbox" /><label>${
    tasksArray[tasksArray.length - 1]
  }</label></div>
  `;
  console.log(taskValue);
};
