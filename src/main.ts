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




// Pick let you pick properties to use
type AssignResult = Pick<Assignment, "studentID" | "grade" >;

const score: AssignResult = {
    studentID: "was",
    grade: 87
}


// Omit lets you Omit properties
type AssignPreview = Omit<Assignment, "verified" | "grade">;
const preview: AssignPreview = {
    studentID: "hey",
    title: "project"
}




/* Exclude and Extract */



// they do not work with interface, they work with union literal

// Excludes selected
type AdjustedGrade = Exclude<LetterGrades, "U">
// Extracts selected
type HighGrades = Extract<LetterGrades, "A" | "B">




/* Nonnullable */

type AllPossibleGrades = "Dave" | "John" | null | undefined;

type NamesOnly = NonNullable<AllPossibleGrades>


/* Return type */

//type newAssign = {title: string, points: number};

const createNewAssign = (title: string, points: number) => {
    return {title, points}
}

// aquires the type of the return of the function
type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("UtiliTypes rock", 100)

console.log(tsAssign);


/* Parameters */

// aquires the type of params, in this case a touple
type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Some things", 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs)

console.log(tsAssign2);


/* Awaited */
//  helps with ReturnType of a promise

/* 3:49:00 */