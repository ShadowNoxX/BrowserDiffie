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

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Public_key_shared_secret.svg/500px-Public_key_shared_secret.svg.png">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Diffie-Hellman_Key_Exchange.svg/500px-Diffie-Hellman_Key_Exchange.svg.png">
