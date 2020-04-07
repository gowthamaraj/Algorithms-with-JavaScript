const uniqueSort = function(arr){
    const breadcrumbs = {}
    const result = []

    for(let i=0;i<arr.length;i++){
        if(!breadcrumbs[arr[i]]){
            result.push(arr[i])
            breadcrumbs[arr[i]] = true
        }
    }
    return result.sort((a,b)=>a-b)
}

console.log(uniqueSort([4,2,5,2,14,5,8,1,5,2,1,4]))