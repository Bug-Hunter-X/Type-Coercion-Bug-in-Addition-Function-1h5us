# Type Coercion Bug in JavaScript Addition Function

This repository demonstrates a subtle bug related to type coercion in a simple JavaScript addition function.

## The Bug
The `foo` function is intended to return `null` if either of its arguments is `null`. However, due to JavaScript's loose typing and type coercion, it incorrectly returns 0 when either argument is 0.

## The Solution
The solution involves using strict equality (`===`) to check for `null` values and explicit checks for 0 if null-handling is not desired for 0 values.  The improved solution handles 0 as a valid numerical input rather than treating it like `null`.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` to see the buggy code.
3. Open `bugSolution.js` to see the corrected code.
4. Run the JavaScript files in your browser's console or using Node.js.