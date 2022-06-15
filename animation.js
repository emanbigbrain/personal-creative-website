let animationStart = false;

function heroAnimation() {
  if (animationStart === false) {
    anime
      .timeline({
        easing: "easeOutQuad",
      })
      .add({
        targets: ".letterAnimation, span",
        translateY: [200, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
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
      duration: 3000,
      loop: true,
    });
    anime({
      targets: ".scrollDown",
      opacity: [0, 1],
      direction: "alternate",
      easing: "easeInOutSine",
      duration: 1000,
      loop: true,
    });
  }
}

window.addEventListener("load", heroAnimation);
