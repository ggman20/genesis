adim = 'GökhanA'
console.log(adim)

a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
b = 10 // this is a global scope variable and found in the window object
console.log(a, b) // accessible

let isim2 = 'Gökhan' // is a global scope it will be found anywhere in this file
let soyisim2 = 'Arman' // is a global scope it will be found anywhere in this file
// Function scope
function letsLearnScope() {
  console.log(isim2, soyisim2) // JavaScript 10, accessible
// block scope
  if (true) {
    // we can access from the function and outside the function but
    // variables declared inside the if will not be accessed outside the if block
    let isim2 = 'King'
    let soyisim2 = 'Richard'
    console.log(isim2, soyisim2) // Python 20 30 true
  }
  // we can not access c because c's scope is only the if block
  console.log(isim2, soyisim2) // JavaScript 10 true
}
letsLearnScope()
console.log(isim2, soyisim2) // JavaScript 10, accessible

const myInfo2 = {
  name3 : 'Gökhan',
  surname3 : 'Arman',
  age3 : 33,
  interesting : [
    'Python',
    'Javascript',
    'Image Processing',
    'Machine Learning',
    'Automation'
  ],
  siblings : [
    {
      name4 : 'Hakan',
      surname4 : 'Arman'
    }
  ],
  isMarried3 : true,
  getFullName2 : function() {
    return `${this.name3} vee ${this.surname3}`
  } 
}
console.log(myInfo2)
console.log(myInfo2.name3)
console.log(myInfo2.siblings[0].name4)
console.log(myInfo2.isMarried3 ? 'Evli' : 'Bekar')
console.log(myInfo2['surname3'])
console.log(myInfo2['age3'])
console.log(myInfo2.getFullName2())
myInfo2.name3 = 'Ayşenur'
console.log(myInfo2.name3)
myInfo2.interesting.push('HTML')
myInfo2.interesting.push('Poker')
console.log(myInfo2)
myInfo2.getmyInfo = function() {
  let interestingWithoutLast = this.interesting.splice(0,this.interesting.length - 1).join(', ') // son eleman dahil değildi splice ederken
  //let lastInteresting = this.interesting.splice(this.interesting.length - 1)[0] //son eleman kalır sadece onu alırız.
  let lastInteresting2 = this.interesting.at(-1)
  let interesting2 = `${interestingWithoutLast} and ${lastInteresting2} and ${lastInteresting2}`
  let statement = `${this.name3} ${this.surname3} is an engineer.\nHe is ${this.age3} years old.\nHe interests ${interesting2}.`

  return statement

}
console.log(myInfo2.getmyInfo())



const myInfo3 = {
  'phone number' : '+905065558866',
  name : 'GG'
  }
  console.log(myInfo3['phone number'])

let keydegeri = 'interesting'
console.log(myInfo2[keydegeri])

const tanim1 = {
deneme1 : 'DENEME1',
deneme2 : 'DENEME2',
deneme3 : 'DENEME3',
deneme4 : ['DENEME4', 'DENEME5', 33, 'DENEME6']
}
let tanim2 = Object.assign({}, tanim1)
const entries= Object.entries(tanim1)
console.log(entries)
for (let [i, j] of entries){
  console.log(`Key:${i} and Value:${j}`)
}
console.log(tanim1.hasOwnProperty('deneme1'))
console.log(tanim1.hasOwnProperty('deneme4'))

//Object.seal(tanim1)
tanim1.deneme1 = 'DEĞİŞTİ Mİ'
tanim1.deneme4.push('DENEME7 PUSHLANDI')
tanim1.deneme5 = 'BAKALIM GELCEK Mİ'
delete tanim1.deneme2
console.log(tanim1)