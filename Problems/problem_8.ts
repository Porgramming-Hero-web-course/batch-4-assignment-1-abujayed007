

interface Person {
    name: string;
    age: number;
    email: string;
    phone?: number;
}

const person: Person = {
    name: 'Peter',
    age: 50,
    email: 'jayed@gmail.com'
}

const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]): boolean => {
    return keys.every((key) => key in obj)
}



const res1 = validateKeys(person, ["name", "age"])
console.log(res1);



