let tasks = [];

function showMenu() {
  let choice;
  do {
    console.log("Task Manager Menu:");
    console.log("1. Add Task");
    console.log("2. View Tasks");
    console.log("3. Toggle Task Completion");
    console.log("4. Edit Task");
    console.log("5. Delete Task");
    console.log("6. Search by name");
    console.log("7. Exit");

    choice = prompt("Enter Your choice (1-7):");

    handleChoice(choice);
  } while (choice !== "7");
}

function handleChoice(choice) {
  switch (choice) {
    case "1":
      addTask();
      break;
    case "2":
      viewTasks();
      break;
    case "3":
      toggleTaskCompletion();
      break;
    case "4":
      editTask();
      break;
    case "5":
      deleteTask();
      break;
    case "6":
      searchByName();
      break;
    case "7":
      console.log("Exiting Task Manger");
      alert("Exiting Task Manger");
      break;
    default:
      alert("Invalid choice. Please enter a number between 1 and 7.");
  }
}

function addTask() {
  const taskName = prompt("Enter the task description:");
  if (taskName) {
    tasks.push({ name: taskName, completed: false });
    console.log(`Task added: ${taskName}`);
  }
}

function viewTasks() {
  if (tasks.length === 0) {
    console.log("Null");
  } else {
    console.log("Tasks:");
    tasks.forEach((task, index) => {
      console.log(
        `${index + 1}. ${task.name} - ${
          task.completed ? "Completed" : "Not Completed"
        }`
      );
    });
  }
}

function toggleTaskCompletion() {
  const taskId = prompt("Enter the task ID to toggle completion:");
  const index = parseInt(taskId) - 1;
  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = !tasks[index].completed;
    console.log(`Task '${tasks[index].name}' is now marked as completed.`);
  } else {
    alert("Invalid task ID.");
  }
}

function editTask() {
  const taskId = prompt("Enter the task ID to edit:");
  const index = parseInt(taskId) - 1;
  if (index >= 0 && index < tasks.length) {
    const newTaskName = prompt("Enter the new description:");
    if (newTaskName) {
      console.log(`Task '${tasks[index].name}' updated to '${newTaskName}'.`);
      tasks[index].name = newTaskName;
    }
  } else {
    alert("Invalid task ID.");
  }
}

function deleteTask() {
  const taskId = prompt("Enter the task ID to delete:");
  const index = parseInt(taskId) - 1;
  if (index >= 0 && index < tasks.length) {
    console.log(`Task '${tasks[index].name}' deleted.`);
    tasks.splice(index, 1);
  } else {
    alert("Invalid task number.");
  }
}

function searchByName() {
  const query = prompt("Enter the task name to search:");
  const results = tasks.filter((task) => task.name.includes(query));
  if (results.length > 0) {
    console.log("Search Results:");
    results.forEach((task, index) => {
      console.log(
        `${index + 1}. ${task.name} - ${
          task.completed ? "Completed" : "Not Completed"
        }`
      );
    });
  } else {
    console.log("No tasks found.");
  }
}
