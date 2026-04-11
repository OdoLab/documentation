let card = document.querySelector('#card')
let time = null;
let isRunning = false;
let clock = document.querySelector('.swinging .clock');

function flip() {
    if (card.style.transform === "rotateY(180deg)") {
        card.style.transform = "rotateY(0deg)";
    } else {
        card.style.transform = "rotateY(180deg)";
    };
}


function updateTime() {
	let span = clock.querySelector('span')
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    span.innerHTML = hr + ":" + min + ":" + sec;
};

function startTime() {
    if (!isRunning) {
        updateTime()
        time = setInterval(function() {updateTime()}, 1000)
        isRunning = true
		clock.style.animationPlayState = "running";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    startTime();
});

function stopTime() {
    let button = document.querySelector('button');

    if (isRunning) {
        clearInterval(time);
        isRunning = false;
        button.innerHTML = "▶︎";
		clock.style.animationPlayState = "paused";
    }else {
        startTime();
        button.innerHTML = "❚❚";
    }
};