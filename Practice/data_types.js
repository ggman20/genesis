let name = "Gökhan"
let surname = "Arman"
let isMarried = "Married"
let age = 33
let country = "Germany"
let city = "Berlin"

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
//Casting Data Type
let num = '10'
let numInt = parseInt(num)
console.log(numInt)
let numInt2 = Number(num)
console.log(numInt2)
console.log(+'10')
let numFloatStr ='9.81'
let numFloat = parseFloat(numFloatStr)
console.log(numFloat)
let numFloat2 = Number(numFloatStr)
console.log(numFloat2)
console.log(+'9.81')
