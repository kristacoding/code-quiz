// Assignment Code 
var startQuiz = document.getElementById("#startquiz");
var startQuizBtn = document.getElementById("#startquizbtn");

var quizbody = document.getElementById("#quiz");
var questionSelect = document.getElementById("#questionSelect");
var options = document.getElementById("#options");
var listCreate = document.createElement("ul");

var timer = document.getElementById("#timer");
var timeLeft = 60;
var timestart = 0;
var penalty = 10;





function quiz() {

    startQuiz.style.display = 'none';
    display();

    // Timer
    timerInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = "Timer: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            showScore();
        }
    }, 1000);

    //render(generateQuestions);   

}


// Prompts the Question
function generateQuestions() {
    for (let i = 0; i < questionType.length; i++) {

        var questionSelect = document.createElement(h1);
        questionSelect.textContent(questionType.question[i]);

        var getOptions = document.createElement(button);
        getOptions.addClass("btn btn-outline-info");
        getOptions.textContent(questionType.options[i]);
        askquestion.append(getOptions)
    }

}

// Checks if correct
function correctAnswer(answer) {
    if (answer === questionType[i].answer) {
        timeLeft += 10;
    }
    else (answer !== questionType[i].answer)
    timeLeft -= 10;
}

// Add event listener to start quiz 
startQuizBtn.addEventListener("click", quiz());