alert('Sitenin üstüne çikan uyari mesajidir')

let sayi = prompt('Bir sayi girin', '7')
console.log(sayi)

const agree = confirm('Silmek istediğine emin misin? ')
console.log(agree) // result will be true or false based on what you click on the dialog box

let isDelete = confirm('Silmek istediğine emin misin? ')

console.log(isDelete ? 'Silme işlemi başarili' : 'Silme işlemi iptal edildi')

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
    dayNumber = date.getDay()

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

let humanReadableDate = '${day}, months[month], year, hour, minute, second)'  

