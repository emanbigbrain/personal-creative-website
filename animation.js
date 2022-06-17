//preScreenAnimation and Audio on/off
let yesButton = document.getElementById("yesButton");
let noButton = document.getElementById("noButton");

function preScreenDissolve() {
  let preScreenDissolveAnimation = anime({
    targets: ".openerDiv",
    opacity: 0,
    easing: "easeInOutSine",
    duration: 1000,
  });
  preScreenDissolveAnimation.finished.then(function () {
    document.getElementById("openerDivId").style.display = "none";
  });
}
//starts opener animation, just the opacity
function openAnimationFunction() {
  let openerAnimation = anime({
    targets: ".headphone, aside, .buttonDiv",
    opacity: [0, 1],
    duration: 5000,
    easing: "easeInOutSine",
  });
}

function playAudio() {
  document.getElementById("myAudio").play();
}

function noAudio() {
  document.getElementById("myAudio").pause();
}

window.addEventListener("load", openAnimationFunction);

yesButton.addEventListener("click", playAudio);
yesButton.addEventListener("click", heroAnimation);
noButton.addEventListener("click", noAudio);
noButton.addEventListener("click", heroAnimation);

//remove preScreen

if (yesButton.addEventListener("click", preScreenDissolve)) {
} else if (noButton.addEventListener("click", preScreenDissolve)) {
}

let animationStart = false;

//play audio
// window.onload = function () {
//   document.getElementById("myAudio").play();
// };

//disable scroll function
function disableScroll() {
  document.body.classList.add("stop-scrolling");
}

function enableScroll() {
  document.body.classList.remove("stop-scrolling");
}

//function for the hero animation

