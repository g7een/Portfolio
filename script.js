const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const subjectCount = document.getElementById("subjectCount");
const messageCount = document.getElementById("messageCount");

function countWords(text) {
    const words = text.trim().match(/\S+/g);
    return words ? words.length : 0;
}

function updateCounter(input, display, limit) {
    let words = countWords(input.value);

    if (words > limit) {
        const trimmed = input.value
            .trim()
            .split(/\s+/)
            .slice(0, limit)
            .join(" ");

        input.value = trimmed;
        words = limit;
    }

    display.textContent = words;

    display.parentElement.classList.toggle(
        "limit",
        words >= limit
    );
}

subjectInput.addEventListener("input", () => {
    updateCounter(subjectInput, subjectCount, 15);
});

messageInput.addEventListener("input", () => {
    updateCounter(messageInput, messageCount, 150);
});

document.addEventListener("DOMContentLoaded", () => {

    const tabs = {
        about: document.querySelector(".about"),
        models: document.querySelector(".models"),
        projects: document.querySelector(".projects"),
        contact: document.querySelector(".contact")
    };

    const sections = {
        about: document.querySelector(".aboutsection"),
        models: document.querySelector(".viewmodels"),
        projects: document.querySelector(".viewprojects"),
        contact: document.querySelector(".contactform")
    };


    Object.keys(tabs).forEach(section => {
        tabs[section].addEventListener("click", () => {
            sections[section].scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

});