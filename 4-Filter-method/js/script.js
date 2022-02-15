// Filter method

// If you want to filter the data displayed to a user,
// you can use the filter method.
// The filter method is used to create a new array from an existing
// array that the filter method is called on.

// The filter method takes a function as an argument.
// This function receives each item in the array as an argument.
// If the function returns true, the item is added to the new array.

// Example 2
const numbers = [1, 3, 6, 17, 4, 9, 0, 11, 5];

console.log("Before: ", numbers);

const filteredResult = numbers.filter((number) => {
    if (number > 5){
        return true;
    }
});

/*function filterNumbers (number) {
    if (number > 5) {
        return true;
    }
}*/

console.log("After: ", filteredResult); // [6, 17, 9, 11]


// Example 2
const evenNumbers = numbers.filter((number) => {
    if (number % 2 === 0) {
        return true;
    }
});

/*function filterEvenNumbers(number) {
    if (number % 2 === 0) {
        return true;
    }
}*/

console.log("Even numbers: ", evenNumbers); // 6, 4, 0