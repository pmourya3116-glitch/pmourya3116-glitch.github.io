// Smooth reveal animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

sections.forEach(section=>{
    observer.observe(section);
});

// Typing Effect

const text = [
    "QA Engineer",
    "Automation Tester",
    "Manual Tester",
    "Selenium Engineer",
    "Playwright Learner"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".hero-text h2").textContent =…