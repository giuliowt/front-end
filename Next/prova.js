const options = document.getElementById("options")
const menu = document.getElementById("menu")
const choices = menu.getElementsByTagName("div")
const hiddenMenu = document.getElementById("hiddenmenu")
const main = document.getElementById("main")
const text = main.getElementsByTagName("h1")
const startBtn = main.getElementsByTagName("input")[0]
const scene = document.getElementById("scene-div")
const double = document.getElementById("double")
const sections = document.getElementById("sections")


hiddenMenu.style.visibility = "hidden"
let visible = false
const first = choices[0]
const second = choices[1]
const third = choices[2]

function responsiveSections() {
    double.style.flexDirection = "column"
    sections.style.height = "200vmin"
    double.style.height = "170vmin"
    sections.getElementsByClassName("section")[0].style.margin = "0"
    sections.getElementsByClassName("section")[1].style.margin = "0"

    sections.getElementsByClassName("section")[0].style.width = "40%"
    sections.getElementsByClassName("section")[1].style.width = "40%"
    sections.getElementsByClassName("section")[0].style.height = "70vmin"
    sections.getElementsByClassName("section")[1].style.height = "70vmin"

    sections.getElementsByClassName("section")[0].addEventListener("mouseover", () => {
        sections.getElementsByClassName("section")[0].style.width = "45%"
        sections.getElementsByClassName("section")[0].style.height = "80vmin"
        sections.getElementsByClassName("section")[0].style.animation = "section-responsive 500ms linear"
    })

    sections.getElementsByClassName("section")[1].addEventListener("mouseover", () => {
        sections.getElementsByClassName("section")[1].style.width = "45%"
        sections.getElementsByClassName("section")[1].style.height = "80vmin"
        sections.getElementsByClassName("section")[1].style.animation = "section-responsive 500ms linear"
    })

    sections.getElementsByClassName("section")[0].addEventListener("mouseleave", () => {
        sections.getElementsByClassName("section")[0].style.width = "40%"
        sections.getElementsByClassName("section")[0].style.height = "70vmin"
        sections.getElementsByClassName("section")[0].style.animation = ""
    })

    sections.getElementsByClassName("section")[1].addEventListener("mouseleave", () => {
        sections.getElementsByClassName("section")[1].style.width = "40%"
        sections.getElementsByClassName("section")[1].style.height = "70vmin"
        sections.getElementsByClassName("section")[1].style.animation = ""
    })
}

function notResponsiveSections() {
    double.style.flexDirection = "row"
    sections.style.height = "120vmin"
    double.style.height = "80vmin"
    sections.getElementsByClassName("section")[0].style.margin = "0 7vmin"
    sections.getElementsByClassName("section")[1].style.margin = "0 7vmin"

    sections.getElementsByClassName("section")[0].style.width = "30%"
    sections.getElementsByClassName("section")[1].style.width = "30%"
    sections.getElementsByClassName("section")[0].style.height = "60vmin"
    sections.getElementsByClassName("section")[1].style.height = "60vmin"


    sections.getElementsByClassName("section")[0].addEventListener("mouseover", () => {
        sections.getElementsByClassName("section")[0].style.width = "35%"
        sections.getElementsByClassName("section")[0].style.height = "70vmin"
        sections.getElementsByClassName("section")[0].style.animation = "section-anim 500ms linear"
    })

    sections.getElementsByClassName("section")[1].addEventListener("mouseover", () => {
        sections.getElementsByClassName("section")[1].style.width = "35%"
        sections.getElementsByClassName("section")[1].style.height = "70vmin"
        sections.getElementsByClassName("section")[1].style.animation = "section-anim 500ms linear"
    })

    sections.getElementsByClassName("section")[0].addEventListener("mouseleave", () => {
        sections.getElementsByClassName("section")[0].style.width = "30%"
        sections.getElementsByClassName("section")[0].style.height = "60vmin"
        sections.getElementsByClassName("section")[0].style.animation = ""
    })

    sections.getElementsByClassName("section")[1].addEventListener("mouseleave", () => {
        sections.getElementsByClassName("section")[1].style.width = "30%"
        sections.getElementsByClassName("section")[1].style.height = "60vmin"
        sections.getElementsByClassName("section")[1].style.animation = ""
    })
}


