

// Index Signaures
/* good for dynamically acessing stuff in objects */



// Interface with index signature
interface TransactionObj {

    // KEY            Value
    [index: string]: number

    // can also have union types
    // [index: string ]: number | string
}


/*  normal interface

interface TransactionObj {
    pizza: number;
    books: number;
    job: number;
}
*/

/*  index signature and required props

interface TransactionObj {
    [index: string] : number;

    pizza: number;
    books: number;
    job: number;
}
*/

const todaysTransactions: TransactionObj = {
    pizza: -10,
    books: -5,
    job: 50
}

console.log(todaysTransactions.pizza);


let prop: string = "pizza";
//console.log(todaysTransactions[prop])


function todaysNet(transactions: TransactionObj): number {
    let total = 0;

    for (let transaction in transactions) {
        total += transactions[transaction]
    }

    return total;
}

console.log(todaysNet(todaysTransactions));



//////////////////


interface Student {
    /* uncomment index signature to be able to use for loop */
    
    //[key: string]: string | number | number[] | undefined;
    name: string;
    GPA: number;
    classes?: number[]
}

const student: Student = {
    name: "Tim",
    GPA: 1000,
    classes: [1,23,4],
    //test: 4
}

//console.log( student.test)


/*
for (const key in student) {
    console.log(`${key}: ${student[key]}`)
}
*/

// alternative if you can't add a index signature, use assertion
for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`)
}


/* if you don't know the object structure or data */
Object.keys(student).map( key => {
    console.log(student[key as keyof typeof student])
});


/* Alternative, declare in parameters */
function logStudentKey(student: Student, key: keyof Student) {
    console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(student, "name");

