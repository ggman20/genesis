for(let i = 0; i <=10; i++){
    console.log(i)
}

for(let j = 1; j <= 10; j++){
    console.log(`${j} * ${j} = ${j * j}`)
}
    
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
  console.log(newArr)
}
console.log(newArr)

for (let country of countries){
    if (country == 'Norway'){
        console.log(` ${country} bulundu! ` )
        break
    }
    console.log('country', country)
}

for (let country of countries){
    if (country == 'Norway'){
        continue
    }
    console.log('country', country)
}


let i = 0
do {
  console.log(i)
  i++
} while (i <= 5)


let k = 0
while(k < countries.length){
    console.log('countries', countries[k])
    k++
}