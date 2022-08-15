// const euros = [29.76, 41.85, 46.5]
// const average = euros.reduce((a, b) => a + b, 0) / euros.length;
// console.log(average);


const euros = [29.76, 41.85, 46.5];
const avg = euros.reduce(getAverage, euros);

const getAverage = (total, average) => {
    return total + Math.round(average);
}
console.log(getAverage(total))