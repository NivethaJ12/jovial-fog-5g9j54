Question: 
Given an array of positive integers, return the number of elements that are strictly greater than the average of all previous elements. Skip the first element.
  Example of the question
  Input: arr = [2, 5, 3, 10, 6]
Answer :
  
function countGreaterThanPreviousAverage(arr) {
  if (!arr || arr.length <= 1) return 0;

  let count = 0;
  let sum = arr[0]; // starts as 2 for this example

  for (let i = 1; i < arr.length; i++) {
    const avg = sum / i; // average of all elements BEFORE index i
    if (arr[i] > avg) {
      count++;
    }
    sum += arr[i]; // <-- this is where we add the current element
  }

  return count;
}


Input: arr = [2, 5, 3, 10, 6]

Start: count = 0, sum = 2

i = 1 → arr[1] = 5
Previous = [2], avg = 2 / 1 = 2
5 > 2 → ✅ count = 1
Update sum = 2 + 5 = 7
i = 2 → arr[2] = 3
Previous = [2, 5], avg = 7 / 2 = 3.5
3 > 3.5 → ❌ count = 1
Update sum = 7 + 3 = 10
i = 3 → arr[3] = 10
Previous = [2, 5, 3], avg = 10 / 3 ≈ 3.33
10 > 3.33 → ✅ count = 2
Update sum = 10 + 10 = 20
i = 4 → arr[4] = 6
Previous = [2, 5, 3, 10], avg = 20 / 4 = 5
6 > 5 → ✅ count = 3
Result = 3
