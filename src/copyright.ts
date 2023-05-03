

/* first example :

class Coder {
    name: string
    music: string
    age: number
    lang: string

    constructor( name: string, music: string, age: number, lang: string ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}

*/

/* second example */

class Coder {

    constructor(
        readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = "Typescript"
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }

    public getAge() {
        return `Hi! I'm ${this.age} years old`
    }
}

const Tito = new Coder("Tito", "Chill", 29,)
console.log(Tito.getAge());
//console.log(Tito.age)
//console.log(Tito.lang)

class WebDev extends Coder {

    constructor(
        public computer: string,
        name: string,
        music: string, 
        age: number) {
            super(name, music, age);
            this.computer = computer
    }

    public getLang() {
        return `I write ${this.lang}`
    }
}

const Kida = new WebDev("mac", "kida", "rock", 18);
console.log(Kida.getLang())
//console.log(Kida.age)
//console.log(Kida.lang)



/* Class Interface */


interface Musician {
    name: string;
    instrument: string;
    play(action: string): string;
}

class Guitarist implements Musician {
    
    constructor(public name: string, public instrument: string) {
        this.name = name;
        this.instrument = instrument;
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Page = new Guitarist("Jimmy", "Guitar");
console.log( Page.play("strums"))


/* Static member */




/*
Static means it does not apply to any instantiation of the class, it applies to the class directly
*/
class Peeps {
    static count: number = 0;

    static getCount(): number {
        return Peeps.count
    }

    public id: number;

    constructor( public name: string) {
        this.name = name;
        this.id = ++Peeps.count;
    }
}

const Jack = new Peeps("Jack");
const Steve = new Peeps("Steve");


console.log(Peeps.count)
console.log(Jack.id)