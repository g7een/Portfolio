document.querySelectorAll(".nav-tab").forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove("active");
        tab.classList.add("active");
    });
});

const scrollTopbtn = document.querySelector(".scroll-top");

scrollTopbtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const aboutbtn = document.getElementById("about-btn");
aboutbtn.addEventListener("click", () => {
    console.log('aboutPressed');
    document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
});

const renderbtn = document.getElementById("renders-btn");
renderbtn.addEventListener("click", () => {
    console.log('rendersPressed');
    document.querySelector(".renders").scrollIntoView({ behavior: 'smooth' });
});

const otherbtn = document.getElementById("other-btn");
otherbtn.addEventListener("click", () => {
    console.log('otherPressed');
    document.querySelector(".other").scrollIntoView({ behavior: 'smooth' });
});

const home = document.querySelector(".nav-home");
home.addEventListener("click", () => {
    document.querySelector(".landing").scrollIntoView({ behavior: 'smooth' });
});

