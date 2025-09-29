const allHtml = document.getElementById("htmlElement");
const themeSwitch = document.getElementById("themeSwitch");
var preferredTheme;

// Run this on page load
function initialiseTheme() {
    // Check if user has stored a dark theme preference previously
    if (localStorage.getItem("preferredTheme") != null) {
        // User has set a dark theme preference, let's use that
        preferredTheme = localStorage.getItem("preferredTheme");
        console.log("Setting default theme based on previously set preference");
    } else {
        // User has not yet set dark theme preference, ie. first visit to the site
        // In that case, let's set a default based on system preference
        console.log("Setting default theme based on system theme");
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            preferredTheme = "dark";
        } else {
            preferredTheme = "light";
        }
    }
    // Store preference in local storage for subsequent visits
    localStorage.setItem("preferredTheme", preferredTheme);
    setTheme(preferredTheme);
}

// Set using the switch
function toggleTheme() {
    console.log(preferredTheme);
    if (preferredTheme == "dark") preferredTheme = "light";
    else preferredTheme = "dark";
    setTheme(preferredTheme);
}

// Called by other functions
function setTheme(theme) {
    if (theme == "dark") {
        console.log("Theme set to DARK");
        allHtml.setAttribute("data-bs-theme", "dark");
        themeSwitch.classList.add("bi-moon");
        themeSwitch.classList.remove("bi-sun-fill");
    } else {
        console.log("Theme set to LIGHT");
        allHtml.removeAttribute("data-bs-theme");
        themeSwitch.classList.add("bi-sun-fill");
        themeSwitch.classList.remove("bi-moon");
    }
    // Store current preference in local storage for subsequent visits
    localStorage.setItem("preferredTheme", theme);
}

// Validation script from https://getbootstrap.com/docs/5.3/forms/validation/
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()