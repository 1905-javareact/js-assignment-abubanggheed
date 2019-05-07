/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */

// I did 2 other palendrome solutions and have them here:
// https://github.com/abubanggheed/select_js_challenges/blob/master/onelinepalindrome.js

const reverseString = require('../03-reverse-string/03-reverse-string');

const isPalindrome = someStr => someStr === reverseString(someStr)
const isPalindrome2 = someStr => isPalindrome(someStr.replace(/ /g, '').toLowerCase())

let stringsToTest = [
  'helleh', '', 'iu34', 'graphle lhparg', 'Gag'
]

stringsToTest.forEach(string => {
  console.log(`the string ${string},
  is a rigid palendrom: ${isPalindrome(string)}.
  It is a palendrome ignoring capitols and spaces: ${isPalindrome2(string)}
  `)
})