function heroAnimation() {
  disableScroll();
  if (animationStart === false) {
    let startHeroAnimation = anime
      .timeline({
        easing: "easeOutQuad",
      })
      .add({
        targets: ".letterAnimation, .lutterodtAnimation",
        translateY: [200, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 2000,
        delay: (el, i) => 300 + 40 * i,
      })
      .add(
        {
          targets: ".underline",
          opacity: [0, 1],
          scaleX: [0, 1],
          duration: 2500,
        },
        "-=1500"
      )
      .add(
        {
          targets: ".homeButton",
          opacity: [0, 1],
          translateY: [25, 0],
          duration: 1000,
        },
        "-=2000"
      )
      .add(
        {
          targets: ".myWorksButton",
          opacity: [0, 1],
          translateY: [25, 0],
          duration: 1000,
        },
        "-=1800"
      )
      .add(
        {
          targets: ".behanceButton",
          opacity: [0, 1],
          translateY: [25, 0],
          duration: 1000,
        },
        "-=1600"
      )
      .add(
        {
          targets: ".heroStar",
          translateY: [100, 0],
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 5000,
        },
        "-=2500"
      );

    animationStart = true;
    startHeroAnimation.finished.then(function () {
      enableScroll();
    });
  }

  if (animationStart === true) {
    let heroLoopAnimation = anime({
      targets: ".heroStar",
      translateY: [0, 30],
      direction: "alternate",
      easing: "easeInOutSine",
      duration: 2500,
      loop: true,
    });
    anime({
      targets: ".scrollDown",
      opacity: [0, 1],
      easing: "easeInOutSine",
      duration: 3000,
    });
  }
}

//animation for hero text elements to fade out on scroll

let heroFadeOut = anime({
  targets: ".letterAnimation, .lutterodtAnimation, .scrollDown, .heroStar",
  translateY: -200,
  opacity: 0,
  easing: "easeInOutSine",
  autoplay: false,
  delay: (el, i) => 300 + 80 * i,
});

//animation for double stars to fade in

let secondHeroStars = anime({
  targets: ".doubleStars",
  translateY: [300, 0],
  opacity: 1,
  easing: "easeInOutSine",
  autoplay: false,
});
// got stuck doing the animation outwards right here
// secondHeroStars.finished.then(function () {
//   let secondHeroStarsOut = anime({
//     targets: ".doubleStars",
//     translateY: [0, -300],
//     opacity: 0,
//     easing: "easeInOutSine",
//     autoplay: false,
//   });
//   window.onscroll = function (e) {
//     secondHeroStarsOut.seek(window.pageYOffset * 1.85);
//   };
// });

//wraps every letter into a span

let secondHeroText = anime({
  targets: ".h2Word, .h2SpanWord",
  translateY: [300, 0],
  opacity: 1,
  easing: "easeInOutSine",
  autoplay: false,
  delay: (el, i) => 300 + 80 * i,
});

let seperationLine = anime({
  targets: ".line1, .line2",
  opacity: [0, 1],
  scaleX: [0, 1],
  easing: "easeInOutSine",
  duration: 900,
  autoplay: false,
});

let seperationStar = anime({
  targets: ".sepStar",
  opacity: [0, 1],
  scale: [0.4, 1],
  rotate: "1turn",
  easing: "easeInOutSine",
  duration: 800,
  autoplay: false,
});

let workEthicTitle = anime({
  targets: ".workEthicTitle",
  translateY: [200, 0],
  opacity: [0, 1],
  easing: "easeInOutSine",
  autoplay: false,
});

let firstTextSpan = new Letterize({
  targets: ".normalSpan",
  wrapper: "span",
  className: "firstTextSpanSerif",
});

let firstTextSpanSans = new Letterize({
  targets: ".displaySpan",
  wrapper: "span",
  className: "firstTextSpanSans",
});

let firstTextAnimation = anime({
  targets: ".firstTextSpanSerif, .firstTextSpanSans",
  translateY: [20, 0],
  opacity: [0, 1],
  easing: "easeInOutSine",
  autoplay: false,
  delay: (el, i) => 200 + 30 * i,
});

let secondTextAnimation = anime({
  targets: ".secondText",
  translateY: [100, 0],
  opacity: [0, 1],
  easing: "easeInOutSine",
  autoplay: false,
});

let seperationLine2 = anime({
  targets: ".line3, .line4",
  opacity: [0, 1],
  scaleX: [0, 1],
  easing: "easeInOutSine",
  duration: 900,
  autoplay: false,
});

let myWorksTitle = anime({
  targets: ".myWorksTitle",
  translateY: [200, 0],
  opacity: [0, 1],
  easing: "easeInOutSine",
  autoplay: false,
});

// let unfoldingWorks = anime({
//   targets: ".c1",
//   translateY: [-100, 0],
//   opacity: [0, 1],
//   easing: "easeInOutSine",
//   autoplay: false,
// });

// let unfoldingWorks2 = anime({
//   targets: ".c2",
//   translateY: [-100, 0],
//   opacity: [0, 1],
//   easing: "easeInOutSine",
//   autoplay: false,
// });

// let unfoldingWorks3 = anime({
//   targets: ".c3",
//   translateY: [-100, 0],
//   opacity: [0, 1],
//   easing: "easeInOutSine",
//   autoplay: false,
// });

// let unfoldingWorks4 = anime({
//   targets: ".c4",
//   translateY: [-100, 0],
//   opacity: [0, 1],
//   easing: "easeInOutSine",
//   autoplay: false,
// });
// secondHeroText.finished.then(function () {
//   disableScroll();
// });

window.onscroll = function (e) {
  heroFadeOut.seek(window.pageYOffset * 6);
  secondHeroStars.seek(window.pageYOffset * 1.85);
  secondHeroText.seek(window.pageYOffset * 2.5);
  seperationLine.seek(window.pageYOffset * 1.3);
  seperationStar.seek(window.pageYOffset * 1.3);
  workEthicTitle.seek((scrollPercent() / 30) * workEthicTitle.duration);
  firstTextAnimation.seek(window.pageYOffset * 1.8);
  secondTextAnimation.seek(window.pageYOffset / 3);
  seperationLine2.seek((scrollPercent() / 80) * seperationLine2.duration);
  myWorksTitle.seek((scrollPercent() / 85) * myWorksTitle.duration);
};

//Calculate the scroll percentage position
const scrollPercent = () => {
  const bodyST = document.body.scrollTop;
  const docST = document.documentElement.scrollTop;
  const docSH = document.documentElement.scrollHeight;
  const docCH = document.documentElement.clientHeight;

  return ((docST + bodyST) / (docSH - docCH)) * 100;
};

//using gsap from here, because it's easier to start animation on scroll (going to redo all animations using gsap after)

//animations for drowpdown
gsap.registerPlugin(ScrollTrigger);

let tlc1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".c1",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  },
});
tlc1.from(".c1", {
  y: -50,
  opacity: 0,
  ease: "none",
  duration: 1,
});

