// Question object
var question = {

    q1: ["What is the only manmade object that is observable from the moon?", "Me", "The Sun", "The Great Wall", "The not so great wall", 3],

    q2: ["What is the capital of Australia?", "Melbourne", "Sydney", "Cairns", "Canberra", 4],

    q3: ["Name the world's biggest Island", "Hawaii", "Japan", "Greenland", "Philippines", 3],

    q4: ["Who Invented the rabies vaccination?", "Louis Pasteur", "Marie Curie", "Albert Einstein", "Nikola Tesla", 1],

    q5: ["Which artist painted a mustache and goatee on the Mona Lisa?", "Monet", "Manet", "Cordon", "Duchamp", 4],

    q6: ["Give the alternative name for a Mountain Ash tree", "Jabuticaba", "Rowan", "Dragon Blood Tree", "Angel Oak", 2],

    q7: ["Name the country where you would find the Cresta Run", "Switzerland", "India", "Denmark", "Spain", 1],

    q8: ["What is someone who shoes horses called?", "Aptycock", "Clomph", "Farrier", "Hansper", 3],

    q9: ["What is a group of owls called?", "A hoot", "A parliament", "A seer", "A flock", 2],

    q10: ["Which U.S. president made the first presidential radio broadcast?", "Warren G. Harding", "FDR", "Calvin Coolidge", "Herbert Hoover", 3]

}

// Question array
var questionArray = [question.q1, question.q2, question.q3, question.q4, question.q5, question.q6, question.q7, question.q8, question.q9, question.q10];

// Question index and score variables
var questionIndex = 0;
var correctAnswer = 0;
var incorrectAnswer = 0;
var uncomplete = 0;
var done = false;

// function to populate questions from question array
function displayQuestion() {
    $(".container").append("<div class= 'question Q" + questionIndex + "'>" + questionArray[questionIndex][0] + "</div>");

    for (var i = 1; i < 5; i++) {
        $(".container").append("<label><input type='radio' name='" + questionIndex + "' value= '" + i + "'>" + questionArray[questionIndex][i] + "</label>");
    }
}

// Populate all of the questions
for (var i = 0; i < 10; i++) {

    displayQuestion();
    questionIndex++;
}

// Function at the end that will tally the score
function tallyScore() {

    // Stops timer
    stop();

    questionIndex = 0;

    // Checks each question if answered and if answer is correct
    for (var i = 0; i < 10; i++) {

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

// Reset Game without refreshing page
function reset() {

    $(".container").empty();

    // Reset Stats
    seconds = 121
    questionIndex = 0;
    correctAnswer = 0;
    incorrectAnswer = 0;
    uncomplete = 0;

    // Populate all of the questions
    for (var i = 0; i < 10; i++) {

        displayQuestion();
        questionIndex++;
    }

    $("#done").html("<h1>Done</h1>");

    done = !done;

    start();
}




// Timer Code
var seconds = 121;

var timer;

function start() {

    timer = setInterval(countDown, 1000);

}

function countDown() {

    seconds--;

    $("#timer").text("Time Remaining: " + seconds + " Seconds");


    if (seconds > 10) {

        $("#timer").css("color", "forestgreen");

    } else {

        $("#timer").css("color", "crimson");

    }

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