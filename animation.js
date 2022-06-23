if (document.getElementById("indexHtml")) {
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
    let button = document.getElementById("muteButton");
    let muteAudio = document.getElementById("myAudio");
    let textButton = document.getElementById("buttonText");
    textButton.innerText = "MUTE MUSIC";
  }

  function noAudio() {
    document.getElementById("myAudio").play;
    document.getElementById("myAudio").muted = true;
  }

  function hoverAudio() {
    document.getElementById("hoverAudio").play();
  }

  window.addEventListener("load", openAnimationFunction);

  yesButton.addEventListener("click", playAudio);
  yesButton.addEventListener("mouseover", hoverAudio);
  yesButton.addEventListener("click", heroAnimation);
  noButton.addEventListener("click", noAudio);
  noButton.addEventListener("mouseover", hoverAudio);
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

  tlc1.to(
    ".c1",
    {
      y: -100,
      opacity: 0,
      ease: "none",
      duration: 1,
    },
    "+=3"
  );

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

  tlc2.to(
    ".c2",
    {
      y: -100,
      opacity: 0,
      ease: "none",
      duration: 1,
    },
    "+=3"
  );

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

  tlc3.to(
    ".c3",
    {
      y: -100,
      opacity: 0,
      ease: "none",
      duration: 1,
    },
    "+=3"
  );

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

  tlc4.to(
    ".c4",
    {
      y: -100,
      opacity: 0,
      ease: "none",
      duration: 1,
    },
    "+=3"
  );

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

  //gif following mousecursor

  function hoverGif1() {
    let gif1 = document.getElementById("ancientGreekGif");
    const onMouseMove = (e) => {
      gif1.style.left = e.pageX + "px";
      gif1.style.top = e.pageY + "px";
    };
    gif1.style.display = "inline";
    document.addEventListener("mousemove", onMouseMove);
  }

  let worksContainer1 = document.getElementById("worksContainer1");
  worksContainer1.addEventListener("mouseenter", () => {
    document.getElementById("hoverAudioFlex").play();
    gsap.to("#worksContainer1", {
      scale: 1.1,
      ease: "expo",
      duration: 0.3,
    });
  });
  worksContainer1.addEventListener("mouseleave", () => {
    document.getElementById("hoverAudioFlex").pause();
    document.getElementById("hoverAudioFlex").currentTime = 0.01;
    gsap.to("#worksContainer1", {
      scale: 1,
      ease: "expo",
      duration: 0.3,
    });
  });
  worksContainer1.addEventListener("mouseover", hoverGif1);
  worksContainer1.addEventListener("mouseleave", () => {
    ancientGreekGif.style.display = "none";
  });

  function hoverGif2() {
    let gif2 = document.getElementById("munchiesGif");
    const onMouseMove2 = (e) => {
      gif2.style.left = e.pageX + "px";
      gif2.style.top = e.pageY + "px";
    };
    gif2.style.display = "inline";
    document.addEventListener("mousemove", onMouseMove2);
  }

  let worksContainer2 = document.getElementById("worksContainer2");
  worksContainer2.addEventListener("mouseenter", () => {
    gsap.to("#worksContainer2", {
      scale: 1.1,
      ease: "expo",
      duration: 0.3,
    });
    document.getElementById("hoverAudioFlex").play();
  });
  worksContainer2.addEventListener("mouseleave", () => {
    document.getElementById("hoverAudioFlex").pause();
    document.getElementById("hoverAudioFlex").currentTime = 0.01;
    gsap.to("#worksContainer2", {
      scale: 1,
      ease: "expo",
      duration: 0.3,
    });
  });
  worksContainer2.addEventListener("mouseover", hoverGif2);
  worksContainer2.addEventListener("mouseleave", () => {
    munchiesGif.style.display = "none";
  });

  function hoverGif4() {
    let gif4 = document.getElementById("onSpeedGif");
    const onMouseMove4 = (e) => {
      gif4.style.left = e.pageX + "px";
      gif4.style.top = e.pageY + "px";
    };
    gif4.style.display = "inline";
    document.addEventListener("mousemove", onMouseMove4);
  }

  let worksContainer4 = document.getElementById("worksContainer4");
  worksContainer4.addEventListener("mouseenter", () => {
    document.getElementById("hoverAudioFlex").play();
    gsap.to("#worksContainer4", {
      scale: 1.1,
      ease: "expo",
      duration: 0.3,
    });
  });
  worksContainer4.addEventListener("mouseleave", () => {
    document.getElementById("hoverAudioFlex").pause();
    document.getElementById("hoverAudioFlex").currentTime = 0.01;
    gsap.to("#worksContainer4", {
      scale: 1,
      ease: "expo",
      duration: 0.3,
    });
  });
  worksContainer4.addEventListener("mouseover", hoverGif4);
  worksContainer4.addEventListener("mouseleave", () => {
    onSpeedGif.style.display = "none";
  });

  function hoverGif3() {
    let gif3 = document.getElementById("gameflixGif");
    const onMouseMove3 = (e) => {
      gif3.style.left = e.pageX + "px";
      gif3.style.top = e.pageY + "px";
    };
    gif3.style.display = "inline";
    document.addEventListener("mousemove", onMouseMove3);
  }

  let worksContainer3 = document.getElementById("worksContainer3");
  worksContainer3.addEventListener("mouseenter", () => {
    document.getElementById("hoverAudioFlex").play();
    gsap.to("#worksContainer3", {
      scale: 1.1,
      ease: "expo",
      duration: 0.3,
    });
  });
  worksContainer3.addEventListener("mouseleave", () => {
    document.getElementById("hoverAudioFlex").pause();
    document.getElementById("hoverAudioFlex").currentTime = 0.01;
    gsap.to("#worksContainer3", {
      scale: 1,
      ease: "expo",
      duration: 0.3,
    });
  });
  worksContainer3.addEventListener("mouseover", hoverGif3);
  worksContainer3.addEventListener("mouseleave", () => {
    gameflixGif.style.display = "none";
  });

  //unmute / mute audio
  let button = document.getElementById("muteButton");
  let muteAudio = document.getElementById("myAudio");
  let textButton = document.getElementById("buttonText");
  button.onclick = function () {
    if (muteAudio.muted === false) {
      muteAudio.muted = true;
      textButton.innerText = "UNMUTE MUSIC";
    } else {
      muteAudio.muted = false;
      textButton.innerText = "MUTE MUSIC";
    }
    if (muteAudio !== muteAudio.pause()) {
      muteAudio.play();
    }
  };

  //force scroll to top on page refresh
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}

