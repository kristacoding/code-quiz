# Code Quiz 

# Overview
 Building a timed code quiz with multiple-choice questions. This webpage runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code. It also features a clean and polished user interface and is responsive, ensuring that it adapts to multiple screen sizes by using Bootstrap css. 

# Description 

Page URL: https://kristacoding.github.io/code-quiz/

Starting with the basic HTML and Bootstrap CSS, I created a quiz page that prompts the user to start the coding quiz. It also has a link to the highscore page in the left hand corner and a timer in the top right hand corner. Once the start button is pushed, the timer using its own timer function, will start to count down and either continue to count down normally, or decrease 10 seconds if an incorrect answer is clicked. 

Additionally, once the start button is clicked, questions and answer in the form of buttons will start to appear on the screen. These new questions were created using a baseline format in HTML and updating each question and answer in Javascript. By adding the questions, options and answers into an array, I was then able to create a javascript the filtered through each question after they were answered. 

Once you click an answer, it will tell you if it is right or wrong. If it is correct, you will move to the next question. If it is incorrect, you will lose 10 seconds but be able to pick another answer. To create this, I used an if/else statement and referred to the users choice by using this.id. 

Finally, at the end of the quiz, you are able to submit your name for a top score.  
