const myResumeButton = $("#myResume");
const resumeContainer = $(".myResumeContainer");
const getInTouchButton = document.querySelector('#getInTouch');

myResumeButton.on("click", function () {
    $(this).toggleClass("active");
    resumeContainer.toggleClass("active");

    setTimeout(() => {
        $(this).addClass("opened");
    }, 100);

    if ($(this).hasClass("active")) {
        setTimeout(() => {
            resumeContainer.css({
                'left': "initial",
                'right': 0,
                'width': 0 + "%"
            });
            $(this).removeClass("active opened");
        }, 5000);
    };
});
const windowSize = $(window).width();
const resizeScreen = () => {
    if (windowSize < 991) {
        $('.horizontalScroll_parent').removeClass('horizontalScroll_parent');
    }
}
resizeScreen();
$(window).on('resize', resizeScreen);

$(".horizontalScroll_parent").mCustomScrollbar({
    axis: "x",
    scrollInertia: 150,
    autoExpandScrollbar: true,
    advanced: { autoExpandHorizontalScroll: true }
});
// gsap.registerPlugin(ScrollTrigger);        

getInTouchButton?.addEventListener("click", e => {
    const formOverlay = e.target.querySelector(".contactOverlay");
    document.querySelector('body').classList.add('no-scroll');
    formOverlay.classList.add('active');
});



// ========================= GSAP Animations ========================= //

const headerLogo = document.querySelector('.logoBlock');
const heroSubSection = document.querySelector('.heroSubSection');

const logoPostions = headerLogo.getBoundingClientRect();
const heroSubSectionPosition = heroSubSection.getBoundingClientRect();

// let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 }})
let tl = new TimelineMax();

tl.from(".preloader__logo", 1.35, {
    y: 250,
    ease: Expo.inOut,
    delay: 1.5,
    scaleY: 0,
    transformOrigin: "50% 100%",
});
tl.to('.name', {
    'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
    opacity: 1,
    transform: 'translate(0)',
    duration: 2.5,
    ease: "power4.out",
    stagger: .15,
}, "+=0.01");

tl.to(".preloader__logo", 0.75, {
    delay: .25,
    scaleY: 1,
    ease: Expo.inOut,
    transformOrigin: "0% 0%",
    transform: 'translate(0, 0)',
    top: logoPostions.top,
    left: logoPostions.left,
});

TweenMax.to(".preloader__section", 2.5, {
    ease: Expo.easeInOut,
    delay: 5.5,
    width: heroSubSectionPosition.width,
    top: heroSubSectionPosition.top,
    right: heroSubSectionPosition.right,
    left: heroSubSectionPosition.left,
    opacity: 0,
});


// menu animation
tl.to('.topMenus li', {
    opacity: 1,
    duration: 2,
    ease: "power4.inOut",
    stagger: .05,
    marginLeft: 0,
    y: 0,
}, "-=0.5");

tl.to('.helloText, .mainName, .professionText, .shortText', {
    'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
    opacity: 1,
    transform: 'translate(0)',
    duration: 1,
    ease: "power4.out",
    stagger: .15,
});

// About Section content
tl.to('.aboutContent span, .aboutContent h2, .aboutContent h3, .aboutContent p, .aboutContent a', {
    'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
    opacity: 1,
    transform: 'translate(0)',
    duration: 1,
    ease: "power4.out",
    stagger: .15,
}, "+=0.001");

// Project Cards
tl.to('.projectCard', {
    opacity: 1,
    duration: 2.5,
    ease: "power4.in",
    marginLeft: 0,
    y: 0,
    stagger: .5,
}, "-=2");

setTimeout(() => {
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript");
    editor.setShowPrintMargin(false);
    editor.setReadOnly(true);
    editor.setHighlightActiveLine(false);
    editor.selection.getCursor(false);
    editor.session.setUseWrapMode(true);
    editor.setHighlightActiveLine(false);
}, 2500);
