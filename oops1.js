//Cloning an object
const originalobj = {
    name:{
        firstname:"jhon",
        lastname:"son"
    },
    age:25,
    country:"india"
}

const clonedobj = {}
for(let i in originalobj) {
    clonedobj[i] = originalobj[i]
}
console.log("cloned object",clonedobj)
console.log("original" ,originalobj)
//cloning using built in Object constructor and assign function Oject.assaign(clonedobject,originalobject)
const cloneusingconstructor = {}
Object.assign(cloneusingconstructor,originalobj)
console.log("cloned usimg Object contrucor and.assign function" , cloneusingconstructor)