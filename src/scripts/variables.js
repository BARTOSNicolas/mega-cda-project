let checked = false
const checkBtn = document.getElementById("checkBtn")
checkBtn.addEventListener("click", () => {
    const check = document.getElementById("check")
    if (checked) {
        checkBtn.textContent = "C'est acquis"
        checkBtn.classList.add("base-gray-500")
        check.classList.remove("text-green-500")
        checked = false
    } else {
        checkBtn.setAttribute("disabled", true)
        check.classList.add("text-green-500")
        checked = true
    }
})