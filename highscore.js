var score = document.getElementById("score");
var leaders = [];
var leaderList = document.getElementById("leader-list");
var submitButton = document.getElementById("submit-button");
var scoreInput = document.getElementById("score-input");
var name = document.getElementById("score-name");

trackingScore();

function trackingScore(){
    score.style.display = "none";
    //     Parsing the JSON string to an object
    var lastUser = JSON.parse(localStorage.getItem("leaderHighScore"));
    // If todos were retrieved from localStorage, update the array 
    if (lastUser !== null) {
      leaders = lastUser;
    }
}