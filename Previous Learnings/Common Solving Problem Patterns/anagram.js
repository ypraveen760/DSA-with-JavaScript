/**
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 *  An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
 *
 */
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let objstr1 = {};
  let objstr2 = {};
  for (letter of str1) {
    objstr1[letter] = (objstr1[letter] || 0) + 1;
    console.log(objstr1);
  }
  for (letter of str2) {
    objstr2[letter] = (objstr2[letter] || 0) + 1;
    console.log(objstr2);
  }

  for (let key in objstr1) {
    if (objstr1[key] !== objstr2[key]) {
      return false;
    }
  }
  return true;
}
console.log(validAnagram("Az ", "A z"));
