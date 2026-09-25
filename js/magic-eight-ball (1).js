let answers = [
    "Yes",
    "No",
    "Definitely",
    "Maybe",
    "Ask again later",
    "Absolutely not",
    "Most likely",
    "I don't think so"
];

function displayAnswer() {
    let index = Math.floor(Math.random() * answers.length);

    let circle = document.getElementById("circle");

    circle.style.display = "block";
    circle.innerHTML = answers[index];
}

document.getElementById("ball").addEventListener("mousedown", function() {
    let question = document.getElementById("question").value;

    if (question === "") {
        alert("Please enter a question.");
    } else {
        displayAnswer();
    }
});

document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("circle").style.display = "none";
});