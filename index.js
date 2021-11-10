module.exports = Phrase;

String.prototype.reverse = function () {
    return Array.from(this).reverse().join('');
}

function Phrase(content) {

    this.content = content;

    this.getLowerCase = function (inputString) {
        return inputString.toLowerCase();
    }

    this.processedContent = function () {
        return this.getLowerCase(this.getLetters(this.content)); 
    }

    this.getLetters = function () {
        let onlyLetters = '';
        Array.from(this.content).forEach(character => {
            if((character >= 'a' && character <= 'z') || (character >= 'A' && character <= 'Z')) onlyLetters += character;
        });
        return onlyLetters;
    }

    this.isPalindrome = function () {
        return this.processedContent() === this.processedContent().reverse();
    }
}
