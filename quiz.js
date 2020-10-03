// Assignment Code 
var userQuestion;
var userOptions;
var questionIndex = 0;
var choice;
var score = 0;
//var highscore = 0;

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
console.log(optionLayout);
var results = document.getElementById("results");

var timer = document.getElementById("timer");
var timeLeft = 75;
var timestart = 0;
var penalty = 10;

var endGame = document.getElementById("endGame");

startQuiz.style.display = "block";
optionLayout.style.display = "none";
endGame.style.display = "none";

// Timer
function startTimer() {

    var timerInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft;

        if (timeLeft === 0) {
            timer.textContent = "Time's Up!";
            clearInterval(timerInterval);
        } else if (questionIndex > 4) {
            clearInterval(timerInterval);
            saveScore();
        }


    }, 1000);
}

// Building Questions
function questionAsked() {
    questionTitle.innerHTML = questionType[questionIndex].question;
    optionA.innerHTML = questionType[questionIndex].optionA;
    optionA.setAttribute("value", questionType[questionIndex].optionA);
    optionB.innerHTML = questionType[questionIndex].optionB;
    optionB.setAttribute("value", questionType[questionIndex].optionB);
    optionC.innerHTML = questionType[questionIndex].optionC;
    optionC.setAttribute("value", questionType[questionIndex].optionC);
    optionD.innerHTML = questionType[questionIndex].optionD;
    optionD.setAttribute("value", questionType[questionIndex].optionD);
}

// Function to prompt questions

function quiz() {
    console.log("test");
    //starting the timer and quiz
    startTimer();
    // clear contents
    startQuiz.style.display = "none";
    optionLayout.style.display = "block";
    endGame.style.display = "none";
    questionAsked();
    //saveScore();

}


function compare() {
    var correctAnswer = questionType[questionIndex].answer;
    console.log(correctAnswer)
    // comparing choice to correct answer

    if (choice === correctAnswer) {
        console.log("Correct!");
    }
    else {
        timeLeft -= 10;
        if (timeleft = 0) {
            saveScore();
        }
        timer.textContent = timeLeft;
    }

    // moving to next question
    questionIndex++;
    var score = timeLeft;
    console.log(score);
    results.textContent = "";
    questionAsked();
    console.log(questionIndex);
}


// Execution
//Event listeners for each answer choice button
optionA.addEventListener("click", function () {
    choice = this.value;
    console.log(choice);
    compare();
});
optionB.addEventListener("click", function () {
    choice = this.value;
    console.log(choice);
    compare();
});
optionC.addEventListener("click", function () {
    choice = this.value;
    console.log(choice);
    compare();
});
optionD.addEventListener("click", function () {
    choice = this.value;
    console.log(choice);
    compare();
});


// Add event listener to start quiz 
startQuizBtn.addEventListener("click", quiz);
var finalScore = document.getElementById("finalScore");
var userName = document.getElementById("userName").value;
var submitBtn = document.getElementById("submitBtn");

endGame.style.display = "none";

function saveScore() {
    startQuiz.style.display = "none";
    optionLayout.style.display = "none";
    endGame.style.display = "block";
    var score = timeLeft;
    finalScore.append(score);
}

submitBtn.addEventListener("click", function () {
    console.log(userName);
    
    if (userName === null){
        console.log("No value Entered");
    }
    else {
        var finalScore = {
            userName: userName,
            score: score,
        }
        console.log(finalScore);
        var allScores = localStorage.getItem("allScores");
        if (allScores === null) {
            allScores - [];
        } else {
            allScores = JSON.parse(allScores);
        }
        allScores.push(finalScore);
        var newScore = JSON.stringify(allScores);
        localStorage.setItem("allScores", newScore);
        //
        window.location.replace("./Highscore.html");
    }



})

//var name = name.value.trim();

// Highscore Javascript

var score = document.getElementById("score");
var leaders = [];
var leaderList = document.getElementById("leader-list");
var submitButton = document.getElementById("submit-button");
var scoreInput = document.getElementById("score-input");
var scoreName = document.getElementById("score-name");


// Retreive local storage
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++){
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].userName + " " + allScores[i].score;
        leaderList.append(createLi);
    }
}

submitButton.addEventListener("click", function () {
    console.log(userName);
    
    if (userName === null){
        console.log("No value Entered");
    }
    else {
        var finalScore = {
            userName: userName,
            score: score,
        }
        console.log(finalScore);
        var allScores = localStorage.getItem("allScores");
        if (allScores === null) {
            allScores - [];
        } else {
            allScores = JSON.parse(allScores);
        }
        allScores.push(finalScore);
        var newScore = JSON.stringify(allScores);
        localStorage.setItem("allScores", newScore);
        //
        window.location.replace("./Highscore.html");
    }



})