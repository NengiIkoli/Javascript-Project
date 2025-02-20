const todos = [
  {
    title: "Start Learning JavaScript",
    description: "This is the first task to start learning JS",
    complete: false,
  }
];

// Function to add a new task to the list
function addTodo(title, description) {
  todos.push({title, description, complete: false});
}

// Function to remove a task by its index
function removeTodo(index) {
  if (index >= 0 && index < todos.length) {
    todos.splice(index, 1); // Remove the task at the given index
  } else {
    console.log('Invalid index. Could not remove task.');
  }
}

// Function to edit the title and description of an existing task
function editTodo(index, newTitle, newDescription) {
  if (index >= 0 && index < todos.length) {
    todos[index].title = newTitle;
    todos[index].description = newDescription;
  } else {
    console.log('The index is invalid. Cannot update task.');
  }
}

// Function to mark a task as completed
function markTodoComplete(index) {
  if (index >= 0 && index < todos.length) {
    todos[index].complete = true; // Change the task status to completed
  } else {
    console.log('Invalid index. Cannot mark task as completed.');
  }
}

// Function to display the current total number of tasks
function displayTodoLength() {
  console.log(`Total tasks: ${todos.length}`);
}

// Main function to demonstrate the todo application
function app() {
  console.log('Welcome to the Task Management Application');
  console.log('=====================================');
  
  // Adding new tasks to the todo list
  addTodo('Complete JavaScript Course', 'Finish the JS tutorial on freeCodeCamp');
  addTodo('Go for a Walk', 'Take a walk in the park to relax');
  
  // Marking the second task as completed
  markTodoComplete(1);
  
  console.log('Here are your tasks:');
  
  // Displaying the total number of tasks
  displayTodoLength();
  
  let count = 1; // Initialize task count
  
  // Iterating over each task and displaying its details
  for (const todo of todos) {
    console.log(`Task ${count}:`);
    console.log(`Task Title: ${todo.title}`);
    console.log(`Task Description: ${todo.description}`);
    console.log(`Status: ${todo.complete ? 'Completed' : 'Pending'}`);
    count++; // Increment task number for display
  }
}

// Calling the main function to run the app
app();
