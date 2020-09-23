// Assignment Code 
var userQuestion;
var userOptions;
var questionIndex = 0;
var choice = 0;
var score = 0;
var highscore = 0;

var startQuiz = document.getElementById("startQuiz");
var startQuizBtn = document.getElementById("startquizbtn");

var quizLayout = document.getElementById("quizLayout");
var questionTitle = document.getElementById("questionTitle");
var nameQuestion = document.getElementById("nameQuestion");
var optionA = document.querySelector("#optionA");
var optionB = document.querySelector("#optionB");
var optionC = document.querySelector("#optionC");
var optionD = document.querySelector("#optionD");
var optionLayout = document.getElementById("optionLayout");
var results = document.getElementById("results");

var timer = document.getElementById("timer");
var timeLeft = 60;
var timestart = 0;
var penalty = 10;


// Timer
function timer() {

    var timerInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            showScore();
            timer.textContent = "Time's Up!"
        } else if (questionIndex > 4) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

// Building Questions
function questionAsked() {
    questionTitle.innerHTML = questionType[questionIndex].question;
    optionA.innerHTML = questionType[questionIndex].optionA;
    optionB.innerHTML = questionType[questionIndex].optionB;
    optionC.innerHTML = questionType[questionIndex].optionC;
    optionD.innerHTML = questionType[questionIndex].optionD;
}

// Function to prompt questions

function quiz() {
    //starting the timer and quiz
    timer();
    // clear contents
    startQuiz.style.display = 'none';
    optionLayout.classList.remove("hide");
    questionAsked();

}


function compare() {
    var correctAnswer = document.getElementById(questionType[questionIndex].answer);
    console.log(correctAnswer)
    // comparing choice to correct answer

    if (choice === correctAnswer) {
        score++;
        console.log(score);
        results.textContent = "Correct!"
    }
    else {
        timeLeft -= 10;
        timer.textContent = timeLeft;
        results.textContent = "Incorrect, please try again!";
    }
    // moving to next question
    questionIndex++;
    console.log(questionIndex);
}

// Execution
//Event listeners for each answer choice button
optionA.addEventListener("click", function () {
    choice = this.id;
    console.log(choice);
    compare();
});
optionB.addEventListener("click", function () {
    choice = this.id;
    console.log(choice);
    compare();
});
optionC.addEventListener("click", function () {
    choice = this.id;
    console.log(choice);
    compare();
});
optionD.addEventListener("click", function () {
    choice = this.id;
    console.log(choice);
    compare();
});


// Add event listener to start quiz 
startQuizBtn.addEventListener("click", quiz);