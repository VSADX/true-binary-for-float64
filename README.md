# Converting true binary representation for float64  
  
<br>  
  
```js
import { Binary } from "@vsadx/true-binary"

const some_num = 13

// `toString(2)` gives us the binary version of 13
some_num.toString(2) 

// this isn't how JavaScript sees numbers though, 
// it uses IEEE-754 floating point standard

// give it a try! 
Binary.stringify(13)
```
  
<br>  
  
You can learn a lot about why some mathmatical operations are fast but other, 
even similar ones, are slower. In some cases, using the IEEE 754 format directly 
increased operation speeds for game developers at one time. This raw binary format 
lets you make speed vs accuracy tradeoffs more explicitly.  
  
There are two methods so far; you can use `stringify` or `parse`. It is similar 
to the `JSON` object which also has those methods. In this case, there is no 
reviver parameter or much other configuration settings. 
  
<br>  
  
### Convert a number to its binary
```js
const string_binary = Binary.stringify(42)
console.log(string_binary)
```
  
<br>  
  
### Convert string binary back to the number
```js
const num = Binary.parse(string_binary)
console.log(num) // 42, it's a match!
```
  
<br>
  
### Using `Binary`
  
**Live CDN link**
```html
<script src="https://cdn.jsdelivr.net/gh/VSADX/true-binary-for-float64@main/float-ieee.js" type="module"></script>
```  
**NPM Package**  
https://www.npmjs.com/package/@vsadx/true-binary
  
References  
@\0kku
