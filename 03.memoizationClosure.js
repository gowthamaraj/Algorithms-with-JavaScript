let {performance} = require('perf_hooks')
const cache = {}
const times10 = function(n){
    return 10**10*10*10*10000000000*n
}
const memoizedClosureTimes10 = function(){
    const cache = {}
    return function(n){
        if(n in cache){
            console.log('fetching from Cache :',n)
            return cache[n]
        }else{
            console.log('Calculating results')
            let result = times10(n)
            cache[n] = result
            return result
        }
    }
}

const memoClosureTimes10 = memoizedClosureTimes10()
console.log('############ Task 1 #################')
let t0 = performance.now()
console.log('calculated value :',memoClosureTimes10(10))
let t1 = performance.now()
console.log(t1-t0)
console.log('cached value :',memoClosureTimes10(10))
let t2 = performance.now()
console.log(t2-t1)