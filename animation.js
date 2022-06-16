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
// let textWrapperSecondHeroText = document.getElementById("h2Id");
// textWrapperSecondHeroText.innerHTML =
//   textWrapperSecondHeroText.textContent.replace(
//     /\S/g,
//     "<span class='secondHeroLetter'>$&</span>"
//   );

let secondHeroText = anime({
  targets: ".h2Word, .h2SpanWord",
  translateY: [300, 0],
  opacity: 1,
  easing: "easeInOutSine",
  autoplay: false,
  delay: (el, i) => 300 + 80 * i,
});

// secondHeroText.finished.then(function () {
//   disableScroll();
// });

window.onscroll = function (e) {
  heroFadeOut.seek(window.pageYOffset * 6);
  secondHeroStars.seek(window.pageYOffset * 1.85);
  secondHeroText.seek(window.pageYOffset * 2.5);
};

//animation for secondHero
