//LEVEL-1
//Iterate 0 to 10 using for loop, do the same using while and do while loop
/*for(let i = 0; i < 10; i++){
    console.log("for", i)
}

let k = 0
while(k < 10){
    console.log("while", k)
    k++
}

j = 0
do{
    console.log("do while", j)
    j++
}while(j < 10)
*/

//Iterate 10 to 0 using for loop, do the same using while and do while loop
/*
for (let i = 10; i > 0; i--){
    console.log("for",i)
}

let j = 10
while(j > 0){
    console.log("while", j)
    j--
}

let k = 10
do{
    console.log("do while", k)
    k--
}while(k > 0)
*/

//Iterate 0 to n using for loop
/*
let n = prompt('n')
for (let i = 0 ; i <= n; i++){
    console.log(i)
}
let k = 0
while(k <= n){
    console.log(k)
    k++
}

let j = 0
do{
    console.log(j)
    j++
}while(j <= n)
*/

//Write a loop that makes the following pattern using console.log():
/*
for(let j = 0; j <= 7;j++){
    console.log(j * '#')
}
*/

//Use loop to print the following pattern:
/*
for(let i = 0;i <= 10;i++){
    result = i * i
    console.log(`${i} x ${i} = ${result}`)
}
*/

//Using loop print the following pattern
/*
for(i = 0;i <= 10;i++){
    let karesi = i * i
    let kupu = i * i * i
    console.log(i,karesi,kupu)
}
*/
//Use for loop to iterate from 0 to 100 and print only even numbers
/*for(let i = 0;i <= 100; i++){
    if (i%2 == 0){
        console.log(i)
    }else {
        continue
    }   
}
*/
//Use for loop to iterate from 0 to 100 and print only odd numbers
/*
for(let i = 0;i <= 100; i++){
    if (i%2 == 1){
        console.log(i)
    }else {
        continue
    }   
}
*/

//Use for loop to iterate from 0 to 100 and print only prime numbers
/*const number1 = 7
for(let i = 2;i < number1;i++){
    if(number1%i == 0){
        console.log('asal sayi degil')
    }
}
*/
/*
for(let num = 2;num<=100;num++){
    for (let i = 2;i <= num;i++){
        if(num%i == 0){
            console.log(num)
        }else {
            continue
        }
    }

}
*/
//Use for loop to iterate from 0 to 100 and print the sum of all numbers.
/*
let sum = 0
for (let i = 0;i<=100;i++){
    sum = sum + i
    console.log(`${i} ${sum}`) //5050
}
*/

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
/*
let sumOdd = 0
let sumEven = 0
for(let i = 0; i <= 100;i++){
    if(i%2 == 0){
        sumEven = sumEven + i
        console.log(`The sum of all evens from 0 to 100 is ${sumEven}`)
    }else {
        sumOdd = sumOdd + i
        console.log(`The sum of all odds from 0 to 100 is ${sumOdd}`)
    }
}
*/

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
/*
let sumOdd = 0
let sumEven = 0
for(let i = 0; i <= 100;i++){
    if(i%2 == 0){
        sumEven = sumEven + i
        console.log(`The sum of all evens from 0 to 100 is ${sumEven}`)
    }else {
        sumOdd = sumOdd + i
        console.log(`The sum of all odds from 0 to 100 is ${sumOdd}`)
    }
}
let arr = [sumEven,sumOdd]
console.log(arr)
*/

//Develop a small script which generate array of 5 random numbers
/*
let arr = []
for (let i = 0; i < 5;i++){
    arr.push(Math.floor(Math.random() * 10))
    if(i == 4){
        console.log("arr:", arr) //arr: (5) [5, 6, 9, 6, 4]
    }
    
}
*/

//Develop a small script which generate array of 5 random numbers and the numbers must be unique
/*
let arr = []
for (let i = 0; arr.length < 5;i++){
    let randomNum = Math.floor(Math.random() * 10) 
    if (arr.indexOf(randomNum) == -1){
        arr.push(randomNum)
    }
    console.log(arr)
}
*/

