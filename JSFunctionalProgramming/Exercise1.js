let numberList = [2, 1, 10];
numberList.sort((a, b) => b - a);

let sum = 0;
let dif = 0

for (let expected = 0; expected < numberList.length - 1; expected++) {
    dif = numberList[expected] - numberList[expected + 1];
    sum += dif
};

console.log(sum);