"use strict";
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
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hi! I'm ${this.age} years old`;
    }
}
const Tito = new Coder("Tito", "Chill", 29);
console.log(Tito.getAge());
//console.log(Tito.age)
//console.log(Tito.lang)
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Kida = new WebDev("mac", "kida", "rock", 18);
console.log(Kida.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("Jimmy", "Guitar");
console.log(Page.play("strums"));
/* Static member */
/*
Static means it does not apply to any instantiation of the class, it applies to the class directly
*/
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const Jack = new Peeps("Jack");
const Steve = new Peeps("Steve");
console.log(Peeps.count);
console.log(Jack.id);
