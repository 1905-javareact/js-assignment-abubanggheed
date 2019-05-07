/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    let a = 0
    let b = 0
    let ret = 0
    for(let i = 0; i < n; i++) {
        ret = b + a || 1
        a = b
        b = ret
    }
    return ret
    // this is much faster than the recursive solution
}

for(let i = 0; i < 11; i++) {
    console.log(`fibonacci at ${i}: ${fib(i)}`)
}
