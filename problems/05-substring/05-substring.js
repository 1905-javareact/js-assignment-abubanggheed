/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
  // the guard operator does not work here
  if (arguments.length < 3) {
    throw 'substring must be called with at least 3 arguments'
  } else if (typeof (someStr) !== 'string') {
    throw 'you must input a string'
  } else if (startIndex >= someStr.length) {
    throw 'your starting index must be in range of the input string'
  } else if (endIndex < startIndex) {
    throw `cannot find a substring over a negative interval.
    Try reversing your second and third parameters.`
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
  },
  {
    str: '',
    start: 3,
    end: 3
  },
  {
    str: 'go',
    start: 1,
    end: 0
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
try {
  substring('a', 0)
} catch (error) {
  console.log(`when given less that 3 arguments, we get an error of "${error}"`)
}
