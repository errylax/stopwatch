let intervalId;

function add() {
    let seconds = document.querySelector("#seconds").innerHTML;
    let tens = document.querySelector("#tens").innerHTML;
    let newSeconds,newTens;
    if (parseInt(tens) === 59) {
        seconds = (parseInt(seconds)+1).toString();
        newSeconds = '0'+seconds;
        document.querySelector("#seconds").innerHTML = (seconds<10) ? newSeconds : seconds ;
        document.querySelector("#tens").innerHTML = "00";
    } else {
        tens = (parseInt(tens)+1).toString();
        newTens = '0'+tens;
        document.querySelector("#tens").innerHTML = (tens<10) ? newTens : tens ;
    }
}

function start() {
    intervalId = setInterval(add,1000);
}

function stop() {
    clearInterval(intervalId);
}

function reset() {
    document.querySelector("#seconds").innerHTML = "00";
    document.querySelector("#tens").innerHTML = "00";
}