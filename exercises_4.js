//LEVEL-1
//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' 
//but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
/*
let num1 = prompt('Yasinizi giriniz')

if (num1 >= 18) {
    console.log(`You are ${num1}. You are old enough to drive`)
} else {
    console.log(`Yasiniz ${num1} olduğu için ehliyet alamazsiniz, yasal sinir en az 18 yaştir. O yüzden ${18 - num1} yil daha beklemelisiniz`)
}*/

//Compare the values of myAge and yourAge using if … else. 
//Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
/*
let myAge1 = prompt('Benim yasim')
let yourAge1 = prompt('Senin yasin')
let differenceAge1 = myAge1 - yourAge1
let differenceAgeAbsolut = Math.abs(differenceAge1)

if (differenceAge1 < 0) {
    console.log(`Senin yasin, benim yasimdan ${differenceAgeAbsolut} kadar büyüktür.`)
} else if (differenceAge1 == 0) {
    console.log(`Senin yasinla benim yasim esit ve yasimiz ${myAge1} kadardir`)
} else {
    console.log(`Senin yasin, benim yasimdan ${differenceAgeAbsolut} kadar küçüktür.`)
}*/

//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
let a = 5
let b = 6
if ((a - b) < 0) {
    console.log('b is greater than a')
}else if ((a - b) == 0){
    console.log('a and b are equal')
}else {
    console.log('a is greater than b')
}
console.log(3 % 3) // Modulus - finding remainder
//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let c = prompt('Sayi')
if (c % 2 == 0) {
    console.log(`${c} Çift sayidir.`)
}else {
    console.log(`${c} Tek sayidir.`)
}

//LEVEL-2
//Write a code which can give grades to students according to theirs scores
let studentNote = prompt('Ogrenci notu')

if (studentNote >= 80) {
    console.log(`Ogrenci notu: ${studentNote}. Harf notu: A`)
} else if (studentNote <= 79 && studentNote >= 70) {
    console.log(`Ogrenci notu: ${studentNote}. Harf notu: B`)
} else if (studentNote <= 69 && studentNote >= 60) {
    console.log(`Ogrenci notu: ${studentNote}. Harf notu: C`)
} else if (studentNote <= 59 && studentNote >= 50) {
    console.log(`Ogrenci notu: ${studentNote}. Harf notu: D`)
} else {
    console.log(`Ogrenci notu: ${studentNote}. Harf notu: F`)
}

//Check if the season is Autumn, Winter, Spring or Summer. If the user input is
//September, October or November, the season is Autumn.
//December, January or February, the season is Winter.
//March, April or May, the season is Spring
//June, July or August, the season is Summer

let seasons = [
    'AUTUMN',
    'WINTER',
    'SPRING',
    'SUMMER'
] 

const date1 = new Date()

let month1 = date1.getMonth() // MART AYI 2. index döndürdü

if (month1 == 8 || 9 || 10) {
    console.log(`The season is ${seasons[0]}.`)
} else if (month1 == 11 || 0 || 1) {
    console.log(`The season is ${seasons[1]}.`)
} else if (month1 == 2 || 3 || 4) {
    console.log(`The season is ${seasons[2]}.`)
} else if (month1 == 5 || 6 || 7) {
    console.log(`The season is ${seasons[3]}.`)
}

//Check if a day is weekend day or a working day. Your script will take day as an input.
const date = new Date()
let dayNumber = date.getDay()
let days = [
    'SUNDAY',
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY'
]
console.log(dayNumber)
if (dayNumber == 0) {
    console.log(`${days[dayNumber]} is weekend.`)
} else if (dayNumber == 6) {
        console.log(`${days[dayNumber]} is weekend.`)
}else {
    console.log(`${days[dayNumber]} is working day.`)
}