function constructModal(contentToFill) {
    // Elements to be changed
    var modalTitleElement = document.getElementById("projectModalLabel");
    var modalDescriptionElement = document.getElementById("projectModalDescription");
    var sourceCodeLinkElement = document.getElementById("projectModalSourceCodeLink");
    var disabledLinkElement = document.getElementById("projectModalDisabledLink");

    // Variables to be filled
    var modalTitle;
    var modalDescription;
    var sourceCodeLink;

    // Get variables depending on which card was clicked
    switch(contentToFill) {
        // Personal Website
        case "personalWebsite":
            modalTitle = "Personal Website";
            modalDescription = `This is the website you are currently on.
            (description work in progress)`;
            sourceCodeLink = "https://github.com/A00310099/a00310099.github.io";
            break;

        // Default in case function is called in error
        default:
            modalTitle = "ERROR";
            modalDescription = "ERROR!";
            sourceCodeLink = "#";
            break;
    }

    // Fill the title and description of the modal
    modalTitleElement.innerHTML = modalTitle;
    modalDescriptionElement.innerHTML = modalDescription;

    // TODO: Add code for setting the image carousel

    // Enable/disable source code button depending on availability
    if (sourceCodeLink != "#") {
        sourceCodeLinkElement.setAttribute("href", sourceCodeLink);
        sourceCodeLinkElement.classList.remove("d-none");
        disabledLinkElement.classList.add("d-none");
    } else {
        sourceCodeLinkElement.classList.add("d-none");
        disabledLinkElement.classList.remove("d-none");
    }

    // Show the modal
    new bootstrap.Modal('#projectModal').show();
}
