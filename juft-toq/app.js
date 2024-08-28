"use strict";
function raqam(num) {
    if (num <= 1);
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0);
    }
}

function checkNumber() {
    let son = +prompt("Iltimos, biror son kiriting:");

    if (isNaN(number)) {
        console.log("Iltimos, haqiqiy son kiriting.");
        return;
    }

    let juft = number % 2 === 0 ? "Juft" : "Toq";

    let murakkab = raqam(number) ? "Murakkab emas" : "Murakkab";

    let musbat = number > 0 ? "Musbat" : number < 0 ? "Manfiy" : "Nol";

    console.log(`Kiritilgan son: ${number}`);
    console.log(`Juft yoki Toq: ${juft}`);
    console.log(`Murakkab yoki oddiy: ${murakkab}`);
    console.log(`Musbat yoki Manfiy: ${musbat}`);
}

checkNumber();
