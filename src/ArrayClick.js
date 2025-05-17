import React from "react";
import { useState } from "react";

const ArrayClick = () => {
  const array = [10, 20, 30, 40, 50, 60];
  const [arr, setArr] = useState(0); // track current index
  // setArr will update the value of arr
  const handleClick = () => {
    if (arr < array.length - 1) {
      //arr is initially set to 0 -> arr.length - 1 = 6-1 = 5 so length equals to 5 if 5 <0 means setArr to arr+1 i.e 1th index
      setArr(arr + 1);
    } else setArr(0);
  };

  return (
    <>
      <p>arr=[10,20,30,40,50,60]</p>
      <button onClick={handleClick}>Click Me!</button>
      {/* to access a specific element in the array, you use square brackets [] with the index number inside.
         array[0] → '10' (the first element)
         array[1] → '20' (the second element) */}
      <p>{array[arr]}</p> 
    </>
  );
};
export default ArrayClick;
