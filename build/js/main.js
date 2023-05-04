"use strict";
// Index Signaures
/* good for dynamically acessing stuff in objects */
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
const todaysTransactions = {
    pizza: -10,
    books: -5,
    job: 50
};
console.log(todaysTransactions.pizza);
let prop = "pizza";
//console.log(todaysTransactions[prop])
function todaysNet(transactions) {
    let total = 0;
    for (let transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
}
console.log(todaysNet(todaysTransactions));
const student = {
    name: "Tim",
    GPA: 1000,
    classes: [1, 23, 4],
    //test: 4
};
//console.log( student.test)
/*
for (const key in student) {
    console.log(`${key}: ${student[key]}`)
}
*/
// alternative if you can't add a index signature, use assertion
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
/* if you don't know the object structure or data */
Object.keys(student).map(key => {
    console.log(student[key]);
});
/* Alternative, declare in parameters */
function logStudentKey(student, key) {
    console.log(`Student ${key}: ${student[key]}`);
}
logStudentKey(student, "name");
