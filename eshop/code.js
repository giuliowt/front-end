let selections = document.getElementsByClassName("selection")
let promo = document.getElementsByClassName("promo")
let x


let y = 0
let first = true
let visibleProducts = document.getElementsByClassName("products")[0].getElementsByClassName("product")
let invisibleProductsFirst = document.getElementsByClassName("first")[0].getElementsByClassName("product")
let invisibleProductsLast = document.getElementsByClassName("last")[0].getElementsByClassName("product")
let invisibleProducts = invisibleProductsFirst + invisibleProductsLast
let arrows = document.getElementsByClassName("products-arrow")


let allTag = document.getElementsByClassName("model")[0]
let appleTag = document.getElementsByClassName("model")[1]
let samsungTag = document.getElementsByClassName("model")[2]
let redmiTag = document.getElementsByClassName("model")[3]

let appleProducts = document.getElementsByClassName("apple")
let samsungProducts = document.getElementsByClassName("samsung")
let redmiProducts = document.getElementsByClassName("redmi")
let allProducts = document.getElementsByClassName("brands")[0].getElementsByClassName("brand")

let newSelections = document.getElementsByClassName("new-selection")
let z
let news = document.getElementsByClassName("news")
let hideNew = document.getElementsByClassName("new-product-hide")[0]
let wasClicked = false


let topFooter = document.getElementsByClassName("top")[0]
let topEls = document.getElementsByClassName("top-el")


promo[1].style.right = "-100%"
promo[2].style.right = "-100%"
allTag.style.textDecoration = "underline"

if(window.innerWidth < 1000) {
    topFooter.style.flexDirection = "column"

    for (let i = 0; i < topEls.length; i++) {
        topEls[i].style.width = "100%"
        topEls[i].style.marginRight = "0"
        topEls[i].style.alignItems = "center"
    }
} else {
    topFooter.style.flexDirection = "row"

    for (let i = 0; i < topEls.length; i++) {
        topEls[i].style.width = ""
        topEls[i].style.marginRight = "5vmin"
        topEls[i].style.alignItems = ""
    }
}


for(let i = 0; i < selections.length; i++) {
    selections[i].addEventListener("click", () => {

        selections[i].style.backgroundColor = "rgba(0, 0, 0, 0.75)"

        for (let j = 0; j < selections.length; j++) {
            if (j !== i) {
                promo[j].style.zIndex = "0"

                selections[j].style.backgroundColor = "rgba(0, 0, 0, 0.25)"
                if(x !== i) selections[j].style.pointerEvents = "none"

                setTimeout(() => {
                    promo[j].style.right = "-100%"
                    selections[j].style.pointerEvents = "auto"
                }, 1000)
            }
        }

        if(i !== x) first = false
        else first = true

        if(promo[i].style.right == "0px" && !first) promo[i].style.right = "-100%"
        
        promo[i].style.zIndex = "1"
        promo[i].classList.add("promo-show")

        setTimeout(() => {
            promo[i].style.right = 0
            promo[i].classList.remove("promo-show")
        }, 950)

        x = i
    })

    selections[i].addEventListener("mouseover", () => {
        selections[i].style.backgroundColor = "rgba(0, 0, 0, 0.75)"
        selections[i].style.transition = "background-color 0.25s linear"
    })

    selections[i].addEventListener("mouseleave", () => {
        if(i !== x) {
            selections[i].style.backgroundColor = "rgba(0, 0, 0, 0.25)"
            selections[i].style.transition = "background-color 0.25s linear"
        }
    })
}

