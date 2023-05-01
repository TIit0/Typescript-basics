"use strict";
let stringArr = ["I", "Said", "Hey", "What's Going On!?"];
let albums = ["Kickapoo", 7777,];
let chache = ["EVGA", true, 1333];
albums[0] = 1;
albums.unshift("prayer of the refuge");
console.log(albums);
let anyArr = [];
let bands = [];
bands.push("Daft punk");
/* touple */
let touple = ["daft punk", 7777, true];
/* nromal arr */
let mixedArr = ["iron maiden", 1987, false];
touple[0] = "Daft-Punk";
console.log(touple);
console.log(mixedArr);
/* Objects */
let myObject = {};
let mySecondObj = {
    band: "Iron maiden",
    year: 1982
};
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
/* Enums */
/* unlike most typescript features, Enums are not a type-level addition to Javascript but something added to the language and the run time */
var Grade;
(function (Grade) {
    Grade[Grade["u"] = 1] = "u";
    Grade[Grade["d"] = 2] = "d";
    Grade[Grade["c"] = 3] = "c";
    Grade[Grade["b"] = 4] = "b";
    Grade[Grade["a"] = 5] = "a";
})(Grade || (Grade = {}));
console.log(Grade.a);
