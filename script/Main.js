/********************HEAD LEFT VIEW************************/
window.addEventListener("scroll", function () {
    const headImg = document.querySelector(".header-image");
    const headName = document.querySelector(".name");
    const scrollPos = window.scrollY;
    const scrollThreshold = 100;
    if (scrollPos > scrollThreshold) {
        headImg.classList.add("view");
        headName.classList.add("view");
    } else {
        headImg.classList.remove("view");
        headName.classList.remove("view");
    }
});

/***********************HEAD NAV**************************/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll= () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            
            });
        };
    });
    
    //remove toogle menu option
    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');
};


/********************TECH SKILL BAR***********************/
$(document).ready(function () {
    var skillIcons = $('#skill-icon i');

    var skillBars = $('.bar');

    skillIcons.on('click', function () {
        skillBars.removeClass('skill-active');
        
        var skillId = $(this).attr('id');

        $('#skill-' + skillId).addClass('skill-active');
    });
});

/*********************PRO SKILLS BAR**********************/
const buttons = document.querySelectorAll("#buttons button");
const path1 = document.querySelector(".path-1");
const percentage = document.querySelector(".percentage");

let activeBtn = null;
let activeAnimation = "";
let activeValue = "90%";


buttons.forEach(button => {
    button.addEventListener("click", () => {
        const id = button.id;
        path1.style.animation = `animate-path${id === "Creativity" ? 1 : id === "Teamwork" ? 2 : id === "Communication" ? 3 : 4} 1s 1s linear forwards`;

        const percentageValue = id === "Creativity" ? "90%" : id === "Teamwork" ? "85%" : id === "Communication" ? "70%" : "80%";
        percentage.textContent = percentageValue;

        activeBtn = button;
        activeAnimation = path1.style.animation;
        activeValue = percentage.textContent;

        buttons.forEach((item) => item.classList.remove('active'));
        button.classList.add("active");
    });
    button.addEventListener("mouseenter", () => {
        const id = button.id;
        path1.style.animation = `animate-path${id === "Creativity" ? 1 : id === "Teamwork" ? 2 : id === "Communication" ? 3 : 4} 1s 1s linear forwards`;

        const percentageValue = id === "Teamwork" ? "85%" : id === "Creativity" ? "90%" : id === "Communication" ? "70%" : "80%";
        percentage.textContent = percentageValue;
    });
    button.addEventListener("mouseleave", () => {
        if(button !== activeBtn){
        path1.style.animation = activeAnimation;
        percentage.textContent = activeValue;}
    });
});