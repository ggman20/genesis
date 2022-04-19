/*
let gg = {
    name : 'Gökhan',
    surname: 'Arman',
    age : 33,
    greet(person) {
        console.log("Hello " + person.name + ' ' + person.surname
                    + '. My name is ' + this.name)
    }
}

let keklik = {
    name :'Aysenur',
    surname :'Arman',
    age : 26    
}

gg.greet(keklik)
*/

/////////////////////
class Person {
    constructor(name,age){
        console.log('I am created a new person and my name is',name, 'and my age is', age)
        this.name = name
        this.age = age
    }
    greet(person) {
        console.log("Hello " + person.name + '. My name is ' + this.name)
    }
    attend(meetup){
        this.meetup = meetup
    }
}

Meetup = class {
    constructor(name){
        this.name = name
    }
}

gg = new Person('Gökhan',33) //I am created a new person and my name is Gökhan and my age is 33
keklik = new Person('Aysenur', 26) //I am created a new person and my name is Aysenur and my age is 26

gg.greet(keklik) //Hello Aysenur. My name is Gökhan
keklik.greet(gg) //Hello Gökhan. My name is Aysenur

wtmb = new Meetup('Women Techmakers Berlin')

gg.attend(wtmb)


