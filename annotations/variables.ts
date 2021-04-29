let apples: number = 4;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined


// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'blue', 'black'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, false, true];

// Classes
class Car {

}
let car: Car = new Car();

// Object literal
let point: { x:number; y: number} = {
    x: 10,
    y: 20
}

// function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20 }'
const coordinations = JSON.parse(json); 
console.log(coordinations) // {x: 10, y: 20 }

