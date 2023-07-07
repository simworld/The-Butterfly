document.addEventListener("DOMContentLoaded", function() {
    var parallaxContainers = document.querySelectorAll(".parallax-container");
  
    function parallaxScroll() {
      for (var i = 0; i < parallaxContainers.length; i++) {
        var container = parallaxContainers[i];
        var parallaxGreen = container.querySelectorAll(".parallax-green");
        var parallaxWhite = container.querySelectorAll(".parallax-white");
  
        for (var j = 0; j < parallaxGreen.length; j++) {
          var currentParallaxGreen = parallaxGreen[j];
          var rectTop = currentParallaxGreen.getBoundingClientRect();
          var translateYTop = rectTop.top / -2;
  
          var parallaxContentTop = currentParallaxGreen.querySelector(".parallax-content-green");
          var parallaxContentImg = currentParallaxGreen.querySelector(".parallax-content-img");
  
          if (parallaxContentTop) {
            parallaxContentTop.style.transform = "translateY(" + translateYTop + "px)";
          }
  
          if (parallaxContentImg) {
            parallaxContentImg.style.transform = "translateY(" + translateYTop + "px)";
          }
        }
  
        for (var k = 0; k < parallaxWhite.length; k++) {
          var currentParallaxWhite = parallaxWhite[k];
          var rectBottom = currentParallaxWhite.getBoundingClientRect();
          var translateYBottom = (rectBottom.bottom - window.innerHeight) / -2;
  
          var parallaxContentBottom = currentParallaxWhite.querySelector(".parallax-content-white");
          var parallaxContentImg = currentParallaxWhite.querySelector(".parallax-content-img");
  
          if (parallaxContentBottom) {
            parallaxContentBottom.style.transform = "translateY(" + translateYBottom + "px)";
          }
  
          if (parallaxContentImg) {
            parallaxContentImg.style.transform = "translateY(" + translateYBottom + "px)";
          }
        }
      }
    }
  
    parallaxScroll();
  
    window.addEventListener("scroll", parallaxScroll);
  });
  




