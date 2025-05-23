/*
FREQUENCY COUNTERS
This pattern uses objects or sets to collect values/frequencies of values
This can often avoid the need for nested loops or O(N^2) operations with arrays / strings
*/
/**
 * AN EXAMPLE
Write a function called same, which accepts two arrays.
The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
same (1,2,3, [4,1,9) /1 true 
same ( [1,2,3], [1,9]) // false
same ([1,2,1], [4,4,1]) // false (must be same frequency)
 */
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    //checking length is equal
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2); //we are getting the index no searching by vale two thing done 1(value search if there get index no for removing that element)
    if (correctIndex === -1) {
      //if not then we get -1
      return false;
    }
    arr2.splice(correctIndex, 1); //splice inden no and 1 denote that start from that index no and rempve 1 element
  }
  return true; //if all satisfied return true
}

console.log(same([2, 3, 4, 5], [4, 9, 16, 25])); //this is easy way but time complexity is greater   O(n²)

// lets see high performance way
function sameEnhanced(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    console.log(frequencyCounter1);
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    console.log(frequencyCounter2);
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
console.log(sameEnhanced([2, 2, 3, 4, 5], [4, 9, 4, 16, 25]));
