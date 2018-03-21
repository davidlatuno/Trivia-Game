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

// Question index and score variables
var questionIndex = 0;
var correctAnswer = 0;
var incorrectAnswer = 0;
var uncomplete = 0;
var done = false;

// function to populate questions from question array
function displayQuestion() {
    $(".container").append("<div class: 'question Q" + questionIndex + "'>" + questionArray[questionIndex][0] + "</div>");

    for (var i = 1; i < 5; i++) {
        $(".container").append("<input type='radio' name='" + questionIndex + "' value= '" + i + "'>" + questionArray[questionIndex][i]);
        $(this.input).attr("value", i);
    }
}
// Populate all of the questions
for (var i = 0; i < 5; i++) {

    displayQuestion();
    questionIndex++;


}


// Function at the end that will tally the score
function tallyScore() {

    // Stops timer
    stop();

    questionIndex = 0;

    // Checks each question if answered and if answer is correct
    for (var i = 0; i < 5; i++) {

        var check = parseInt($("input[name=" + i + "]:checked").attr("value"));

        if (!$("input[name=" + i + "]:checked").attr("value")) {
            uncomplete++;

        } else if (check === questionArray[questionIndex][5]) {
            correctAnswer++;

        } else {

            incorrectAnswer++;

        }

        questionIndex++;
    }

    // Print stats to html
    $(".container").empty();
    $(".container").append("<div class='score'>Correct Answers: " + correctAnswer + "</div>");
    $(".container").append("<div class='score'>Incorrect Answers: " + incorrectAnswer + "</div>");
    $(".container").append("<div class='score'>Uncomplete Answers: " + uncomplete + "</div>");
    $("#done").html("<h1>Reset</h1>");

    done = !done;
}

function reset() {

    $(".container").empty();

    seconds = 31
    questionIndex = 0;
    correctAnswer = 0;
    incorrectAnswer = 0;
    uncomplete = 0;

    // Populate all of the questions
    for (var i = 0; i < 5; i++) {

        displayQuestion();
        questionIndex++;
    }

    $("#done").html("<h1>Done</h1>");

    done = !done;

    start();
}




// Timer Code
var seconds = 31;

var timer;

function start() {

    timer = setInterval(countDown, 1000);

}

function countDown() {

    seconds--;

    $("#timer").text("Time Remaining: " + seconds + " Seconds");

    if (seconds === 0) {

        stop();

        tallyScore();

    }
}

function stop() {

    clearInterval(timer);

}

start();


// Done button calls tally score button
$(document).ready(function () {


    $("#done").click(function () {

        if (!done) {

            tallyScore();

        } else if (done) {

            reset();

        }



    })
})