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
        return this.getLowerCase(this.content);
    }

    this.isPalindrome = function () {
        return this.processedContent() === this.processedContent().reverse();
    }
}
