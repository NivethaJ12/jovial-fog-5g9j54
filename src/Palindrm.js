import React from "react";

const Palindrm = () => {
  // without using built in methods
  // it logs undefined - coz we are not returning anything thats y
  function palindrome(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    // return reversed;
    if (str === reversed) {
      console.log("its a pallin");
    } else {
      console.log("not a palin");
    }
  }
  console.log(palindrome("16madams"));
  //------------------------------------------------------
  //using built in methods
  function palin(string) {
    const reversed = string.split("").reverse().join("");
    if (reversed === string) {
      console.log("its palin");
    } else {
      console.log("not a palin");
    }
  }
  console.log(palin("madams"));

  return <></>;
};

export default Palindrm;
