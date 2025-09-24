function toggleTheme() {
    var x = document.getElementById("htmlElement")
    var i = document.getElementById("themeSwitch")

    if (x.hasAttribute("data-bs-theme")) {
        console.log("Theme set to LIGHT");
        x.removeAttribute("data-bs-theme");
        i.classList.add("bi-sun-fill");
        i.classList.remove("bi-moon");
    } else {
        console.log("Theme set to DARK");
        x.setAttribute("data-bs-theme", "dark");
        i.classList.add("bi-moon");
        i.classList.remove("bi-sun-fill");
    }
}