const add = (num1,num2) => num1 + num2
const arr = [22,45,78,100]
console.log(add(...arr))  // passing array as an values to num1 and num2 the first two values are assigned remaining are stored in arr array

const colors = ['red','green','blue'] 
const rgb = (cl1,cl2,cl3,cl4) =>{
    console.log(cl1)
    console.log(cl2)
    console.log(cl3)
    console.log(cl4) //prints undefined as there is no fourth value
   
}
rgb(...colors)  // passes all 3 array value to the assigned cl1,2 and 3 parameters but fourth parameter prints undefined