/* Utility types */

interface Assignment {
    studentID: string,
    title: string,
    grade: number,
    verified?: boolean
}


/* Partial utility type */
const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    //only some partial properties
    return {...assign, ...propsToUpdate}
}

const assign1: Assignment = {
    studentID: "hi23",
    title: "final project",
    grade: 89,
}

console.log(updateAssignment(assign1, {title: "completed", grade:91}));

const assignGraded: Assignment = updateAssignment(assign1, {grade: 95});
console.log( assignGraded );


/* Required and Readonly */



// Required
const recordAssignment = (assign: Required<Assignment>): Assignment => {
//all properties required

return assign;
}

// wont work all properties are reuired
//recordAssignment(assignVerified)

// fix - now it has all of the properties
recordAssignment({...assignGraded, verified: true})





//Readonly properties cannot be overwritten
const assignVerified: Readonly<Assignment> = {...assignGraded, verified: true}

// assignVerified.grade = 98;


/* Record Type */

const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
}


// string literal
type Students = "Sara" | "Kelly"
type LetterGrades= "A" | "B" | "C" | "D" | "U"


// Record type
const finalgrades: Record<Students, LetterGrades> = {
    Sara: "A",
    Kelly: "A"
}

interface Grades {
    assign1: number;
    assign2: number;
}

const gradeData: Record<Students, Grades> = {
    Sara: {assign1: 80, assign2: 85},
    Kelly: {assign1: 82, assign2: 83}
}


/* Pick and Omit */
