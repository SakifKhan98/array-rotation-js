const rotateLeft = (arr, rotations) => {
  //   const rotatedArray = arr.concat();
  for (let i = 0; i < rotations; i++) {
    const frontItem = arr.shift();
    arr.push(frontItem);
  }

  return arr;
};

const numRotations = 4;
const sampleArray = [1, 2, 3, 4, 5];

const expectedOutput = [5, 1, 2, 3, 4];

console.log(rotateLeft(sampleArray, numRotations));
// console.log(expectedOutput);
