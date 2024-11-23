// const age = 6
const varifyage = (age) => {
    if (age < 20) {
        console.log("young")
    } else if (age > 80) {
        console.log("old")
    } else {
        console.log("grown up")
    }

}
const age = 52
varifyage(age)
//ternary operators

const varifyname = (uname) => {
    const result = uname === "jack" || uname === "john" ? "admin" : "user"
    console.log(result)
}
varifyname("john")

//objects "if admin give acces else none"
const users = {
    name: "john",
    role: "admin",
    age: 26
}
const objectprovider = (user) => {
    const result = user.role == "admin" ? "give access" : ""
    console.log(result)
}
objectprovider(users)

//For loop
const numbers = []
for (let i = 0; i < 10; i++) {
    numbers.push({
        id: i,
        name: "hello_" + i
    })

}
console.log("numbers array", numbers)

//while loop
const arr = []
let i = 0
while (i < 10) {
    arr.push({
        id: i,
        name: "hello_" + i
    })
    i += 3
}
console.log("append by three", arr)

//array map

const userinfo = [{
    id: 1,
    name: "john",
    age: 21,
    human: true
},
{
    id: 2,
    name: "johnson",
    age: 22,
    human: true

}, {
    id: 3,
    name: "jacob",
    age: 23,
    human: false

}, {
    id: 4,
    name: "abcd",
    age: 26,
    human: false

}]
const message = []
for (let i = 0; i < userinfo.length; i++) {
    message.push("hello" + userinfo[i].name + userinfo[i].age)
}
console.log("using for loop", message)
const printuser = userinfo.map((user) => {
    return "hello " + user.name + user.age
})
console.log("using map", printuser)
//filter
const filteresult = userinfo.filter((user) => {
    return user.human
})
console.log("is human", filteresult)
//
let fi = 0
console.log("pre post increment", --fi + fi-- + --fi + fi--)
console.log(fi)
console.log(10 + true)
console.log(10 + false)
console.log(10 + Infinity)
console.log(10 + true)
console.log(10 - false)
console.log(10 * 'a')

var xx = 10
var yy = 5
yy += xx
console.log("yy", yy)
xx = 5
yy *= xx
console.log("yy", yy)
xx = 5
yy -= xx
console.log("yy", yy)
xx = 5
yy /= xx
console.log("yy", yy)
//leap year
const year = 2024
if (year / 4 == 0) {
    console.log(`${year} is a leap year`)
} else {
    console.log(`${year} is not a leap year`)
    console.log('' || 's')
}
//or operator
let hour = 11
let isweekend = true
if (hour < 10 || hour > 18 || isweekend) {
    console.log("no office")
} else {
    console.log('office open')
}

console.log(undefined || null || 0)
console.log('cat'||'dog')

for(let i=0;i<=5;i++) {
    let row = ''
    for (let j=0; j<i;j++) {
        row += ' '
    }
    row += '*'
    console.log(row)
}
// function printSlantedLine(length) {
//     for (let i = 0; i < length; i++) {
//         console.log(' '.repeat(i) + '*');
//     }
// }
// printSlantedLine(10);

for(let i =0; i<5;i++) {
    let length = ''
    for (let j=0; j<i;j++) {
        length += ' '
    }
    length += '*'
    console.log(length)
}


if(-1) {
    console.log("works")
} else {
    console.log("doesnt work")
}
//=ve or -ve
const num=0
const result = (num>0 ? "+ve" : num < 0 ? "-ve" : "zero")
console.log(result)
//max
let n1 = 5 ,n2 =10,max;
max = (n1 > n2?n1:n2)
console.log(max)
//greetings
let time = 10
let greetings = 'not yet set'

if( time <10) { 
    greetings = "good morning"
} else if (time < 20) {
    greetings = "good day"
} else {
    greetings = "good evening"
}
console.log(greetings)
// number days in month

const month = 5
let current = 2024
let noofDays;

switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
    case 11: 
        noofDays = 31
        break
    case 4:
    case 6:
    case 8:
    case 10:
    case 12: 
        noofDays=30
        break
    case 2:
        if((current %4 ==0) || (current%100!=0) || (current%400 ==0)){
            noofDays(29)
        } else {
            noofDays=28
        }
        
}
console.log(noofDays)
