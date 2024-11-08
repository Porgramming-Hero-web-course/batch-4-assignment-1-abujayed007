// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.



interface Rectangle {
    kind: 'rectangle';
    height: number;
    width: number,

}


interface Circle {
    kind: 'circle';
    radius: number;

}

interface SquareFeet {
    kind: 'square feet';
    height: number;
    width: number,
}


const rectangle: Rectangle = {
    kind: 'rectangle',
    height: 50,
    width: 35,
}


const circle: Circle= {
    kind: 'circle',
    radius: 35
}

const squareFeet : SquareFeet = {
    kind: 'square feet',
    height:14,
    width:12
} 
type Shape = Circle | Rectangle | SquareFeet;

function calculateShapeArea(shape: Shape) {
    if (shape.kind === 'rectangle') {
        return shape.height + shape.width * 2
    } else if (shape.kind === 'circle') {
        return Math.PI * shape.radius * shape.radius
    } else if (shape.kind === 'square feet') {
        return shape.height * shape.width 
    }
    else {
        console.log(console.error()
        )
    }
}

console.log(calculateShapeArea(rectangle));
console.log(calculateShapeArea(circle));      
console.log(calculateShapeArea(squareFeet));      