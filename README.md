
# Interactive Productivity Dashboard

This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features.

The dashboard includes a weekly task goal calculator, dynamic task manager, metric converter, and Magic Eight Ball game.

## TODO: Future Enhancements

- [x] Add a metric conversion tool.
- [x] Integrate a task list with array storage.
- [x] Add priority, importance, and completion status to tasks.
- [x] Allow users to edit and delete tasks.
- [x] Log task updates using JSON.stringify().
- [ ] Add JavaScript logic for a live clock.
- [x] Add a weekly task goal calculator.

## Weekly Task Goals

This feature calculates a user's weekly task goal based on their daily task goal and weekly bonus tasks.

The daily goal is multiplied by five workdays, and the weekly bonus tasks are added to calculate the user's total weekly task goal.

## Task Manager

The Task Manager allows users to add, edit, complete, and delete tasks dynamically.

Tasks are stored in a JavaScript array of objects. Each object contains five properties:

- id: A unique number identifying the task.
- name: The name of the task.
- priority: High, Medium, or Low.
- isImportant: A Boolean indicating whether the task is important.
- isCompleted: A Boolean indicating whether the task is completed.

### Task Manager Features

Users can enter a task name, select its priority, and check a box to mark it as important.

The application creates task list items and buttons dynamically using JavaScript DOM methods.

Tasks are styled using the JavaScript .style property.

High-priority tasks have a light red background, medium-priority tasks have a light yellow background, and low-priority tasks have a light green background.

Important tasks are highlighted in red. Completed tasks have a strikethrough.

Users can edit task information, mark tasks as completed, undo completion, delete individual tasks, or delete the entire task list.

Every time a task is added, updated, completed, or deleted, the application logs the full task array to the browser console using JSON.stringify().

Tasks are stored in memory while the webpage is open and reset when the page is refreshed.

### Task Manager Logic and Pseudocode

BEGIN

    CREATE empty tasks array

    WHEN user submits task form

        GET task name
        GET task priority
        GET important checkbox value

        IF task name is not empty THEN

            IF editing an existing task THEN
                UPDATE task object
            ELSE
                CREATE new task object
                ADD task object to tasks array
            END IF

            DISPLAY tasks
            LOG tasks as JSON

        END IF

    WHEN user clicks Complete

        FIND selected task
        CHANGE completion status
        DISPLAY tasks with updated styling
        LOG tasks as JSON

    WHEN user clicks Edit

        FIND selected task
        LOAD task information into form
        ALLOW user to save changes

    WHEN user clicks Delete

        REMOVE selected task from array
        DISPLAY updated tasks
        LOG tasks as JSON

    WHEN user clicks Delete Entire List

        CLEAR tasks array
        CLEAR displayed tasks
        LOG empty array as JSON

END

## Imperial/Metric Converter

This application converts numeric values between Imperial and Metric units.

It supports conversions between inches, feet, yards, miles, centimeters, meters, and kilometers.

### Logic and Pseudocode

BEGIN

    INPUT value

    INPUT conversion

    IF conversion = "inch to centimeter" THEN
        SET result = value * 2.54
        OUTPUT result

    ELSE IF conversion = "foot to centimeter" THEN
        SET result = value * 30.48
        OUTPUT result

    ELSE IF conversion = "yard to meter" THEN
        SET result = value * 0.91
        OUTPUT result

    ELSE IF conversion = "mile to kilometer" THEN
        SET result = value * 1.61
        OUTPUT result

    ELSE IF conversion = "centimeter to inch" THEN
        SET result = value * 0.39
        OUTPUT result

    ELSE IF conversion = "centimeter to foot" THEN
        SET result = value * 0.0328
        OUTPUT result

    ELSE IF conversion = "meter to yard" THEN
        SET result = value * 1.09
        OUTPUT result

    ELSE IF conversion = "kilometer to mile" THEN
        SET result = value * 0.62
        OUTPUT result

    ELSE
        OUTPUT "Invalid conversion"

END

## Magic Eight Ball

The Magic Eight Ball game allows the user to type a yes/no question and click the Magic Eight Ball to receive a random answer.

The game uses a JavaScript array to store possible answers and Math.random() to randomly select an answer.

Event listeners detect when the user clicks the Magic Eight Ball and the reset button.

The program also checks that the user entered a question before displaying an answer.

CSS is used to animate the Magic Eight Ball when it is clicked and to display the selected answer.

## Technologies Used

- HTML
- CSS
- JavaScript
- Bootstrap
- Git and GitHub

## Testing

The Task Manager was designed to support the following tests:

1. Add a new task with a name and priority.
2. Mark a task as important and verify red highlighting.
3. Complete a task and verify the strikethrough.
4. Undo task completion.
5. Edit an existing task.
6. Delete an individual task.
7. Delete the entire task list.
8. Verify that JSON updates appear in the browser console.
9. Check that the page is responsive on smaller screens.
