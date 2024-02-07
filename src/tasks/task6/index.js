//flat function

function flat(arr, depth = 1) {
    let temp = []
    arr.forEach((item) => {
        if(Array.isArray(item) && depth > 0){
            temp.push(...flat(item,depth-1))
        }else {
            temp.push(item)
        }
    })
    return temp
}


function flat(arr, depth = 1) {
    while(arr.some(Array.isArray) && depth-- > 0){
        arr = [].concat(...arr);
    }
    return arr;
}