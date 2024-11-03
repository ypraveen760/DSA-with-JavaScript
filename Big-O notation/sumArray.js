const sum = (n) => {
  let total = 0;
  for (let i = 0; i < n.length; i++) {
    total += n[i];
  }
  return total;
};
console.log(sum([1, 2, 3, 4, 5, 99]));
