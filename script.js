const task = document.querySelector("input");
const section = document.querySelector("section");

const tasksArray = [];
console.log(tasksArray);

document.querySelector("form").onsubmit = function (event) {
  event.preventDefault();
  const taskValue = task.value;
  if (taskValue.trim() == "") {
    alert("There is no task to add");
  } else {
    tasksArray.push(`${taskValue.trim()}`);
    console.log(tasksArray);

    section.innerHTML += `<div><input type="checkbox" /><label>${
      tasksArray[tasksArray.length - 1]
    }</label></div>
    `;
    task.value = "";
  }
};