tlc1.to(".c1", {
  opacity: 0,
  ease: "none",
  duration: 1,
});

let tlc2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".c2",
    start: "top 90%",
    end: "bottom top",
    scrub: 1,
  },
});

tlc2.from(".c2", {
  y: -100,
  opacity: 0,
  ease: "none",
  duration: 1,
});

tlc2.to(".c2", {
  opacity: 0,
  ease: "none",
  duration: 1,
});

let tlc3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".c3",
    start: "top 85%",
    end: "bottom top",
    scrub: 1,
  },
});

tlc3.from(".c3", {
  y: -100,
  opacity: 0,
  ease: "none",
  duration: 1,
});

tlc3.to(".c3", {
  opacity: 0,
  ease: "none",
  duration: 1,
});

let tlc4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".c4",
    start: "top 80%",
    end: "bottom top",
    scrub: 1,
  },
});

tlc4.from(".c4", {
  y: -100,
  opacity: 0,
  ease: "none",
  duration: 1,
});

tlc4.to(".c4", {
  opacity: 0,
  ease: "none",
  duration: 1,
});

let aboutMeSpan = new Letterize({
  targets: ".aboutMeTitle",
  wrapper: "span",
  className: "aboutMeSpan",
});

gsap.from(".aboutMeSpan", {
  scrollTrigger: {
    trigger: ".aboutMeTitle",
    start: "top bottom",
    end: "top center",
    scrub: 1,
  },
  y: 60,
  opacity: 0,
  ease: "none",
  duration: 1,
  stagger: 0.1,
});

gsap.from(".aboutText", {
  scrollTrigger: {
    trigger: ".aboutText",
    start: "top bottom",
    end: "top 35%",
    scrub: 1,
  },
  y: 20,
  opacity: 0,
  ease: "none",
  duration: 1,
});

gsap.from(".mediumStar", {
  scrollTrigger: {
    trigger: ".mediumStar",
    start: "top bottom",
    end: "top 70%",
    scrub: 1,
  },
  y: 100,
  opacity: 0,
  ease: "none",
  duration: 1,
});

gsap.from(".normalStar", {
  scrollTrigger: {
    trigger: ".normalStar",
    start: "top bottom",
    end: "top 60%",
    scrub: 1,
  },
  y: 100,
  opacity: 0,
  ease: "none",
  duration: 1,
});

gsap.from(".bottomMediumStar", {
  scrollTrigger: {
    trigger: ".bottomMediumStar",
    start: "top bottom",
    end: "top 55%",
    scrub: 1,
  },
  y: 100,
  opacity: 0,
  ease: "none",
  duration: 1,
});

gsap.from(".emoji", {
  scrollTrigger: {
    trigger: ".emoji",
    start: "top 80%",
    end: "top 55%",
    scrub: 1,
  },
  y: 100,
  opacity: 0,
  rotation: 50,
  ease: "none",
  duration: 1,
});

/**
 * Add a scroll listener on the window object to
 * control animations based on scroll percentage.
 */

//force scroll to top on page refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

//animation for secondHero
