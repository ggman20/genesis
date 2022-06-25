
//Callback
const fonksiyon = number => number ** 2

function cube(cb, number){
    return cb(number) * number
}

console.log(cube(fonksiyon, 4))


//High Order Functions
const a = s1 => {
    const b = s2 => {
        const c = s3 => {
            return s1 + s2 + s3
        }
        return c
    }
    return b
}

console.log(a(5)(10)(25))

//forEach
const numbers = [1,3,5,7,9]
let total = 0
numbers.forEach(function(number) {
    total += number
})

console.log(total)

//setInterval
function sayHello() {
    console.log('Hello')
  }
  // setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s

//setTimeout
function sayHello() {
    console.log('Hello')
  }
setTimeout(sayHello, 1000) // it prints hello in every second, 1000ms is 1s


const interval = setInterval(sayHello,1000)
//clearInterval
const timeout = setTimeout(() => {
    clearInterval(interval)
    console.log("interval is cancelled")

}, 5000)

setTimeout(() => {
    clearTimeout(timeout)
    console.log('timeout is cancelled')
},8000)

let users = [
    {
        id: 3,
        name:'Gökhan',
        age: 33,
        gender: 1
    },
    {
        id: 1,
        name:'Ayşenur',
        age:26,
        gender: 2
    },
    {
        id: 2,
        name:'Hakan',
        age:28,
        gender: 1
    }
]
/*
users = users.map(function(user){
    if(user.id == 2){
        user.name = 'Keklik'
    }
    return user
})
*/
console.log(users)

let numbers2 = [1,3,5,7,9]

console.log(
    numbers2.filter(number => number > 3 && number < 9)
)

const women = users.filter(user => user.gender == 2)
const men = users.filter(user => user.gender == 1)

console.log('WOMEN', women)
console.log('MEN', men)

console.log('SOME', users.some(user => user.gender == 1))
console.log('EVERY', users.every(user => user.gender == 1))

console.log('find', numbers2.find(number => number > 3))

console.log('find user', users.find(user => user.id == 2))
console.log('findindex user', users.findIndex(user => user.id == 2))

const names = ['Gökhan', 'Ayşenur', 'Hakan', 'Volkan']

names.sort()
console.log(names)

const numaralar = [1,7,10,4,20,8,30,61,2]
numaralar.sort((a,b) => a - b)
console.log(numaralar)

//console.log('ID SORT', users.sort((a,b) => a.id - b.id))

console.log('NAME SORT', users.sort((a,b) => a.name.localeCompare(b.name)))