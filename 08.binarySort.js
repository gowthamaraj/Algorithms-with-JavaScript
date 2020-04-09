const binarySort = (list)=>{
    for(let i=0;i<list.length;i++){
        for(let j=0;j<list.length-i-1;j++){
            if(list[j]>list[j+1]){
                let temp = list[j]
                list[j] = list[j+1]
                list[j+1] = temp
            }
        }
    }
    return list
}

let result = binarySort([1,4,12,6,8,2,5,4])
console.log('~~~~BinarySort~~~~')
console.log(result)
