// Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

interface Player {
    role: string;
    name: string;
    age: number;

}

const animal: Player = {
    role: 'All Rounder',
    name: 'Mushfiqur',
    age: 5
}

const getProperty = <T , K extends keyof T>(animal: T, name: K): T[K] => {
    return animal[name];
}

console.log(getProperty(animal, 'name'));