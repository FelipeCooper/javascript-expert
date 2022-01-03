const { deepStrictEqual } = require("assert");

let counter = 0;
let counter2 = counter;

counter2++;

deepStrictEqual(counter2, 1);
deepStrictEqual(counter, 0);
console.log(counter, counter2); // printed "0 && 1" because for primitives value, you copy the value.

let obj = { counter: 0 };
let obj2 = obj;

obj2.counter++;

deepStrictEqual(obj, { counter: 1 });
deepStrictEqual(obj2, { counter: 1 });
console.log(obj, obj2); // printed "{ counter: 1 } { counter: 1 }" because for objects value you copy the reference pointer in memory heap, so the two object are point for the same pointer.
