const cls = document.querySelector("#close-btn");
const mnu = document.querySelector("#menu");
const navlist = document.querySelector(".nav-list ul");

mnu.addEventListener('click', () => {
    navlist.classList.add("active");
})

cls.addEventListener('click', () => {
    navlist.classList.remove("active");
})