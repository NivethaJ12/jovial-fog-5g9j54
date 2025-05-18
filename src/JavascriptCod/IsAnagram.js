import React from "react";

const IsAnagram = () => {
  function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    const count = {};

    for (let char of str1) {
      count[char] = (count[char] || 0) + 1;
    }

    for (let char of str2) {
      if (!count[char]) return false;
      count[char]--;
    }

    return true;
  }

  console.log(isAnagram("listen", "silent")); // true
  console.log(isAnagram("hello", "world")); // false

  // inbuilt

  function isAnagram(str1, str2) {
    return str1.split("").sort().join("") === str2.split("").sort().join("");
  }

  console.log(isAnagram("listen", "silent")); // true
  console.log(isAnagram("hello", "world")); // false

  return <></>;
};

export default IsAnagram;
