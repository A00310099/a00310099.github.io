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

function sendEmail() {
    var subjectContent = document.getElementById("subjectInput").value;
    var bodyContent = document.getElementById("messageInput").value;
    window.location.href = `mailto:a00310099+portfolio@student.tus.ie?subject=${encodeURIComponent(subjectContent)}&body=${encodeURIComponent(bodyContent)}`;
}

function clearEmail() {
    if (confirm("Are you sure you want to clear the form?")) {
        var emailForm = document.getElementById("emailForm");
        emailForm.reset();
        emailForm.classList.remove("was-validated");
    }
}
