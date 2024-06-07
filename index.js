//Reserve a string 
//Write a function that takes a string and the writes it in reverse
// eg. English -> hsilgnE

function reverseString(word) {
    return word.split('').reverse().join('');
    
}


console.log(reverseString("Working"));
console.log(reverseString("String"));
console.log(reverseString("English"));
console.log(reverseString("Pathways"));