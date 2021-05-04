class Vehicle {
    color: string;

    constructor(color: string) {
        this.color = color;
    }
    
    protected honk():void {
        console.log('beep')
    }
}

// class Car extends Vehicle {
//     private drive():void {
//         console.log('vroom')
//     }

//     startDrivingProcess():void {
//         this.drive();
//         this.honk()
//     }
// }

const vehicle = new Vehicle('orange');
// // vehicle.drive();
// // vehicle.honk();
console.log(vehicle.color)
// const car = new Car();
// car.startDrivingProcess();
// car.honk();