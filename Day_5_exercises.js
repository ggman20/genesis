//LEVEL-1
//Declare an empty array;
let dizi = []
console.log(dizi)
//Declare an array with more than 5 number of elements
let dizi2 = ['A', 'gg', null, 55, true, '92131.2', 9292923.7]
console.log(dizi2)
//Find the length of your array
console.log(dizi2.length) //6

//Get the first item, the middle item and the last item of the array
console.log('First item:', dizi2[0])
let dizi2Length = dizi2.length
let forMiddle = Math.floor(dizi2Length / 2)
console.log(dizi2Length)
console.log(forMiddle)
console.log('Last item:', dizi2[dizi2Length - 1])
console.log('Middle item:', dizi2[forMiddle])

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
mixedDataTypes = dizi2

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//Print the array using console.log()
console.log(itCompanies)

//Print the number of companies in the array
console.log(itCompanies.length)

//Print the first company, middle and last company
let itCompaniesLength = itCompanies.length
let itCompaniesMiddle = Math.floor(itCompaniesLength / 2)
console.log('First Company', itCompanies[0])
console.log('Middle Company', itCompanies[itCompaniesMiddle])
console.log('Last Company', itCompanies[itCompaniesLength -1])

//Print out each company
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])

//Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies`)

//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let company = prompt('Company')
console.log(company)
answer = itCompanies.includes(company)
console.log(answer) //true ya da false döndürür
if(answer == true){
    console.log(`${company} is found in Big Companies`)
}else{
    console.log(`${company} is not found in Big Companies`)
}
//Filter out companies which have more than one 'o' without the filter method
/*
opattern = /o/gi
numbersOfOChart = itCompanies[0].match(opattern).length
console.log(numbersOfOChart)
if (numbersOfOChart >= 1){
    delete itCompanies[0]
}
console.log(itCompanies)
*/

//Sort the array using sort() method
console.log(itCompanies.sort()) //['Amazon', 'Apple', 'Facebook', 'Google', 'IBM', 'Microsoft', 'Oracle']

//Reverse the array using reverse() method
console.log(itCompanies.reverse()) //['Oracle', 'Microsoft', 'IBM', 'Google', 'Facebook', 'Apple', 'Amazon']

//Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3)) //['Oracle', 'Microsoft', 'IBM']

//Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length -3, itCompanies.length)) //['Facebook', 'Apple', 'Amazon']

//Slice out the middle IT company or companies from the array
console.log(forMiddle)
console.log(itCompanies.slice(forMiddle,forMiddle + 1)) //['Google']

//Remove the first IT company from the array
/*removeFirstCompany = itCompanies.splice(0,1)
console.log(itCompanies) //['Microsoft', 'IBM', 'Google', 'Facebook', 'Apple', 'Amazon']
*/
//Remove the middle IT company or companies from the array
/*removeMiddleCompany = itCompanies.splice(forMiddle, 1)
console.log(itCompanies) //['Oracle', 'Microsoft', 'IBM', 'Facebook', 'Apple', 'Amazon']

//Remove the last IT company from the array
removeLastCompany = itCompanies.splice(itCompanies.length - 1)
console.log(itCompanies) //['Oracle', 'Microsoft', 'IBM', 'Google', 'Facebook', 'Apple']*/

//Remove all IT companies
removeallCompanies = itCompanies.splice(0, itCompanies.length)
console.log('itCompanies:', itCompanies) //itCompanies: []

//LEVEL-2
//Create a separate countries.js file and store the countries array in to this file, 
//create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file


//First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let virgul = /,/g
let text2 = text.replace(virgul,'') //bu şekilde de yapılabilir
let text3 = text2.replaceAll('.','') //ya da replaceAll metodu ile de yapılabilir
console.log(text3) //I love teaching and empowering people I teach HTML CSS JS React Python
let textArray = text3.split(' ')
console.log(textArray) //['I', 'love', 'teaching', 'and', 'empowering', 'people', 'I', 'teach', 'HTML', 'CSS', 'JS', 'React', 'Python']