arrows[0].addEventListener("click", () => {
    if(y !== 0) {

        /* arrows[0].style.pointerEvents = "none"
        arrows[1].style.pointerEvents = "none" */

        invisibleProductsFirst[invisibleProductsFirst.length-1].style.position = "absolute"
        invisibleProductsFirst[invisibleProductsFirst.length-1].style.left = "17.5%"
        invisibleProductsFirst[invisibleProductsFirst.length-1].style.animation = "product-anim-left-hide 500ms linear"

        for (let i = 0; i < visibleProducts.length; i++) {
            visibleProducts[i].classList.add("product-anim-left")
        }

        setTimeout(() => {

            invisibleProductsFirst[invisibleProductsFirst.length-1].style.position = ""
            invisibleProductsFirst[invisibleProductsFirst.length-1].style.left = ""
            invisibleProductsFirst[invisibleProductsFirst.length-1].style.animation = ""

            document.getElementsByClassName("last")[0].insertBefore(visibleProducts[3], invisibleProductsLast[0])
            invisibleProductsFirst[invisibleProductsFirst.length-1].classList.remove("product-anim-right")
            document.getElementsByClassName("products")[0].insertBefore(invisibleProductsFirst[invisibleProductsFirst.length-1], visibleProducts[0])    
            
            for (let i = 0; i < visibleProducts.length; i++) {
                visibleProducts[i].classList.remove("product-anim-left")
            }

            /* arrows[0].style.pointerEvents = "auto"
            arrows[1].style.pointerEvents = "auto" */
        }, 500)
       
        y--
    }
})


arrows[1].addEventListener("click", () => {
    
    if(y < 11) {

        /* arrows[0].style.pointerEvents = "none"
        arrows[1].style.pointerEvents = "none" */

        invisibleProductsLast[0].style.position = "absolute"
        invisibleProductsLast[0].style.right = "17.5%"
        invisibleProductsLast[0].style.animation = "product-anim-right-hide 500ms linear"


        for (let i = 0; i < visibleProducts.length; i++) {
            visibleProducts[i].classList.add("product-anim-right")
        }

        setTimeout(() => {

            invisibleProductsLast[0].style.position = ""
            invisibleProductsLast[0].style.right = ""
            invisibleProductsLast[0].style.animation = ""

            document.getElementsByClassName("first")[0].insertBefore(visibleProducts[0], arrows[0])
            invisibleProductsLast[0].classList.remove("product-anim-left")
            document.getElementsByClassName("products")[0].appendChild(invisibleProductsLast[0])

            for (let i = 0; i < visibleProducts.length; i++) {
                visibleProducts[i].classList.remove("product-anim-right")
            }

            /* arrows[0].style.pointerEvents = "auto"
            arrows[1].style.pointerEvents = "auto" */

        }, 500)
        

        y++
    }
})

allTag.addEventListener("click", () => {

    for (let i = 0; i < document.getElementsByClassName("model").length; i++) {
        document.getElementsByClassName("model")[i].style.textDecoration = ""   
    }

    allTag.style.textDecoration = "underline"

    for (let i = 0; i < allProducts.length; i++) {
        allProducts[i].style.display = "flex"
        allProducts[i].style.transition = "opacity 250ms linear"
        allProducts[i].style.opacity = "1"
    }
})

appleTag.addEventListener("click", () => {

    for (let i = 0; i < document.getElementsByClassName("model").length; i++) {
        document.getElementsByClassName("model")[i].style.textDecoration = ""   
    }

    appleTag.style.textDecoration = "underline"

    for (let i = 0; i < allProducts.length; i++) {
        if(i < samsungProducts.length) {
            setTimeout(() => { samsungProducts[i].style.display = "none"}, 250)
            samsungProducts[i].style.transition = "opacity 250ms linear"
            samsungProducts[i].style.opacity = "0"
        }

        if(i < redmiProducts.length) {
            setTimeout(() => { redmiProducts[i].style.display = "none"}, 250)
            redmiProducts[i].style.transition = "opacity 250ms linear"
            redmiProducts[i].style.opacity = "0"
        }

        if(i == allProducts.length-1) {
            for (let i = 0; i < appleProducts.length; i++) {

                setTimeout(() => {
                    appleProducts[i].style.transition = "opacity 250ms linear"
                    appleProducts[i].style.opacity = "1"
                }, 250)
    
                appleProducts[i].style.display = "flex"
                
            }
            
        }
    }
})

