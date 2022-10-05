let modal = document.getElementById("myModal")
let openBtn = document.getElementById("open-button")
let closeBtn = document.getElementById("close-button")


openBtn.addEventListener("click", () => {
    modal.style.display = "block"
})

closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
})

