// Questions Array
var questionType = [
    {
        question: "The condition in an if / else statement is enclosed within ____",
        options: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
        answer: "Parenthese",
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        options: ["Number and Strings", "Other Arrays", "Booleans", "All of the Above"],
        answer: "All of the Above",
    },
    {
        question: "String Values must be enclosed within _________ when being assigned to variables",
        options: ["Quotes", "Curly Brackets", "Parentheses", "Commas"],
        answer: "Quotes",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is _________.",
        options: ["JavaScript", "Console Log", "Terminal/Bash", "For Loops"],
        answer: "Console Log",
    },
    {
        question: "Commonly used data types do not include: _______",
        options: ["Numbers", "Booleans", "Alerts", "Strings"],
        answer: "Alerts",
    }
];


// Assignment Code 
var userQuestion;
var userOptions;

var startQuiz = document.getElementById("startQuiz");
var startQuizBtn = document.getElementById("startquizbtn");

var quizLayout = document.getElementById("quizLayout");
var nameQuestion = document.getElementById("nameQuestion")
//var questionSelect = document.getElementById("questionSelect");
//var options = document.getElementById("options");
//var listCreate = document.createElement("ul");

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
    quizLayout.style.display = 'block';

    // Loop through array of questions
    for (let i = 0; i < questionType.length; i++) {
        userQuestion = questionType[i].question;
        userOptions = questionType[i].options;

        console.log(userQuestion);
        console.log(userOptions);

    
        questionType.forEach(userQuestion => {buildQuestion()   
        });

        questionType.forEach(userOptions => {buildOptions()  
        });


    }
}

// Building the questions
function buildQuestion() {
    var createQuestion = document.createElement("h1");
    //createQuestion.Setattribute("startquiz");
    createQuestion.textContent = userQuestion;
    quizLayout.append(userQuestion);
}

// Building the answers
function buildOptions() {
    for (let i = 0; i < questionType.options.length; i++) {
        var listCreate = document.createElement("ul");
        var formatOptions = document.createElement("li");
        var listButtons = document.createElement("button");
        listButtons.textContent = userOptions;

        quizLayout.append(listCreate);
        listCreate.append(formatOptions)
        formatOptions.append(listButtons);
        listButtons.addEventListener("click", (compare()));
    }
}

function compare() {

}


// Add event listener to start quiz 
startQuizBtn.addEventListener("click", quiz);