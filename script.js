// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "80px";
        navLinks.style.left = "0";
        navLinks.style.width = "100%";
        navLinks.style.padding = "30px";
        navLinks.style.background = "#111827";
        navLinks.style.textAlign = "center";
        navLinks.style.gap = "20px";
    }

});

// =========================
// SCROLL REVEAL
// =========================

const reveals = document.querySelectorAll(".reveal");

function revealElements() {

    const windowHeight = window.innerHeight;

    reveals.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealElements);
revealElements();

// =========================
// COUNTER ANIMATION
// =========================

const counters = document.querySelectorAll(".counter");

const startCounters = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const speed = target / 200;

        const updateCounter = () => {

            count += speed;

            if (count < target) {

                counter.innerText = Math.floor(count).toLocaleString();

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target.toLocaleString() + "+";

            }

        };

        updateCounter();

    });

};

let counterStarted = false;

window.addEventListener("scroll", () => {

    const counterSection = document.querySelector(".counter-section");

    if (!counterSection) return;

    const sectionTop = counterSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight && !counterStarted) {

        startCounters();
        counterStarted = true;

    }

});

// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(15,23,42,.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";

    } else {

        navbar.style.background = "rgba(15,23,42,.75)";
        navbar.style.boxShadow = "none";

    }

});

// =========================
// SMOOTH ACTIVE LINKS
// =========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href").includes(current)
        ) {
            link.classList.add("active-link");
        }

    });

});

// =========================
// HERO PARALLAX
// =========================

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

});

// =========================
// BUTTON RIPPLE EFFECT
// =========================

const buttons = document.querySelectorAll(
    ".primary-btn, .shop-btn, .product-card button"
);

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transition = "0.3s";
        button.style.transform = "translateY(-4px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0) scale(1)";

    });

});

// =========================
// PAGE LOADER ANIMATION
// =========================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "1s";
        document.body.style.opacity = "1";

    }, 100);

});


const themeBtn = document.querySelector(".theme-toggle");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light-theme");

const icon = themeBtn.querySelector("i");

if(document.body.classList.contains("light-theme")){
icon.classList.remove("fa-moon");
icon.classList.add("fa-sun");
}else{
icon.classList.remove("fa-sun");
icon.classList.add("fa-moon");
}

});



const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

});


window.addEventListener("load",()=>{

setTimeout(()=>{

document.querySelector(".loader").style.display="none";

},1200);

});




