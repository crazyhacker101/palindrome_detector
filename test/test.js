let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function () {
    describe("#isPalindrome", function () {

        it("should return false for a non palindrome", function () {
            let nonPalindrome = new Phrase("apple");
            assert(nonPalindrome.isPalindrome() === false);
        });

        it("should return true for a plain palindrome", function () {
            let phrase = new Phrase("racecar");
            assert(phrase.isPalindrome());
        });

        it("should return true for a mixed case palindrome", function() {
            let mixedCase = new Phrase("RaceCar");
            assert(mixedCase.isPalindrome());
        });

        it("should return true for a palindrome with punctuation", function() {
            let punctuatedPhrase = new Phrase("Madam, I’m Adam.");
            assert(punctuatedPhrase.isPalindrome());
        });  

        describe("#getLetters", function() {
            
            it("should return only letters", function() {
                let phrase = new Phrase("Madam, I’m Adam.");
                assert.strictEqual(phrase.getLetters(), "MadamImAdam");
            });

            it("should return empty string for no match", function() {
                let phrase = new Phrase("1234.56");
                assert.strictEqual(phrase.getLetters(), "");
            });
        });

    });

});