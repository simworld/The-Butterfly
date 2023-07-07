
// funzionante sotto in caso di problemi
// document.addEventListener("DOMContentLoaded", function() {
//   var parallaxElements = document.querySelectorAll(".parallax-container");

//   function parallaxScroll() {
//     for (var i = 0; i < parallaxElements.length; i++) {
//       var element = parallaxElements[i];
//       var rect = element.getBoundingClientRect();
//       var translateY = rect.top / -2;

//       // Update translateY value for parallax-top section
//       element.querySelector(".parallax-top .parallax-content-top").style.transform = "translateY(" + translateY + "px)";
//       element.querySelector(".parallax-top .parallax-content-img").style.transform = "translateY(" + translateY + "px)";

//       // Calculate the translateY value for parallax-bottom section
//       var bottomTranslateY = (rect.bottom - window.innerHeight) / -2;

//       // Update translateY value for parallax-bottom section
//       element.querySelector(".parallax-bottom .parallax-content-bottom").style.transform = "translateY(" + bottomTranslateY + "px)";
//       element.querySelector(".parallax-bottom .parallax-content-img").style.transform = "translateY(" + bottomTranslateY + "px)";

//     }
//   }

//   parallaxScroll();

//   window.addEventListener("scroll", function() {
//     parallaxScroll();
//   });
  
// });


document.addEventListener("DOMContentLoaded", function() {
  var parallaxContainers = document.querySelectorAll(".parallax-container");

  function parallaxScroll() {
    for (var i = 0; i < parallaxContainers.length; i++) {
      var container = parallaxContainers[i];
      var parallaxTop = container.querySelector(".parallax-top");
      var parallaxBottom = container.querySelector(".parallax-bottom");

      if (parallaxTop) {
        var rectTop = parallaxTop.getBoundingClientRect();
        var translateYTop = rectTop.top / -2;

        parallaxTop.querySelector(".parallax-content-top").style.transform = "translateY(" + translateYTop + "px)";
        parallaxTop.querySelector(".parallax-content-img").style.transform = "translateY(" + translateYTop + "px)";
      }

      if (parallaxBottom) {
        var rectBottom = parallaxBottom.getBoundingClientRect();
        var translateYBottom = (rectBottom.bottom - window.innerHeight) / -2;

        parallaxBottom.querySelector(".parallax-content-bottom").style.transform = "translateY(" + translateYBottom + "px)";
        parallaxBottom.querySelector(".parallax-content-img").style.transform = "translateY(" + translateYBottom + "px)";
      }
    }
  }

  parallaxScroll();

  window.addEventListener("scroll", parallaxScroll);
});


