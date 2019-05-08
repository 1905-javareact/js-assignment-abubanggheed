/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    let previousValue = 0
    let lastValue = 0
    let toReturn = 0
    for(let i = 0; i < n; i++) {
        toReturn = lastValue + previousValue || 1
        previousValue = lastValue
        lastValue = toReturn
    }
    return toReturn
    // this is much faster than the recursive solution
}

for(let i = 0; i < 11; i++) {
    console.log(`fibonacci at ${i}: ${fib(i)}`)
}
