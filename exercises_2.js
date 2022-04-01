//LEVEL-1

//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript'

//Print the string on the browser console using console.log()
console.log('This is a string')

//Print the length of the string on the browser console using console.log()
let isim = 'Gökhan'
console.log(length.name)

//Change all the string characters to capital letters using toUpperCase() method
console.log(isim.toUpperCase())

//Change all the string characters to lowercase letters using toLowerCase() method
console.log(isim.toLowerCase())

//Cut (slice) out the first word of the string using substr() or substring() method
let esya = 'HesapMakinesi'
console.log(esya.substr(0,5)) //Hesap
console.log(esya.substring(0,5)) //Hesap
console.log(esya.substr(5,8)) //Makinesi
console.log(esya.substring(5)) //Makinesi

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substring(3)) //Days Of JavaScript

//Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script')) //true

//Split the string into an array using split() method
console.log(esya.split('')) // ['H', 'e', 's', 'a', 'p', 'M', 'a', 'k', 'i', 'n', 'e', 's', 'i']

//Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' ')) //['30', 'Days', 'Of', 'JavaScript']

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript','Python')) //30 Days Of Python

//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15)) //S

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('J')) //51

//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('3')) //0

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('t')) //20

/*Use indexOf to find the position of the first occurrence of the word because in the following sentence:
'You cannot end a sentence with because because because is a conjunction' */
let becauseSentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(becauseSentence.indexOf('because')) //31

/*Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:
'You cannot end a sentence with because because because is a conjunction'*/
console.log(becauseSentence.lastIndexOf('because')) //47

/*Use search to find the position of the first occurrence of the word because in the following sentence:
'You cannot end a sentence with because because because is a conjunction'*/
console.log(becauseSentence.search('because')) //31

//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let challangeWithSpace = ' 30 Days Of JavaScript '
console.log(challangeWithSpace.trim())

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30 Day')) //true

//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('Script')) //true

//Use match() method to find all the a’s in 30 Days Of JavaScript
const a = /a/gi
console.log(challenge.match(a)) //(3) ['a', 'a', 'a']

//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let halfChalllange = '30 Days of'
let secondHalfChallange = 'JavaScript'
console.log(halfChalllange.concat(' ', secondHalfChallange)) //30 Days of JavaScript

//Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2)) //30 Days Of JavaScript30 Days Of JavaScript

//LEVEL-2
//Using console.log() print out the following statement:
//The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
let longSentence = 'The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.'
console.log(longSentence)

//Using console.log() print out the following quote by Mother Teresa:
//"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
let longSentence2 = 'Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.'
console.log(longSentence2)

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log('10' === 10) //false

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat('9.8') == 10) //false

//Check if 'on' is found in both python and jargon
let python = 'python'
let jargon = 'jargon'

console.log(python.includes('on')) //true
console.log(jargon.includes('on')) //true
console.log('python'.includes('on')) //true
console.log('jargon'.includes('on')) //true

//I hope this course is not full of jargon. Check if jargon is in the sentence.
let hopeSentence = 'I hope this course is not full of jargon.'
console.log(hopeSentence.includes('jargon')) //true

//Generate a random number between 0 and 100 inclusively.
let numberRandom = Math.random()
console.log(numberRandom * 100)

//Generate a random number between 50 and 100 inclusively.
console.log((numberRandom * 50) + 50)

//Generate a random number between 0 and 255 inclusively.
console.log(numberRandom * 255)

//Access the 'JavaScript' string characters using a random number.


//Use console.log() and escape characters to print the following pattern.
let intNumberRandom = parseInt(numberRandom * 100)
console.log(intNumberRandom, 1, (intNumberRandom * intNumberRandom), (intNumberRandom * intNumberRandom * intNumberRandom))

//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let becauseFirstIndex = becauseSentence.indexOf('because')
let becauselength = 'because because because'.length

console.log(becauseSentence.substr(becauseFirstIndex, becauselength))

//LEVEL-3
// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let loveSentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
const love = /love/gi
console.log(loveSentence.match(love))

//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const because = /because/gi
console.log(becauseSentence.match(because))

//Clean the following text and find the most frequent word (hint, use replace and regular expressions).
let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let char1 = /[^\w\s]/g
console.log(sentence.replace(char1, ''))

//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let maas = 5000
let ikramiye = 10000
let kurs = 15000
console.log(`He earns ${maas} euro from salary per month, ${ikramiye} euro annual bonus, ${kurs} euro online courses per month.`)
let totalgain = maas + ikramiye + kurs
console.log('total earn:', totalgain)