let coin = {
    state: 0,
    flip: function () {
        return Math.floor(Math.random() * 2)
    },
    toString: function () {
        if (this.flip() == 0) {
            return 'Heads';
        } else {
            return 'Tails';
        }
    },
    toHTML: function () {
        let image = document.createElement('img');
        if (this.toString() == 'Heads') {
            image.setAttribute('src', 'images/heads-01.jpg');
        } else {
            image.setAttribute('src', 'images/tails-01.jpg');
        }
        image.className = 'coin';
        return image;
    }
};

let destination = document.getElementById('mainWrapper')

let displayTextOnPage = function (string, elementType) {
    let text = document.createTextNode(string);
    let span = document.createElement(elementType);
    let br = document.createElement('br');
    span.appendChild(text);
    destination.appendChild(span);
    destination.appendChild(br);
}

let displayImageOnPage = function (image) {
    destination.appendChild(image);
}
displayTextOnPage("Coin Object Assessment.", "h1")
displayTextOnPage("Flip a coin 20 times Text.", "h3")
for (let i = 0; i < 20; i = i + 1) {
    displayTextOnPage(i + 1 + ": " + coin.toString())
}

displayTextOnPage("Flip a coin 20 times pictures.", "h3")
for (let i = 0; i < 20; i = i + 1) {
    displayImageOnPage(coin.toHTML());
}