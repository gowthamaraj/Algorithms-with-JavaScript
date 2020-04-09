const binarySearch = (list,item)=>{
    let min = 0
    let max = list.length-1
    let mid
    while(min<=max){
        mid = Math.floor((min+max)/2)

        if(list[mid]===item){
            return mid
        }
        else if(list[mid]>item){
            max = mid -1
        }
        else{
            min = mid+1
        }
    }
    return -1
}

const result = binarySearch([2,6,8,9,12,18,25],12)
console.log('~~~~BinarySearch~~~~')
if(result === -1){
    console.log("not found")
}else{
    console.log("found at index ",result)
}