"use strict";
/* convert to more or less specific */
let a = "hello";
let b = a;
let c = a;
let d = a;
let e = "World";
let f = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return `${a}${b}`;
};
let myVal = addOrConcat(2, 2, "concat");
/* be careful of using as:
since it tells typescript to chillout and can lead to mistakes */
let otherVal = addOrConcat(2, 2, "concat");
/* 10 as string */ // error
/* forced casting or double casting */
10;
/* 1:53:27 */
/* The DOM */
const img = document.querySelector("img");
const myImg = document.querySelector("#img");
const myImg2 = document.getElementById("img");
// img.src  error: object is posibly null
// myImg.src  error: object is posibly null
const img2 = document.querySelector("img");
img2.src;
//
/* ! is a non null assertion.
however it will still check if element is correct and has the right properties aka src
*/
const myImg3 = document.querySelector("#img");
myImg3.src;
//
// ! non null assertion example
const img4 = document.querySelector("img");
img4.src;
/*
another example with braket syntax = same as img2.
note: this doesn't work on tsx files for react
*/
const myImg5 = document.querySelector("#img");
myImg5.src;
