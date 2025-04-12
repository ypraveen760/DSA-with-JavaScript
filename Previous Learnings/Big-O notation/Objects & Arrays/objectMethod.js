let car = {
  model: "44x",
  color: "red",
  topSpeed: 500,
};
console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));
console.log(car.hasOwnProperty("topSpeed"));
let countryData = { country: "india" };
Object.assign(car, countryData);
console.log(Object.entries(car));

Object.seal(car); //this will make existing property to get edited but prevent from adding new property
car.color = "blue"; //allowed
delete car.topSpeed; //not allowed
console.log(car);
Object.freeze(car);
car.topSpeed = 600; //this change will not make effect
console.log(car.topSpeed);
