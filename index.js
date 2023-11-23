// operations when the document is ready
$(document).ready(() => {

    // add aos settings to skill cards
    $(".skill-card").each((index, elem) => {
        elem.setAttribute("data-aos", "zoom-out-down");
        elem.setAttribute("data-aos-delay", (index * 10).toString());
        elem.setAttribute("data-aos-easing", "ease-in-sine");
        elem.setAttribute("data-aos-duration", "1000");
    });

    // initialize AOS library
    AOS.init();
    
});