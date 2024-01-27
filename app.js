const colors = ['blue', 'red', 'pink', 'lemon', 'yellow', 'orange', 'violet', 'cyan', 'aliceblue', 'rosybrown'];
var btn = document.getElementById('btn');
var color = document.querySelector('.color');

btn.onclick = () => {
    const randomNumber = getRandomNumber();
    color.textContent = colors[randomNumber];
    document.body.style.backgroundColor = colors[randomNumber];
}

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}