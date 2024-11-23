//creating and iterating through an array
let arr = [1, 23, 45, 'nan', null, Infinity, { message: 'hello world' }]
console.log(typeof arr)
//iterating using for loop
/*for(let i = 0; i<arr.length;i++)*/for (let i = arr.length; i >= 0; i--) {
    console.log(arr[i]) //printing just i displays index values
}
for (let j of arr) {  // we can only print from start to end using for of notin reverse like for loop
    console.log("for of", j)
}
//passing function as as input to another function
const x = (a) => {
    console.log("getting functions as an input")
    setTimeout(() => {
        a() //making sure that inputs passed to x for a is function by calling a()
    }, [0])
}
const y = () => console.log("function y")
const z = () => console.log('function z')

x(y)
x(z)
//passing array and function as an argument
const arrays = [1, 234, 45, 'hello', { key: "value" }]

const mainfunc = (items, fun) => {
    for (let i of items) {
        fun(i)

    }
}
const sub = (x) => {
    console.log(x)
}
mainfunc(arrays, sub)
//Sorting arrays
const arraysort = [2, 4, 5, 2, 1, 98, 9]
// arraysort.reverse()
console.log(arraysort.sort())
arraysort.sort((item1, item2) => {
    // if(item1 > item2) {
    //     return -1  // must be negetive value to print in decending order
    // } else if (item1 < item2) {
    //     return 1
    // } else {
    //     return 0
    // }
    return (item1 === item2 ? 0 : (item1 > item2 ? -1 : 1))
})
const dup = Set.arraysort
console.log("decending", arraysort)
//sorting multidimensional array
const multidimArray = [[1, "one"], [10, "ten"], [2, "two"], [4, "four"], [8, "eight"]]
// multidimArray.reverse()
multidimArray.sort((indx1, indx2) => {
    return (indx1[0][1] === indx2[1][1] ? 0 : (indx1[0][1] < indx2[1][1] ? 1 : -1)) //sorting only strings inside an array
})
console.log(multidimArray)
// defining size and assingning at nth size in an array
demoarray = new Array(10)
console.log(demoarray.length)
demoarray[20] = "twenty"
demoarray[-1] = "minus one"
console.log(demoarray[-1]) //-1 doesn't count as length of the array negetive indexes doesn't exist, only assigns value at -1 index
console.log(demoarray.length)
demoarray.forEach(element => {
    console.log(element)
});
for (i = 0; i <= demoarray.length; i++) {
    console.log(i)
}
//findingindex
let indxarray = [1, 23, 45, 67, 89, 100]
// let container = document.getElementById("userinput")
// let result = document.getElementById("result")
// container.innerHTML = `<h1>heading</h1>
// <ul>
// ${indxarray.map(item=>`<li>${item} </li>`).join('')}
// </ul>`
// result.addEventListener("click",()=>{
//     funfunction()
// })
const funfunction = () => {
    let result = indxarray.findIndex((item) => {  //findindex expects callback function and some logic
        //of which item to find
        if (67 == item) {
            return true
        }
    })
    console.log("result:" ,result)
}
funfunction()

//splice is an array method which displays elements on condition of starting index and number of elements to display
//ex (2,4) here 2 is an starting index and 4 is an elements to display from start index

const arrmethods = [12,45,78,8,9,6,3]  //starts at 78[index2] and ends at 6[index4]
console.log("splice" ,arrmethods.splice(2,4))  //splice will make direct change to the original array
console.log(arrmethods)  // 12 45 3 as splice directly affects original array the remaining items are stored
const arrmethods1 = [1,4,7,8,92,60,30]  //starts at 78[index2] and ends at 6[index4]
console.log("slice" ,arrmethods1.slice(3,6))   // splice whill keep original array intact/ untouched by displaying copy of an original array
console.log(arrmethods1)

