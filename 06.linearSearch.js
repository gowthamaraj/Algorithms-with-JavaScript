function linerSearch(list,item){
    for(let i=0;i<list.length;i++){
        if(item === list[i]){
            return i
        }
    }
    return -1
}

const linerSearchForeach = (list,item)=>{
    let index = -1
    list.forEach((listItem,i)=>{
        if(listItem === item){
            index = i
        }
    })
    return index
}

const result = linerSearchForeach([1,2,7,4,5,12,10,3,9],4)

console.log('~~~~LinearSearch~~~~')
if(result === -1){
    console.log("not found")
}else{
    console.log("found at index ",result)
}