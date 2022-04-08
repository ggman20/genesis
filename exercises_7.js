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
    
}