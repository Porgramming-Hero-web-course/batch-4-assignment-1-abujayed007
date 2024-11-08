// Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.    

class Car {

    constructor(public make: string, public model: string, public year: number,) { }


    getCarAge() {
        const currentDate = new Date().getFullYear()
        const carAge =  currentDate -this.year
        return carAge
    }
}

const myCar = new Car('Audi', 'Audi Q3', 2019)
console.log(myCar.getCarAge())