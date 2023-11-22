
class Vehicle {
    constructor(type, year, make, model, color, location) {
        this.type = type;
        this.year = year;
        this.make = make;
        this.model = model;
        this.color = color;
        this.location = location;
    }

    locationBusiness() {
        console.log('Location ' + this.location + ' makes ' + this.type + ' type of vehicles.');
    }

    carInfo() {
        console.log('Year: ' + this.year + ', ' + 'Make: ' + this.make + ', ' + 'Model: ' + this.model);
    }

    mileage(highway, city) {
        console.log('Mileage: ' + highway + '/' + city);
    }
}


let jeep = new Vehicle('SUV', '2017', 'Jeep', 'Grand Cherokee', 'Black', 'Chicago, Illinois');
let bmw = new Vehicle('Truck', '2011', 'BMW', 'X5', 'Red', 'Charlotte, North Carolina');
let truck = new Vehicle('SUV', '2020', 'Ram', '2500', 'White', 'Chicago, Illinois');


jeep.locationBusiness();
jeep.carInfo();
jeep.mileage(23, 17);

bmw.locationBusiness();
bmw.carInfo();
bmw.mileage(21, 18);

truck.locationBusiness();
truck.carInfo();
truck.mileage(16, 11);

