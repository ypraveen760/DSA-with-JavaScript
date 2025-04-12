//first way loop way
const addUpTo1 = (n) => {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total = total + i; //Short hand total +=i;
  }

  return total;
};
var t1 = performance.now();
addUpTo1(10000000);
var t2 = performance.now();
console.log(`total time: ${(t1 - t2) / 1000}seconds`);

//second way math way

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}
var t1 = performance.now();
addUpTo2(10000000);
var t2 = performance.now();
console.log(`total time: ${(t1 - t2) / 1000}seconds`);
