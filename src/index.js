document.addEventListener("DOMContentLoaded", () => {
  // your code here
    const taskForm = document.getElementById("create-task-form")
    const taskDescription = document.getElementById("new-task-description")
    const taskUl = document.getElementById("tasks")
    taskForm.addEventListener('submit', createNewTask)
});


const createNewTask = event => {
  event.preventDefault()
  const description = document.getElementById("new-task-description")
  const taskLi = document.createElement("li")
  task.innerText = description.value
  
  addTask(taskLi)
  
}

function addTask(task) {
  document.getElementById("tasks").appendChild(task)
}