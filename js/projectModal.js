const noImageAvailable = "images/no_image.png";

// Elements to be changed
var modalTitleElement = document.getElementById("projectModalLabel");
var modalDescriptionElement = document.getElementById("projectModalDescription");
var modalCarouselElement = document.getElementById("projectModalCarousel");
var sourceCodeLinkElement = document.getElementById("projectModalSourceCodeLink");
var disabledLinkElement = document.getElementById("projectModalDisabledLink");

// Variables to be filled
var modalTitle;
var modalDescription;
var sourceCodeLink;
var imageSlideshow = []; // Leave as empty array when no images are available

/**
 * Sets the variables corresponding to the title, description, source code link, and image array of the project modal.
 * These values are controlled by the switch statement contained in this function.
 * @param {string} modalId The "ID" of the modal to display
 */
function setProjectModalVariables(modalId) {
    // Set variables depending on which card was clicked
    switch(modalId) {
        // Personal Website
        case "personalWebsite":
            modalTitle = document.getElementById(`title_${modalId}`).innerHTML;
            modalDescription = `This is the website you are currently on.<br>
                (description work in progress)`;
            sourceCodeLink = "https://github.com/A00310099/a00310099.github.io";
            imageSlideshow = [
                "images/placeholder1.png",
                "images/placeholder2.png",
                "images/placeholder3.png",
                "images/placeholder4.png",
            ];
            break;

        case "javaPractice":
            modalTitle = document.getElementById(`title_${modalId}`).innerHTML;
            modalDescription = `(description work in progress)`;
            sourceCodeLink = "https://github.com/A00310099/JavaProject";
            imageSlideshow = [
                "images/placeholder1.png",
                "images/placeholder2.png",
                "images/placeholder3.png",
                "images/placeholder4.png",
            ];
            break;

        case "invoiceOCR":
            modalTitle = document.getElementById(`title_${modalId}`).innerHTML;
            modalDescription = `(description work in progress)`;
            sourceCodeLink = "https://github.com/A00310099/Invoice-OCR";
            imageSlideshow = [
                "images/placeholder1.png",
                "images/placeholder2.png",
                "images/placeholder3.png",
                "images/placeholder4.png",
            ];
            break;

        case "checkers":
            modalTitle = document.getElementById(`title_${modalId}`).innerHTML;
            modalDescription = `(description work in progress)`;
            sourceCodeLink = "https://github.com/A00310099/CPlusPlus-GroupProject";
            imageSlideshow = [
                "images/placeholder1.png",
                "images/placeholder2.png",
                "images/placeholder3.png",
                "images/placeholder4.png",
            ];
            break;

        case "newsagentDB":
            modalTitle = document.getElementById(`title_${modalId}`).innerHTML;
            modalDescription = `(description work in progress)`;
            sourceCodeLink = "https://github.com/A00310099/Delivery-System-Assignment";
            imageSlideshow = [
                "images/placeholder1.png",
                "images/placeholder2.png",
                "images/placeholder3.png",
                "images/placeholder4.png",
            ];
            break;

        case "carPhysics":
            modalTitle = document.getElementById(`title_${modalId}`).innerHTML;
            modalDescription = `(description work in progress)`;
            sourceCodeLink = "https://github.com/A00310099/Unity-Physics-Project";
            imageSlideshow = [
                "images/placeholder1.png",
                "images/placeholder2.png",
                "images/placeholder3.png",
                "images/placeholder4.png",
            ];
            break;

        case "vrEscape":
            modalTitle = document.getElementById(`title_${modalId}`).innerHTML;
            modalDescription = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper sit amet risus sit amet venenatis. Quisque ut interdum nisl. Suspendisse in mauris sem. Pellentesque ornare porta turpis. Proin auctor felis ut nisl posuere, eget facilisis arcu hendrerit. Curabitur ac lacus id ipsum elementum ullamcorper eu a ex. Fusce pulvinar porttitor tellus eu lacinia. Etiam tincidunt massa nec turpis feugiat facilisis. Fusce leo leo, vehicula laoreet dignissim a, malesuada sed quam. Donec facilisis, sem ac consectetur suscipit, lacus ipsum aliquet libero, eget dapibus felis mauris ac elit.</p>

<p>Integer eget fermentum massa. In ut diam tortor. Sed ultrices sagittis ante id dictum. Nam pretium nulla ante, eu rhoncus enim blandit vitae. Aenean eu arcu augue. Vestibulum non lacus ac diam malesuada rhoncus in sed odio. Suspendisse dictum ultrices magna, sed molestie diam molestie sed. Sed mattis et nisl ac volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non diam iaculis arcu eleifend venenatis. Duis a imperdiet enim. Aenean ultrices leo congue velit suscipit, ac sodales orci aliquam.</p>`;
            sourceCodeLink = "https://github.com/A00310099/Unity-VR-App-Dev";
            imageSlideshow = [
                "images/vr_closed_door.png",
                "images/vr_bookshelf.png",
                "images/vr_login_screen.png",
                "images/vr_locked_out.png",
                "images/vr_open_door.png"
            ];
            break;

        case "grapplingHook":
            modalTitle = document.getElementById(`title_${modalId}`).innerHTML;
            modalDescription = `(description work in progress)`;
            sourceCodeLink = "https://github.com/A00310099/Unity-Open-World-Project";
            imageSlideshow = [
                "images/gtv_Logo.png"
            ];
            break;

        // Default in case function is called in error
        default:
            modalTitle = `<span class="bi bi-bug-fill text-danger"> ERROR</span>`;
            modalDescription = `Somehow, you have managed to display a project that doesn't exist, or has not been properly described yet.<br>
                Please get in touch with me and let me know how you got here!`;
            sourceCodeLink = "#";
            imageSlideshow = [];
            break;
    }
}

/**
 * Fills the contents of the project template modal based on the desired ID and displays the new modal.
 * The values are derived from the switch statement in the setProjectModalVariables() function.
 * @param {string} modalId The "ID" of the modal to display
 */
function openProjectModal(modalId) {
    
    // Set the correct variables
    setProjectModalVariables(modalId);

    // Fill the title and description of the modal
    modalTitleElement.innerHTML = modalTitle;
    modalDescriptionElement.innerHTML = modalDescription;

    // Set the project images slideshow using Bootstraps "carousels"
    if (imageSlideshow.length === 0) {
        modalCarouselElement.innerHTML = `<img src="${noImageAvailable}" class="d-block w-100" alt="No image available for this project">`;
    } else {
        // Opening HTML
        let buttons = `<div class="carousel-indicators">`;
        let carousel = `<div class="carousel-inner">`;
        
        // Inner HTML (dynamic)
        imageSlideshow.forEach((element, index) => {
            buttons += `<button type="button" data-bs-target="#projectModalCarousel" data-bs-slide-to="${index}"
                ${index === 0 ? " class='active' aria-current='true' " : " "} aria-label="Slide ${index + 1}">
                </button>`;

            carousel += `<div class="${index === 0 ? "carousel-item active" : "carousel-item"}">
                <a href="${element}" class="open-in-new-tab" target="_blank"><img src="${element}" class="d-block content-fit-16-9" alt=""></a>
                </div>`;
        });

        // Closing HTML
        buttons += `</div>`;
        carousel += `</div>
            <button class="carousel-control-prev" type="button" data-bs-target="#projectModalCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#projectModalCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>`;

        // Add the carousel to the HTML modal
        modalCarouselElement.innerHTML = buttons + carousel;
    }
    
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
