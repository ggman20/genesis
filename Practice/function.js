
function sayHello(){
    console.log('Hello.I am a function')
}
sayHello()

function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
  }
  
  square() // 4
  
  

function say(){
    let msg = 'Hello World'
      return msg
  }

say()

function multiply(number1, number2){
    return number1 * number2
}
carpim = multiply(5,3)
console.log(carpim)

function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
  } 
  console.log(areaOfCircle(10)) // should be called with one argument

function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
}
    return sum;
}
  const numbers = [3, 5, 8, 10, 12,33];
      //calling a function
  console.log(sumArrayValues(numbers))
  
  function multiplyArray(x){
    let result = 1
    for (let i = 1; i < x.length; i++){
        result = result * x[i]
    }
        return result       
}

dizi = [1,2,3,4,5]
console.log(multiplyArray(dizi))



const gg = function(name){
    return `Hello ${name}`
}

console.log(gg('Gökhan'));

(function() {
    console.log('Keklik')
})()

const kareninAlani = kenar => {
    kenar * kenar
} 

console.log(kareninAlani(7))

const ucgeninAlani = (taban, yukseklik) => (taban * yukseklik) / 2
console.log(ucgeninAlani(10,8))


const toplama = (numm1, ... numberss) => {
console.log(numm1)
console.log(numberss)
}

toplama(2,5,8,10,12,17)
// 2 
// [5, 8, 10, 12, 17]

function test(){
console.log('KEKKKKK')
}
test() //--> call ile direk çağırdık

function invokeicin(fonk){
fonk()
}
invokeicin(test) //dolaylı yoldan çağırdık test fonksiyonunu