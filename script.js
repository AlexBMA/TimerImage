'use strict'

let coutdownDiv = document.getElementById('countdown');
const timeElements = document.querySelectorAll('span');
let idInterval;

/* Aici setezi cate minute vrei*/
let minutesPlus10 = 2;

function updateCountDown() {
    let date = new Date();
    let minutes = date.getMinutes();
    let secounds = date.getSeconds();

    if (minutesPlus10 !== minutes) {

        timeElements[0].textContent = minutesPlus10 - minutes;
        timeElements[1].textContent = 60 - secounds;
    } else {
        timeElements[0].textContent = 0;
        timeElements[1].textContent = 0;

        clearInterval(idInterval);


        coutdownDiv.hidden = true;

        console.log("INTERVAL STOP");
    }

}

function startCountDown() {
    let date = new Date();

    let minutes = date.getMinutes();
    let secounds = date.getSeconds();

    minutesPlus10 = minutes + minutesPlus10;

    timeElements[0].textContent = minutesPlus10 - minutes;
    timeElements[1].textContent = 60 - secounds;

    idInterval = setInterval(updateCountDown, 1000);
}

startCountDown();