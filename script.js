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
