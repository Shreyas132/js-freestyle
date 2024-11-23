let a = [1,2,3,4,5,6]
const even = a.filter((arr)=>{
    return arr%2 ===0 
})
const odd = a.filter((arr)=>{
    return arr%2 !==0
})
console.log("even" , even)
console.log("odd" , odd)

const greaterthanfive = a.filter((arr)=>{
    return arr > 4
})
console.log(greaterthanfive)