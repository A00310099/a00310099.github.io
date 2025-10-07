function constructModal(contentToFill) {
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

    // Get variables depending on which card was clicked
    switch(contentToFill) {
        // Personal Website
        case "personalWebsite":
            modalTitle = document.getElementById("title_personalWebsite").innerHTML;
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
            modalTitle = document.getElementById("title_javaPractice").innerHTML;
            modalDescription = `(description work in progress)`;
            sourceCodeLink = "#";
            imageSlideshow = [
                "images/placeholder1.png",
                "images/placeholder2.png",
                "images/placeholder3.png",
                "images/placeholder4.png",
            ];
            break;

        case "invoiceOCR":
            modalTitle = document.getElementById("title_invoiceOCR").innerHTML;
            modalDescription = `(description work in progress)`;
            sourceCodeLink = "#";
            imageSlideshow = [
                "images/placeholder1.png",
                "images/placeholder2.png",
                "images/placeholder3.png",
                "images/placeholder4.png",
            ];
            break;

        case "checkers":
            modalTitle = document.getElementById("title_checkers").innerHTML;
            modalDescription = `(description work in progress)`;
            sourceCodeLink = "#";
            imageSlideshow = [
                "images/placeholder1.png",
                "images/placeholder2.png",
                "images/placeholder3.png",
                "images/placeholder4.png",
            ];
            break;

        case "newsagentDB":
            modalTitle = document.getElementById("title_newsagentDB").innerHTML;
            modalDescription = `(description work in progress)`;
            sourceCodeLink = "#";
            imageSlideshow = [
                "images/placeholder1.png",
                "images/placeholder2.png",
                "images/placeholder3.png",
                "images/placeholder4.png",
            ];
            break;

        case "carPhysics":
            modalTitle = document.getElementById("title_carPhysics").innerHTML;
            modalDescription = `(description work in progress)`;
            sourceCodeLink = "#";
            imageSlideshow = [
                "images/placeholder1.png",
                "images/placeholder2.png",
                "images/placeholder3.png",
                "images/placeholder4.png",
            ];
            break;

        case "vrEscape":
            modalTitle = document.getElementById("title_vrEscape").innerHTML;
            modalDescription = `(description work in progress)`;
            sourceCodeLink = "#";
            imageSlideshow = [
                "images/placeholder1.png",
                "images/placeholder2.png",
                "images/placeholder3.png",
                "images/placeholder4.png",
            ];
            break;

        case "grapplingHook":
            modalTitle = document.getElementById("title_grapplingHook").innerHTML;
            modalDescription = `(description work in progress)`;
            sourceCodeLink = "#";
            imageSlideshow = [
                "images/placeholder1.png",
                "images/placeholder2.png",
                "images/placeholder3.png",
                "images/placeholder4.png",
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

    // Fill the title and description of the modal
    modalTitleElement.innerHTML = modalTitle;
    modalDescriptionElement.innerHTML = modalDescription;

    // Set the project images slideshow using Bootstraps "carousels"
    if (imageSlideshow.length === 0) {
        modalCarouselElement.innerHTML = `<img src="${noImageAvailable}" class="d-block w-100" alt="No image available for this project">`;
    } else {
        // Set the carousel indicators
        let buttons = `<div class="carousel-indicators">
            <button type="button" data-bs-target="#projectModalCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>`;
        for (let i = 1; i < imageSlideshow.length; i++) {
            buttons += `<button type="button" data-bs-target="#projectModalCarousel" data-bs-slide-to="${i}" aria-label="Slide ${i + 1}"></button>`;
        }
        buttons += `</div>`;

        // Set the images in the carousel
        let carousel = `<div class="carousel-inner">`;
        imageSlideshow.forEach((element, index) => {
            carousel += `<div class="${index === 0 ? "carousel-item active" : "carousel-item"}">
                <a href="${element}" class="open-in-new-tab" target="_blank"><img src="${element}" class="d-block w-100" alt=""></a>
                </div>`;
        });
        carousel += `</div>
            <button class="carousel-control-prev" type="button" data-bs-target="#projectModalCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#projectModalCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>`;

        // Finally add the carousel to the HTML modal
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
