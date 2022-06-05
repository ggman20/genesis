// LEVEL-1
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
// 1.Explain the difference between forEach, map, filter, and reduce.


// 2.Define a callback function before you use it in forEach, map, filter or reduce.
const callback = (n) => n * 2

function times4(callback, n) {
    return callback(n) * 2
}

console.log(times4(callback,3))

// 3.Use forEach to console.log each country in the countries array.
countries.forEach(country => console.log('country:', country))

// 4. Use forEach to console.log each name in the names array.
names.forEach(name => console.log('name:', name))

// 5. Use forEach to console.log each number in the numbers array.
numbers.forEach(function(number){console.log('number:',number)})

// 6. Use map to create a new array by changing each country to uppercase in the countries array.
const countriesUpperCase = countries.map(country => country.toUpperCase())
console.log(countriesUpperCase)

// 7. Use map to create an array of countries length from countries array.
const countriesLengthArray = countries.map(country => country.length)
console.log(countriesLengthArray)

// 8. Use map to create a new array by changing each number to square in the numbers array
const squareNumber = numbers.map(number => number ** 2)
console.log(squareNumber)

// 9. Use map to change to each name to uppercase in the names array
const nameUpperCase = names.map(name => name.toUpperCase())
console.log(nameUpperCase)

// 10. Use map to map the products array to its corresponding prices.
const pricesArray = products.map(pro => {
    return {
        together: `${pro.product} price is ${pro.price}` 
    }
})

console.log(pricesArray)

// 11. Use filter to filter out countries containing land.
const withLandArray = countriesUpperCase.filter(country => country.includes('LAND'))
console.log(withLandArray)

// 12. Use filter to filter out countries having six character.
const country6chars = countries.filter(country => country.length == 6)
console.log(country6chars)

// 13. Use filter to filter out countries containing six letters and more in the country array.
const country6CharsMore = countries.filter(country => country.length > 5)
console.log(country6CharsMore)

// 14. Use filter to filter out country start with 'E';
const countryStartE = countries.filter(country => country.startsWith('E'))
console.log(countryStartE)

// 15. Use filter to filter out only prices with values.
const valuePrices = products.filter(pro => typeof pro.price == 'number' && pro.price > 0)
console.log(valuePrices)

// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(...arr){
    return arr.filter(element => typeof element == 'string')
}

console.log(getStringLists(1,2,4,'Gökhan','GG', 'KING', 'LIFE', 90))

// 17. Use reduce to sum all the numbers in the numbers array.