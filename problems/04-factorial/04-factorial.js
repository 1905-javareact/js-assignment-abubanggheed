/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
const factorial = sumNum => sumNum ? sumNum * factorial(sumNum - 1) : 1

let numbs = [5, 12, 2, 0, 13]

numbs.forEach(numb => {
  console.log(`${numb}! = ${factorial(numb)}`)
})
