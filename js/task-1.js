function isEnoughCapacity(products, containerSize) {
  let total = 0;
  for (let product in products) {
    total += products[product];
  }
  return total <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8));
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12));
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14));
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7));

// alternative with object.values() (- to extract quantities/converts values into an array), reduce() (- to sum up the quantities/array method reducing an array to one single value (array.reduce(callback, initialValue))), callback function ((sum, quantity) => sum + quantity) - arrow function)
// function isEnoughCapacity(products, containerSize) {
//   const total = Object.values(products).reduce(
//     (sum, quantity) => sum + quantity,
//     0
//   );
//   return total <= containerSize;
// }
