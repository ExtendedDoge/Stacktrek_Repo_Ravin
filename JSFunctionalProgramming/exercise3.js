// const euros = [29.76, 41.85, 46.5]
// const average = euros.reduce((a, b) => a + b, 0) / euros.length;
// console.log(average);


const euros = [29.76, 41.85, 46.5];
const initialValue = 0;

function getAvg(euros) {
    const total = euros.reduce((prevValue, currentValue) => prevValue + currentValue, initialValue);
    return total / euros.length;
}
console.log(getAvg(euros));