const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [
    ['Focus', 'f15'],
    ['cororla'],
    ['suny', '23r']
];

const tracksByMake: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop()

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
    return car.toUpperCase();
})

// Flexible types
const importantDates = [new Date(), '2030-10-10']
const importantDates1: (Date | string)[] = [new Date()]
importantDates1.push('2300-10-10');
importantDates1.push(new Date());
importantDates.push(100)