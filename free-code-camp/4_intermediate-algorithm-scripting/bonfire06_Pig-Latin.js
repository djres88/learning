/*
Bonfire: Pig Latin
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.indexOf()
Array.push()
Array.join()
String.substr()
String.split()
*/

function translate(str) {
 var vowels = ["a", "e", "i", "o", "u"];
 var firstVowelPos = str.length;
 var test = str.length;
 for (var i = 0; i < 5; i++) {
   test = str.indexOf(vowels[i]);
   if (test < firstVowelPos && test >= 0) {
     firstVowelPos = test;
   }
 }
 var word = str.substr(firstVowelPos) + str.substr(0, firstVowelPos);
 if (firstVowelPos === 0) {
   word += "way";
 } else {
   word += "ay";
 }

 return word;
}

translate("consonant");


/*

translate("california") should return "aliforniacay".
translate("paragraphs") should return "aragraphspay".
translate("glove") should return "oveglay".
translate("algorithm") should return "algorithmway".
translate("eight") should return "eightway".
*/