samsungTag.addEventListener("click", () => {

    for (let i = 0; i < document.getElementsByClassName("model").length; i++) {
        document.getElementsByClassName("model")[i].style.textDecoration = ""   
    }

    samsungTag.style.textDecoration = "underline"

    for (let i = 0; i < allProducts.length; i++) {
        if(i < appleProducts.length) {
            setTimeout(() => { appleProducts[i].style.display = "none"}, 250)
            appleProducts[i].style.transition = "opacity 250ms linear"
            appleProducts[i].style.opacity = "0"
        }

        if(i < redmiProducts.length) {
            setTimeout(() => { redmiProducts[i].style.display = "none"}, 250)
            redmiProducts[i].style.transition = "opacity 250ms linear"
            redmiProducts[i].style.opacity = "0"
        }

        if(i == allProducts.length-1) {
            for (let i = 0; i < samsungProducts.length; i++) {

                setTimeout(() => {
                    samsungProducts[i].style.transition = "opacity 250ms linear"
                    samsungProducts[i].style.opacity = "1"
                }, 250)
    
                samsungProducts[i].style.display = "flex"
                
            }
            
        }
    }
})

redmiTag.addEventListener("click", () => {

    for (let i = 0; i < document.getElementsByClassName("model").length; i++) {
        document.getElementsByClassName("model")[i].style.textDecoration = ""   
    }

    redmiTag.style.textDecoration = "underline"

    for (let i = 0; i < allProducts.length; i++) {
        if(i < appleProducts.length) {
            setTimeout(() => { appleProducts[i].style.display = "none"}, 250)
            appleProducts[i].style.transition = "opacity 250ms linear"
            appleProducts[i].style.opacity = "0"
        }

        if(i == allProducts.length-1) {
            for (let i = 0; i < redmiProducts.length; i++) {

                setTimeout(() => {
                    redmiProducts[i].style.transition = "opacity 250ms linear"
                    redmiProducts[i].style.opacity = "1"
                }, 250)
    
                redmiProducts[i].style.display = "flex"
                
            }
        }

        if(i < samsungProducts.length) {
            setTimeout(() => { samsungProducts[i].style.display = "none"}, 250)
            samsungProducts[i].style.transition = "opacity 250ms linear"
            samsungProducts[i].style.opacity = "0"
        }
    }
})


