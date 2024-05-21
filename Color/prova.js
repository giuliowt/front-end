const div1 = document.getElementById("first")
const div2 = document.getElementById("second")
const div3 = document.getElementById("third")
const div4 = document.getElementById("fourth")
const options = document.getElementById("options")
const option = document.getElementsByClassName("option")
const menu = options.getElementsByTagName("img")[0]
const choice = document.getElementById("menu")
choice.style.visibility = "hidden"

if (window.innerWidth < 1000) {
    options.style.visibility = "hidden"
    menu.style.visibility = "visible"
} else {
    options.style.visibility = "visible"
    menu.style.visibility = "hidden"
}

div2.style.height = window.innerHeight + "px"
div3.style.height = window.innerHeight + "px"
div4.style.height = window.innerHeight + "px"



window.addEventListener("resize", () => {
    div1.style.height = window.innerHeight + "px"
    div2.style.height = window.innerHeight + "px"
    div3.style.height = window.innerHeight + "px"
    div4.style.height = window.innerHeight + "px"

    if (window.innerWidth < 1000) {
        options.style.visibility = "hidden"
        menu.style.visibility = "visible"
        menu.classList.add("active")
    } else {
        options.style.visibility = "visible"
        menu.style.visibility = "hidden"
        menu.classList.remove("active")
        choice.classList.remove("menu-animated")
        choice.classList.add("menu-hidden")
        setTimeout(() => {
            choice.style.visibility = "hidden"
        }, 300);
    }

})

document.addEventListener("scroll", () => {
    let pos1 = div1.getBoundingClientRect()
    let pos2 = div2.getBoundingClientRect()
    let pos3 = div3.getBoundingClientRect()

    if ((pos1.top < window.innerHeight) && (pos1.bottom-100 >= 0)) {
        option[0].classList.add("pos")
        option[1].classList.remove("pos")
        option[2].classList.remove("pos")
    } else if ((pos2.top < window.innerHeight) && (pos2.bottom-100 >= 0)) {
        option[1].classList.add("pos")
        option[0].classList.remove("pos")
        option[2].classList.remove("pos")
    } else if ((pos3.top < window.innerHeight) && (pos3.bottom-100 >= 0)) {
        option[0].classList.remove("pos")
        option[1].classList.remove("pos")
        option[2].classList.add("pos")
    } else {
        option[0].classList.remove("pos")
        option[1].classList.remove("pos")
        option[2].classList.remove("pos")
    }
})

function showMenu() {
    if (choice.style.visibility == "hidden") {
        choice.style.visibility = "visible"
        choice.classList.add("menu-animated")
        choice.classList.remove("menu-hidden")
    } else {
        choice.classList.remove("menu-animated")
        choice.classList.add("menu-hidden")
        setTimeout(() => {
            choice.style.visibility = "hidden"
        }, 300);
    }
}

