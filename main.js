const pacman = document.getElementById('pacman');
const photo = document.querySelector('.img');

//
const posX = 500;
const posY = 150;

pacman.style.left = posX + 'px';
pacman.style.top = posY + 'px';


//
function moveUp() {
    let Y = parseInt(pacman.style.top, 10);
    pacman.style.top = (Y - 20) + 'px';
    pacman.style.transform = 'rotate(90deg)';
}
function moveDown() {
    let Y = parseInt(pacman.style.top, 10);
    pacman.style.top = (Y + 20) + 'px';
    pacman.style.transform = 'rotate(-90deg)';
}
function moveLeft() {
    let X = parseInt(pacman.style.left, 10);
    pacman.style.left = (X - 20) + 'px';
    pacman.style.transform = 'rotate(0deg)';
}
function moveRight() {
    let X = parseInt(pacman.style.left, 10);
    pacman.style.left = (X + 20) + 'px';
    pacman.style.transform = 'rotate(180deg)';
}

//
setInterval(function() {
    let Color = pacman.style.backgroundColor;

    if (Color === 'yellow') {
        pacman.style.backgroundColor = 'black';
    } else {
        pacman.style.backgroundColor = 'yellow';
    }
}, 300);

//
function check() {
    let photoRect = photo.getBoundingClientRect();

    if (pacmanRect.left < photoRect.right &&
        pacmanRect.right > photoRect.left &&
        pacmanRect.top < photoRect.bottom &&
        pacmanRect.bottom > photoRect.top) {
        photo.style.display = 'none';
    }
}

//
document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'ArrowUp':
            moveUp();
            break;
        case 'ArrowDown':
            moveDown();
            break;
        case 'ArrowLeft':
            moveLeft();
            break;
        case 'ArrowRight':
            moveRight();
            break;
    }

    pacmanRect = pacman.getBoundingClientRect();

    check();
});