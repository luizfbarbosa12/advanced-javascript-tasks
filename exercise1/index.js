//1 - Create an array with duplicated items
let array = [15, 32, 23, 27, 32, 23];

// 2 - Create a function that filters the array checking for duplicated values by index
const getDuplicates = (array) => {
    return array.filter((value, index) =>
    array.indexOf(value) !== index
  );
};

console.log(getDuplicates(array));