function startMenuAnim() {
    first.style.animation = "menu-anim 300ms linear"
    second.style.animation = "menu-anim 300ms linear"
    third.style.animation = "menu-anim 300ms linear"
}

function endMenuAnim () {
    first.style.animation = ""
    second.style.animation = ""
    third.style.animation = ""
}

function showMenu() {
    hiddenMenu.style.visibility = "visible"
    hiddenMenu.style.animation = "showmenu-anim 500ms ease"
}

function hideMenu() {
    hiddenMenu.style.animation = "hidemenu-anim 500ms ease"
    setTimeout(() => {
        hiddenMenu.style.visibility = "hidden"
    }, 450)
}

function smallMain() {
    main.style.display = "unset"
    text[0].style.textAlign = "center"
    text[1].style.textAlign = "center"
    text[2].style.textAlign = "center"
    startBtn.style.alignSelf = "center"
    scene.style.width = "100%"
    scene.getElementsByTagName("img")[0].style.width = "50vmin"
    scene.style.marginTop = "10vmin"
}

function bigMain() {
    main.style.display = "flex"
    text[0].style.textAlign = "left"
    text[1].style.textAlign = "left"
    text[2].style.textAlign = "left"
    startBtn.style.alignSelf = "left"
    scene.style.width = "40%"
    scene.getElementsByTagName("img")[0].style.width = "80%"
    scene.style.marginTop = "0"
}

function clickMenu() {

    second.style.visibility = "hidden"

    first.style.transform = "rotateZ(45deg) translateY(2.2vmin)"
    first.style.animation = "first-anim 200ms linear"

    third.style.transform = "rotateZ(-45deg) translateY(-2.2vmin)"
    third.style.animation = "third-anim 200ms linear"

    
}

function unclickMenu() {
    first.style.transform = "rotateZ(0deg) translateY(0vmin)"
    first.style.animation = "first-anim-hide 200ms linear"

    third.style.transform = "rotateZ(0deg) translateY(-0vmin)"
    third.style.animation = "third-anim-hide 200ms linear"

    setTimeout(() => {
        second.style.visibility = "visible"
    }, 150)
}


main.addEventListener("click", () => {
    hideMenu()
})

sections.addEventListener("click", () => {
    hideMenu()
})

menu.addEventListener("click", () => {
   
    if(!visible && hiddenMenu.style.animation != "hidemenu-anim 500ms ease") {
        showMenu()
        menu.style.pointerEvents = "none"
        setTimeout(() => {
            menu.style.pointerEvents = "all"
        }, 450)

        clickMenu()

    } else if (visible && hiddenMenu.style.animation != "showmenu-anim 500ms ease") {
        hideMenu()
        menu.style.pointerEvents = "none"
        setTimeout(() => {
            menu.style.pointerEvents = "all"
        }, 450)
        unclickMenu()
    }

    visible = !visible
})

if (window.innerWidth <= 700 || screen.width <= 700) {
    options.style.visibility = "hidden"
    menu.style.visibility = "visible"
    startMenuAnim()
    smallMain()
    responsiveSections()
} else {
    options.style.visibility = "visible"
    menu.style.visibility = "hidden"
    endMenuAnim()
    bigMain()
    notResponsiveSections()
}

window.addEventListener("resize", () => {
    if (window.innerWidth <= 700 || screen.width <= 700) {
        options.style.visibility = "hidden"
        menu.style.visibility = "visible"
        second.style.visibility = "visible"
        startMenuAnim()
        smallMain()
        responsiveSections()
    } else {
        options.style.visibility = "visible"
        menu.style.visibility = "hidden"
        second.style.visibility = "hidden"
        endMenuAnim()
        hideMenu()
        bigMain()
        notResponsiveSections()
    }
})

