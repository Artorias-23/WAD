// Function to get the current tasks from the server
function getTasks() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/tasks", true);  // Fetch tasks from the server (replace with actual server endpoint)
    xhr.onload = function() {
      if (this.status === 200) {
        const tasks = JSON.parse(this.responseText);
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = ''; // Clear the current list
        tasks.forEach(task => {
          const li = document.createElement('li');
          li.innerHTML = `
            <span>${task.name}</span>
            <button class="update" onclick="updateTask(${task.id})">Update</button>
            <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
          `;
          taskList.appendChild(li);
        });
      }
    };
    xhr.send();
  }
  
  // Function to add a task
  function addTask() {
    const taskName = document.getElementById('taskInput').value;
    if (taskName === "") {
      alert("Please enter a task.");
      return;
    }
  
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/tasks", true); // Post new task to the server (replace with actual server endpoint)
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
      if (this.status === 201) {
        getTasks();  // Refresh the task list
        document.getElementById('taskInput').value = '';  // Clear input field
      }
    };
  
    const task = { name: taskName };
    xhr.send(JSON.stringify(task));
  }
  
  // Function to delete a task
  function deleteTask(taskId) {
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", `/tasks/${taskId}`, true);  // Delete task from the server (replace with actual server endpoint)
    xhr.onload = function() {
      if (this.status === 200) {
        getTasks();  // Refresh the task list
      }
    };
    xhr.send();
  }
  
  // Function to update a task
  function updateTask(taskId) {
    const newTaskName = prompt("Enter the new task name:");
    if (newTaskName === null || newTaskName === "") return;
  
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", `/tasks/${taskId}`, true);  // Update task on the server (replace with actual server endpoint)
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
      if (this.status === 200) {
        getTasks();  // Refresh the task list
      }
    };
  
    const updatedTask = { name: newTaskName };
    xhr.send(JSON.stringify(updatedTask));
  }
  
  // Initially load tasks when the page is loaded
  window.onload = getTasks;
  