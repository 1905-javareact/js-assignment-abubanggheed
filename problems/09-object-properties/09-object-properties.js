/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
  for(let key in someObj) {
    console.log(key, '  ', someObj[key])
  }
}

let objectsToTest = [
  module,
  process
]

objectsToTest.forEach(obj => {
  objectProperties(obj)
})
