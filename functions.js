//to find area of a circle
const areaofCircle = (pi,radius) =>{
    let calc = pi * radius * radius
    return calc
}
let result = areaofCircle (3.141,8)
console.log(result)
//prime or not using functions
const isprime =(num) => {
    if ( num <= 1) {
        return false
    }
    for (let i = 2; i<= Math.sqrt(num);i++) {
        if ( num % 2 == 0) {
            return false
        }
    }
    return true
}
console.log(isprime(23))
// find factorial of a number
const findFactorial  = (num) =>{
    let factorial = 1
    for(let i = 2; i<=num;i++) {
        factorial *= i
    }
    return factorial
}
console.log(findFactorial(5))

//find fibonacci using functions
const findfibo = (num) =>{
    let a = 0
    let b = 1

    for(let i = 0;i <= num; i++) {
        let fibo = a + b
        a = b
        b = fibo
        console.log(fibo)
    }
    // return fibo
}
console.log(findfibo(4))
// palindrome using function
const isforPalindrome = (s) =>{
    s = s.toLowerCase()
    let reversed = ''

    for(let i = s.length - 1; i>=0;i--) {
        reversed += s[i]
    }
    return s === reversed
}
console.log(isforPalindrome("racecar"))
//palindrome for integer values
const isPalindromeforint = (num) =>{
    let original = num
    let reversed = 0

    /*for(let i = 0;i< original.toString().length ; i++)*/while(original > 0) {
        let lastdigit = original % 10
        reversed = reversed * 10 + lastdigit

        original = Math.floor( original / 10)
    }
    return num === reversed
}
console.log(isPalindromeforint(121))

//Palindrome using builtin functions by converting it into string and join and reverse

const palindromeBuiltin = (num) =>{
    let sttrnum = num.toString()
    let reversed  = sttrnum.split('').reverse().join('')

    return sttrnum === reversed
}
console.log(palindromeBuiltin(121))
// first class functions are assigning an function to a variable
const first = function () {
    console.log("first class functions")
}
first()
console.log(typeof (first))
console.log(typeof type)
//function overloading -> no such concept of overloading or overriding the last function with same name will replace the previous function
function add (num1 , num2) {
    console.log("first add function")
    return num1 + num2
}
function add (num1 , num2 ,num3) {
    console.log(arguments) /* prints or stores the inputs even if if there are no parameters for a function or 
    input exceeds the no of parameter defined */
    return num1 + num2 + num3
}
console.log(add(1,2))
console.log(add(1,2,3))
console.log(add(1,2,3,4))


