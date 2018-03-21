// Question object
var question = {

    q1: ["What is the only manmade object that is observable from the moon?", "Me", "The Sun", "The Great Wall", "The not so great wall", 3],

    q2: ["What is the capital of Australia?", "Me", "The Sun", "The Great Wall", "Canberra", 4],

    q3: ["Who was the mad monk of Russian history?", "Aladin", "Me", "Ted", "Rasputin", 4],

    q4: ["What is the largest fish in the ocean?", "Me", "Nemo", "Whale Shark", "Whale", 3],

    q5: ["Which artist painted a mustache and goatee on the Mona Lisa?", "Monet", "Manet", "Cordon", "Duchamp", 4]
}

// Question array
var questionArray = [question.q1, question.q2, question.q3, question.q4, question.q5];

var questionIndex = 0;
var correctAnswer = 0;
var incorrectAnswer = 0;
var uncomplete = 0;


function displayQuestion() {
    $(".container").append("<div class: 'question Q" + questionIndex + "'>" + questionArray[questionIndex][0] + "</div>");

    for (var i = 1; i < 5; i++) {
        $(".container").append("<input type='radio' name='" + questionIndex + "' value= '" + i + "'>" + questionArray[questionIndex][i]);
        $(this.input).attr("value", i);
    }
}

for (var i = 0; i < 5; i++) {

    displayQuestion();
    questionIndex++;


}

function tallyScore() {

    questionIndex = 0;

        for (var i = 0; i < 5; i++) {

            var check = parseInt($("input[name=" + i + "]:checked").attr("value"));

            if(!$("input[name=" + i + "]:checked").attr("value")) {
                uncomplete++;

            } else if (check === questionArray[questionIndex][5])
            
            {   correctAnswer++;

            } else {

                incorrectAnswer++;

            }

            questionIndex++;
        }
        console.log(correctAnswer);
        console.log(incorrectAnswer);
        console.log(uncomplete);
}




// Timer Code
var seconds = 30;

var timer;

function start() {

    timer = setInterval(countDown, 1000);

}

function countDown() {

    $("#timer").text("Time Remaining: " + seconds + " Seconds");

    seconds--;

    if (seconds === 0) {

        stop();

        alert("TIME UP");

    }
}

function stop() {

    clearInterval(timer);

}

start();

$(document).ready(function () {


    $("#done").click(function () {

        tallyScore();


    })
})