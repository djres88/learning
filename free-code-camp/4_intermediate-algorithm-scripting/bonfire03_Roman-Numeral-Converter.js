/*
Bonfire: Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Roman Numerals
Array.splice()
Array.indexOf()
Array.join()
*/

function convert(num) {
 var romanNumArray = [];
 var digits = num.toString(10).split("").reverse().map(function(n) {
   return parseInt(n);
 });

//0s
if(digits[0] === 1 || digits[0] === 6) {
  romanNumArray.push("I");
}
if (digits[0] === 2 || digits[0] === 7) {
  romanNumArray.push("II");
}
if (digits[0] === 3 || digits[0] === 8) {
  romanNumArray.push("III");
}
if (digits[0] === 4) {
  romanNumArray.push("IV");
}
if (digits[0] > 4 && digits[0] < 9) {
  romanNumArray.push("V");
}
if (digits [0] === 9) {
  romanNumArray.push("IX");
}
//10s
if(digits[1] === 1 || digits[1] === 6) {
  romanNumArray.push("X");
}
if (digits[1] === 2 || digits[1] === 7) {
  romanNumArray.push("XX");
}
if (digits[1] === 3 || digits[1] === 8) {
  romanNumArray.push("XXX");
}
if (digits[1] === 4) {
  romanNumArray.push("XL");
}
if (digits[1] > 4 && digits[1] < 9) {
  romanNumArray.push("L");
}
if (digits[1] === 9) {
  romanNumArray.push("XC");
}
//100s
if (digits [2] === 1 || digits[2] === 6) {
  romanNumArray.push("C");
}
if (digits [2] === 2 || digits[2] === 7) {
  romanNumArray.push("CC");
}
if (digits [2] === 3 || digits[2] === 8) {
  romanNumArray.push("CCC");
}
if (digits [2] === 4) {
  romanNumArray.push("CD");
}
if (digits[2] > 4 && digits[2] < 9) {
  romanNumArray.push("D");
}
if (digits[2] === 9) {
  romanNumArray.push("CM");
}
//1000s
if (digits [3] === 1 || digits[3] === 6) {
  romanNumArray.push("M");
}
if (digits [3] === 2 || digits[3] === 7) {
  romanNumArray.push("MM");
}
if (digits [3] === 3 || digits[3] === 8) {
  romanNumArray.push("MMM");
}
if (digits [3] === 4) {
  romanNumArray.push("IVbar");
}
if (digits[3] > 4 && digits[3] < 9) {
  romanNumArray.push("Vbar");
}
if (digits[3] === 9) {
  romanNumArray.push("IXbar");
}
//think of how to do this with a key-indexed Object (or array) and a for-loop.

var result = romanNumArray.reverse().join("");
return result;
}



convert(36);



// convert(5) should return "V".
// convert(9) should return "IX".
// convert(12) should return "XII".
// convert(16) should return "XVI".
// convert(29) should return "XXIX".
// convert(44) should return "XLIV".
// convert(45) should return "XLV"
// convert(68) should return "LXVIII"
// convert(83) should return "LXXXIII"
// convert(97) should return "XCVII"
// convert(99) should return "XCIX"
// convert(500) should return "D"
// convert(501) should return "DI"
// convert(649) should return "DCXLIX"
// convert(798) should return "DCCXCVIII"
// convert(891) should return "DCCCXCI"
// convert(1000) should return "M"
// convert(1004) should return "MIV"
// convert(1006) should return "MVI"
// convert(1023) should return "MXXIII"
// convert(2014) should return "MMXIV"
// convert(3999) should return "MMMCMXCIX"