if (document.getElementById("worksHtml")) {
  let clickCounter1 = false;
  let clickCounter2 = false;
  let clickCounter3 = false;
  let clickCounter4 = false;
  let clickCounter5 = false;
  let clickCounter6 = false;
  let clickCounter7 = false;
  let clickCounter8 = false;

  //hover over works animation
  let w1 = document.getElementById("w1");
  let w2 = document.getElementById("w2");
  let w3 = document.getElementById("w3");
  let w4 = document.getElementById("w4");
  let w5 = document.getElementById("w5");
  let w6 = document.getElementById("w6");
  let w7 = document.getElementById("w7");
  let w8 = document.getElementById("w8");

  let worksBody = document.getElementById("worksHtml");

  worksBody.addEventListener("mouseenter", function () {
    document.getElementById("myAudio2").play();
  });

  w1.addEventListener("mouseenter", function () {
    gsap.to(".course1", {
      y: 0,
      opacity: 1,
      duration: 0.3,
      ease: "expo",
    });
    gsap.to(".header1", {
      color: "#FBF8F2",
      duration: 0.4,
      ease: "expo",
    });
  });

  w1.addEventListener("mouseleave", function () {
    gsap.to(".course1", {
      y: 50,
      opacity: 0,
      duration: 0.3,
      ease: "expo",
    });
    gsap.to(".header1", {
      color: "transparent",
      duration: 0.4,
      ease: "expo",
    });
  });

  w1.addEventListener("click", function () {
    if (clickCounter1 === false) {
      let worksTlTo1 = gsap.timeline();

      worksTlTo1.to(".worksLine1", {
        scaleX: 1,
        opacity: 1,
        duration: 0.7,
        ease: "expo",
      });

      worksTlTo1.to(".worksInfoContainer1", {
        height: "auto",
        duration: 0.7,
        ease: "expo",
      });

      clickCounter1 = true;
    } else if (clickCounter1 === true) {
      let worksTlFrom1 = gsap.timeline();

      worksTlFrom1.to(".worksLine1", {
        scaleX: 0,
        opacity: 0,
        duration: 0.7,
        ease: "expo",
      });

      worksTlFrom1.to(".worksInfoContainer1", {
        height: "13vh",
        duration: 0.7,
        ease: "expo",
      });

      clickCounter1 = false;
    }
  });

  //w2
  w2.addEventListener("mouseenter", function () {
    gsap.to(".course2", {
      y: 0,
      opacity: 1,
      duration: 0.3,
      ease: "expo",
    });
    gsap.to(".header2", {
      color: "#FBF8F2",
      duration: 0.4,
      ease: "expo",
    });
  });

  w2.addEventListener("mouseleave", function () {
    gsap.to(".course2", {
      y: 50,
      opacity: 0,
      duration: 0.3,
      ease: "expo",
    });
    gsap.to(".header2", {
      color: "transparent",
      duration: 0.4,
      ease: "expo",
    });
  });

  w2.addEventListener("click", function () {
    if (clickCounter2 === false) {
      let worksTlTo2 = gsap.timeline();

      worksTlTo2.to(".worksLine2", {
        scaleX: 1,
        opacity: 1,
        duration: 0.7,
        ease: "expo",
      });

      worksTlTo2.to(".worksInfoContainer2", {
        height: "auto",
        duration: 0.7,
        ease: "expo",
      });

      clickCounter2 = true;
    } else if (clickCounter2 === true) {
      let worksTlFrom2 = gsap.timeline();

      worksTlFrom2.to(".worksLine2", {
        scaleX: 0,
        opacity: 0,
        duration: 0.7,
        ease: "expo",
      });

      worksTlFrom2.to(".worksInfoContainer2", {
        height: "13vh",
        duration: 0.7,
        ease: "expo",
      });

      clickCounter2 = false;
    }
  });

  //w3

  w3.addEventListener("mouseenter", function () {
    gsap.to(".course3", {
      y: 0,
      opacity: 1,
      duration: 0.3,
      ease: "expo",
    });
    gsap.to(".header3", {
      color: "#FBF8F2",
      duration: 0.4,
      ease: "expo",
    });
  });

  w3.addEventListener("mouseleave", function () {
    gsap.to(".course3", {
      y: 50,
      opacity: 0,
      duration: 0.3,
      ease: "expo",
    });
    gsap.to(".header3", {
      color: "transparent",
      duration: 0.4,
      ease: "expo",
    });
  });

  w3.addEventListener("click", function () {
    if (clickCounter3 === false) {
      let worksTlTo3 = gsap.timeline();

      worksTlTo3.to(".worksLine3", {
        scaleX: 1,
        opacity: 1,
        duration: 0.7,
        ease: "expo",
      });

      worksTlTo3.to(".worksInfoContainer3", {
        height: "auto",
        duration: 0.7,
        ease: "expo",
      });

      clickCounter3 = true;
    } else if (clickCounter3 === true) {
      let worksTlFrom3 = gsap.timeline();

      worksTlFrom3.to(".worksLine3", {
        scaleX: 0,
        opacity: 0,
        duration: 0.7,
        ease: "expo",
      });

      worksTlFrom3.to(".worksInfoContainer3", {
        height: "13vh",
        duration: 0.7,
        ease: "expo",
      });

      clickCounter3 = false;
    }
  });

  //w4

  w4.addEventListener("mouseenter", function () {
    gsap.to(".course4", {
      y: 0,
      opacity: 1,
      duration: 0.3,
      ease: "expo",
    });
    gsap.to(".header4", {
      color: "#FBF8F2",
      duration: 0.4,
      ease: "expo",
    });
  });

  w4.addEventListener("mouseleave", function () {
    gsap.to(".course4", {
      y: 50,
      opacity: 0,
      duration: 0.3,
      ease: "expo",
    });
    gsap.to(".header4", {
      color: "transparent",
      duration: 0.4,
      ease: "expo",
    });
  });

  w4.addEventListener("click", function () {
    if (clickCounter4 === false) {
      let worksTlTo4 = gsap.timeline();

      worksTlTo4.to(".worksLine4", {
        scaleX: 1,
        opacity: 1,
        duration: 0.7,
        ease: "expo",
      });

      worksTlTo4.to(".worksInfoContainer4", {
        height: "auto",
        duration: 0.7,
        ease: "expo",
      });

      clickCounter4 = true;
    } else if (clickCounter4 === true) {
      let worksTlFrom4 = gsap.timeline();

      worksTlFrom4.to(".worksLine4", {
        scaleX: 0,
        opacity: 0,
        duration: 0.7,
        ease: "expo",
      });

      worksTlFrom4.to(".worksInfoContainer4", {
        height: "13vh",
        duration: 0.7,
        ease: "expo",
      });

      clickCounter4 = false;
    }
  });

  //w5
  w5.addEventListener("mouseenter", function () {
    gsap.to(".course5", {
      y: 0,
      opacity: 1,
      duration: 0.3,
      ease: "expo",
    });
    gsap.to(".header5", {
      color: "#FBF8F2",
      duration: 0.4,
      ease: "expo",
    });
  });

  w5.addEventListener("mouseleave", function () {
    gsap.to(".course5", {
      y: 50,
      opacity: 0,
      duration: 0.3,
      ease: "expo",
    });
    gsap.to(".header5", {
      color: "transparent",
      duration: 0.4,
      ease: "expo",
    });
  });

  w5.addEventListener("click", function () {
    if (clickCounter5 === false) {
      let worksTlTo5 = gsap.timeline();

      worksTlTo5.to(".worksLine5", {
        scaleX: 1,
        opacity: 1,
        duration: 0.7,
        ease: "expo",
      });

      worksTlTo5.to(".worksInfoContainer5", {
        height: "auto",
        duration: 0.7,
        ease: "expo",
      });

      clickCounter5 = true;
    } else if (clickCounter5 === true) {
      let worksTlFrom5 = gsap.timeline();

      worksTlFrom5.to(".worksLine5", {
        scaleX: 0,
        opacity: 0,
        duration: 0.7,
        ease: "expo",
      });

      worksTlFrom5.to(".worksInfoContainer5", {
        height: "13vh",
        duration: 0.7,
        ease: "expo",
      });

      clickCounter5 = false;
    }
  });

  //w6

  w6.addEventListener("mouseenter", function () {
    gsap.to(".course6", {
      y: 0,
      opacity: 1,
      duration: 0.3,
      ease: "expo",
    });
    gsap.to(".header6", {
      color: "#FBF8F2",
      duration: 0.4,
      ease: "expo",
    });
  });

  w6.addEventListener("mouseleave", function () {
    gsap.to(".course6", {
      y: 50,
      opacity: 0,
      duration: 0.3,
      ease: "expo",
    });
    gsap.to(".header6", {
      color: "transparent",
      duration: 0.4,
      ease: "expo",
    });
  });

  w6.addEventListener("click", function () {
    if (clickCounter6 === false) {
      let worksTlTo6 = gsap.timeline();

      worksTlTo6.to(".worksLine6", {
        scaleX: 1,
        opacity: 1,
        duration: 0.7,
        ease: "expo",
      });

      worksTlTo6.to(".worksInfoContainer6", {
        height: "auto",
        duration: 0.7,
        ease: "expo",
      });

      clickCounter6 = true;
    } else if (clickCounter6 === true) {
      let worksTlFrom6 = gsap.timeline();

      worksTlFrom6.to(".worksLine6", {
        scaleX: 0,
        opacity: 0,
        duration: 0.7,
        ease: "expo",
      });

      worksTlFrom6.to(".worksInfoContainer6", {
        height: "13vh",
        duration: 0.7,
        ease: "expo",
      });

      clickCounter6 = false;
    }
  });

  //w7

  w7.addEventListener("mouseenter", function () {
    gsap.to(".course7", {
      y: 0,
      opacity: 1,
      duration: 0.3,
      ease: "expo",
    });
    gsap.to(".header7", {
      color: "#FBF8F2",
      duration: 0.4,
      ease: "expo",
    });
  });

  w7.addEventListener("mouseleave", function () {
    gsap.to(".course7", {
      y: 50,
      opacity: 0,
      duration: 0.3,
      ease: "expo",
    });
    gsap.to(".header7", {
      color: "transparent",
      duration: 0.4,
      ease: "expo",
    });
  });

  w7.addEventListener("click", function () {
    if (clickCounter7 === false) {
      let worksTlTo7 = gsap.timeline();

      worksTlTo7.to(".worksLine7", {
        scaleX: 1,
        opacity: 1,
        duration: 0.7,
        ease: "expo",
      });

      worksTlTo7.to(".worksInfoContainer7", {
        height: "auto",
        duration: 0.7,
        ease: "expo",
      });

      clickCounter7 = true;
    } else if (clickCounter7 === true) {
      let worksTlFrom7 = gsap.timeline();

      worksTlFrom7.to(".worksLine7", {
        scaleX: 0,
        opacity: 0,
        duration: 0.7,
        ease: "expo",
      });

      worksTlFrom7.to(".worksInfoContainer7", {
        height: "13vh",
        duration: 0.7,
        ease: "expo",
      });

      clickCounter7 = false;
    }
  });

  //w8

  w8.addEventListener("mouseenter", function () {
    gsap.to(".course8", {
      y: 0,
      opacity: 1,
      duration: 0.3,
      ease: "expo",
    });
    gsap.to(".header8", {
      color: "#FBF8F2",
      duration: 0.4,
      ease: "expo",
    });
  });

  w8.addEventListener("mouseleave", function () {
    gsap.to(".course8", {
      y: 50,
      opacity: 0,
      duration: 0.3,
      ease: "expo",
    });
    gsap.to(".header8", {
      color: "transparent",
      duration: 0.4,
      ease: "expo",
    });
  });

  w8.addEventListener("click", function () {
    if (clickCounter8 === false) {
      let worksTlTo8 = gsap.timeline();

      worksTlTo8.to(".worksLine8", {
        scaleX: 1,
        opacity: 1,
        duration: 0.7,
        ease: "expo",
      });

      worksTlTo8.to(".worksInfoContainer8", {
        height: "auto",
        duration: 0.7,
        ease: "expo",
      });

      clickCounter8 = true;
    } else if (clickCounter8 === true) {
      let worksTlFrom8 = gsap.timeline();

      worksTlFrom8.to(".worksLine8", {
        scaleX: 0,
        opacity: 0,
        duration: 0.7,
        ease: "expo",
      });

      worksTlFrom8.to(".worksInfoContainer8", {
        height: "13vh",
        duration: 0.7,
        ease: "expo",
      });

      clickCounter8 = false;
    }
  });

  gsap.to(".topHeaderContainer", {
    scrollTrigger: {
      trigger: ".scroll1",
      start: "top 3%",
      end: "top 3%",
      markers: true,
      toggleActions: "play none reverse none",
    },
    y: -10,
    opacity: 0,
    duration: 0.4,
    ease: "smooth",
  });
}
