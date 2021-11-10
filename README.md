# Phrase object (with palindrome detector)

This is a sample NPM module for detecting complex palindromes by Saurabh Kumar.

The module can be used as follows:

```
$ npm install --global harbinger-palindrome-detector
$ vim test.js
let Phrase = require("harbinger-palindrome-detector");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
```
