const text = "WELCOME TO GITHUB PAGES";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 150);
    }
}

typeEffect();
