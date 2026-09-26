const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const message = document.getElementById("message");
const exmessage = document.getElementById("exmessage");
const title = document.querySelector("h1")

function random(min, max) {
    return Math.random() * (max - min) + min;
}

noButton.addEventListener("mouseenter", () => {
    noButton.style.transform =
        `translate(${random(-300, 300)}px, ${random(-150, 150)}px)`;
});

noButton.addEventListener("click", () => {

    noButton.style.transform =
        `translate(${random(-300, 300)}px, ${random(-150, 150)}px)`;

    setTimeout(() => {
        message.textContent = "";
    }, 1000);
});

yesButton.addEventListener("click", () => {

    message.textContent = "Как би с др лучшего тиктокера ❤️";
    message.classList.add("show")

    title.remove()

    yesButton.style.display = "none";
    noButton.style.display = "none";

    for (let i = 0; i < 100; i++) {
        createConfetti();
    }
    setTimeout(() => {

        exmessage.classList.add('show')
        exmessage.textContent = "Сегодня официально разрешаю:\n -кушать сколько влезет\n -ничего не делать\n -не придумал, времени уже нет 😭😭😭"
    }, 500);
});

function createConfetti() {

    const confetti = document.createElement("div");

    confetti.classList.add("confetti");

    confetti.style.background =
        `hsl(${random(0, 360)}, 100%, 60%)`;

    confetti.style.setProperty("--x", `${random(-700, 700)}px`);
    confetti.style.setProperty("--y", `${random(-500, 500)}px`);

    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 1500);
}