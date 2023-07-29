//==========NAVIGATION BTN
const btnMenu = document.querySelector(".btn_menu");
const btnClose = document.querySelector(".btn_close");
const navigation = document.querySelector(".nav");

btnMenu.addEventListener("click", () => {
    navigation.classList.add("active")
})

btnClose.addEventListener("click", () => {
    navigation.classList.remove("active")
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