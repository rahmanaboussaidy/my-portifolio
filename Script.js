function addtask(){
    // get the input text
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;

    // dont take empty text
    if (taskText === ""){
        alert("Please enter your task!");
        return;
    }
    // Create a new list item <li>
    const newTask = document.createElement("li");
    newTask.textContent = taskText;

    // Add it to the task list
    const taskList = document.getElementById("taskList");
    taskList.appendChild(newTask);

    // Clear the input box
    taskInput.value = ""
}