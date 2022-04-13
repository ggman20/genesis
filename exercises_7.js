// LEVEL-1
// 1. Declare a function fullName and it print out your full name.
function fullName1(){
    console.log('Full Name: Gökhan Arman')
}
fullName1()

// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName2(firstName, lastName){
    console.log('Full Name:', firstName, lastName)
}

fullName2('Gökhan','ARMAN')

// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1,num2){
    return console.log(num1 + num2)
}
addNumbers(2,3)

// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width){
    
    return console.log('Area of Rectangle:', length * width, 'cm2')
}
areaOfRectangle(3,8)

// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width){
    
    return console.log('Perimeter of Rectangle:', 2*(length + width), 'cm')
}
perimeterOfRectangle(3,8)

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height){
        return console.log('Volume of Rectangular Prism:', length * width * height, 'cm3')
}
volumeOfRectPrism(3,8,2)

// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r){
    const pi = 3.14
    console.log('Area of Circle:', pi * r * r, 'cm2')
}
areaOfCircle(5)

// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r){
    const pi = 3.14
    console.log('Circumference of Circle:', 2 * pi * r, 'cm')
}
circumOfCircle(5)

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume){
    return console.log('density:',mass/volume)
}
density(12,2)

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken.
//     Write a function which calculates a speed of a moving object, speed.
function speed(x,t){
    console.log('Speed:', x / t, 'km/h')
}
speed(100,2)

// 11.Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(mass){
    const gravity = 9.81
    console.log('weight:', mass * gravity, 'kg')
}
weight(5)

// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. 
//     Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(oC){
    console.log('oF:',((oC * 9 / 5) + 32), 'F')
}
convertCelsiusToFahrenheit(30)

// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi.
//     BMI is used to broadly define different weight groups in adults 20 years old or older.
//     Check if a person is underweight, normal, overweight or obese based the information given below.
function bmi(age, weight,height){
    let bmi = weight / (height * height)
    console.log(bmi) 
    if(age < 20){
        console.log(`You are under 20 age. You are ${age}`)
        if(bmi < 18.5){
            console.log(`You are Underweight`)
        }else if(bmi <= 24.9 && bmi >= 18.5){
            console.log(`You are Normal weight`)
        }else if(bmi < 29.9 && bmi >= 24.9){
            console.log(`You are Overweigh`)
        }else{
            console.log(`You are Obese`)
        }    
    }else{
        console.log(`You are over 20 age. You are ${age}`)
        if(bmi < 18.5){
            console.log(`You are Underweight`)
        }else if(bmi <= 24.9 && bmi >= 18.5){
            console.log(`You are Normal weight`)
        }else if(bmi < 29.9 && bmi >= 24.9){
            console.log(`You are Overweigh`)
        }else{
            console.log(`You are Obese`)
        }    
    }    
    
}   
bmi(22, 78, 1.85)

// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(){
    const now = new Date()
    let month = now.getMonth()
    let seasons = [
        'AUTUMN',
        'WINTER',
        'SPRING',
        'SUMMER'
    ] 
    if(month == 8){
        console.log(`The season is ${seasons[0]}.`)
    } else if (month == 9) {
        console.log(`The season is ${seasons[0]}.`)
    } else if (month == 10) {
        console.log(`The season is ${seasons[0]}.`)
    } else if (month == 11) {
        console.log(`The season is ${seasons[1]}.`)
    } else if (month == 0){
        console.log(`The season is ${seasons[1]}.`)
    }else if (month == 1){
        console.log(`The season is ${seasons[1]}.`)
    }else if (month == 2){
        console.log(`The season is ${seasons[2]}.`)
    }else if (month == 3){
        console.log(`The season is ${seasons[2]}.`)
    }else if (month == 4){
        console.log(`The season is ${seasons[2]}.`)
    }else if (month == 5){
        console.log(`The season is ${seasons[3]}.`)
    }else if (month == 6){
        console.log(`The season is ${seasons[3]}.`)
    }else if (month == 7){
        console.log(`The season is ${seasons[3]}.`)
    }
}
checkSeason()

function checkSeason2(month2){   
    let seasons2 = [
        'AUTUMN',
        'WINTER',
        'SPRING',
        'SUMMER'
    ]
    if(month2 == 'September' || month2 == 'October' || month2 == 'November'){
        console.log(`The season2 is ${seasons2[0]}.`)
    }else if(month2 == 'December' || month2 =='January' || month2 == 'February') {
        console.log(`The season2 is ${seasons2[1]}.`)
    }else if(month2 == 'March' || month2 == 'April' || month2 == 'May' ) {
        console.log(`The season2 is ${seasons2[2]}.`)
    }else if(month2 == 'June' || month2 == 'July' || month2 == 'August') {
        console.log(`The season2 is ${seasons2[3]}.`)
    }              
}
checkSeason2('September')

// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        return num1
    }else if(num2 > num1 && num2 > num3){
        return num2
    }else if(num3 > num1 && num3 > num2){
        return num3
    }
}
console.log(findMax(25, 10, 35))

//LEVEL-2
// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.



// 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.



// 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(...arr){
    for(let i = 0;i < arr.length;i++){
        console.log(arr[i])
    }
}
printArray(1,2,3)

// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime(){
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()
    let hour = date.getHours()
    let minute = date.getMinutes()
    day < 10 ? day = '0' + day : day = day
    month < 10 ? month = '0' + month : month = month
    hour < 10 ? hour = '0' + hour : hour = hour
    minute < 10 ? minute = '0' + minute : minute = minute
    console.log(day + '/' + month + '/' + year + ' ' + hour + ':' + minute)
}
showDateTime()

// 5. Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x,y){
    console.log(x,y)
    let tempx = x
    let tempy = y
    y = tempx
    x = tempy
    console.log(x,y)
}
swapValues(2,3)

// 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(...arr){
    console.log(arr)
    console.log(arr.length)
    n = arr.length - 1
    for(let i = 0;i < n/2;i++){
        let temp = arr[i]
        arr[i] = arr[n-i]
        arr[n-i] = temp
    }
    console.log(arr)
}
reverseArray(1,2,3,4,5,6,7) // [7, 6, 5, 4, 3, 2, 1]

// 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(...arr){
    const capitalizedArray = []
    for(let i = 0;i < arr.length;i++)
    capitalizedArray.push(arr[i].toUpperCase())
    return console.log(capitalizedArray)
}
capitalizeArray('Gökhan','Hakan','Volkan', 'Ayşenur')

// 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
const array1 = [1,2,3,'GG','Ayşenur']
const array2 = [4,5,6, 'Keklik', 've']
function addItem(arr, item){
    const addedItem = arr
    addedItem.push(item)
    return console.log(addedItem)
}
addItem(array1, 52) //[1, 2, 3, 'GG', 'Ayşenur', 52]
addItem(array2, 'Gökhan') //[4, 5, 6, 'Keklik', 've', 'Gökhan']

// 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(arr, index){
        const removedItem = arr
        removedItem.splice(index,1)
        return console.log(removedItem)
}
removeItem(array2,3)

// 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(number,...arr){
    let sum = 0
    for(let i = 0;i < number;i++){
        sum = sum + arr[i]
    }
    return console.log(`${number} times sum of numbers:`,sum)
}
sumOfNumbers(4,10,15,20,25,50,60)

// 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(number,...arr){
    sum = 0
    const oddOfArray = []
    let tempNumber = number
    for(let i = 0;i<arr.length;i++){
        if(arr[i] % 2 == 1){
            oddOfArray.push(arr[i])
        }
    }
    if(number > oddOfArray.length){
        number = oddOfArray.length
        console.log(`${tempNumber} parametresi dizinin tek elemanlarindan fazladir.\nO yüzden ${oddOfArray.length} adet numara toplandi.` )
    }   
    for(let j = 0;j<number;j++){
        sum = sum + oddOfArray[j]
    }
    return console.log(`${number} times sum of odd numbers:`,sum)
}
sumOfOdds(5,10,20,21,30,31,32,34,41)

// 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(number,...arr){
    sum = 0
    const evenOfArray = []
    let tempNumber = number
    for(let i = 0;i<arr.length;i++){
        if(arr[i] % 2 == 0){
            evenOfArray.push(arr[i])
        }
    }
    if(number > evenOfArray.length){
        number = evenOfArray.length
        console.log(`${tempNumber} parametresi dizinin çift elemanlarindan fazladir.\nO yüzden ${evenOfArray.length} adet numara toplandi.` )
    }   
    for(let j = 0;j<number;j++){
        sum = sum + evenOfArray[j]
    }
    return console.log(`${number} times sum of even numbers:`,sum)
}
sumOfEven(8,10,20,21,30,31,32,34,41)

// 13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(number,...arr){
    let countOfEvens = 0
    let countOfOdds = 0
    numberItemArray = []
    evenItemArray = []
    oddItemArray = []
    if(number > arr.length){
        number = arr.length 
        console.log(`${arr.length} adet dizi elemani vardir.`)      
    }   
    for(let i = 0;i < number;i++){
        numberItemArray.push(arr[i])
    }
    for(let j = 0;j < numberItemArray.length;j++){
        if(numberItemArray[j] % 2 == 0){
            evenItemArray.push(numberItemArray[j])
            countOfEvens = evenItemArray.length 
        }else{
            oddItemArray.push(numberItemArray[j])
            countOfOdds = oddItemArray.length
        }
    }
    return console.log(`Count of even number: ${countOfEvens} and Count of odd number: ${countOfOdds}`)
}
evensAndOdds(10,10,20,21,30,31,32,34,41)

