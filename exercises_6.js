//LEVEL-1
// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
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

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop
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

// 4. Write a loop that makes the following pattern using console.log():
/*
for(let j = 0; j <= 7;j++){
    console.log(j * '#')
}
*/

// 5. Use loop to print the following pattern:
/*
for(let i = 0;i <= 10;i++){
    result = i * i
    console.log(`${i} x ${i} = ${result}`)
}
*/

// 6. Using loop print the following pattern
/*
for(i = 0;i <= 10;i++){
    let karesi = i * i
    let kupu = i * i * i
    console.log(i,karesi,kupu)
}
*/
// 7. Use for loop to iterate from 0 to 100 and print only even numbers
/*for(let i = 0;i <= 100; i++){
    if (i%2 == 0){
        console.log(i)
    }else {
        continue
    }   
}
*/
// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
/*
for(let i = 0;i <= 100; i++){
    if (i%2 == 1){
        console.log(i)
    }else {
        continue
    }   
}
*/

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers

    




// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
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

// 15. Develop a small script which generate a six characters random id:
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
// 1. Develop a small script which generate any number of characters random id:
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

// 2. Write a script which generates a random hexadecimal number.
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

// 3. Write a script which generates a random rgb color number.
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
    'Kenya',
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
let countriesStringLength = []
for(let i = 0;i < countriesLength;i++){
    countriesStringLength.push(countries[i].length)
}
console.log(countriesStringLength)

*/

//6. Use the countries array to create the following array of arrays:
/*
let countriesLength = countries.length
const emptyArray = []
    for (let i = 0;i < countriesLength;i++){        
        let item = countries[i]
        let itemLength = countries[i].length
        let itemFirstThree = countries[i].substring(0,3)
        let itemFirstThreeUpper = itemFirstThree.toUpperCase()
        emptyArray.push([countries[i], itemFirstThreeUpper, itemLength])
    }
console.log(emptyArray)
*/

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
console.log('All these countries are without land', withoutlandArray)
*/

// 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array.
// If there is no country containing the word 'ai', print 'These are countries ends without ia'.
/*
let countriesLength = countries.length
const countriesIA = []
const countriesNoIA = []
for(let i = 0;i < countriesLength; i++){
    let result = countries[i].includes('ia')
    if(result == true){
        countriesIA.push(countries[i])
        
    }else {
        countriesNoIA.push(countries[i])
        
    }
}
console.log(countriesIA)
console.log(countriesNoIA)
if(countriesNoIA.length == 0){
    console.log('These are countries ends without ia')
}
*/

// 9. Using the above countries array, find the country containing the biggest number of characters.
/*
let countriesLength = countries.length
const countriesLengthArray = []
for(let i = 0;i < countriesLength;i++){
    countriesLengthArray.push(countries[i].length)
}
let countriesMinIndex = Math.min.apply(null, countriesLengthArray)
let countriesMaxIndex = Math.max.apply(null, countriesLengthArray)
let result = countriesLengthArray.indexOf(countriesMaxIndex)
let countriesMax = countries[result]
console.log(countriesMax) // Ethiopia
*/

// 10. Using the above countries array, find the country containing only 5 characters.
/*
let countriesLength = countries.length
const countriesLengthArray = []
const countriesIncludes5 = []
for(let i = 0;i < countriesLength;i++){
    countriesLengthArray.push(countries[i].length)
    if(countriesLengthArray[i] == 5){
       countriesIncludes5.push(countries[i])
    }
}
console.log(countriesIncludes5)
*/

// 11. Find the longest word in the webTechs array
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
let webTechsLength = webTechs.length
let webTechsLengthArray = []
for(let i = 0;i < webTechsLength;i++){
    webTechsLengthArray.push(webTechs[i].length)
}
console.log(webTechsLengthArray)
let webTechsMaxLength = Math.max.apply(null, webTechsLengthArray)
let webTechsMaxItem = []
for(let j = 0;j<webTechsLength;j++){
    if(webTechsLengthArray[j] == webTechsMaxLength){
        webTechsMaxItem.push(webTechs[j])
        
    }
}

console.log(webTechsMaxItem)
console.log(webTechsMaxItem.toString())
*/

// 12. Use the webTechs array to create the following array of arrays:
/*
let webTechsLength = webTechs.length
let arr = []
for(let i = 0;i < webTechsLength;i++){
    arr.push([webTechs[i], webTechs[i].length])
}
console.log(arr)
*/

