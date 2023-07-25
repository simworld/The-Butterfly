document.addEventListener("DOMContentLoaded", function() {
  let parallaxContainers = document.querySelectorAll(".parallax-container");
  let requestID;

  // console.log("Window Width:", windowWidth);


  function parallaxScroll() {
  const windowWidth = window.innerWidth;
    
    for (let i = 0; i < parallaxContainers.length; i++) {
      let container = parallaxContainers[i];
      let parallaxGreen = container.querySelectorAll(".parallax-green");
      let parallaxWhite = container.querySelectorAll(".parallax-white");

      for (let j = 0; j < parallaxGreen.length; j++) {
        let currentParallaxGreen = parallaxGreen[j];
        let rectTop = currentParallaxGreen.getBoundingClientRect();
        let translateYTop = rectTop.top / -2;

        let parallaxContentTop = currentParallaxGreen.querySelector(".parallax-content-green");
        let parallaxContentImg = currentParallaxGreen.querySelector(".parallax-content-img");

        if (parallaxContentTop) {
          parallaxContentTop.style.transform = "translateY(" + translateYTop + "px)";
        }

        if (parallaxContentImg && windowWidth < 480) {
          parallaxContentImg.style.transform = "translateZ(" + translateYTop + "px)";
        } else if (parallaxContentImg) {
          parallaxContentImg.style.transform = "translateY(" + translateYTop + "px)";
        }
      }

      for (let k = 0; k < parallaxWhite.length; k++) {
        let currentParallaxWhite = parallaxWhite[k];
        let rectBottom = currentParallaxWhite.getBoundingClientRect();
        let translateYBottom = (rectBottom.bottom - window.innerHeight) / -2;

        let parallaxContentBottom = currentParallaxWhite.querySelector(".parallax-content-white");
        let parallaxContentImg = currentParallaxWhite.querySelector(".parallax-content-img");

        if (parallaxContentBottom) {
          parallaxContentBottom.style.transform = "translateY(" + translateYBottom + "px)";
        }

        if (parallaxContentImg) {
          parallaxContentImg.style.transform = "translateY(" + translateYBottom + "px)";
        }
      }
    }

    requestID = requestAnimationFrame(parallaxScroll);
  }

  parallaxScroll();

  // Stop the parallax effect when the page is not visible (e.g., in background tab)
  // performance optimi
  document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === "hidden") {
      cancelAnimationFrame(requestID);
    } else {
      parallaxScroll();
    }
  });
});


// old one
// document.addEventListener("DOMContentLoaded", function() {
//   let parallaxContainers = document.querySelectorAll(".parallax-container");

//   function parallaxScroll() {
//     for (let i = 0; i < parallaxContainers.length; i++) {
//       let container = parallaxContainers[i];
//       let parallaxGreen = container.querySelectorAll(".parallax-green");
//       let parallaxWhite = container.querySelectorAll(".parallax-white");

//       for (let j = 0; j < parallaxGreen.length; j++) {
//         let currentParallaxGreen = parallaxGreen[j];
//         let rectTop = currentParallaxGreen.getBoundingClientRect();
//         let translateYTop = rectTop.top / -2;

//         let parallaxContentTop = currentParallaxGreen.querySelector(".parallax-content-green");
//         let parallaxContentImg = currentParallaxGreen.querySelector(".parallax-content-img");

//         if (parallaxContentTop) {
//           parallaxContentTop.style.transform = "translateY(" + translateYTop + "px)";
//         }

//         if (parallaxContentImg) {
//           parallaxContentImg.style.transform = "translateY(" + translateYTop + "px)";
//         }
//       }

//       for (let k = 0; k < parallaxWhite.length; k++) {
//         let currentParallaxWhite = parallaxWhite[k];
//         let rectBottom = currentParallaxWhite.getBoundingClientRect();
//         let translateYBottom = (rectBottom.bottom - window.innerHeight) / -2;

//         let parallaxContentBottom = currentParallaxWhite.querySelector(".parallax-content-white");
//         let parallaxContentImg = currentParallaxWhite.querySelector(".parallax-content-img");

//         if (parallaxContentBottom) {
//           parallaxContentBottom.style.transform = "translateY(" + translateYBottom + "px)";
//         }

//         if (parallaxContentImg) {
//           parallaxContentImg.style.transform = "translateY(" + translateYBottom + "px)";
//         }
//       }
//     }
//   }

//   parallaxScroll();

//   window.addEventListener("scroll", parallaxScroll);
// });
