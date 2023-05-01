"use strict";
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
let vanHalen = {
    active: false,
    name: "eddie",
    albums: [1, "hi"],
};
// Literal types - * note the : *
let myName;
let username;
username = "jack";
// Functions
const add = (a, b) => {
    return (a + b).toString();
};
const logMsg = (message) => {
    console.log(message);
};
logMsg(vanHalen);
function subtract(c, d) {
    return c - d;
}
console.log(subtract(3, 4));
let multiply = (c, d) => {
    return c * d;
};
console.log(multiply(2, 5));
// Optional parameters
/* optional parameters need to be last */
function addAll(a, b, c) {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
}
/* default parameter */
function sumAll(a = 2, b, c = 2) {
    return a + b + c;
}
console.log(addAll(2, 7, 0));
console.log(addAll(2, 7, 5));
console.log(sumAll(3, 7));
console.log(sumAll(undefined, 7)); /* if we want to omit a parameter to use default we need to explicitly set it as undfined */
// Rest parameters
/* remember rest creates an arr of parameters */
function total(num1 = 2, ...nums) {
    return num1 + nums.reduce((prev, curr) => {
        return prev + curr;
    });
}
console.log(total(undefined, 2, 3, 4, 5));
/* never type */
/* never is used for errors */
const createError = (error) => {
    throw new Error(error);
};
/* never also alerts of infinite loop if cunction return never */
const infiniteLoop = () => {
    let i = 0;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
/* custom type guard */
const isNumber = (value) => {
    return (typeof value === "number") ? true : false;
};
/* uses for never */
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("this should never happen");
};
console.log(numberOrString(""));
/* 141 */ 
