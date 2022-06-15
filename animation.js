let animationStart = false;

//function for the hero animation

function heroAnimation() {
  if (animationStart === false) {
    anime
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
          duration: 4000,
        },
        "-=2500"
      );

    animationStart = true;
  }

  if (animationStart === true) {
    anime({
      targets: ".heroStar",
      translateY: [0, 20],
      direction: "alternate",
      easing: "easeInOutSine",
      duration: 2500,
      loop: true,
    });
    anime({
      targets: ".scrollDown",
      opacity: [0, 1],
      easing: "easeInOutSine",
      duration: 1000,
    });
  }
}

window.addEventListener("load", heroAnimation);

//animation for hero text elements to fade out on scroll

let heroFadeOut = anime({
  targets: ".letterAnimation, .lutterodtAnimation, .scrollDown, .heroStar",
  translateY: -200,
  opacity: 0,
  easing: "easeInOutSine",
  autoplay: false,
  delay: (el, i) => 300 + 80 * i,
});

let secondHero = anime({
  targets: ".doubleStars",
  translateY: [300, 0],
  opacity: 1,
  easing: "easeInOutSine",
  autoplay: false,
});

window.onscroll = function (e) {
  heroFadeOut.seek(window.pageYOffset * 6);
  secondHero.seek(window.pageYOffset * 1.85);
};

//animation for secondHero
