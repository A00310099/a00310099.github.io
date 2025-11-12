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
    // Set the modal title if a valid modal was clicked
    if (document.getElementById(`title_${modalId}`)) {
        modalTitle = document.getElementById(`title_${modalId}`).innerHTML;
    }
    // Set other variables depending on which card was clicked
    switch(modalId) {
        // Personal Website
        case "personalWebsite":
            modalDescription = `
            <p>This is the website you are currently on!</p>
            <p>Currently, this website's entire purpose is to act as my portfolio, showing off the projects I have worked on throughout my college course, though the groundwork has been laid to potentially add more pages in the future.</p>
            <p>
                The website was written in <span class="badge bs-orange-bg text-black">HTML</span> and <span class="badge bg-warning text-black">JS</span>,
                and styled primarily using <a href="https://getbootstrap.com/" target="_blank" class="badge bs-purple-bg">Bootstrap</a> with some additional custom <span class="badge bs-indigo-bg">CSS</span>.
            </p>
            <ol class="list-group list-group-flush">I chose to create my own website over using an existing template for several reasons:
                <li class="list-group-item"><i class="bi bi-git"> </i>It's a better example of my skills as a software developer.</li>
                <li class="list-group-item"><i class="bi bi-wrench-adjustable"> </i>It gave me finer control over the exact contents of my website.</li>
                <li class="list-group-item"><i class="bi bi-code-slash"> </i>It allowed me to practice programming languages I would not have used as much as others in the past.</li>
            </ol>`;
            sourceCodeLink = "https://github.com/A00310099/a00310099.github.io";
            imageSlideshow = [];
            break;

        // Removed project
        case "javaPractice":
            modalDescription = `The project you are trying to view is not available as it has been removed from this page.`;
            sourceCodeLink = "#";
            imageSlideshow = [];
            break;

        // JDBC animals
        case "jdbc":
            modalDescription = `<p>The Many Animals Management system (MAM's for short) is a GUI for a database. As the name suggests, it is most useful where you're managing many animals at once, for example at a farm or a zoo.</p>
            <p>    
                It allows you to perform CRUD operations on tables for Animals, Enclosures, and Feeding Times.
                In addition, it contains a Merged View table combining the three tables, as well as an Audit Log for viewing actions taken on the database.
            </p>
            <ol class="list-group list-group-flush">Some additional features include:
                <li class="list-group-item"><i class="bi bi-check2-square"> </i>A toggle for displaying IDs in the tables, whether you just prefer a concise overview or if you want to perform administrative actions on the database.</li>
                <li class="list-group-item"><i class="bi bi-file-earmark-spreadsheet"> </i>Exports for each table, into <span class="badge bg-secondary">.csv</span> format, in case you want to do further work with the data as a spreadsheet.</li>
                <li class="list-group-item"><i class="bi bi-table"> </i>Additional exports to generate some useful information, like a list of all the animals or the most populated enclosures.</li>
            </ol>
            <p>
                The database uses <span class="badge bs-pink-bg">MySQL</span> for the backend, and <span class="badge bg-danger">Java</span> with JFrame for the UI.
            </p>`;
            sourceCodeLink = "https://github.com/A00310099/MAMsDB";
            imageSlideshow = [
                "images/jdbc_animals.png",
                "images/jdbc_enclosures.png",
                "images/jdbc_feeding.png",
                "images/jdbc_merged.png",
                "images/jdbc_merged_min.png",
                "images/jdbc_audit.png",
            ];
            break;

        // Invoice OCR group project
        case "invoiceOCR":
            modalDescription = `<p>This project was done as an internal work placement for ScaleTech. I was the lead programmer responsible for ensuring everything works together.</p>
            <ol class="list-group list-group-flush">A garage owner can follow these steps:
                <li class="list-group-item"><i class="bi bi-android"> </i>The user scans a garage invoice using our <span class="text-success-emphasis"> Android app</span> powered by <span class="bi bi-google">oogle Vision</span>.</li>
                <li class="list-group-item"><i class="bi bi-cloud-upload""> </i>The user then uploads the scanned text to our Java server, running on Apache Tomcat.</li>
                <li class="list-group-item"><i class="bi bi-database"> </i>Uploaded text is parsed in the background and put into a MySQL Database.</li>
                <li class="list-group-item"><i class="bi bi-browser-firefox"> </i>The user can now view a collection of all scanned invoices in a table on the web page, using their browser of choice.</li>
            </ol>
            <p>
                <i class="bi bi-pencil-square"> </i>
                Information in the table can be modified in case the scanner made a mistake, or deleted when no longer necessary.
                The user can search through the table using any combination of the table's headings, so they can easily find any specific invoice.
            </p> 
            <p>
                <i class="bi bi-file-earmark-pdf"> </i>
                Both the entire table and individual invoices can be converted into a <span class="badge bg-secondary">.pdf</span> format.
                Even the current search results can be saved this way, allowing for very flexible record-keeping, for example to create a copy of a list of all paid or unpaid invoices.
                Every exported file is automatically dated to when it was requested, allowing a snapshot of your data at any given time.
            </p>
            <p>
                <i class="bi bi-bar-chart-line"> </i>
                On the next web page, some information from the table can also be visualised into charts with the help of <span class="badge bs-orange-bg">D3.js</span> such as a graph of the invoices paid/part paid/not paid.
                This page also includes some other useful and specific information, including the total number and € amount of all invoices, and some additional information per customer and per car.
                Like the tables, the information on this page can also be exported into <span class="badge bg-secondary">.pdf</span>s.
            </p>`;
            sourceCodeLink = "https://github.com/A00310099/Invoice-OCR";
            imageSlideshow = [
                "images/placeholder1.png",
                "images/placeholder2.png",
                "images/placeholder3.png",
                "images/placeholder4.png",
            ];
            break;

        // C++ Checkers group project
        case "checkers":
            modalDescription = `(description work in progress)`;
            sourceCodeLink = "https://github.com/A00310099/CPlusPlus-GroupProject";
            imageSlideshow = [
                "images/placeholder1.png",
                "images/placeholder2.png",
                "images/placeholder3.png",
                "images/placeholder4.png",
            ];
            break;

        // Agile practice group project
        case "newsagentDB":
            modalDescription = `(description work in progress)`;
            sourceCodeLink = "https://github.com/A00310099/Delivery-System-Assignment";
            imageSlideshow = [
                "images/placeholder1.png",
                "images/placeholder2.png",
                "images/placeholder3.png",
                "images/placeholder4.png",
            ];
            break;

        // Unity physics project
        case "carPhysics":
            modalDescription = `(description work in progress)`;
            sourceCodeLink = "https://github.com/A00310099/Unity-Physics-Project";
            imageSlideshow = [
                "images/placeholder1.png",
                "images/placeholder2.png",
                "images/placeholder3.png",
                "images/placeholder4.png",
            ];
            break;

        // VR escape room
        case "vrEscape":
            modalDescription = `(description work in progress)`;
            sourceCodeLink = "https://github.com/A00310099/Unity-VR-App-Dev";
            imageSlideshow = [
                "images/vr_closed_door.png",
                "images/vr_bookshelf.png",
                "images/vr_login_screen.png",
                "images/vr_locked_out.png",
                "images/vr_open_door.png"
            ];
            break;

        // Unity open world project (grappling hook game)
        case "grapplingHook":
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
        let buttons = `<div class="carousel-indicators badge indicator-bg">`;
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
                <span class="carousel-control-prev-icon indicator-bg rounded-pill" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#projectModalCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon indicator-bg rounded-pill" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>`;

        // Add the carousel to the HTML modal
        modalCarouselElement.innerHTML = buttons + carousel;

        // Fixes indicator buttons
        new bootstrap.Carousel(document.querySelector('#projectModalCarousel'))
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
