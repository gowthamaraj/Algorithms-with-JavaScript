let {performance} = require('perf_hooks')
const factorialWrapper = (fn)=>{
    cache = {}
    return (n)=>{
        if(cache[n]){
            return cache[n]
        }
        return fn(n)
    }
}

const factorial = (n)=>{
    if(n<1){
        return 1
    }
    else{
        return n * factorial(n-1)
    }
}

const closureFactorial = factorialWrapper(factorial)

console.log('~~~~~~~Factorial of 10~~~~~~~~~~')
let t0 = performance.now()
let v1=closureFactorial(10)
let t1 = performance.now()
let d1 = t1-t0
let v2 = closureFactorial(10)
let t2 = performance.now()
let d2 = t2-t1
console.log('calculated value :',v1, d1)
console.log('cached value :',v2,d2)

// ~~~~~~~Factorial of 10~~~~~~~~~~
// calculated value :  3628800 0.5391000062227249
// cached value : 3628800 0.024001002311706543
