const readlineSync = require('readline-sync');

function Palindrome(string) {
    const letterValue = string.split('');
    const reverseLetters = letterValue.reverse();
    const reverseString = reverseLetters.join('');

    return string === reverseString;
}
const string = readlineSync.question('Please enter a String: ');
const isPalindrome = Palindrome(string);

if (isPalindrome) {
    console.log('I am a palindrome!');
} else {
    console.log('I am not a palindrome');
}
console.log(isPalindrome);
