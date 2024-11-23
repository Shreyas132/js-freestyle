const longword = (sentance)=>{
    const breaksentence = sentance.split(' ')
    return breaksentence.reduce((longest,word)=> word.length > longest.length ? word : longest, "")
}
console.log(longword("hello worldssss from mars "))
console.log("hello")