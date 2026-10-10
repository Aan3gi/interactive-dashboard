
let myTasks = [];

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

// Create the unordered list for weekly tasks.
let taskList = document.createElement("ul");
taskList.id = "user-tasks";

// Add the list to the task-list container.
document.getElementById("task-list").appendChild(taskList);

// Add a new task when the Add Task button is clicked.
document.getElementById("add-task").addEventListener("click", function(event) {
    event.preventDefault();

    // Get the task entered by the user.
    let taskName = document.getElementById("task-name").value.trim();

    // Only add tasks that are not empty.
    if (taskName !== "") {

        // Store the task in the array.
        myTasks.push(taskName);

        // Create a new list item.
        let listItem = document.createElement("li");

        // Add the task text to the list item.
        listItem.textContent = taskName;

        // Append the list item to the unordered list.
        taskList.appendChild(listItem);

        // Clear the input field.
        document.getElementById("task-name").value = "";
    }
});
