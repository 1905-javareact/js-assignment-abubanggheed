/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
  for(let i = index; i < someArr.length; i++) {
    someArr[i] = someArr[i + 1]
  }
  index < someArr.length && someArr.pop()
}

let testArrays = [
  {data: [0, 1, 2, 3, 4, 5], toSplice: 2},
  {data: [0], toSplice: 3},
  {data: [0, 1, 2, 3], toSplice: 3}
]

testArrays.forEach(arrayToTest => {
  console.log('before', arrayToTest.data)
  spliceElement(arrayToTest.data, arrayToTest.toSplice)
  console.log('after', arrayToTest.data)
})
