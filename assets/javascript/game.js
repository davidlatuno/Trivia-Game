var seconds = 30;

var timer;

function start() {

    timer = setInterval(countDown, 1000);

}

function countDown() {

    seconds--;

    $("#timer").text("Time Remaining: " + seconds + " Seconds");

    if (seconds === 0) {

        stop();

        alert("TIME UP");

    }
}

function stop() {

    clearInterval(timer);

}

start();