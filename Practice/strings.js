let pc = "Monster"
console.log(pc)
//SON INDEX
let lastIndex = pc.length - 1 //6
console.log(pc[lastIndex]) //r
//UPPERCASE
console.log(pc.toUpperCase()) //MONSTER
//LOWERCASE
console.log(pc.toLowerCase()) //monster
//substr
console.log(pc.substr(2,4)) //nste 
//substring
console.log(pc.substring(1,4)) // ons
//split
console.log(pc.split('')) //['M', 'o', 'n', 's', 't', 'e', 'r']
let lesson = '30 Days of Javascript'
console.log(lesson.split(' ')) //["30", "Days", "of", "Javascript"]
//for reverse a string
console.log(pc.split('').reverse().join('')) 
// For Space
let pcspace = " Monster "
console.log(pcspace.trim()) // Monster
//includes
console.log(lesson.includes('Days')) // True
console.log(lesson.includes('King')) // False
//replace
console.log(lesson.replace('Javascript', 'Python')) // 30 Days of Python
let nameAndLastName = 'Gökhan Arman'
console.log(nameAndLastName.replace('Gök', 'Sky')) // Skyhan Arman
//chartAt
console.log(pc.charAt(0)) //M
console.log(pc.charAt(1)) //o
//charCodeAt --> ASCII No döndürür
console.log(pc.charCodeAt(0)) //77 M için ASCII no
//indexOf
console.log(pc.indexOf('M')) //0
console.log(pc.indexOf('o')) //1
console.log(pc.indexOf('K')) //-1 --> Olmadığı için -1 döndürdü
//lastIndexOf
console.log(pc.lastIndexOf('r')) //6
//concat
console.log(pc.concat(', ','How ','should ', 'I ', 'feel', '?')) //Monster, How should I feel?
//startsWith
console.log(lesson.startsWith('30')) //true
console.log(lesson.startsWith('Days')) //false
console.log(pc.startsWith('Mon')) //true
//endsWith
console.log(lesson.endsWith('30')) //false
console.log(lesson.endsWith('script')) //true
//search
console.log(lesson.search('Days')) //3
console.log(lesson.search('javascript')) //-1
console.log(lesson.search(/javascript/gi)) //11 --> çünkü g:global ve i:case insensitive ile upper,lowercase aranmıyor.Bu bir düzenli ifadedir.
//match
let sentences = 'I Love JavaScript. If you do not love JavaScript what else can you love.'
console.log(sentences.match(/love/)) //1 tane love buldu.Çünkü global olarak bütün textte aramadı
console.log(sentences.match(/love/g)) // 2 tane buldu
console.log(sentences.match(/love/gi)) // 3 tane buldu
//regEx
let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/ // \d:sayıları temsil ediyor. +:1 veya daha fazla
console.log(txt.match(regEx))
console.log(txt.match(/\d+/g)) 
//repeat
console.log(pc.repeat(10)) //MonsterMonsterMonsterMonsterMonsterMonsterMonsterMonsterMonsterMonster

