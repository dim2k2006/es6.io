// Named Export
export const apiKey = 'abc123';

export const url = 'http://wesbos.com/';

export function sayHi(name ) {
    console.log(`Hello the ${name}`);
}

const age = 100;
const dog = 'Snickers';

export {age as old, dog};