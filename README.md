# Code Quiz 

# Overview
 Building a timed code quiz with multiple-choice questions. This webpage runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code. It also features a clean and polished user interface and is responsive, ensuring that it adapts to multiple screen sizes by using Bootstrap css. 

# Description 

Homepage Page URL: https://kristacoding.github.io/code-quiz/
Highscore Page URL: https://kristacoding.github.io/code-quiz/highscore.html 

The homepage starts with basic HTML and Bootstrap CSS to create a quiz of 5 question and gives the user a score at the end. On the homepage, there is a highscores button in the upper lefthand corner that takes the user to another page, and on the righthand corner, there is a timer that tracks how long it takes for the user to complete the quiz. This timer is also used as the score throughout this application. 

Using Javascript, we are then able to create a series of questions that the user is prompted to move through once clicking the start button. To create the questions, I built a base question outline that each individual question is then filtered through using a question array. The question array is stored in a separate javascript just to keep the coding and elements simple. 

When an answer is clicked, it moves to another question. If the correct answer is clicked, no time is lost but if an incorrect answer is clicked, 10 seconds are decreased. This is created using an if/else statement that allows for the two different outcomes. 

Finally, at the end of the quiz, you will be prompted with your score and the opportunity to save it as a highscore. Your score and name will then be saved to local storage, where it can then be pulled to show in the highscores html. 

## Skills 
    - HTML
    - CSS
    - JavaScript


## Pictures: 

Homepage - <img src="https://nepseq.dm.files.1drv.com/y4mU7KNYTX9HJ35ZAFU_QFEsSfOLsy4qOgjLpsxNNK27IpaVec1Zo9plxzwvuurbxOS47vexx5M2LorK8J7wszWIhnMsrdFJ65d-u4_TNyTOE50BOntXJb7opdVB-OOxw0AEKTUMdk7reHT9mJE5qsuxOvW3MAzgK1mCOgOLphruca5Vxa-GESnO6_lfE4KHOrT-nBxhtUcw1rJVV1llxwIug?width=1910&height=888&cropmode=none"></img>

Highscore - <img src="https://neo91w.dm.files.1drv.com/y4m0dKS0B-2TUb48x7PHWG_CkY9b_peeBfO2Kt7CNvTN6YP4mDyGZ8TaCWIF1IWYxB1MY9nbzEDL1FmgLPuinw7vE-vDAm_fZnbLbcXYRNs6YfUBZtf1JcLm-_xor0j0Wk-1E8zDHHJ8av9QLAB9-ftc3HtFQelpgdmfbtz74a2Cz3jRyNUpW0JTHSwi2HGi0el2FAkWSF63KgxwIdfED595w?width=1902&height=899&cropmode=none"></img>