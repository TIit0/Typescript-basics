"use strict";
function stringEcho(arg) {
    return arg;
}
let anotatedSecondObj = {
    band: "hey",
    year: 1970,
};
let eddieVanHalen = {
    name: "eddie van halen",
    year: 1940,
    albums: [5],
};
let secondBand = {
    name: "Daft-punk",
    albums: [5],
};
eddieVanHalen = secondBand;
function greetBand(band) {
    if (band.name) {
        return `Hello! ${band.name} `;
    }
    return "Hello!";
}
greetBand(secondBand);
