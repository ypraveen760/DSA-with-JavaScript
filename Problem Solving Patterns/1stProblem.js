//===============================================================
// 1.Can I restate the problem in my own words?
// 2.What are the inputs that go into the problem?
// 3.What are the outputs that should come from the solution to the problem?
// 4.Can the outputs be determined from the inputs? In other words, do I have enough information to solve the
// 5.How should I label the important pieces of data that are a part of the problem?

function charCount(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }
  return result;
}
console.log(charCount("hello Hii!!@#$@#"));
