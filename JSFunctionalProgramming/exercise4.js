let cities = [
    { name: 'Los Angeles', population: 3792621 },
    { name: 'New York', population: 8175133 },
    { name: 'Chicago', population: 2695598 },
    { name: 'Houston', population: 2099451 },
    { name: 'Philadelphia', population: 1526006 }
];

const listofCitiesGreaterThan3Million = cities.filter(city => city.population > 3000000);
console.log(listofCitiesGreaterThan3Million)

const cityLowestPopulation = [...cities].reduce((previous, current) => (current.population < previous.population) ? current : previous)

console.log(cityLowestPopulation)