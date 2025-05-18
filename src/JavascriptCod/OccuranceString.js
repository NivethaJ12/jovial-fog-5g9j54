import React from "react";

const OccuranceString = () => {
    // Find occurance of a stirng letter in a string 
    function countChar(str, target) {
        let count = 0;
        for (let char of str) {
          if (char === target) {
            count++;
          }
        }
        return count;
      }
      
      console.log(countChar("hello world", "l")); // 3
    
    
      
      // built IN 
    const count = (str, char) => [...str].filter(c => c === char).length;
    console.log(count("banana", "n")); // 2

//Occurance of all the letters in a string
    function countAll(str){
        let count={}
        for(let char of str){
            if(count[char]){
                count[char]++;
            }else{
                count[char]=1;
            }
        }
        return count;
    }
    const inputString = "HELLO WORLD!"
    const occstring = countAll(inputString)
    console.log(occstring);

//built in

function countLetters(str) {
    return str
      .toLowerCase()                            // Make case-insensitive
      .split('')                                 // Convert to array of characters
      .reduce((acc, char) => {
        // Optional: skip non-letter characters using regex
        if (!/[a-z]/.test(char)) return acc;
  
        acc[char] = (acc[char] || 0) + 1;
        return acc;
      }, {});
  }
  
  console.log(countLetters("NivethaPrasanth"));
  

      
    return (
        <>
        </>
    )
}

export default OccuranceString;