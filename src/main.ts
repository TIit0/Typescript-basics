

function stringEcho(arg: string): string {
    return arg
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

greetBand(secondBand);


