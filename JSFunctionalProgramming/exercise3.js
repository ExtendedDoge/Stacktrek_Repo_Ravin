// const euros = [29.76, 41.85, 46.5]
// const average = euros.reduce((a, b) => a + b, 0) / euros.length;
// console.log(average);


const euros = [29.76, 41.85, 46.5];

function getAvg(euros) {
    const total = euros.reduce((acc, c) => acc + c, 0);
    return total / euros.length;
}

const average = getAvg(euros);
console.log(average);