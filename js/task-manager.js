
// Store all tasks in an array of objects.
let tasks = [];

// Give each new task a unique ID.
let nextTaskId = 1;

// Keep track of which task is being edited.
let editingTaskId = null;


// WEEKLY GOAL CALCULATOR

// Calculate and display the user's total weekly task goal.
function weeklyGoal(userName, dailyGoal, bonusTasks) {
    let weeklyGoal = dailyGoal * 5;
    let totalGoal = weeklyGoal + bonusTasks;

    let output = "User: " + userName + "<br>" +
                 "Total Weekly Goal: " + totalGoal;

    document.getElementById("goal-message").innerHTML = output;
}

// Run the weekly goal calculation when the button is clicked.
document.getElementById("goal-btn").addEventListener("click", function(event) {
    event.preventDefault();

    let userName = document.getElementById("user-name").value;
    let dailyGoal = Number(document.getElementById("daily-goal").value);
    let bonusTasks = Number(document.getElementById("bonus-tasks").value);

    weeklyGoal(userName, dailyGoal, bonusTasks);
});


// TASK MANAGER

// Get the task list and task form from the HTML.
let taskList = document.getElementById("user-tasks");
let taskForm = document.getElementById("task-form");

// Log the full task array as JSON whenever tasks change.
function logTasks() {
    console.log(JSON.stringify(tasks));
}

// Display all tasks dynamically using DOM nodes.
function displayTasks() {

    // Clear the current list before displaying tasks.
    taskList.replaceChildren();

    tasks.forEach(function(task) {

        // Create a new list item.
        let listItem = document.createElement("li");
        listItem.className = "task-item";

        // Apply different styles based on task priority.
        if (task.priority === "High") {
            listItem.style.backgroundColor = "#ffe5e5";
            listItem.style.borderLeft = "6px solid #e57373";
        } else if (task.priority === "Medium") {
            listItem.style.backgroundColor = "#fff3cd";
            listItem.style.borderLeft = "6px solid #e0ad3a";
        } else if (task.priority === "Low") {
            listItem.style.backgroundColor = "#e2f5e6";
            listItem.style.borderLeft = "6px solid #66bb6a";
        }

        // Highlight important tasks in red.
        if (task.isImportant === true) {
            listItem.style.backgroundColor = "#ffcdd2";
            listItem.style.borderLeft = "6px solid red";
        }

        // Create a span to display the task information.
        let taskText = document.createElement("span");
        taskText.className = "task-info";

        taskText.textContent = task.name + " - " + task.priority + " Priority";

        // Display whether the task is important.
        if (task.isImportant === true) {
            taskText.textContent += " - Important!";
        }

        // Apply a strikethrough if the task is completed.
        if (task.isCompleted === true) {
            taskText.style.textDecoration = "line-through";
            taskText.style.opacity = "0.6";
        }

        // Create a container for the task buttons.
        let buttonGroup = document.createElement("div");
        buttonGroup.className = "task-actions";

        // Create a button to complete or undo a task.
        let completeButton = document.createElement("button");
        completeButton.type = "button";

        if (task.isCompleted === true) {
            completeButton.textContent = "Undo";
        } else {
            completeButton.textContent = "Complete";
        }

        completeButton.addEventListener("click", function() {
            completeTask(task.id);
        });

        // Create a button to edit a task.
        let editButton = document.createElement("button");
        editButton.type = "button";
        editButton.textContent = "Edit";

        editButton.addEventListener("click", function() {
            editTask(task.id);
        });

        // Create a button to delete an individual task.
        let deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {
            deleteTask(task.id);
        });

        // Add the buttons to their container.
        buttonGroup.appendChild(completeButton);
        buttonGroup.appendChild(editButton);
        buttonGroup.appendChild(deleteButton);

        // Add the task information and buttons to the list item.
        listItem.appendChild(taskText);
        listItem.appendChild(buttonGroup);

        // Add the list item to the webpage.
        taskList.appendChild(listItem);
    });
}


// ADD TASK FUNCTION

// Create a task object and add it to the array.
function addTask(name, priority, isImportant) {

    let newTask = {
        id: nextTaskId,
        name: name,
        priority: priority,
        isImportant: isImportant,
        isCompleted: false
    };

    // Increase the ID for the next task.
    nextTaskId++;

    // Add the task object to the array.
    tasks.push(newTask);

    // Update the webpage and console.
    displayTasks();
    logTasks();
}


// COMPLETE TASK FUNCTION

// Mark a task as completed or incomplete.
function completeTask(id) {

    let task = tasks.find(function(item) {
        return item.id === id;
    });

    if (task) {
        task.isCompleted = !task.isCompleted;

        displayTasks();
        logTasks();
    }
}


// EDIT TASK FUNCTION

// Load the selected task into the form for editing.
function editTask(id) {

    let task = tasks.find(function(item) {
        return item.id === id;
    });

    if (task) {
        editingTaskId = id;

        document.getElementById("task-name").value = task.name;
        document.getElementById("task-priority").value = task.priority;
        document.getElementById("task-important").checked = task.isImportant;

        document.getElementById("add-task").textContent = "Save Changes";
        document.getElementById("cancel-edit").hidden = false;

        document.getElementById("task-name").focus();
    }
}


// UPDATE TASK FUNCTION

// Save the changes made to an existing task.
function updateTask(id, name, priority, isImportant) {

    let task = tasks.find(function(item) {
        return item.id === id;
    });

    if (task) {
        task.name = name;
        task.priority = priority;
        task.isImportant = isImportant;

        displayTasks();
        logTasks();
    }
}


// DELETE TASK FUNCTION

// Remove an individual task from the array.
function deleteTask(id) {

    tasks = tasks.filter(function(task) {
        return task.id !== id;
    });

    // Reset the form if the deleted task was being edited.
    if (editingTaskId === id) {
        resetTaskForm();
    }

    displayTasks();
    logTasks();
}


// DELETE ENTIRE LIST FUNCTION

// Remove all tasks from the array and webpage.
function deleteTaskList() {

    tasks = [];

    resetTaskForm();
    displayTasks();
    logTasks();
}


// RESET TASK FORM

// Clear the form after adding, editing, or canceling.
function resetTaskForm() {

    taskForm.reset();
    editingTaskId = null;

    document.getElementById("add-task").textContent = "Add Task";
    document.getElementById("cancel-edit").hidden = true;
}


// ADD OR UPDATE TASK EVENT LISTENER

// Run when the user submits the task form.
taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the values entered by the user.
    let taskName = document.getElementById("task-name").value.trim();
    let priority = document.getElementById("task-priority").value;
    let isImportant = document.getElementById("task-important").checked;

    // Prevent empty tasks from being added.
    if (taskName === "") {
        alert("Please enter a task name.");
        return;
    }

    // Add a new task or update an existing task.
    if (editingTaskId === null) {
        addTask(taskName, priority, isImportant);
    } else {
        updateTask(editingTaskId, taskName, priority, isImportant);
    }

    // Clear the form when finished.
    resetTaskForm();
});


// CANCEL EDIT EVENT LISTENER

document.getElementById("cancel-edit").addEventListener("click", function() {
    resetTaskForm();
});


// DELETE ENTIRE LIST EVENT LISTENER

document.getElementById("delete-list").addEventListener("click", function() {

    if (tasks.length > 0) {
        let confirmDelete = confirm("Are you sure you want to delete all tasks?");

        if (confirmDelete === true) {
            deleteTaskList();
        }
    }
});
