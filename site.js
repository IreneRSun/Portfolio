function activate(element) {
    element.classList.add("active");
}

function deActivate(element) {
    element.classList.remove("active");
}

function inSection(section) {
    return section.offsetTop <= window.scrollY && window.scrollY < (section.offsetTop + section.offsetHeight);
}

function setScrollPercent(section, propertyName) {
    let scrollPercent = (window.scrollY - section.offsetTop) / section.offsetHeight;
    document.body.style.setProperty(
        propertyName,
        scrollPercent
    );
}

// sections
const startSection = document.getElementById("start");
const aboutSection = document.getElementById("about");
const skillsSection = document.getElementById("skills");
const projectsSection = document.getElementById("projects");
const contactsSection = document.getElementById("contacts");

// site scroll behavior
window.onload = function() {
    window.addEventListener(
        "scroll",
        () => {
            // handle scroll for visible section
            if (inSection(startSection)) {
                setScrollPercent(startSection, "--scroll-start");
            } else if (inSection(aboutSection)) {
                setScrollPercent(aboutSection, "--scroll-about");
            }
        }
    );
}
