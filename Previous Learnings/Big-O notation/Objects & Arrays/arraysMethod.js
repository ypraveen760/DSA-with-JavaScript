let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.pop(); //to remove item from last
console.log(arr);
arr.push(10); //to add item at last
console.log(arr);
arr.shift(); //to remove item from start(if possible use pop due to re-indedxing it can affect  the performance of the system)
console.log(arr);
arr.unshift(1); //to add item from start(if possible use push due to re-indedxing it can affect  the performance of the system)
console.log(arr);
let arr2 = [20, 30, 40];
let mergeArr = arr.concat(arr2); //to merge 2 or more array first arr is array where it going to merge and in (this arrays will merge in first array)
console.log(mergeArr);
//slice create shallow copy it doesnt mutate array
let slice = mergeArr.slice(2, 6);
console.log(slice);
let sliceStart = arr.slice(3);
console.log(sliceStart); //we can use negative number also
//real life application coppying array ,extracting position of array,negative indexing for recent element;
let negativeSlice = arr.slice(-7, -3);
console.log(negativeSlice);

//splice to remove element specify start and deleteCount(10-was start after 10 items ,3 was delete 3 items)
let remove = mergeArr.splice(10, 3); //splice mutate the array
console.log(mergeArr); //it will have remaining items
console.log(remove); //it will have removed items

//splice adding item set delete count 0 and give item list (10-was start after 10 items ,0 was there so no item got deleted and there was 3 item it get added at 10th place)
mergeArr.splice(10, 0, 20, 30, 40);
console.log(mergeArr); //20,30,40 has added

//splice replacing item to replace we have to delete item and add there item
mergeArr.splice(10, 3, 11, 12, 13); //started from 10 item deleted 3 item and added item which has been given
console.log(mergeArr);
//we can also use negative number to remove item from last

//forEach /map/filter/reduce
//forEach normal method using
let arr3 = ["pintu", "chintu", "boka", "choka", "Doka"];
arr3.forEach((name, index) => {
  console.log(`RANK=${index}:${name}`);
});
arr3.forEach((name) => {
  console.log(`NAME:${name}`);
});
//forEach modifying
let user = [
  { name: "pintu", age: 25 },
  { name: "chintu", age: 55 },
  { name: "lantu", age: 15 },
  { name: "loktu", age: 28 },
];
user.forEach((user) => {
  user.age + 1;
  console.log(user.name, user.age);
});
//real time application (logging value,action with index,summing values)

//map create new array it doesn't mutate the array
let mod = arr3.map((name) => {
  let modName = name + "Pandey";
  console.log(modName);
  return modName;
});
console.log(mod);

let moduser = user.map((user) => {
  let modname = user.name + "Binda";
  let modage = user.age + 1; //(user.age += 1); this will modify or mutate the data of array
  return { name: modname, age: modage };
});
console.log(moduser);

//filter
let child = user.filter((user) => {
  return user.age < 18 || user.name === "pintu";
});
console.log(child);

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let even = num.filter((num) => num % 2 === 0);
console.log(even);

//reduce it return single value
let sum = num.reduce((acc, num) => {
  //acc mean accumulated value and and current value ,we can also give current value its optional
  return acc + num;
}, 9); //this is inital value its optional
console.log(sum);
let max = num.reduce((acc, num) => (num > acc ? num : acc));
console.log(max);
