import React from "react";

const LargestNUM = () => {

//10 → max = 10, secondMax = -Infinity
// 5 → not greater than either → skip
// 20 → max = 20, secondMax = 10
// 8 → not greater than secondMax
// 15 → secondMax = 15 (since 15 > 10)

  function findTwoLargest(arr) {
    if (arr.length < 2) {
      return "Array should have at least two elements.";
    }

    let max = -Infinity;
    let secondMax = -Infinity;

    for (let num of arr) {
      if (num > max) {
        secondMax = max;
        max = num;
      } else if (num > secondMax && num !== max) {
        secondMax = num;
      }
    }

    return { max, secondMax };
  }

  const result = findTwoLargest([10, 5, 20, 8, 15]);
  console.log("Largest:", result.max); // 20
  console.log("Second Largest:", result.secondMax); // 15

// -------------------------------------------------------------

const numbers = [10, 5, 20, 8, 15];

const max = Math.max(...numbers);
const min = Math.min(...numbers);

console.log("Max:", max); // 20
console.log("Min:", min); // 5

// | Line                   | What it does                                                                                    |
// | ---------------------- | ----------------------------------------------------------------------------------------------- |
// | `Math.max(...numbers)` | The spread operator (`...`) unpacks the array into individual numbers so `Math.max()` can work. |
// | `Math.min(...numbers)` | Same as above, but for the smallest number.                                                     |

// if passed without using spread operator ... then it will throw NAN


  return <></>;
};

export default LargestNUM;




