let box= document.querySelector('.box');
let przycisk = document.querySelector('.button');

przycisk.addEventListener('click', changeColor);

function changeColor() {
    box.style.backgroundColor = "red";

}