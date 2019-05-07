/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
const reverseStr = someStr => (
  someStr.split('').reduce((prev, curr) => (
    curr + prev
  ), '')
)
// there is a built in .reverse, but that seems like cheating
let strings = [
  '',
  'b ',
  'Palpatine',
  '37yc3tb',
]

strings.forEach(str => {
  console.log(`the reverse of ${str} is ${reverseStr(str)}`)
})

module.exports = reverseStr
