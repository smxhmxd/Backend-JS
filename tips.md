## export default method VS export { method }

In JavaScript, `export default` and `export { method }` are two ways to export modules, but they serve different purposes and are used in different contexts. Let's break down the differences between them, when to use each, and how to import them.

### `export default`

The `export default` syntax is used to export a single value or function from a module. It is typically used when a module is designed to export one main thing.

#### Example

**module.js**
```javascript
// Exporting a default function
export default function greet() {
  console.log("Hello, world!");
}
```

**importing.js**
```javascript
// Importing the default function
import greet from './module.js';

greet(); // Outputs: Hello, world!
```

#### Key Points

- A module can have only one default export.
- When importing, you can choose any name for the imported entity.
- Default exports are often used for the main functionality of the module.

### `export { method }`

The `export { method }` syntax is used to export named values, which can be functions, variables, or objects. This allows a module to export multiple values.

#### Example

**module.js**
```javascript
// Exporting named functions
export function greet() {
  console.log("Hello, world!");
}

export function farewell() {
  console.log("Goodbye, world!");
}
```

**importing.js**
```javascript
// Importing named functions
import { greet, farewell } from './module.js';

greet(); // Outputs: Hello, world!
farewell(); // Outputs: Goodbye, world!
```

#### Key Points

- A module can have multiple named exports.
- When importing, you must use the exact names of the exported entities.
- Named exports are useful for exporting multiple functions or variables from a module.

### Combining Default and Named Exports

A module can have both default and named exports.

#### Example

**module.js**
```javascript
// Exporting a default function
export default function main() {
  console.log("This is the main function");
}

// Exporting named functions
export function greet() {
  console.log("Hello, world!");
}

export function farewell() {
  console.log("Goodbye, world!");
}
```

**importing.js**
```javascript
// Importing the default and named functions
import main, { greet, farewell } from './module.js';

main();     // Outputs: This is the main function
greet();    // Outputs: Hello, world!
farewell(); // Outputs: Goodbye, world!
```

### When to Use Each

- **Use `export default`** when:
  - The module is designed to export a single primary value, function, or class.
  - You want the flexibility to import it with any name.

- **Use `export { method }`** when:
  - The module needs to export multiple values or functions.
  - You want to explicitly name and import only the parts you need.

### Summary

| Feature                  | `export default`                                 | `export { method }`                               |
|--------------------------|--------------------------------------------------|---------------------------------------------------|
| Number of exports        | One per module                                   | Multiple per module                               |
| Import syntax            | `import anyName from './module.js';`             | `import { methodName } from './module.js';`       |
| Flexibility in naming    | Can be imported with any name                    | Must be imported with the exact exported name     |
| Use case                 | Single main export                               | Multiple exports, selectively importing           |

By understanding these differences and use cases, you can choose the appropriate export method for your module's design and usage requirements.


## async/await in Javascript

The `async` and `await` keywords in JavaScript are used to handle asynchronous operations more gracefully and readably compared to traditional promise chaining. They are part of ES2017 (ECMAScript 2017) and provide a way to work with promises synchronously.

### Key Concepts

- **`async` Function:**
  - Declares an asynchronous function.
  - Automatically returns a promise.
  - If the function returns a value, the promise is resolved with that value.
  - If the function throws an error, the promise is rejected with that error.

- **`await` Expression:**
  - Pauses the execution of an `async` function, waiting for the promise to resolve.
  - Can only be used inside an `async` function.
  - Resumes execution once the promise is resolved or rejected, returning the resolved value or throwing the error.

### Example

Here’s a simple example to illustrate how `async` and `await` work:

#### Without `async`/`await` (Using Promises)
```javascript
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 2000);
  });
}

fetchData().then(data => {
  console.log(data); // Outputs: Data fetched
});
```

#### With `async`/`await`
```javascript
async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 2000);
  });
}

async function main() {
  const data = await fetchData();
  console.log(data); // Outputs: Data fetched
}

main();
```

### Benefits of `async`/`await`

1. **Readability:** Code using `async`/`await` is often easier to read and understand, resembling synchronous code.
2. **Error Handling:** Easier error handling with `try`/`catch` blocks.
3. **Maintaining Execution Flow:** Avoids the "callback hell" problem by flattening nested callbacks.

### Example with Error Handling

```javascript
async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error fetching data");
    }, 2000);
  });
}

async function main() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error); // Outputs: Error fetching data
  }
}

main();
```

### Summary
- `async` functions make it easy to work with promises by using the `await` keyword to pause execution until a promise is resolved or rejected.
- This approach leads to cleaner, more readable code and simplifies error handling compared to traditional promise chains.