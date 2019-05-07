/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
const isEven = someNum => someNum / 2 === Math.floor(someNum / 2)

let numbsToTest = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9
]

numbsToTest.forEach(numb => {
  console.log(`the number ${numb} is even: ${isEven(numb)}`)
})
