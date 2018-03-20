var question = {

    q1: ["What is the only manmade object that is observable from the moon?", "Me", "The Sun", "The Great Wall", "The not so great wall", 3],

    q2: ["What is the capital of Australia", "Me", "The Sun", "The Great Wall", "Canberra", 4],

}

var questionArray = [question.q1, question.q2];

var questionIndex = 0;

function init() {

    if (questionIndex <= questionArray.length -1) {

        $("#question").text(questionArray[questionIndex][0]);
        $("#answer1").text(questionArray[questionIndex][1]);
        $("#answer2").text(questionArray[questionIndex][2]);
        $("#answer3").text(questionArray[questionIndex][3]);
        $("#answer4").text(questionArray[questionIndex][4]);

    } else {

        $("#question").text("Game Over");

    }

}


init();

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


$(document).ready(function() {


    $(".answers").on("click", ".answer", function() {

        console.log($(this).attr("value"));


    })



})