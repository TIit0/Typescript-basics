"use strict";
/* Utility types */
/* Partial utility type */
const updateAssignment = (assign, propsToUpdate) => {
    //only some partial properties
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentID: "hi23",
    title: "final project",
    grade: 89,
};
console.log(updateAssignment(assign1, { title: "completed", grade: 91 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
console.log(assignGraded);
/* Required and Readonly */
// Required
const recordAssignment = (assign) => {
    //all properties required
    return assign;
};
// wont work all properties are reuired
//recordAssignment(assignVerified)
// fix - now it has all of the properties
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
//Readonly properties cannot be overwritten
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// assignVerified.grade = 98;
/* Record Type */
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
// Record type
const finalgrades = {
    Sara: "A",
    Kelly: "A"
};
const gradeData = {
    Sara: { assign1: 80, assign2: 85 },
    Kelly: { assign1: 82, assign2: 83 }
};
/* Pick and Omit */
