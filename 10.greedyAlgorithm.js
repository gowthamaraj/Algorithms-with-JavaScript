const makeChange = (coins,amount)=>{
    coins.sort((a,b)=>b-a)
    let coinTotal = 0
    let i=0
    while(amount>0){
        if(coins[i]<=amount){
            amount = amount - coins[i]
            coinTotal++
        }
        else{
            i++
        }
    }
    return coinTotal
}
makeChange([5,10,25],50)
console.log('~~~~total change~~~~')
console.log(makeChange([5,10,25],50))