// 14. Write a function which takes any number of arguments and return the sum of the arguments
function sumOfArgs(...arr){
    let sum = 0
    for(let i = 0;i < arr.length;i++){
        sum = sum + arr[i]
    }
    return console.log(`sum of numbers:`,sum)
}
sumOfArgs(4,10,15,20,25,50,60)

// 15. Write a function which generates a randomUserIp.
function randomUserIp(){  
    //ip adresses are '192.168.254.255'   
    let randomNumber1 = Math.floor(Math.random() * 256)
    let randomNumber2 = Math.floor(Math.random() * 256)
    let randomNumber3 = Math.floor(Math.random() * 256)
    let randomNumber4 = Math.floor(Math.random() * 256)

    ipAdress = randomNumber1 + '.' + randomNumber2 + '.' + randomNumber3 + '.' + randomNumber4
    return console.log('IP adress is:',ipAdress)
}
randomUserIp()
 
// 16. Write a function which generates a randomMacAddress
function randomMacAddress(){
    let hexDigits = "0123456789ABCDEF";
    let macAddress = "";
    for (let i = 0; i < 6; i++) {
        macAddress += hexDigits.charAt(Math.round(Math.random() * 15));
        macAddress += hexDigits.charAt(Math.round(Math.random() * 15));
        if (i != 5) macAddress += ":";
    }

    return console.log('Mac Adress is:', macAddress);
}
randomMacAddress()

// 17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
function randomHexaNumberGenerator(){
    let hexDigits = "0123456789ABCDEF"
    let randomHexNumber = ""
    let randomNumber = Math.floor(Math.random() * 100)
    for (let i = 0;i < randomNumber;i++){
        randomHexNumber += hexDigits.charAt(Math.floor(Math.random() * 16))
    } 
    return console.log("random hexadecimal number:", randomHexNumber)
}
randomHexaNumberGenerator()

// 18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator(){
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let randomsevenchars = ""
    for(let i = 0; i < 7;i++){
        randomsevenchars += characters.charAt(Math.floor(Math.random() * characters.length))

    }
    return console.log(randomsevenchars)
}
userIdGenerator()

// LEVEL-3
// 1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). 
//    One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
let numberOfChar = prompt('Number of Characters')
let numberOfId = prompt('Number of Id')
function userIdGeneratedByUser(numberOfChar, numberOfId){   
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'   
    let randomIds = '' 
    for(let i = 0;i < numberOfId;i++){
        randomIds += '\n'
        for(let k = 0;k < numberOfChar;k++){
            let randomNumberChar = Math.floor(Math.random() * characters.length)
            randomIds += characters.charAt(randomNumberChar)           
        }
    }
    return console.log("ids:", randomIds)
}
userIdGeneratedByUser(numberOfChar, numberOfId)

// 2. Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator(){
    let rgbNumbers = 0
    for(let i = 0;i<3;i++){
        let randomNumberForRgb = Math.floor(Math.random() * 256)
        rgbNumbers += randomNumberForRgb
        if(i !=2) rgbNumbers += ','
    }
    let rgb = 'rgb('+ rgbNumbers + ')'
    return console.log(rgb)
}
rgbColorGenerator()

// 3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
let howManyHexaColor = prompt('How many random hexa color do you want?')
function arrayOfHexaColors(){ 
    let hexDigits = "0123456789ABCDEF"
    let hexColor1 = ''
    let hexColor2 = '' 
    for(k = 0;k<howManyHexaColor;k++){  
        hexColor1 += ' #'     
        for(let i = 0;i<6;i++){
            let randomNumber = Math.floor(Math.random() * hexDigits.length)
            hexColor1 += hexDigits.charAt(randomNumber)
        }
        
    } 
    const hexaColorArray = hexColor1.split(' ')
    hexaColorArray.shift()
    return console.log(hexaColorArray)
}
arrayOfHexaColors()

// 4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.
let howManyRgbColor = prompt('How many random RGB Color do you want?')
function arrayOfRgbColors(){
    let rgbColor = ''
    for(let k = 0;k < howManyRgbColor;k++){
        rgbColor += 'rgb('
        for(let i = 0;i < 3; i++){
            let randomNumberForRgb = Math.floor(Math.random() * 256)
            rgbColor += randomNumberForRgb
            if(i != 2) rgbColor += ','
        }
        rgbColor += ') '
    }
    console.log(rgbColor)
    const rgbColorArray = rgbColor.split(' ')
    rgbColorArray.pop()   
    return console.log(rgbColorArray)
}
arrayOfRgbColors()

