// functions to add/remove active class from an element
function addActive(element) {
    element.classList.add("active");
}

function removeActive(element) {
    element.classList.remove("active");
}

// site logic
window.onload = function() {
    // Handle site's visible page
    const navbar = document.querySelector("nav");
    navbar.addEventListener("click", () => {
        removeActive(default_page);
    });

    // Handle carousels
    let carousel_index = 0;
    const carousel_indexes = document.querySelectorAll("#projects .carousel .nav .index");
    const carousel_slides = document.querySelectorAll("#projects .carousel .slide");

    carousel_indexes.forEach((element, index) => {
        element.addEventListener("click", () => {
            // update the active index
            removeActive(carousel_indexes[carousel_index]);
            addActive(element);
            carousel_index = index;

            // update the slides
            let shift = (index) * -100;
            carousel_slides.forEach((element) => {
                element.style.transform = `translateX(${shift}%)`;
            })
        })
    });

    // set the first 
    addActive(carousel_indexes[0]);
}