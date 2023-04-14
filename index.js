const $ = document.querySelector.bind(document);
const services = $(".services__link");
const about = $(".about__link");
const doctor = $(".doctor__link");
const home = $(".home__link");
const navList = $(".nav__list");

navList.onclick = function (e) {
    const linkActive = $(".nav__link.nav__link--active");
    if (linkActive) {
        linkActive.classList.remove("nav__link--active");
    }
    e.target.classList.add("nav__link--active");
};
