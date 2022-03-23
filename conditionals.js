let num1 = prompt('Yasinizi giriniz')

if (num1 >= 18) {
    console.log(`Yasiniz ${num1} olduğu için ehliyet alabilirsiniz`)
} else {
    console.log(`Yasiniz ${num1} olduğu için ehliyet alamazsiniz, yasal sinir en az 18 yaştir. O yüzden ${18 - num1} yıl daha beklemelisiniz`)
}

let myAge1 = prompt('Benim yasim')
let yourAge1 = prompt('Senin yasin')
let differenceAge1 = myAge1 - yourAge1
let differenceAgeAbsolut = Math.abs(differenceAge1)

if (differenceAge1 < 0) {
    console.log(`Senin yasin, benim yasimdan ${differenceAgeAbsolut} kadar büyüktür.`)
} else if (differenceAge1 == 0) {
    console.log(`Senin yasinla benim yasim esit ve yasimiz ${myAge1} kadardır`)
} else {
    console.log(`Senin yasin, benim yasimdan ${differenceAgeAbsolut} kadar küçüktür.`)
}


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