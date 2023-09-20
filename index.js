document.getElementById('calc-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const shapeType = document.getElementById('shape').value;
    const calculationType = document.getElementById('calculation').value;
    const value1 = parseFloat(document.getElementById('value1').value);
    const value2 = parseFloat(document.getElementById('value2').value);

    let shape;
    let result;

    switch (shapeType) {
        case 'Circle':
            shape = new Circle(value1);
            break;
        case 'Square':
            shape = new Square(value1);
            break;
        case 'Triangle':
            shape = new Triangle(value1, value2);
             break;
        case 'Rectangle':
            shape = new Rectangle(value1, value2);
            break;
        default:
            alert('Invalid shape selection');
            return;
    }
try {
    switch (calculationType) {
        case 'area':
            result = shape.area();
            break;
        case 'perimeter':
            result = shape.perimeter();
            break;
        default:
            alert('Invalid calculation selection');
            return;
    }
} catch (error) {
    // Print specific error  
  document.getElementById('result').textContent = error.message;
}
finally {
  // Display result or error
  document.getElementById('result').textContent = result;
}
document.getElementById('result').textContent = `Result: ${result.toFixed(2)}`;
});

// Define the Shape classes and their methods here (Circle, Square, etc.).
// Define the Shape class with a name property
class Shape {
    constructor(name) {
        this.name = name;
    }
}

// Define the Circle class, extending Shape
class Circle extends Shape {
    constructor(radius) {
        super('Circle');
        this.radius = radius;
    }

    // Calculate the area of a circle
    area() {
        return Math.PI * this.radius ** 2;
    }

    // Calculate the circumference of a circle
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

// Define the Square class, extending Shape
class Square extends Shape {
    constructor(side) {
        super('Square');
        this.side = side;
    }

    // Calculate the area of a square
    area() {
        return this.side ** 2;
    }

    // Calculate the perimeter of a square
    perimeter() {
        return 4 * this.side;
    }
}

// Define the Triangle class, extending Shape
class Triangle extends Shape {
    constructor(base, height) {
        super('Triangle');
        this.base = base;
        this.height = height;
    }

    // Calculate the area of a triangle
    area() {
        return (parseFloat(this.base) * parseFloat(this.height)) / 2;
    }

    // Calculate the perimeter of a triangle (assuming it's equilateral)
    perimeter() {
        return 3 * parseFloat(this.base); // This is a simplified formula for equilateral triangles
    }
}

// Define the Rectangle class, extending Shape
class Rectangle extends Shape {
    constructor(width, height) {
        super('Rectangle');
        this.width = width;
        this.height = height;
    }

    // Calculate the area of a rectangle
    area() {
        return parseFloat(this.width) * parseFloat(this.height);
    }

    // Calculate the perimeter of a rectangle
    perimeter() {
        return 2 * (parseFloat(this.width) + parseFloat(this.height));
    }
}
