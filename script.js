//your JS code here. If required.

const container = document.querySelector(".container");
const numOfBoxes = 800;

for (let i = 0; i < numOfBoxes; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseleave", () => removeColor(square));

    container.appendChild(square);
}

function setColor(element) {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    element.style.backgroundColor = randomColor;
}

function removeColor(element) {
    setTimeout(() => {
        element.style.backgroundColor = "#1d1d1d";
    }, 1000);
}
