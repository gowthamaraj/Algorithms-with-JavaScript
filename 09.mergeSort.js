function mergeSort(list){
    if(list.length === 1){
        return list
    }
    const mid = Math.floor(list.length/2)
    const left = list.slice(0,mid)
    const right = list.slice(mid)

    const sortedLeft = mergeSort(left)
    const sortedRight = mergeSort(right)

    return merge(sortedLeft,sortedRight)
}
function merge(sortedLeft,sortedRight){
    const result = sortedLeft.concat(sortedRight)
    return result.sort((a,b)=>b-a)
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
console.log(mergeSort(list))