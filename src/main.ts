
/* Enums */

/* unlike most typescript features, Enums are not a type-level addition to Javascript but something added to the language and the run time */

enum Grade {
    u = 1,
    d,
    c,
    b,
    a,
}

console.log(Grade.a)

// type aliases


type stringOrNumber = ( string | number );

type StringOrNumberArray = ( string | number )[];

type Guitarist = {
    name?: string,
    active: boolean,
    albums: StringOrNumberArray,
}

let vanHalen: Guitarist = {
    active: false,
    name: "eddie",
    albums: [1,"hi"],
}

// Literal types - * note the : *
let myName: "tito"
let username: "tito" | "jhon" | "jack";
username = "jack"



// Functions


const add = ( a: number, b: number ):string => {
    return (a + b).toString()
}


const logMsg = (message: any) => {
    console.log(message)
}

logMsg(vanHalen);


function subtract(c: number, d:number ) {
    return c - d
}

console.log(subtract(3,4))


// Function types
type MathFunction = (a: number, b: number ) => number;

// Function interface
interface MathFunction2 {
    (a: number, b: number ): number
}

let multiply: MathFunction = (c, d) => {
    return c * d;
}

console.log(multiply(2, 5));

// Optional parameters

/* optional parameters need to be last */
function addAll(a: number, b: number, c?: number): number {
    if ( typeof c !== "undefined" ) {
        return a + b + c
    } 
        return a + b
}

/* default parameter */
function sumAll(a: number = 2, b: number, c: number = 2): number {
        return a + b + c
}

console.log(addAll(2,7,0))
console.log(addAll(2,7,5))
console.log(sumAll(3,7))
console.log(sumAll(undefined, 7)) /* if we want to omit a parameter to use default we need to explicitly set it as undfined */


// Rest parameters
/* remember rest creates an arr of parameters */
function total(num1:number = 2, ...nums: number[]) {
    return num1 + nums.reduce((prev, curr) => {
        return prev + curr
    })
}

console.log(total(undefined, 2,3,4,5))

/* never type */
/* never is used for errors */
const createError = (error: string) => {
    throw new Error(error)
}

/* never also alerts of infinite loop if cunction return never */
const infiniteLoop = () => {
    let i: number = 0;
    while (true) {
        i++
        if (i > 100 ) break
    }
}
/* custom type guard */
const isNumber = (value: any): boolean => {
    return (typeof value === "number") ? true : false;
}

/* uses for never */
const numberOrString = (value: number | string): string => {
    if (typeof value === "string") return "string";
    if (isNumber(value)) return "number";
    return createError("this should never happen")
}

console.log(numberOrString(""))
