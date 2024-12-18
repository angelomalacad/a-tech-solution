const burgerIcon = document.getElementsByClassName("mobile-nav")[0];
const mobileMenu = document.getElementsByClassName("div-nav")[0];

burgerIcon.addEventListener("click", function(){
    mobileMenu.classList.toggle("show");
});