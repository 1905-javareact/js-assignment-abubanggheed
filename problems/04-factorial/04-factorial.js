/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
const factorial = sumNum => sumNum ? sumNum * factorial(sumNum) : 1
 