// Question object
var question = {

    q1: ["What is the only manmade object that is observable from the moon?", "Me", "The Sun", "The Great Wall", "The not so great wall", 3],

    q2: ["What is the capital of Australia", "Me", "The Sun", "The Great Wall", "Canberra", 4],

}

// Question array
var questionArray = [question.q1, question.q2];

// Keep track of which question we are on
var questionIndex = 0;

var userAnswer;

var correctAnswer;

//Function to display current question
function init() {

    if (questionIndex <= questionArray.length - 1) {

        $("#question").text(questionArray[questionIndex][0]);
        $("#answer1").text(questionArray[questionIndex][1]);
        $("#answer2").text(questionArray[questionIndex][2]);
        $("#answer3").text(questionArray[questionIndex][3]);
        $("#answer4").text(questionArray[questionIndex][4]);

    } else {

        $("#question").text("Game Over");

    }

}

// Correct Answer function

function displayCorrect() {

    correctAnswer = questionArray[questionIndex][5];

    $("#question").text(questionArray[questionIndex][correctAnswer]);

    $("#answer1").empty();
    $("#answer2").empty();
    $("#answer3").empty();
    $("#answer4").empty();


}


init();


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



// User Inputs
$(document).ready(function () {


    $(".answers").on("click", ".answer", function () {

        userAnswer = parseInt($(this).attr("value"));

        correctAnswer = questionArray[questionIndex][5];

        userAnswer = parseInt($(this).attr("value"));

        correctAnswer = questionArray[questionIndex][5];

        if (questionIndex <= questionArray.length - 1) {

            // Correct Answer Display
            function displayCorrect() {

                $("#question").text(questionArray[questionIndex][correctAnswer]);
    
                $("#answer1").empty();
                $("#answer2").empty();
                $("#answer3").empty();
                $("#answer4").empty();
    
            }


            if (userAnswer === correctAnswer) {

                alert("YAY");

            } else {

                alert("AWW");
            }

            questionIndex++;

            displayCorrect();

            setTimeout(init, 3000);
        }

    })



})