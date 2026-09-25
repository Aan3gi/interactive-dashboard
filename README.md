# Interactive Productivity Dashboard

This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features.

## TODO: Future Enhancements

* [x] Add a metric conversion tool.
* [ ] Integrate a task list with array storage.
* [ ] Add JavaScript logic for a live clock.
* [x] Add a weekly task goal calculator.

## Weekly Task Goals

This feature calculates a user's weekly task goal based on their daily task goal and weekly bonus tasks. The daily goal is multiplied by five workdays, and the weekly bonus tasks are added to calculate the user's total weekly task goal.

## Imperial/Metric Converter

This application converts numeric values between Imperial and Metric units. It supports conversions between inches, feet, yards, miles, centimeters, meters, and kilometers.

### Logic and Pseudocode

```text
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
```

## Magic Eight Ball

The Magic Eight Ball game allows the user to type a yes/no question and click the Magic Eight Ball to receive a random answer.

The game uses a JavaScript array to store possible answers and `Math.random()` to randomly select an answer. Event listeners detect when the user clicks the Magic Eight Ball and the reset button. The program also checks that the user entered a question before displaying an answer. CSS is used to animate the Magic Eight Ball when it's clicked and to display the selected answer.
