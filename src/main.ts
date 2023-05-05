/* generics good for when you don't know what data you will be working with*/

/*
function echo(arg: string): string {
    return arg;
}
*/

//const echo = (arg: string): string => arg

/* generic function example */
const echo = <T>(arg: T): T => arg

const isObj = <T>(arg: T) => {
    if (typeof arg === "object" && !Array.isArray(arg) && arg !== null) {
        return true;
    }

    return false;
}

console.log(isObj({}));

/*
function isTrue<T>(arg: T): {arg: T, is: boolean} {
    if ( Array.isArray(arg) && !arg.length) {
        return {arg, is: false}
    }

    if (isObj(arg) && Object.keys(arg as keyof T).length) {
        return { arg, is: false}
    }
    return {arg, is: !!arg}
}
*/


//Interface
interface BoolCheck<T> {
    value: T,
    is: boolean
}



/* same function but with interface */
function isTrue<T>(arg: T): BoolCheck<T> {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false }
    }

    if (isObj(arg) && Object.keys(arg as keyof T).length) {
        return { value: arg, is: false }
    }
    return { value: arg, is: !!arg }
}

interface HasID {
    id: number
}

const processUser = <T extends HasID>(user: T): T => {
    return user
}

console.log(processUser({ id: 2, name: "jack" }))
//console.log( processUser({ name: "jack"}))


/* generic in type variable */
const getUsersProperty =
    <T extends HasID, K extends keyof T> (users: T[], key: K): T[K][] => {
        return users.map(user => user[key])
    }

const listOfUsers = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
]


console.log( getUsersProperty(listOfUsers, "username"));
console.log( getUsersProperty(listOfUsers, "id"));

/* generic in a class */

class StateObject<T> {
    private data: T

    constructor(value: T) {
        this.data = value
    }

    get state(): T {
        return this.data
    }

    set state(value: T) {
        this.data = value
    }
}

/* typescript inefered type, thefore it stays consitent */
const store = new StateObject("coffee");
console.log(store.state)
store.state = "Jhon";
// store.state = 22

const maths = new StateObject<(number | boolean)>(19);
console.log(maths.state);
maths.state = 23;
// maths.state = "Wick";