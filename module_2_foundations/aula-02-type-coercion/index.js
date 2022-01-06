9999999999999999; // 16
// 10000000000000000
true + 2;
// 3
"21" + true;
// '21true'
"21" - true;
// 20
"21" - -1;
// 22
0.1 + 0.2 === 0.3;
// false

3 > 2 > 1;
// false
3 > 2 >= 1;
// true

"B" + "a" + +"a" + "a";
// BaNaNa

"1" == 1;
"1" === 1;

// --------------

console.assert(String(123) === "123", "explicit convertion to string");
console.assert(123 + "" === "123", "implicit convertion to string");

console.assert(("hello" || 1) === "hello", "return first element");
console.assert(("hello" && 1) === 1, "return last element");

//------

const item = {
  name: "cooper",
  age: "23",
  toString() {
    return `Name: ${this.name} e age ${this.age}`;
  },
  valueOf() {
    return 12;
  },

  [Symbol.toPrimitive](coercionType) {
    console.log("trying transform to: ", coercionType);
    const type = {
      string: JSON.stringify(this),
      number: this.age,
    };
    return type[coercionType] || type.string;
  },
};
//here he call toString function
//console.log(new String(item));
// here he call valueOf function
//console.log(new Number(item));

//after [Symbol.toPrimitive]
//console.log(new Number(item));
//console.log(new String(item));
// attempt to transform in default coercion type
//console.log(new Date(item));

console.assert(item + 0 === '{"name":"cooper","age":"23"}0');

console.assert(!!item); // true

console.assert("teste".concat(item) === 'teste{"name":"cooper","age":"23"}');
