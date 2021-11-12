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
        return this.getLowerCase(this.getLetters()); 
    }

    this.getLetters = function () {
        return Array.from(this.content).filter(character => {
            if(character >= 'a' && character <= 'z' || character >= 'A' && character <= 'Z') {
                return character;
            }
        }).join('');
    }

    this.isPalindrome = function () {
        let finalString = this.processedContent();
        if(!!finalString) {
            return finalString === finalString.reverse();
        } else {
            return false;
        }   
    }
}
