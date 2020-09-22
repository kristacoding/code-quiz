// Questions Array
var questionType = [
    {
        question : "The condition in an if / else statement is enclosed within ____", 
        options : ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
        answer : "Parenthese",
    },
    {
        question : "Arrays in JavaScript can be used to store _____.", 
        options: ["Number and Strings", "Other Arrays", "Booleans", "All of the Above"], 
        answer : "All of the Above",
    },
    {
        question : "String Values must be enclosed within _________ when being assigned to variables", 
        options : ["Quotes", "Curly Brackets", "Parentheses","Commas"],
        answer : "Quotes",
    },
    {
        question : "A very useful tool used during development and debugging for printing content to the debugger is _________.", 
        options : ["JavaScript", "Console Log", "Terminal/Bash", "For Loops"],
        answer : "Console Log",
    },
    {
        question : "Commonly used data types do not include: _______", 
        options : ["Numbers", "Booleans", "Alerts", "Strings"],
        answer : "Alerts",
    }
];


// Assignment Code 
var startQuiz = document.getElementById("startQuiz");
var startQuizBtn = document.getElementById("startquizbtn");

var quizbody = document.getElementById("quiz");
var questionSelect = document.getElementById("questionSelect");
var options = document.getElementById("options");
var listCreate = document.createElement("ul");

var timer = document.getElementById("timer");
var timeLeft = 60;
var timestart = 0;
var penalty = 10;





function quiz() {

    // Timer
    timerInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            showScore();
        }
    }, 1000);

    // clear contents

    startQuiz.style.display = 'none';

    generateQuestions;

}


// Prompts the Question
function generateQuestions(questionIndex) {

    newDiv.innerHTML = "";
    newList.innerHTML = "";

    // Loop through array of questions
    for (let i = 0; i < questionType.length; i++) {
        var userQuestion = questionType[i].question;
        var userOptions = questionType[i].options;
        questionsDiv.textContent = UserQuestion;
    }

    // New format for questions
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        var listCreate = document.createElement()
        newDiv.appendChild();
        newList.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}



// Add event listener to start quiz 
startQuizBtn.addEventListener("click", quiz);