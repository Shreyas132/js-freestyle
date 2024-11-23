const a = [1,12,23,true,null]
// a[10] = "node"
// for (let i = 0;i<=a.length;i++) {
//     console.log(a[i])
// }
// console.log(a[1])

//normal way of assigning array items to variables
let v,w,x,y,z;
// for(let i =0; i<=a.length;i++) {
    v=a[0]
    w=a[1]
    x=a[2]
    y=a[3]
    z=a[4]
// }
console.log(v,w,x,y,z)
/*destructuring*/
const [one,two,three,four,five] =a  //using array destructring
const b = [...a]
console.log(b)
//detructuring function returned array

const arrdestruct = () =>{
    return ['a','b','c','d']
}
const [alpha,bates,...remaining] = arrdestruct()
console.log(alpha)
console.log(bates)
console.log(remaining)  //remaining two items are stored in remaining variable using ... spread operator

/* Destructuring an object */
//while destructuring object must use same properties name for variables or else it is undefined 
const dsobj = {
    name:"firstname",
    age:18,
    male:true
}
const {name,age,male} = dsobj
console.log(name,age,male)

/* destructuring object passed to function as arguements or values*/
const objfunc = (objinput) =>{
    const{movieName,dateOfrelease,language} = objinput   //the value passed as object is being destructred using same properties name
    console.log(movieName)
    console.log(dateOfrelease)
    console.log(language)
}
const objvalues = {
    movieName:"fast and the furious",
    dateOfrelease : 2002,
    language:"English"
}
objfunc(objvalues)

/* destructuring at parameter level itself */
const paraobj = ({n1,n2}) => {
    console.log(n1)
    console.log(n2)
}
paraobj({n1:23,n2:45})