// 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
/*

let webTechsLength = webTechs.length
const newArr = []
for (let i = 0;i < webTechsLength;i++){
    for(j = 0;j < mernStack.length;j++){
        //console.log(webTechs[i],mernStack[j])
        if(webTechs[i].includes(mernStack[j]) == true){
            newArr.push(webTechs[i])
        }
    }
}
console.log(newArr)

for(let k = 0; k < newArr.length; k++){
    console.log(newArr[k].concat(' MERN'))
}
*/

// 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
/*
for(let i = 0; i< webTechsLength; i++){
    console.log(webTechs[i])
}
*/

//15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
/*
const fruit = ['banana', 'orange', 'mango', 'lemon']
let n = fruit.length-1
for(let i=0; i<=n/2; i++) {
    let temp = fruit[i]
    fruit[i] = fruit[n-i]
    fruit[n-i] = temp
}
console.log(fruit)
*/
//16. Print all the elements of array as shown below.
/*
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

for(let i = 0;i < fullStack.length;i++){
    for(let j = 0;j < fullStack[i].length;j++){
        console.log(fullStack[i][j])
    }  
}
*/
const countries2 = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]
//LEVEL-3
// 1. Copy countries array(Avoid mutation)
/*
console.log(countries)
let countriesCopy = []
for(let i = 0; i < countries.length;i++){
    countriesCopy[i] = countries[i]
}
console.log(countriesCopy)
*/

// 2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
/*
let webTechsCopy = []
for(let i = 0;i < webTechs.length;i++){
    webTechsCopy[i] = webTechs[i]
}
webTechsCopy.sort()
console.log(webTechsCopy) //['CSS', 'HTML', 'JavaScript', 'MongoDB', 'Node', 'React', 'Redux']
console.log(webTechs) // ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']
*/

// 3. Sort the webTechs array and mernStack array
/*
let mernStackCopy = []
for(let i = 0; i < mernStack.length;i++){
    mernStackCopy[i] = mernStack[i]
}
mernStackCopy.sort()
console.log(mernStackCopy) // ['Express', 'MongoDB', 'Node', 'React']
*/

// 4. Extract all the countries contain the word 'land' from the countries array and print it as array
/*
for(let i = 0; i < countriesCopy.length;i++){
    let result = countriesCopy[i].includes('land')
    if(result == true){
        countriesCopy.splice(i,1)

    }
}
console.log(countriesCopy) //['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Germany', 'Hungary', 'Japan', 'Kenya']
*/

// 5. Find the country containing the hightest number of characters in the countries array
/*
let countries2Copy = []
for(let i = 0;i < countries2.length;i++){
    countries2Copy[i] = countries2[i]
}
let countries2CopyLength = countries2Copy.length
const countries2CopyLengthArray = []
for(let i = 0;i < countries2CopyLength;i++){
    countries2CopyLengthArray.push(countries2Copy[i].length)
}
let countries2CopyMinIndex = Math.min.apply(null, countries2CopyLengthArray)
let countries2CopyMaxIndex = Math.max.apply(null, countries2CopyLengthArray)
let result = countries2CopyLengthArray.indexOf(countries2CopyMaxIndex)
let countries2CopyMax = countries2Copy[result]
console.log(countries2CopyMax)
*/

// 7. Extract all the countries containing only four characters from the countries array and print it as array
/*
let countriesWihoutFour = []
let countriesLength = []
for(let i = 0;i < countries2.length;i++){   
    if(countries2[i].length == 4){
        countriesLength.push(countries2[i])
    }  
}
console.log(countriesLength)
*/

// 8. Extract all the countries containing two or more words from the countries array and print it as array
/*
let countriesLength = []
for(let i = 0;i < countries2.length;i++){   
    if(countries2[i].includes(' ') == true){
        countriesLength.push(countries2[i])
    }  
}
console.log(countriesLength)
*/

// 9. Reverse the countries array and capitalize each country and stored it as an array
/*
let countries22 = []
for(let i = 0;i < countries2.length;i++){
    countries22[i] = countries2[i]
}

let countries22Reverse = []
let n = countries22.length - 1
for(let i = 0;i < n/2;i++){
    let temp = countries22[i]
    countries22[i] = countries22[n-i]
    countries22[n-i] = temp
}
console.log(countries22)
for(let i = 0;i < countries22.length;i++){
    countries22Reverse.push(countries22[i].toUpperCase())
}
console.log(countries22Reverse)
*/
