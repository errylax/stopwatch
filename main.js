let intervalId;

function add() {
    let minutes = document.querySelector("#minutes").innerHTML;
    let seconds = document.querySelector("#seconds").innerHTML;
    if (parseInt(seconds) === 59) {
        minutes = (parseInt(minutes)+1).toString();
        document.querySelector("#minutes").innerHTML = minutes;
        document.querySelector("#seconds").innerHTML = "00";
    } else {
        seconds = (parseInt(seconds)+1).toString();
        document.querySelector("#seconds").innerHTML = seconds;
    }
}

function start() {
    intervalId = setInterval(add,300);
}

function stop() {
    clearInterval(intervalId);
}

function reset() {
    document.querySelector("#minutes").innerHTML = "00";
    document.querySelector("#seconds").innerHTML = "00";
}