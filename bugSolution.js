function foo(a, b) {
  if (a === null || b === null) {
    return null;
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    return null; //Handle non-numeric inputs
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo(1, null)); // Output: null
console.log(foo(null, null)); // Output: null
console.log(foo(0, 2)); //Output: 2
console.log(foo(1,0)); //Output: 1
console.log(foo('a',2)); //Output: null