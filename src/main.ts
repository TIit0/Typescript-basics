

type Str = string;
type Two = number | string;
type Three = "ello";

/* convert to more or less specific */
let a: Str = "hello";
let b = a as Two
let c: Two = a
let d = a as Three

let e = <Str> "World"
let f = <string | number> "world"

const addOrConcat = (a: number, b: number, c: "add" | "concat"): number | string => {

    if (c === "add") return a + b;

    return `${a}${b}`;
}

let myVal: string = addOrConcat(2,2, "concat") as string;

/* be careful of using as:
since it tells typescript to chillout and can lead to mistakes */
let otherVal: number = addOrConcat(2,2, "concat") as number;

/* 10 as string */ // error

/* forced casting or double casting */
(10 as unknown) as string


/* 1:53:27 */


/* The DOM */

const img = document.querySelector("img");
const myImg = document.querySelector("#img");
const myImg2 = document.getElementById("img");

// img.src  error: object is posibly null
// myImg.src  error: object is posibly null

const img2 = document.querySelector("img") as HTMLImageElement;
img2.src;
//

/* ! is a non null assertion.
however it will still check if element is correct and has the right properties aka src 
*/
const myImg3 = document.querySelector("#img")! as HTMLImageElement;
myImg3.src
//

// ! non null assertion example
const img4 = document.querySelector("img")!;
img4.src


/*
another example with braket syntax = same as img2.
note: this doesn't work on tsx files for react 
*/
const myImg5 = <HTMLImageElement> document.querySelector("#img")
myImg5.src