//In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//add 'Meat' in the beginning of your shopping cart if it has not been already added
if (shoppingCart.includes('Meat') == true) {
    shoppingCart
} else{
    shoppingCart.unshift('Meat')
}
console.log(shoppingCart) //['Meat', 'Milk', 'Coffee', 'Tea', 'Honey']
//add Sugar at the end of you shopping cart if it has not been already added
if (shoppingCart.includes('Sugar') == true) {
    shoppingCart
} else{
    shoppingCart.push('Sugar')
}
console.log(shoppingCart) //['Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar']
//remove 'Honey' if you are allergic to honey
let alergic = prompt('Are you alergic for Honey? yes or no')
const indexForHoney = shoppingCart.indexOf('Honey')
console.log(indexForHoney)

if (alergic == 'yes') {
    shoppingCart.splice(indexForHoney,1)
}else {
    shoppingCart
}
console.log(shoppingCart)
//modify Tea to 'Green Tea'
const indexForTea = shoppingCart.indexOf('Tea')
shoppingCart.splice(indexForTea, 1, 'Green Tea')
console.log(shoppingCart) //['Meat', 'Milk', 'Coffee', 'Green Tea', 'Honey', 'Sugar']

//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
const countries = [
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
  console.log(countries.includes('Ethiopia'))

  if (countries.includes('Ethiopia')) {
      let indexOfEthiopia = countries.indexOf('Ethiopia')
      countries.splice(indexOfEthiopia,1, 'Ethiopia'.toUpperCase())
  }else {
      countries.unshift('Ethiopia'.toUpperCase())
      countries.sort()
  }
  //console.log(countries)

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.



//Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack) //['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'Express', 'MongoDB']

//LEVEL-3
//The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//Sort the array and find the min and max age
console.log(ages.sort()) //Sort the array and find the min and max age
console.log(ages[0]) //19
console.log(ages[ages.length - 1]) //26
//Find the median age(one middle item or two middle items divided by two)
if((ages.length)%2 == 0){
    let medianAge1 = (ages.length/2) - 1
    let medianAge2 = (ages.length/2)
    console.log(ages[medianAge1], ages[medianAge2])
}else {
    let medianAge = Math.floor(ages.length/2)
    console.log(ages[medianAge])
}
//Find the average age(all items divided by number of items)
let sum = 0
for (i = 0; i < ages.length; i++){
    sum = sum + ages[i]
}
console.log(sum)
let averageOfAges = sum / (ages.length)
console.log(averageOfAges)
//Find the range of the ages(max minus min)
let maxAge = ages[ages.length - 1]
let minAge = ages[0]
let rangeOfAges = maxAge - minAge
console.log("Range:", rangeOfAges)
//Compare the value of (min - average) and (max - average), use abs() method 


//Slice the first ten countries from the countries array
//console.log(countries.slice(0,10))

//Find the middle country(ies) in the countries array
let lengthOfCountries = countries.length
console.log(lengthOfCountries)
if (lengthOfCountries%2 == 0) {
    let middleOfCountries1 = (lengthOfCountries/2)
    let middleOfCountries2 = (lengthOfCountries/2) - 1
    console.log(middleOfCountries1, middleOfCountries2)
    console.log(countries[middleOfCountries1], countries[middleOfCountries2])
} else {
    let middleOfCountries = (Math.floor(lengthOfCountries/2))
    console.log(middleOfCountries)
    console.log(countries[middleOfCountries]) //Lesotho
}

//Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
console.log(lengthOfCountries)
if (lengthOfCountries%2 == 0) {
    let divideTwo = lengthOfCountries / 2
    let firstHalfOfCountries = countries.slice(0, divideTwo)
    let secondHalfOfCountries = countries.slice(divideTwo)
    console.log(firstHalfOfCountries)
    console.log(secondHalfOfCountries)
} else {
    countries.unshift('BBB')
    let divideTwo = (countries.length) / 2
    countries.sort()
    let firstHalfOfCountries = countries.slice(0, divideTwo)
    let secondHalfOfCountries = countries.slice(divideTwo)
    console.log(firstHalfOfCountries)
    console.log(secondHalfOfCountries)
}