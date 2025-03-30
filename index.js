// Your code here
/* const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "Arrowleft") {
        moveDodgerLeft();
    }
}); */

/* function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "Arrowright") {
        moveDodgerRight();
    }
}); */

/* function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    // Get the width of the game field (assuming it's stored in a container with id 'game')
    const gameWidth = document.getElementById("game").offsetWidth;

    // If the right edge of the dodger (left + 40px) is less than the game width, move it right
    if (left + 40 < gameWidth) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {  // Added condition for ArrowRight
        moveDodgerRight();
    }
}); */

// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {const leftNumbers = dodger.style.left.replace("px", "");
   const left = parseInt(leftNumbers, 10); if (left > 0) {dodger.style.left = `${ left - 1}px`;} 
}

document.addEventListener("keydown", function(e) {if (e.key === "ArrowLeft") { moveDodgerLeft();}});

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left < window.innerWidth - dodger.offsetWidth) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});