document.addEventListener("DOMContentLoaded", () => {
  // your code here
    const taskForm = document.getElementById("create-task-form")
    const taskDescription = document.getElementById("new-task-description")
    const taskUl = document.getElementById("tasks")
    taskForm.addEventListener('submit', createNewTask())
});


