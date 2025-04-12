const double = function (arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let a = arr[i] * 2;
    newArr.push(a);
  }
  return newArr;
};
console.log(double([1, 2, 3, 4, 5]));
