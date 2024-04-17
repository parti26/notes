# Covering learning materials

### Js
**.split()**
-> to handle each piece of data separately
-> 
``` JS

let fruits = "apple,orange,banana,grape";
let fruitsArray = fruits.split(",");
console.log(fruitsArray);
// Output: ['apple', 'orange', 'banana', 'grape']

let greeting = "Hello";
let result = greeting.split();
console.log(result);
// Output: ['Hello']

let characters = "hello";
let charsArray = characters.split("");
console.log(charsArray);
// Output: ['h', 'e', 'l', 'l', 'o']


```
**.includes()**
-> boolean értéket ad vissza (t/f)
```JS
const sentence = "Hello, welcome to the jungle.";

console.log(sentence.includes("welcome"));  // Outputs: true
console.log(sentence.includes("hello"));  // Outputs: false (case-sensitive)
console.log(sentence.includes("to", 10));  // Outputs: true (starts searching at index 10)
console.log(sentence.includes("to", 20));  // Outputs: false (starts searching at index 20)

```


#### Synchronous (Sync) File Reading


#### Css
. -> classra hivatkozol

#### Html
.name > div {} vagy div > div {} - minden gyerekere hivatkozol 