for (let i = 0; i < newSelections.length; i++) {

    newSelections[i].addEventListener("click", () => {

        newSelections[0].style.pointerEvents = "none"
        newSelections[1].style.pointerEvents = "none"

        z = i
        newSelections[i].style.backgroundColor = "rgba(0, 0, 0, 0.75)"
        if(i === 0 && wasClicked) {
            newSelections[1].style.backgroundColor = "rgba(0, 0, 0, 0.25)"

            for (let i = 0; i < document.getElementsByClassName("new-products")[0].getElementsByClassName("product").length; i++) {
            
                if(!(document.getElementsByClassName("new-products")[0].getElementsByClassName("product")[i] == hideNew)) {
                    document.getElementsByClassName("new-products")[0].getElementsByClassName("product")[i].classList.add("product-anim-left")
                }
            }


            hideNew.style.position = "absolute"
            hideNew.style.animation = "product-anim-left-hide-2 550ms linear"

            setTimeout(() => {
                document.getElementsByClassName("last-new-hide")[0].appendChild(document.getElementsByClassName("new-products")[0].getElementsByClassName("product")[document.getElementsByClassName("new-products")[0].getElementsByClassName("product").length-1])
                document.getElementsByClassName("new-products")[0].insertBefore(hideNew, news[1])
                
                hideNew.style.position = ""
                hideNew.style.animation = ""

                hideNew.style.margin = "auto 0"
                hideNew = document.getElementsByClassName("last-new-hide")[0].getElementsByClassName("product")[0]
                hideNew.style.margin = "auto" 

                for (let i = 0; i < document.getElementsByClassName("new-products")[0].getElementsByClassName("product").length; i++) {
                    document.getElementsByClassName("new-products")[0].getElementsByClassName("product")[i].classList.remove("product-anim-left")
                }

            }, 500)

            wasClicked = false
            
        } else if(i === 1 && !wasClicked) {
            newSelections[0].style.backgroundColor = "rgba(0, 0, 0, 0.25)"

            for (let i = 0; i < document.getElementsByClassName("new-products")[0].getElementsByClassName("product").length; i++) {
                
                if(!(document.getElementsByClassName("new-products")[0].getElementsByClassName("product")[i] == hideNew)) {
                    document.getElementsByClassName("new-products")[0].getElementsByClassName("product")[i].classList.add("product-anim-right")
                }
            }

            hideNew.style.position = "absolute"
            hideNew.style.animation = "product-anim-right-hide-2 550ms linear"

            setTimeout(() => {

                document.getElementsByClassName("first-new-hide")[0].appendChild(news[0])
                document.getElementsByClassName("new-products")[0].appendChild(hideNew)

                hideNew.style.position = ""
                hideNew.style.animation = ""

                news[news.length] = hideNew
                hideNew.style.margin = "auto 0"
                hideNew = news[0]
                hideNew.style.margin = "auto"

                for (let i = 0; i < document.getElementsByClassName("new-products")[0].getElementsByClassName("product").length; i++) {
                    document.getElementsByClassName("new-products")[0].getElementsByClassName("product")[i].classList.remove("product-anim-right")
                }
            }, 500)

            wasClicked = true
            
        }
        
        setTimeout(() => {
            newSelections[0].style.pointerEvents = "auto"
            newSelections[1].style.pointerEvents = "auto"
        }, 550)

        
    })
    
    newSelections[i].addEventListener("mouseover", () => {
        newSelections[i].style.backgroundColor = "rgba(0, 0, 0, 0.75)"
        newSelections[i].style.transition = "background-color 0.25s linear"
    })

    newSelections[i].addEventListener("mouseleave", () => {
        if(z !== i) {
            newSelections[i].style.backgroundColor = "rgba(0, 0, 0, 0.25)"
            newSelections[i].style.transition = "background-color 0.25s linear" 
        }
    })   
}

window.addEventListener("resize", () => {

    if(window.innerWidth < 1000) {

        topFooter.style.flexDirection = "column"

        for (let i = 0; i < topEls.length; i++) {
            topEls[i].style.width = "100%"
            topEls[i].style.marginRight = "0"
            topEls[i].style.alignItems = "center"
        }
    } else {
        topFooter.style.flexDirection = "row"

        for (let i = 0; i < topEls.length; i++) {
            topEls[i].style.width = ""
            topEls[i].style.marginRight = "5vmin"
            topEls[i].style.alignItems = ""
        }
    }
})



function scrollPromo(x) {
    
    setTimeout(() => {
        selections[x].click()
        x++
        if(x > selections.length-1) {
            x = 0
        }
        scrollPromo(x)
    }, 8000)
}

function scrollProductsRight() {

    if(y < 11) {
        setTimeout(() => {

            arrows[0].style.pointerEvents = "none"
            arrows[1].style.pointerEvents = "none"

            setTimeout(() => {arrows[1].click()}, 500)
            
            setTimeout(() => {
                
                arrows[0].style.pointerEvents = "auto"
                arrows[1].style.pointerEvents = "auto"
                scrollProductsRight()
            }, 1000)
            
        }, 8000)

    } else if(y < 11) setTimeout(() => {scrollProductsRight}, 500)
    else scrollProductsLeft()
}

function scrollProductsLeft() {

    if(y > 0) {
        setTimeout(() => {
            
            arrows[0].style.pointerEvents = "none"
            arrows[1].style.pointerEvents = "none"

            setTimeout(() => {arrows[0].click()}, 500)

            setTimeout(() => {
                
                arrows[0].style.pointerEvents = "auto"
                arrows[1].style.pointerEvents = "auto"
                scrollProductsLeft()
            }, 1000)

        }, 8000) 

    } else if(y > 0) {
        setTimeout(() => {scrollProductsLeft}, 500)
    } else scrollProductsRight()
}


selections[0].click()
newSelections[1].click()
newSelections[0].click()

scrollPromo(1)
scrollProductsRight()
