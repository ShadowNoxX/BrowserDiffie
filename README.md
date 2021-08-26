# Example

##### Add this to your html
```html
<script src="diffie-min.js">
```
##### Showcase
```javascript
var server = new DH();
var alice = new DH();
var bob = new DH();

server.generateCommonKey();

alice.inform(server.generator, server.prime);
bob.inform(server.generator, server.prime);

alice.generateSecret();
bob.generateSecret();

alice.generatePublic();
bob.generatePublic();

alice.generateShared(bob.public);
bob.generateShared(alice.public);

console.log(alice.shared === bob.shared); // If this outputs true then it worked
```
https://jsfiddle.net/4zd7bgs9/6/
