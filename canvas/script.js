function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function radomColor() {
    return `rgb(
    ${randomNumber(0,255)},
    ${randomNumber(0,255)},
    ${randomNumber(0,255)}
    )`
}

const container = document.getElementById('container');

container.style.position = "relative"; 

container.addEventListener("click", function(event){
    const canvas = document.createElement("div");
    canvas.classList.add("newElement");

    const size = randomNumber(40,120);
    canvas.style.width = size+"px";
    canvas.style.height = size+"px";
    canvas.style.backgroundColor = radomColor();

    canvas.style.position = "absolute"; 

    canvas.style.left = event.clientX+"px";
    canvas.style.top = event.clientY+"px";

    container.appendChild(canvas);
});