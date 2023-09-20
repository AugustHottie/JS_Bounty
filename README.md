# Shape Calculator Documentation

Welcome to the Shape Calculator documentation! This document provides instructions on how to use the Shape Calculator website and explains how classes, switch statements, and try-catch-finally statements were incorporated into its functionality.

## How to Use the Shape Calculator

The Shape Calculator is a tool that helps you calculate the area and perimeter of various shapes. Follow these steps to use the calculator:

1. Select a shape from the dropdown list.
2. Choose the calculation type (Area or Perimeter).
3. Enter the required values for the selected shape.
4. Click the "Calculate" button.
5. The result will be displayed below.

## Shapes and Formulas

Here are the available shapes and their formulas:

- **Circle:**
  - Area = π × r²
  - Perimeter = 2 × π × r

- **Square:**
  - Area = side²
  - Perimeter = 4 × side

- **Rectangle:**
  - Area = width × height
  - Perimeter = 2 × (width + height)

- **Triangle:**
  - Area = (base × height) / 2
  - Perimeter = 3 × base (for equilateral triangles)

## Required Values for Calculations

For accurate calculations, you need to input specific values based on the selected shape:

- **Circle:** You only need to input the radius.
- **Square:** You only need to input the side length.
- **Rectangle:** You need to input both the width and height.
- **Triangle:** You need to input both the base and height.

## Incorporating Classes, Switch Statements, and Try-Catch-Finally

The Shape Calculator website was built using HTML, JavaScript, and CSS. It incorporates several key programming concepts:

- **Classes:** Four shape classes were defined, each representing a different shape (Circle, Square, Rectangle, and Triangle). These classes contain methods to calculate area and perimeter.

- **Switch Statements:** Switch statements were used to determine the selected shape and calculation type, allowing the program to execute the corresponding calculations based on user input.

- **Try-Catch-Finally:** Try-catch blocks were implemented to handle potential errors gracefully. If an error occurs during calculation, a specific error message is displayed. The finally block ensures that the result or error message is displayed to the user.

## Example Code

Here's an example of how the JavaScript code is structured to handle shape calculations:

```javascript
document.getElementById('calc-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Retrieve user inputs and initialize variables

    try {
        // Use switch statements to determine shape and calculation type

        // Perform calculations

    } catch (error) {
        // Handle and display specific error
    } finally {
        // Display result or error message
    }
});
```

### Styling
The Shape Calculator website is styled using CSS, and the Tailwind CSS framework was utilized for a clean and modern design. The website features responsive design, ensuring a seamless user experience on various devices.

### Conclusion
The Shape Calculator is a user-friendly tool for calculating the area and perimeter of different shapes. It incorporates object-oriented programming principles, making it easy to maintain and extend for future shape additions.

Enjoy using the Shape Calculator!