//15. Develop a small script which generate a six characters random id:
/*
let result = '';
let characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let charactersLength = characters.length;

for (let i = 0;i < 6;i++){
    randomNumber = Math.floor(Math.random() * charactersLength);
    result += characters.charAt(randomNumber);
}
console.log(result) //i6bfpr
*/

//LEVEL-2
//1. Develop a small script which generate any number of characters random id:
/*
let result = '';
let characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let charactersLength = characters.length;
let randomNum = Math.floor(Math.random() * charactersLength)
for (let i = 0;i < randomNum;i++){   
    randomNumber = Math.floor(Math.random() * charactersLength);
    result += characters.charAt(randomNumber);
}
console.log(result) //JTlrDVbmph8Wd6YiW9jWgixZ
*/

//2. Write a script which generates a random hexadecimal number.
/*
let result = '';
let hexadecimalChars = '0123456789abcdef'
let hexadecimalCharsLength = hexadecimalChars.length;
let randomNum = Math.floor(Math.random() * hexadecimalCharsLength)
for (let i = 0;i < randomNum;i++){   
    randomNumber = Math.floor(Math.random() * hexadecimalCharsLength);
    result += hexadecimalChars.charAt(randomNumber);
}
console.log(result) //35fd376e06
*/

//3. Write a script which generates a random rgb color number.
/*
for (let i = 0;i <= 2;i++){   
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    randomRGB = 'rgb(' + r + ',' + g + ',' + b + ')'
}
console.log(randomRGB) //rgb(25,76,1)
*/

//4. Using the above countries array, create the following new array.
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
/*
let countriesLength = countries.length
countriesUpper = []
for (let i = 0;i < countriesLength;i++){
    countriesUpper += countries[i].toLocaleUpperCase() + ','
    
}
console.log(countriesUpper)
console.log(typeof(countriesUpper))
let countriesArray = countriesUpper.split(',')
console.log(countriesArray)
countriesArray.pop()
console.log(countriesArray) //['ALBANİA', 'BOLİVİA', 'CANADA', 'DENMARK', 'ETHİOPİA', 'FİNLAND', 'GERMANY', 'HUNGARY', 'IRELAND', 'JAPAN', 'KENYA']
*/

//5. Using the above countries array, create an array for countries length.
/*
let countriesLength = countries.length
let countriesStringLength = ''
for(let i = 0;i < countriesLength;i++){
    countriesStringLength += countries[i].length + ','
}
console.log(countriesStringLength)
let countriesArrayLength = countriesStringLength.split(',')
countriesArrayLength.pop()
console.log(countriesArrayLength)
*/

//6. Use the countries array to create the following array of arrays:
let countriesLength = countries.length
const emptyArray = [[]]
const fullArray = []
    for (let i = 0;i < countriesLength;i++){        
        let item = countries[i]
        let itemLength = countries[i].length
        let itemFirstThree = countries[i].substring(0,3)
        let itemFirstThreeUpper = itemFirstThree.toUpperCase()
        emptyArray.push(countries[i], itemFirstThreeUpper, itemLength)
    }
    


    
console.log(emptyArray)
console.log(fullArray)





// 7. In above countries array, check if there is a country or countries containing the word 'land'.
// If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
/*
let countriesLength = countries.length
const landArray = []
const withoutlandArray = []
for(let i = 0;i < countriesLength;i++){
    let result = countries[i].includes('land')
    if(result == true){       
        landArray.push(countries[i])           
    }else {       
        withoutlandArray.push(countries[i])
    }
}
console.log(landArray)
console.log(withoutlandArray)
*/




  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']



/*
  for (let i = 0; i <= 10; i++){

      console.log("for", countries[i])
  }

let j= 0
while (j <= 10 ){
    console.log("while", countries[j])
    j++
}

let k = 0
do {
    console.log("do while", countries[k])
    k++
} while(k <= 10)
*/