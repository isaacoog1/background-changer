const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
var color = document.querySelector('.color');
var btn = document.querySelector('#btn');

window.onload = () => {
    setInterval(function() {
        var hexColor = '#';
        for(let i = 0; i < 6; i++) {
            var randomNumber = getRandomNumber();
            hexColor += hex[randomNumber];
        }
        color.textContent = hexColor;
        document.body.style.backgroundColor = hexColor;
    },100)
}

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}