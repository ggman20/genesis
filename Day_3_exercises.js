// BOOLEANS - OPERATORS - DATE
// LEVEL-1
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Gökhan'
    lastName = 'Arman'
    country = 'Türkiye'
    city = 'Denizli'
    age = 33
    isMarried = true
    year = 1989

console.log(typeof firstName)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)

//Check if type of '10' is equal to 10
console.log('10' === 10) //false

//Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10) //false

//Boolean value is either true or false.
// i.Write three JavaScript statement which provide truthy value.
console.log('10' == 10) //true
console.log(typeof 'GG' == typeof '10') //true
console.log(26 == (13*2)) //true
//ii.Write three JavaScript statement which provide falsy value.
console.log('10' === 10) //false
console.log(typeof 20 == typeof '10') //false
console.log(26 == (13*3)) //false

//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
/*
4 > 3    TRUE
4 >= 3   TRUE
4 < 3    FALSE
4 <= 3   FALSE
4 == 4   TRUE
4 === 4  TRUE
4 != 4   FALSE
4 !== 4  FALSE
4 != '4' FALSE
4 == '4'    TRUE
4 === '4'   FALSE
Find the length of python and jargon and make a falsy comparison statement.*/
console.log(4 > 3) //true
console.log(4 >= 3) //true
console.log(4 < 3 ) //false
console.log(4 <= 3) //false
console.log(4 == 4) //true
console.log(4 === 4) //true
console.log(4 != 4) //false
console.log(4 !== 4) //false
console.log(4 != '4') //false
console.log(4 == '4') //true
console.log(4 === '4') //false
console.log('python'.length != 'jargon'.length) //false

//Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
/*
4 > 3 && 10 < 12        TRUE
4 > 3 && 10 > 12        FALSE
4 > 3 || 10 < 12        TRUE
4 > 3 || 10 > 12        TRUE
!(4 > 3)                FALSE
!(4 < 3)                TRUE
!(false)                TRUE
!(4 > 3 && 10 < 12)        FALSE    
!(4 > 3 && 10 > 12)        TRUE
!(4 === '4')                TRUE
There is no 'on' in both dragon and python*/
console.log(4 > 3 && 10 < 12 ) //true
console.log(4 > 3 && 10 > 12) //false
console.log(4 > 3 || 10 < 12) //true
console.log(4 > 3 || 10 > 12) //true
console.log(!(4 > 3) ) //false
console.log(!(4 < 3)) //true
console.log(!(false)) //true
console.log(!(4 > 3 && 10 < 12)) //false
console.log(!(4 > 3 && 10 > 12)) //true
console.log(!(4 === '4') )  //true
let dragon = 'dragon'
let python = 'python'
console.log(dragon.includes('on') == python.includes('on')) //true

//Use the Date object to do the following activities
/*
What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.*/

const date = new Date()
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getTime())

//LEVEL-2
//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
/*let baseOfTriangle = prompt('Base of Triangle')
let heightOfTriangle = prompt('Height of Triangle')
let areaOfTriangle = (0.5 * baseOfTriangle * heightOfTriangle)
console.log(areaOfTriangle)

//Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let sideaOfTrianngle = prompt('a')
let sidebOfTrianngle = prompt('b')
let sidecOfTrianngle = prompt('c')
let perimeterOfTriangle = (parseInt(sideaOfTrianngle) + parseInt(sidebOfTrianngle) + parseInt(sidecOfTrianngle))
console.log(perimeterOfTriangle)

//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let sideaOfRectangle = prompt('a')
let sidebOfRectangle = prompt('b')
let perimeterOfRectangle = ((parseInt(sideaOfRectangle)*2) + (parseInt(sidebOfRectangle)*2))
let areaOfRectangle = (parseInt(sideaOfRectangle) * parseInt(sidebOfRectangle))
console.log(perimeterOfRectangle)
console.log(areaOfRectangle)

//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const pi = 3.14
let radius = prompt('radius')
let areaOfCircle = (pi * radius * radius)
let circumferenceOfCircle = (2 * pi * radius)
console.log(areaOfCircle)
console.log(circumferenceOfCircle)

//Calculate the slope, x-intercept and y-intercept of y = 2x -2



//Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2
let y1 = 2
let x2 = 6
let y2 = 10

let m = (y2-y1)/(x2-x1)
console.log('Slope', m)

//Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let xvalue = -3
let ydenklem = ((xvalue*xvalue) + (6*xvalue)+9)   
console.log(ydenklem)  //0

//Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = prompt('hours')
let perhour = prompt('per hour')
let payOfThePerson = parseInt(hours) * parseInt(perhour)
console.log(payOfThePerson)

 //If the length of your name is greater than 7 say, your name is long else say your name is short.
let isim = prompt('Name')
let isimLength = isim.length
isimLength > 7 ? console.log(`${isim} is ${isimLength} so it is greater than 7`) : console.log(`${isim} is ${isimLength} so it is not greater than 7`)

//Compare your first name length and your family name length and you should get this output.
let ilkIsim = prompt('First Name')
let soyisim = prompt('Family Name')
let ilkİsimLength = ilkIsim.length
let soyisimLength = soyisim.length

ilkİsimLength > soyisimLength ? console.log(`Your first name ${ilkIsim} is longer than your family name ${soyisim}`) 
: console.log(`Your first name ${ilkIsim} is not longer than your family name ${soyisim}`)

//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = prompt('My age')
let yourAge = prompt('Your Age')
let diffirence1 = myAge - yourAge
let difference2 = Math.abs(diffirence1)
myAge > yourAge ? console.log(`I am ${diffirence1} years older than you`) 
: console.log(`You are ${difference2} years older than me`)

//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let num1 = prompt('Yasinizi giriniz')
if (num1 >= 18) {
    console.log(`Yasiniz ${num1} olduğu için ehliyet alabilirsiniz`)
} else {
    console.log(`Yasiniz ${num1} olduğu için ehliyet alamazsiniz, yasal sinir en az 18 yaştir. O yüzden ${18 - num1} yıl daha beklemelisiniz`)
}

//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let age2 = prompt('Yaş')
let years2 = 100 - parseInt(age2)
let seconds2 = (years2 * 365 * 24 * 60 *60)
console.log(`You are ${age2} years old and if you can live 100 years, you have ${seconds2} seconds from this time`)*/

//Create a human readable time format using the Date time object
//i.YYYY-MM-DD HH:mm
let year3 = date.getFullYear()
let month3 = date.getMonth() + 1
let date3 = date.getDate()
let hour3 = date.getHours()
let minute3 = date.getMinutes()
console.log(`${year3}-${month3}-${date3} ${hour3}:${minute3}`)
//ii.DD-MM-YYYY HH:mm
console.log(`${date3}-${month3}-${year3} ${hour3}:${minute3}`)
//iii.DD/MM/YYYY HH:mm
console.log(`${date3}/${month3}/${year3} ${hour3}:${minute3}`)

//LEVEL-3
//Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
//i.YYYY-MM-DD HH:mm eg. 20120-01-02 07:05

month3 < 10 ? month3 = '0' + month3 : month3 = month3
console.log(month3)
date3 < 10 ? date3 = '0' + date3 : date3 = date3
console.log(date3)
hour3 < 10 ? hour3 = '0' + hour3 : hour3 = hour3
minute3 < 10 ? minute3 = '0' + minute3 : minute3 = minute3
console.log(`${year3}-${month3}-${date3} ${hour3}:${minute3}`)



