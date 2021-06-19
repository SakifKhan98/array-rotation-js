// rotateLeft has following parameters:
// n = size of array
// d = amount of rotations
// arr[n] is an array

const rotateLeft = (n, d, arr) => {
  for (let i = 0; i < d; i++) {
    const frontItem = arr.shift();
    arr.push(frontItem);
  }

  return arr;
};

const arraySize = 5;
const numOfRotations = 4;
const array = [1, 2, 3, 4, 5];

const expectedOutput = [5, 1, 2, 3, 4];

const rotatedArray = rotateLeft(arraySize, numOfRotations, array);
console.log(rotatedArray);
