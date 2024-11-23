const flattenarray = (arr)=>{
    return arr.flat(Infinity)
}
console.log(flattenarray([1,[2,[3],[4]]]))