// Массивы
const cars = ['Mazda', 'Ford', 'BMV', 'Mersedes']
// const people = [{
//     name: 'Bogdan',
//     budget: 4200
//   },
//   {
//     name: 'Elena',
//     budget: 3500
//   },
//   {
//     name: 'Victoria',
//     budget: 1700
//   }
// ]
const fib = [1, 1, 2, 3, 5, 8, 13]

// Function
function addItemToEnd() {

}

// Method
// cars.push('Reno') // в начало массива добавляет элемент
// cars.unshift('Volga') // в конец массива добавляет элемент
// console.log(cars)

// const firstCar = cars.shift() // удалаяет первый элемент из массива
// const lastCar = cars.pop() // удалаяет последний элемент из массива
// console.log(firstCar)
// console.log(lastCar)
// console.log(cars)

// console.log(cars.reverse())
// console.log(cars)

// const index = cars.indexOf('BMV')
// cars[index] = 'Porsche'
// console.log(cars)

// let findedPerson
// for (const person of people) {
//   if (person.budget === 3500) {
//     findedPerson = person
//   }
// }
// console.log(findedPerson)

// const index = people.findIndex(function(person) {
//   return person.budget === 3500
// })
// const person = people.find(function(person) {
//   return person.budget === 3500
// })
// const person = people.find(person => person.budget === 3500)
// console.log(person)

// console.log(cars.includes('Mazda'))

// const upperCaseCars = cars.map(car => {
//   return car.toUpperCase()
// })

const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)

// const pow2Fib = fib.map(pow2).map(Math.sqrt)
// console.log(pow2Fib)
// const pow2Fib = fib.map(pow2)
// const filteredNumbers = pow2Fib.filter(num => num > 20)
// console.log(pow2Fib)
// console.log(filteredNumbers)


// Задача 1
// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

const people = [{
    name: 'Bogdan',
    budget: 4200
  },
  {
    name: 'Elena',
    budget: 3500
  },
  {
    name: 'Victoria',
    budget: 1700
  }
]

const allBudget = people
  .filter(person => person.budget > 2000)
  .reduce((acc, person) => {
    acc += person.budget
    return acc
  }, 0)

console.log(allBudget)