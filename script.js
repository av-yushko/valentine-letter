document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const card = document.querySelector(".card");
    const body = document.querySelector("body");

    container.addEventListener("mouseenter", () => {
        card.style.transition = "top 0.5s";
        card.style.top = "-90px";
    });

    container.addEventListener("mouseleave", () => {
        card.style.transition = "top 0.5s";
        card.style.top = "0";
    });

    container.addEventListener("click", () => {
        card.style.transition = "top 0.5s";
        card.style.top = "-90px";
    }, );

    body.addEventListener("click", () => {
        card.style.transition = "top 0.5s";
        card.style.top = "0";
    }, true);
});

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("background-music");

    // Перевіряємо, чи дозволено автозапуск
    const playAudio = () => {
        audio.play().catch(error => {
            console.warn("Автовідтворення заблоковано, потрібно взаємодія з користувачем.", error);
        });
    };

    playAudio();

    // Альтернатива – включення після першої взаємодії
    document.addEventListener("click", playAudio, { once: true });
});

