/* ============================== toggle style switcher ============================= */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const openColors = document.querySelector(".style-switcher");

styleSwitcherToggle.addEventListener("click", () => {
    openColors.classList.toggle("open");
    // console.log("clicked");
});
//  Hide Style - switchewr on scroll
window.addEventListener("scroll", () => {
    if (openColors.classList.contains("open")) {
        openColors.classList.remove("open");
        // console.log("removed");
    }
})
/* ============================== Theme colors ============================= */
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");
        }
    })
}
/* ============================== Theme light and dark ============================= */
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})