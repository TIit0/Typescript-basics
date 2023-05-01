
let stringArr = ["I", "Said", "Hey", "What's Going On!?"];

let albums = ["Kickapoo", 7777, ];

let chache = ["EVGA", true, 1333];


albums[0] = 1
albums.unshift("prayer of the refuge")
console.log(albums)

let anyArr: (string)[] = [];
let bands: string[] = [];

bands.push("Daft punk")

/* touple */
let touple: [string, number, boolean] = ["daft punk", 7777, true];

/* nromal arr */
let mixedArr = ["iron maiden", 1987, false];

touple[0] = "Daft-Punk"

console.log(touple)
console.log(mixedArr)


/* Objects */

let myObject: object = {};

let mySecondObj = {
    band: "Iron maiden",
    year: 1982
}

let anotatedSecondObj: {
    band: string;
    year: number;
} = {
    band: "hey",
    year: 1970,
}

type Band = {
    name?: string;
    year?: number;
    albums: (string | number )[];
}

let eddieVanHalen: Band = {
    name: "eddie van halen",
    year: 1940,
    albums: [5],
}

let secondBand = {
    name: "Daft-punk",
    albums: [5],
}

eddieVanHalen = secondBand

function greetBand(band: Band) {
    if ( band.name ) {
        return `Hello! ${band.name} `
    }
    return "Hello!"
}

greetBand(secondBand)


