/*
alert('Sitenin üstüne çikan uyari mesajidir')

let sayi = prompt('Bir sayi girin', '7')
console.log(sayi)

const agree = confirm('Silmek istediğine emin misin? ')
console.log(agree) // result will be true or false based on what you click on the dialog box

let isDelete = confirm('Silmek istediğine emin misin? ')

console.log(isDelete ? 'Silme işlemi başarili' : 'Silme işlemi iptal edildi')
*/

const now = new Date()
console.log(now)

console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())
console.log(now.getDay())

const allSeconds = Date.now()
const allTimeSeconds = new Date().getTime()
console.log(allSeconds == allTimeSeconds)

const date = new Date()

let year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    dayName = date.getDay()

let months = [
    'OCAK',
    'ŞUBAT',
    'MART',
    'NİSAN',
    'MAYIS',
    'HAZİRAN',
    'TEMMUZ',
    'AĞUSTOS',
    'EYLÜL',
    'EKİM',
    'KASIM',
    'ARALIK'
            ]

let days = [
    'PAZAR',
    'PAZARTESİ',
    'SALI',
    'ÇARŞAMBA',
    'PERŞEMBE',
    'CUMA',
    'CUMARTESİ'
    ]

let humanReadableDate = `${day} ${months[month]} ${year}, ${days[dayName]}, ${hour}:${minute}:${second}`

console.log(humanReadableDate)

console.log(parseInt('9.8'))

console.log(4 == '4')
console.log(4 === '4')
console.log(!(4 > 3 && 10 < 12))

let base = 20
let height = 10

area = (0.5 * base * height)

console.log(area)
x1 = 2
y1 = 2
x2 = 6
y2 = 10 
let m = (y2-y1) / (x2-x1)
console.log(m)

let firsttName = 'Gokhan'
let lenOfFirstName = firsttName.length
console.log(lenOfFirstName)

lenOfFirstName > 7 ? console.log('İsmin uzunluğu 7den büyüktür.') : console.log('İsmin uzunluğu 7den büyük değildir.')

let myAge = 25
let yourAge = 50

let differenceAge = (myAge - yourAge)
console.log(`Benim yaşim, senin yaşindan ${differenceAge}den daha büyüktür`)
