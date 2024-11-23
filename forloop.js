//print all even numbers from 10 to 100
let init = 10
for (let i = init; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}
//check if prime number
let number = 10
let isprimenumber = number > 1
for (let i = 0; i * i <= number; i++) {
    if (number % i === 0) {
        isprimenumber = false
        break
    }
}
console.log(isprimenumber ? "is aprimenumber" : "is not a primenumber")

//print all prime numbers from 1 to 100

for (let number = 1; number <= 100; number++) {
    let isprime = number > 1

    for (let i = 2; i * i < number; i++) {
        if (number % i === 0) {
            isprime = false
            break
        }
    }
    if (isprime) {
        console.log(number)
    }
}
// first 10 fibonacci numbers
let fiblimit = 10
let a = 0
let b = 1
console.log(a)
console.log(b)

for (let i = 0; i < fiblimit; i++) {
    let next = a + b
    console.log(next)

    a = b
    b = next
}
//check if number is palindrome or not
let checkpali = 121
let original = checkpali
let reversed = 0
while (checkpali > 0) {
    let digit = checkpali % 10
    reversed = reversed * 10 + digit
    checkpali = Math.floor(checkpali / 10)
}
console.log(reversed === original ? `${original} is palindrome` : "is not a palindrome")

//check palindrome using for loop

let forPalindrome = 121
let forOriginal = forPalindrome.toString()
let isforPalindrome = true

for (let i = 0; i < forOriginal.length / 2; i++) {
    if (forOriginal[i] !== forPalindrome[forPalindrome.length - 1 - i]) {
        isforPalindrome = false
        break
    }
}
console.log(isforPalindrome ? `${forPalindrome}is palindrome` : `${forPalindrome}is not palindrome`)

//prime number felight way

let checkprime = -1
let isprime = true
for (var p = 2; p <= parseInt(checkprime / 2); p++) {
    if (checkprime % p == 0) {
        isprime = false
        break
    }
}
if (isprime && checkprime > 1) {
    console.log(`${checkprime} is a prime number`)
} else {
    console.log(`${checkprime} is not a prime number`)
}
/// tricky for loop 1
for (var i = 0; i < 10; i++);/*here there is a empty block {} if loop ends with;*/ {
    console.log("printing i", i) //so output will be last increment value i.e 10//
}
// tricky forloop 2

let fi = 0
for (fi++; fi++ < 10; fi++) {
    console.log("insider", fi)
}
console.log("outside fi:", fi)

//print multiple of 3 from 300 to 3

for (let i = 300; i >= 3; i--) {
    if (i % 3 == 0) {
        // console.log( i)

    }

}
// evenly divisible by 4 between low and high number
let low = 10
let high = 100
for (let i = low; i < 100; i++) {
    if (i % 4 == 0 && i % 5 != 0) {
        console.log(i)
    }
}