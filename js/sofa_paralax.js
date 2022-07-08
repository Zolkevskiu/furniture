const nav = document.querySelector(".nav")
const sofa_section = document.querySelector(".section-5")
const sofa_png = document.querySelector(".sofa-png")

window.addEventListener("scroll", ()=> {
    let posY = window.scrollY

    sofa_png.style.width = posY / 5
    sofa_png.style.maxWidth = "100%"

    if(sofa_png.width >= 1000) {
        sofa_png.style.width = 1000
    }
})