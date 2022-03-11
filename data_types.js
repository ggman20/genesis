let name = "Gökhan"
let surname = "Arman"
let isMarried = "Married"
let age = 33
let country = "Turkey"
let city = "Denizli"

let person = `I am ${name} ${surname}. I am ${age} and ${isMarried}.`

console.log(person)

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let language = 'JavaScript'
let job = 'teacher'

let fullName = firstName + ' ' + lastName

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)