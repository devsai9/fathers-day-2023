setInterval(createHeart, 70);
setInterval(createHeart, 500);
setInterval(createHeart, 3000);

function createHeart() {
    let heart = document.createElement('h1');
    heart.innerText = '❤️';
    heart.style.left = Math.floor(95 * Math.random()) + '%';
    heart.classList.add('hearts');
    document.body.appendChild(heart);
    console.log('Heart Created');
    setTimeout(function () {heart.style.display = 'none';}, 2100);
}

const tip = document.querySelector('#tip');

setTimeout(function() {tip.style.display = 'block';}, 6000);

document.addEventListener('click', hideTip);

function hideTip() {
    if (tip.style.display == 'block') {
        tip.style.display = 'none';
        setTimeout(function() {tip.style.display = 'block';}, 6000);
    } else {}
}