let myInfo = ['Gökhan', 33, 1989, 'Arman', {country: 'TURKEY',city: 'DENIZLI',}]
console.log(myInfo)
console.log(myInfo.length)

let firstIndexMyInfo = myInfo[0]
console.log(firstIndexMyInfo)

let lastIndex2 = myInfo.length -1
let lastIndexOfMyInfo = myInfo[lastIndex2]
console.log(lastIndexOfMyInfo)

myInfo[1] = 34
myInfo[0] ='GG'
console.log(myInfo) 

const eightEmptyValues = Array(8) // it creates eight empty values
console.log(eightEmptyValues) // [empty x 8]
const fourEmptyValues = [,,,,]
console.log(fourEmptyValues) //[empty × 4]

const eightXvalues = Array(8).fill('-') // it creates eight element values filled with 'X'
console.log(eightXvalues)

const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)
console.log(thirdList) // [1, 2, 3, 4, 5, 6]
const fourthList = firstList.concat(secondList, [7,8,9], 10, 11)
console.log(fourthList) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

console.log(myInfo.toString())

const names2 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
let names2Join = names2.join('-')
console.log(names2Join)
console.log(typeof names2Join)

console.log(names2.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names2.join('')) //AsabenehMathiasEliasBrook
console.log(names2.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names2.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names2.join(' # ')) //Asabeneh # Mathias # Elias # Brook



console.log(names2.splice(1, 2))

let fruits2 = ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi']

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"]

// At position 2, remove 2 items: 
console.log(fruits.splice(1, 2))

let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
console.log(myFish)
myFish.splice(3, 1, 'GG','gg')
console.log(myFish)
