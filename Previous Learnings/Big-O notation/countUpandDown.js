function countUpandDown(n) {
  console.log("welcome Counting up!");
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
  console.log("To the Top now Counting bottom");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("To the bottom ,byee");
}
countUpandDown(10);
