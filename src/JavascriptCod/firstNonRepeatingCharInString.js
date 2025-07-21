//Given a string, write a function to find and return the first character that does not repeat anywhere else in the string. 
//If every character repeats, the function should return null. For example, for the input "swiss", the function should return 'w', 
//since it's the first non-repeating character.


function firstNonRepeatingChar(str) {
  const charCount = {};

  // Count occurrences of each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character with count 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

console.log(firstNonRepeatingChar("hellowords"))
