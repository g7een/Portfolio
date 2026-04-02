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

const contact = document.getElementById("contact-btn");
contact.addEventListener("click", () => {
    console.log('contactPressed');
    document.querySelector(".contact").scrollIntoView({ behavior: 'smooth' });
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


const contactBtn = document.querySelector(".contactMe");
const contactPanel = document.getElementById("contactPanel");
const panelClose = document.querySelector(".panel-close");

contactBtn.addEventListener("click", () => {
    contactPanel.classList.add("active");
});

panelClose.addEventListener("click", () => {
    contactPanel.classList.remove("active");
});

const slides = document.querySelector(".slides");
const btns = document.querySelectorAll(".navbtn");

let currentSlide = 0;

function sliderNav(index) {
    currentSlide = index;

    slides.style.transform = `translateX(-${index * 100}vw)`;

    
    btns.forEach(btn => btn.classList.remove("active"));
    btns[index].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});

const menu = document.querySelector('.menu-container');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
});


const fileContent = document.getElementById("fileContent");
const fileMap = {
    "file_01.obj": {
        type: "image",
        src: "project1_images/sketch_example.jpg"
    },
    "textures.png": {
        type: "image",
        src: "project1_images/uvmap_example.png"
    },
    "file_02.mtl": {
        type: "text",
        content: "Material file: defines surface properties, lighting response, and textures."
    },
    "info.txt": {
        type: "text",
        content: "standard mesh model example for weekly check. resize proof nonsense: Lorem ipsum dolor sit amet consectetur adipisicing elit..."
    }
};

document.querySelectorAll(".dropdown p").forEach(file => {
    file.addEventListener("click", () => {
        const name = file.textContent.trim();
        const fileData = fileMap[name];

        if (!fileData) return;

        if (fileData.type === "image") {
            fileContent.innerHTML = `
                <img src="${fileData.src}" alt="${name}" class="viewer-img">
            `;
        } else {
            fileContent.textContent = fileData.content;
        }
    });
});


const meshResetBtn = document.querySelector('.meshresetpos');

meshResetBtn.addEventListener('click', () => {

    camera.position.copy(initialCameraPosition);

    controls.target.copy(initialCameraTarget);
    controls.update();

    cube.position.copy(initialMeshPosition);
    cube.rotation.copy(initialMeshRotation);

});



import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";



const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    30, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000
);
camera.position.z = 5; 


const renderer = new THREE.WebGLRenderer({ alpha: true });
const container = document.getElementById("container3D");
renderer.setSize(container.clientWidth, container.clientHeight);
camera.aspect = container.clientWidth / container.clientHeight;
camera.updateProjectionMatrix();

document.getElementById("container3D").appendChild(renderer.domElement);


const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0xFFFFFF });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 5);
scene.add(directionalLight);


const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

const initialCameraPosition = camera.position.clone();
const initialCameraTarget = new THREE.Vector3(0, 0, 0);

const initialMeshRotation = cube.rotation.clone();
const initialMeshPosition = cube.position.clone();



function animate() {
    requestAnimationFrame(animate);
    controls.update(); 
    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    renderer.setSize(container.clientWidth, container.clientHeight);
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
});


const lightR = document.getElementById("lightR");
const lightG = document.getElementById("lightG");
const lightB = document.getElementById("lightB");

function updateLightColor() {
    const r = lightR.value / 255;
    const g = lightG.value / 255;
    const b = lightB.value / 255;

    directionalLight.color.setRGB(r, g, b);
}

lightR.addEventListener("input", updateLightColor);
lightG.addEventListener("input", updateLightColor);
lightB.addEventListener("input", updateLightColor);


const lightX = document.getElementById("lightX");
const lightY = document.getElementById("lightY");
const lightZ = document.getElementById("lightZ");

function updateLightPosition() {
    directionalLight.position.set(
        parseFloat(lightX.value),
        parseFloat(lightY.value),
        parseFloat(lightZ.value)
    );
}

lightX.addEventListener("input", updateLightPosition);
lightY.addEventListener("input", updateLightPosition);
lightZ.addEventListener("input", updateLightPosition);

const lightMenu = document.querySelector('.lightmenu');
const lightDropdown = document.querySelector('.light-dropdown');

lightMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    lightMenu.classList.toggle('active');

});

lightDropdown.addEventListener('click', (e) => {
    e.stopPropagation();
});

document.addEventListener('click', () => {
    lightMenu.classList.remove('active');
});




/* ------------------- CALENDAR FUNCTIONS -------------------- */

const events = {
    "2026-03-18": [
        {title: "Got calendar working", desc: "Epic calendar functions"},
        {title: "Second Event", desc: "nothing to see"}
    ],
    "2026-03-19": [
        {title: "Independent Study Check", desc: "yep"}
    ],
};



