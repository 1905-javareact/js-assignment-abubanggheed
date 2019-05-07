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
  {ary: [0, 1, 2, 3, 4, 5], toRemove: 2},
  {ary: [0], toRemove: 3},
  {ary: [0, 1, 2, 3], toRemove: 3}
]

testArrays.forEach(array => {
  console.log('before', array.ary)
  spliceElement(array.ary, array.toRemove)
  console.log('after', array.ary)
})
