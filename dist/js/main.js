//==========NAVIGATION BTN
const btnMenu = document.querySelector(".btn_menu");
const btnClose = document.querySelector(".btn_close");
const navigation = document.querySelector(".nav");
const navItems = document.querySelectorAll(".nav_list_item_link");

btnMenu.addEventListener("click", () => {
    navigation.classList.add("active")
})

btnClose.addEventListener("click", () => {
    navigation.classList.remove("active")
})

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active")
    })
})

//==========SLIDER
var counter = 1;

setInterval(function() {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if(counter > 3) {
        counter = 1;
    }
},5000)

//==========SCROLL
const scrollTopBtn = document.querySelector(".scrollToTop_btn");

window.addEventListener("scroll", function() {
    scrollTopBtn.classList.toggle("active", window.scrollY > 350)
})

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
})