const datesEl = document.getElementById("calendarDates");
const monthYear = document.getElementById("monthYear");
const eventPanel = document.getElementById("eventPanel");

let date = new Date();

function formatDate(year, month, day) {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function renderCalendar() {
    datesEl.innerHTML = "";

    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDay = new Date(year,month,1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    monthYear.textContent = date.toLocaleString("default", {
        month: "long",
        year: "numeric"
    });

    for (let i = 0; i < firstDay; i++) {
        datesEl.appendChild(document.createElement("div"));
    }

    for (let i = 1; i <= lastDate; i++) {
        const dayEl = document.createElement("div");
        dayEl.classList.add("day");

        const dateKey = formatDate(year, month, i);

        dayEl.innerHTML = `
            <span class="day-number">${i}</span>
            <div class="event-dots"></div>
        `;

        if (
            i === new Date().getDate() &&
            month === new Date().getMonth() &&
            year === new Date().getFullYear()
        ) {
            dayEl.classList.add("today");
        }

        if (events[dateKey]) {
            const dots = dayEl.querySelector(".event-dots");

            events[dateKey].forEach(() => {
                const dot = document.createElement("span");
                dot.classList.add("dot");
                dots.appendChild(dot);
            });
        }

        dayEl.addEventListener("click", () => {
            document.querySelectorAll(".day").forEach(d => d.classList.remove("selected"));
            dayEl.classList.add("selected");

            showEvents(dateKey);
        });

        datesEl.appendChild(dayEl);
    }
}

function showEvents(dateKey) {
    eventPanel.innerHTML = "";

    if (!events[dateKey]) {
        eventPanel.innerHTML = `<p>No events</p>`;
        return;
    }

    events[dateKey].forEach(event => {
        const div = document.createElement("div");
        div.classList.add("event-item");

        div.innerHTML = 
        `
            <strong>${event.title}</strong>
            <p>${event.desc}</p>
        `;

        eventPanel.appendChild(div);
    });
}


document.getElementById("prevMonth").onclick = () => {
    date.setMonth(date.getMonth()-1);
    renderCalendar();
};

document.getElementById("nextMonth").onclick = () => {
    date.setMonth(date.getMonth()+1);
    renderCalendar();
};

renderCalendar();


// ------- CAROUSEL SCROLL ANIMS ----------- //
const track = document.querySelector('.track');
const containerS = document.querySelector('.scroller-container');

let position = 0;
let speed = 0.5;

let isDragging = false;
let lastX = 0;
let velocity = 0;

function getLoopWidth() {
    return track.scrollWidth/2;
}

function animateCarousel() {
    if (!isDragging) {
        position-= speed;
        position+= velocity;
        velocity*= 0.95;
    }

    const loopWidth = getLoopWidth();

    if (position <= -loopWidth) position += loopWidth;
    if (position >= 0) position -= loopWidth;

    track.style.transform = `translateX(${position}px)`;

    requestAnimationFrame(animateCarousel);
}

animateCarousel();

function startDrag(x) {
    isDragging = true;
    lastX = x;
    velocity = 0;
    containerS.style.cursor = 'grabbing';
}

function dragMove(x) {
    if (!isDragging) return;
    const delta = x - lastX;
    position += delta;
    velocity = delta;
    lastX = x;
}

function endDrag() {
    isDragging = false;
    containerS.style.cursor = 'grab';
}

containerS.addEventListener('mousedown', e => startDrag(e.pageX));
containerS.addEventListener('mousemove', e => dragMove(e.pageX));
containerS.addEventListener('mouseup', endDrag);
containerS.addEventListener('mouseleave', endDrag);

containerS.addEventListener('touchstart', e => startDrag(e.touches[0].pageX), { passive: true });
containerS.addEventListener('touchmove', e => dragMove(e.touches[0].pageX), { passive: true });
containerS.addEventListener('touchend', endDrag);

containerS.style.cursor = 'grab';

const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
});



const collage = document.getElementById("collage");
const items = document.querySelectorAll(".collage-item");
const mouseInfo = document.getElementById("mouseInfo");


document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    items.forEach((item, i) => {
        const depth = (i + 1) * 0.3;
        item.style.transform += ` translate(${x * depth}px, ${y * depth}px)`;
    });

    mouseInfo.style.left = e.clientX + "px";
    mouseInfo.style.top = e.clientY + "px";
});



items.forEach(item => {
    item.addEventListener("mouseenter", () => {
        mouseInfo.textContent = item.dataset.info;
        mouseInfo.style.opacity = 1;
    });

    item.addEventListener("mouseleave", () => {
        mouseInfo.style.opacity = 0;
    });
});
