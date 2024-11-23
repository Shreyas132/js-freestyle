const removeDuplicates = (arr)=>{
    return [...new Set(arr)]
}
console.log(removeDuplicates([1,1,2,3,4,5,6,6,7,8,9]))

//palindrome
const palindrome = (str)=>{
    const checkpalindrome = str.split('').reverse().join('')
    return checkpalindrome == str
}
console.log(palindrome("racecar"))