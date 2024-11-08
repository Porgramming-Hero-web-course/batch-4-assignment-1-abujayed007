// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

function sumArray(nums: number[]): number {
    const sumOfArray = nums.reduce((accumulated, currentValue) => accumulated + currentValue, 0)
    return sumOfArray;
}

console.log(sumArray([1, 2, 3, 4, 5]));
