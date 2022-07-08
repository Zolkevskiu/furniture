const navigation = document.querySelectorAll(".navigation-star-part")
const tab_content = document.querySelectorAll(".navigation-star-wrap")


navigation.forEach(item => {
    item.addEventListener("click", ()=> {
        let btn = item
        let tabId = btn.getAttribute("data-tab")
        let btnTab = document.querySelector(tabId)

        navigation.forEach(item => {
            item.classList.remove('part-active')
        })

        tab_content.forEach(item => {
            item.classList.remove('tab-active')
        })
        
        btnTab.classList.add('tab-active')
        btn.classList.add('part-active')
    })
})