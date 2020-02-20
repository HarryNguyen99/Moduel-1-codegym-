function upArrowPressed() {
    let element = document.getElementById("songoku");
    element.style.top = parseInt(element.style.top) - 10 + 'px';
}
function downArrowPressed() {
    let element = document.getElementById("songoku");
    element.style.top = parseInt(element.style.top) + 10 + 'px';
}
function leftArrowPressed() {
    let element = document.getElementById("songoku");
    element.style.left = parseInt(element.style.left) - 10 + 'px';
}
function rightArrowPressed() {
    let element = document.getElementById("songoku");
    element.style.left = parseInt(element.style.left) + 10 + 'px';
}
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
        case 40:
            downArrowPressed();
            break;
    }
}
function docReady() {
    window.addEventListener('keydown', moveSelection);
}
