// operations when the document is ready
$(document).ready(() => {

    // run an animation when the target element is scrolled to
    // increase the speed of the animation to make it slower
    // increase the offset to make the animation run earlier
    scrollAnimate = (target, animation, speed = 100, offset = 0) => {
        const scrollPercent = window.scrollY - target.offset().top;
        animation.seek(((scrollPercent + offset)/speed) * animation.duration);
    }

    // scroll animations
    $(window).scroll(() => {

        // profile photo
        const ppAnimation = anime({
            targets: ".profile-pic",
            scale: [1.3, 1],
            opacity: [0, 1],
            easing: "easeInOutSine",
            autoplay: false
        });
        scrollAnimate($("#about"), ppAnimation, speed=500, offset=300);

        // profile name
        const pnAnimation = anime({
            targets: ".profile-name",
            opacity: [0, 1],
            easing: "easeInOutSine",
            autoplay: false
        });
        scrollAnimate($("#about"), pnAnimation, speed=500, offset=300);

        // profile about
        const paAnimation = anime({
            targets: ".card-stack-container",
            translateX: [-50, 0],
            opacity: [0, 1],
            easing: "easeOutSine",
            autoplay: false
        });
        scrollAnimate($("#about"), paAnimation, speed=500, offset=300);

        // skill cards
        const scAnimation = anime({
            targets: ".skill-card",
            translateY: [-30, 0],
            scale: [1.3, 1],
            opacity: [0, 1],
            duration: 5000,
            delay: function(el, i) { return i * 130; },
            easing: "spring(1, 60, 30, 0)",
            elastic: 300,
            autoplay: false
        });
        scrollAnimate($("#skills"), scAnimation, speed=1000, offset=600);

        // contact section
        const csAnimation = anime({
            targets: "#contacts",
            scale: [1.5, 1],
            opacity: [0, 1],
            easing: "easeOutQuad",
            autoplay: false
        });
        scrollAnimate($("#contacts"), csAnimation);
    });
    
});
