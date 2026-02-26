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

document.querySelectorAll(".dropdown p").forEach(file => {
    file.addEventListener("click", () => {
        if(file.textContent.trim() === "info.txt") {
            
            fileContent.textContent = "standard mesh model example for weekly check. resize proof nonsense:                                                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo omnis accusantium voluptatum? Velit ut ratione cupiditate vel nemo magni voluptatem maxime, qui voluptatum nulla non blanditiis rerum dignissimos illum? Repellat. Aspernatur culpa sapiente consequatur velit totam dolor excepturi molestias ut possimus sequi libero quas fugit repellat consectetur, fugiat accusantium quis unde blanditiis ipsum, eum explicabo quam in quasi atque. Impedit!";
        } 
        else {
            fileContent.textContent = `Selected file: ${file.textContent}`;
        }
    });
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

