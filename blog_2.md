# Type Guards
Type Guards in TypeScript are ways to help the TypeScript compiler understand what type a variable is at a particular point in the code. This is especially useful when you have a variable that can be more than one type (a union type), and you want TypeScript to safely handle it based on the actual type at runtime.

Let’s look at different types of type guards and examples that demonstrate how they help.


1. typeof Type Guard
Purpose: Used to check the type of primitive values (e.g., string, number, boolean).

Example:
Imagine you have a function that can accept either a number or a string, and you want to add them together, but only if both are numbers.

function add(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  }
  return a.toString() + b.toString(); 
}

console.log(add(10, 20));  
console.log(add("Hello", "World")); 
Why it's useful: Without typeof, TypeScript wouldn't know if a and b are numbers or strings, and trying to add a string and a number would give an error. Using typeof, we can narrow the type and safely perform the operation.
2. instanceof Type Guard
Purpose: Used to check if an object is an instance of a class.

Example:
Suppose you have two classes, Dog and Cat, and you want to call methods on these objects that are only available on specific types.

class Dog {
  bark() { console.log("Woof!"); }
}

class Cat {
  meow() { console.log("Meow!"); }
}

function speak(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); 
  } else {
    animal.meow(); 
  }
}

const dog = new Dog();
const cat = new Cat();

speak(dog); 
speak(cat); 
Why it's useful: instanceof helps TypeScript know which type you're dealing with when it's an object (either a Dog or a Cat). Without it, TypeScript would be unsure which methods are safe to call on the animal.
3. in Type Guard
Purpose: Checks if an object has a certain property. Useful when objects have different shapes.

Example:
You have two types of animals: Fish and Bird. Each has different methods (swim for fish and fly for birds). You can check which one it is based on whether the object has the property swim or fly.

interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

function move(animal: Fish | Bird) {
  if ('swim' in animal) {
    animal.swim(); 
  } else {
    animal.fly(); 
  }
}

const fish: Fish = { swim: () => console.log("Fish swimming") };
const bird: Bird = { fly: () => console.log("Bird flying") };

move(fish); 
move(bird); 
Why it's useful: The in operator lets TypeScript know which type you're dealing with based on the presence of specific properties, so you can safely access those properties.
4. Custom Type Guards
Purpose: A custom function that narrows the type using your own conditions.

Example:
You have two types, Employee and Contractor. You want to check if a person is an Employee based on a property called role.

interface Employee {
  name: string;
  role: string;
}

interface Contractor {
  name: string;
  hourlyRate: number;
}

function isEmployee(person: Employee | Contractor): person is Employee {
  return (person as Employee).role !== undefined;
}

function printPersonDetails(person: Employee | Contractor) {
  if (isEmployee(person)) {
    console.log(person.role); 
  } else {
    console.log(person.hourlyRate); 
  }
}

const emp: Employee = { name: "Alice", role: "Developer" };
const contractor: Contractor = { name: "Bob", hourlyRate: 50 };

printPersonDetails(emp); 
printPersonDetails(contractor); 
Why it's useful: The isEmployee function acts as a custom type guard, letting TypeScript know that, inside the if block, person is definitely an Employee (because it has the role property). This allows safe access to role without type errors.

5. Literal Type Guard
Purpose: Directly compares a value to a specific literal value ("pending", "approved", etc.).

Example:
You have a Status type that can be "pending", "approved", or "rejected", and you want to perform different actions based on the specific status.

type Status = "pending" | "approved" | "rejected";

function handleStatus(status: Status) {
  if (status === "pending") {
    console.log("Approval is pending.");
  } else if (status === "approved") {
    console.log("Approved!");
  } else {
    console.log("Rejected.");
  }
}

handleStatus("pending"); 
handleStatus("approved"); 
handleStatus("rejected"); 
Why it's useful: By comparing the status value directly to a specific literal (like "pending"), TypeScript knows which branch to take, allowing you to safely handle each case without type errors.

