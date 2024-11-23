//hoisting -> shifting declared variable to the top but not the variable value
//using var
console.log(one) //o/p is undefined because only var one is moving to the top while executing not the value
var one = 1
//var can be ovewritten
// using let and cannot be overwritten 
//console.log(two) // o/p is cannot acces two before initialization
let two = 2
//same with the const

/* Setinterval and settimeout */
let counter = 0
const intrvl = setInterval(() => {
    let maxnum = 15
    // console.log(++counter)
    if (counter > maxnum) {
        clearInterval(intrvl)  //clears setinterval when counter reaches maxnum
    }
}, 1000)
/* also can cleartimeout using settimeout */
// const tmout = setTimeout(()=>{
//     clearInterval(intrvl)
//     console.log("stopped counting using settimeout")
// },10000)

/*Classes */

class Songs {
    constructor(name, duration, releaseyear) {  //similar to creating contructor using functions but have to specify constructor name while using class
        this.name = name
        this.duration = duration
        this.releaseyear = releaseyear
    }
}
let song1 = new Songs("fein", '3minute', 2023)
console.log(song1)

class employee {
    constructor(id, name, salary) {
        this.id = id
        this.name = name
        this.salary = salary
    }
}
let emp1 = new employee(1, "abcd", 2000)
let emp2 = new employee(2, "xyz", 3000)
console.log(emp1, emp2)

// No hoisting in class
class user {
    constructor (name) {
        this.name = name
    }
    hello() {
        console.log(this.name)
    }
}
let userinfo = new user("unknown")
userinfo.hello()
// assigning class to a variable
const rectangle = class {
    constructor(height,width) {
        this.height=height
        this.width=width
    }
}
console.log(rectangle.name)  //prints name of the class here it shows varible name because class can be assigned to variable
const obj2 = new rectangle(12,13)
console.log(obj2)
const rect1 = class rect_angle{
    constructor(height,width) {
        this.height=height
        this.width=width
    }
    get area () {  //get accesor not afunction called using.area not with ()
        return this.result()
    }
    result () {  //method or a function
        return this.height * this.width
    }
}
console.log(rect1.name)  //prints name of the class even though it is assigned to variable
const obj3 = new rect1(20,40)
console.log(obj3.area)  // prints area of a rectangle area getter() function calls result function inside a class
console.log(obj3)

//Static methods and properties
class box  {  
    static type = "sqaure"  //static properties
    static sub = "math"
    constructor(height,width) {
        this.height=height
        this.width = width
    }
    static population(a,b) {  //static methods/functions 
        const hminusw = a.height - b.width
        const hplusw = b.height + a.width
        return hminusw + ' and ' + hplusw
    }
}
const vals1 = new box (100,200)
const vals2 = new box (50,100)  //vals is a instace
// static propertis can be accesed using classname and . operator but not regular propertis
console.log(box.type)
console.log(vals1.height)
console.log(box.population(vals1,vals2))
clearInterval(intrvl)

//Modules  a files are also known as module ex: index.js entry.js etc



