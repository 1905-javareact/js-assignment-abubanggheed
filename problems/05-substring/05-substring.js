/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
  if (typeof (someStr) !== 'string') {
    throw 'you must input a string'
  }
  let returnString = ''
  for (let i = startIndex; i < endIndex && i < someStr.length; i++) {
    returnString += someStr[i]
  }
  return returnString
}

let toTry = [
  {
    str: 'here is a large string',
    start: 3,
    end: 15
  },
  {
    str: '',
    start: 0,
    end: 4
  },
  {
    str: () => {},
    start: 1,
    end: 5
  }
]

toTry.forEach(input => {
  try {
    let output = substring(input.str, input.start, input.end)
    console.log('for an input of', input, `we get ${output}`)
  } catch (error) {
    console.log(`for an input of`, input, `we got an error of "${error}"`)
  }
})
