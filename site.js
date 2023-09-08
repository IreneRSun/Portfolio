function activate(element) {
    element.classList.add("active");
}

function deActivate(element) {
    element.classList.remove("active");
}

function inSection(section) {
    return section.scrollTop <= window.scrollY < (section.scrollTop + section.offsetHeight);
}

// sections
const startSection = document.getElementById("start");
const aboutSection = document.getElementById("about");
const skillsSection = document.getElementById("skillsets");
const projectsSection = document.getElementById("projects");
const contactSection = document.getElementById("contacts");

// site scroll behavior
window.onload = function() {
    window.addEventListener(
        "scroll",
        () => {
            // handle scroll for visible section

            if (inSection(startSection)) {

                // handle the mouse animation
                document.body.style.setProperty(
                    "--scroll",
                    window.scrollY / startSection.offsetHeight
                );

            } else if (inSection(aboutSection)) {
                
            } else if (inSection(skillsSection)) {

            } else if (inSection(projectsSection)) {

            } else if (inSection(contactSection)) {

            }
        }
    );
}
