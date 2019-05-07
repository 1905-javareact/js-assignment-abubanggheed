/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

const people = []

people.push({
  name: 'Xohn Mold',
  age: NaN
})

function makePerson(name, age) {
  this.name = name
  this.age = age
}

people.push(new makePerson('Captain Swab', 31))

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

people.push(new Person(undefined, Infinity))

people.forEach(person => {
  console.log(`name: ${person.name}   age: ${person.age}`)
})
