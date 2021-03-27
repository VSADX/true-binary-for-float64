# Converting true binary representation for float64
## Examples
### Convert a number to its binary
```js
const string_binary = float_ieee.bits(42)
console.log(string_binary)
```
### Convert string binary back to the number
```js
const num = float_ieee.num(string_binary)
console.log(num) // 42, it's a match!
```
