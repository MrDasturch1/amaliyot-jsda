"use strict";

const oyRaqami = prompt("Oy raqamini kiriting (1-12): ");
const kunlarSon = new Date(2024, oyRaqami - 1, 0).getDate();
alert(`${oyRaqami} - oyida ${kunlarSon} kun bor`);
console.log(`${oyRaqami} - oyida ${kunlarSon} kun bor.`);
