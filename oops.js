//objects

const mycar = {
    name:"audi",
    model:2023,
    colour:"black",
    speed:0,
    movingSpeed:()=> {  // function (){this.speed++}, 
        mycar.speed++
    }
}
mycar.movingSpeed()
mycar.movingSpeed()
mycar.movingSpeed()
console.log(mycar)
console.log(mycar)
//js to store two songs details artist song year of release, and one function containing play song that prints name and playing string

const song1 =  {
    name:"space cadet",
    artist:"Gunna",
    yearOfrelease:2022,
    playSong:function(){
        console.log(this.name + ' ' + "playing")
    }
}
const song2 = {
    name:'Fein',
    artist:'Travis Scott',
    yearOfrelease:2021,
    playSong:function() {
        console.log(this.name + ' by ' + this.artist + ' ' + "playing")
    }
}
song1.playSong()
console.log(song1)
song2.playSong()
console.log(song2)
//another way of creating objects using object constructor

const car = new Object()
car.brand = "bmw"
car.name = "3 series"
car.condition=()=>{
    console.log(car.brand + ' is on sale')
}
console.log(car)
car.condition()
//
const emp1={
    name:"none",
    age:45
}
const emp2 = emp1
emp2.name="unknown"
console.log(emp1)
//accesing objects properties and values using for in loop
const music = {
    name:'Fein',
    artist:'Travis Scott',
    yearOfrelease:2021,
    playSong:function() {
        console.log(this.name + ' by ' + this.artist + ' ' + "playing")
    }
}
for (props in music) {
    console.log(props)
}
// custom constructor
function Employee(id,name) {
    this.id = id
    this.name = name
}
const empobj = new Employee(1,'bcd') //instantiation
const empobj1 = new Employee(2,'gcd')
console.log(typeof empobj)
console.log(empobj,empobj1)
//songs constructor
function Songs (artist,name,yearOfrelease,play) {
    this.artist = artist
    this.name = name
    this.yearOfrelease = yearOfrelease
    this.play = ()=>{
        return '***' + 'playing' + this.name
    } 
}
Songs.prototype.language = "not specified"
let songsobject = new Songs ('Travis Scott',"fein",2023)
songsobject.language = "english"
let songsobject1 = new Songs ('Project Pat',"Knives Talk",2018)
console.log(songsobject.play())
//traverse through object
for(let i in songsobject1) {
    console.log(songsobject1[i])
    // return songsobject1[i]
}
console.log(songsobject,songsobject.name)
console.log(songsobject1,songsobject1.name)
songsobject.pause = ()=>{  //doudb because printing undefined
    console.log(this.name + " " + 'is paused')
}
songsobject.pause()