// 5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(hex){
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return [r, g, b]
}
console.log(convertHexaToRgb('#1212AA'))

// 6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
function convertRgbToHexa(r, g, b){
    let hexr = r.toString(16)
    let hexg = g.toString(16)
    let hexb = b.toString(16)
    hexr.length == 1 ? hexr = "0" + hexr : hexr = hexr
    hexg.length == 1 ? hexg = "0" + hexg : hexg = hexg
    hexb.length == 1 ? hexb = "0" + hexb : hexb = hexb
    let hexaNumber = '#' + hexr + hexg + hexb
    return hexaNumber
}

console.log(convertRgbToHexa(10,20,30))

// 7. Write a function generateColors which can generate any number of hexa or rgb colors
function generateColors(color, howMany){
    let colorArray = []
    if (color == 'hexa'){
        let hexDigits = "0123456789ABCDEF"
    let hexColor1 = ''
    let hexColor2 = '' 
    for(k = 0;k<howMany;k++){  
        hexColor1 += ' #'     
        for(let i = 0;i<6;i++){
            let randomNumber = Math.floor(Math.random() * hexDigits.length)
            hexColor1 += hexDigits.charAt(randomNumber)
        }   
    } 
    const hexaColorArray = hexColor1.split(' ')
    hexaColorArray.shift()
    colorArray = hexaColorArray

    }else if(color == 'rgb'){
        let rgbColor = ''
    for(let k = 0;k < howMany;k++){
        rgbColor += 'rgb('
        for(let i = 0;i < 3; i++){
            let randomNumberForRgb = Math.floor(Math.random() * 256)
            rgbColor += randomNumberForRgb
            if(i != 2) rgbColor += ','
        }
        rgbColor += ') '
    }
    console.log(rgbColor)
    const rgbColorArray = rgbColor.split(' ')
    rgbColorArray.pop()   
    colorArray = rgbColorArray
    }
    return colorArray
}
console.log(generateColors('hexa', 5))

// 8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray2(array) {
    let m = array.length
    let temp = 0
    let randomNumber = 0
    // While there remain elements to shuffle…
    for(let i = 0;i < m;i++) { 
      // Pick a remaining element…
      randomNumber = Math.floor(Math.random() * m--); 
      // And swap it with the current element.
      temp = array[m];
      array[m] = array[randomNumber];
      array[randomNumber] = temp;
    }
    return array;
  }
  console.log(shuffleArray2(['A',10,'B','20',30,'C',40]))

// 9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number.
let f = [];
function factorial(n){
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
}
console.log(factorial(8))

// 10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(){

}

// 11. Call your function sum, it takes any number of arguments and it returns the sum.
function sumfunction(...arr){
    let sum = 0
    for(let i = 0; i < arr.length;i++){
        sum = sum + arr[i]
    }
    return sum
}
console.log(sumfunction(1,2,3,4,5,6))

// 12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. 
//     Check if all the array items are number types. If not give return reasonable feedback.
function sumfunction(...arr){
    let sum = 0
    for(let i = 0; i < arr.length;i++){
        sum = sum + arr[i]
    }
    return sum
}
console.log(sumfunction(1,2,3,4,5,6))

// 13. Write a function called average, it takes an array parameter and returns the average of the items. 
//     Check if all the array items are number types. If not give return reasonable feedback.
function average(...arr){
    let sum = 0
    for(let i = 0; i < arr.length;i++){
        sum = sum + arr[i]
    }
    let averaj = sum / arr.length
    return averaj
}
console.log(average(1,2,3,4,5))

// 14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. 
//     If the array length is less than five it return 'item not found'.
function modifyArray(modify, ...arr){
    if(arr.length < 5){
        console.log('item not found')
    }else{
        arr[4] = modify
    }
    return arr
}
console.log(modifyArray(20,3,5,8,10,11,21))

// 15. Write a function called isPrime, which checks if a number is prime number.
let numberForPrime = prompt('Bir sayi yaziniz asal sayi icin')
function isPrime(numberForPrime){
    let isPrime1 = true
    for(let i = 2; i < numberForPrime;i++){
        console.log(i)
        if(numberForPrime % i == 0){
            isPrime1 = false           
            break
    }
    if(isPrime1 == false){
        console.log(`${numberForPrime} is not a prime number`)
    }
}
}
isPrime(numberForPrime)

// 16. Write a functions which checks if all items are unique in the array.
function unique(...arr){
    isUnique = true
    for(let i = 0;i < arr.length;i++){
        console.log(arr[i], arr[i+1])
        if(arr[i] == arr[i+1]){
            console.log(arr[i], arr[i+1])
            isUnique = false
            break
        } 
    }
    console.log(isUnique)
    if(isUnique == false){
        console.log(`arr is not an unique array`)
    }       
}
unique(1,2,3,4,5)