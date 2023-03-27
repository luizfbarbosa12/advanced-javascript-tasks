// Define a function that takes in two parameters: an array of carrot types, and the capacity of the bag.

// Inside the function, sort the array of carrot types in descending order based on the value-to-weight ratio of each carrot type. You can calculate the value-to-weight ratio of each carrot type by dividing its price by its weight.

// Define two variables to keep track of the current weight and maximum value of the bag. Initialize both variables to zero.

// Loop through the sorted array of carrot types. For each carrot type, check if adding it to the bag would cause the bag to exceed its capacity. If it would, skip to the next carrot type. Otherwise, add the carrot to the bag and update the current weight and maximum value of the bag.

// Once you've looped through all the carrot types, return the maximum value of the bag.

// Test your function with different inputs to make sure it works correctly.

let carrotTypes = [
  { kg: 5, price: 100 },
  { kg: 7, price: 150 },
  { kg: 3, price: 70 },
  { kg: 50, price: 30 },
];
let capacity = 20;

function optimalBag(carrotTypes, capacity) {
  carrotTypes.forEach(function (carrotType) {
    carrotType.ratio = carrotType.price / carrotType.kg;
  });

  carrotTypes = carrotTypes.sort(function (a, b) {
    return b.ratio - a.ratio;
  });

  let betterCarrot = carrotTypes[0];

  let value = 0;

  while (capacity > 0) {
    capacity -= betterCarrot.kg;
    value += betterCarrot.price;
  }

  if (capacity == 0) return value;

  capacity += betterCarrot.kg;
  value -= betterCarrot.price;

  let newCarrotTypes = carrotTypes.filter(function (carrotType) {
    return carrotType.kg <= capacity;
  });

  if (newCarrotTypes.length == 0) return value;

  value += optimalBag(newCarrotTypes, capacity);

  return value;
}

console.log(optimalBag(carrotTypes, capacity));
