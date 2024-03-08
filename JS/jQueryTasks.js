// activate when DOM has loaded
$(document).ready(function () {
  //click event on the hide-button class
  $(".hide-button").click(function () {
    //inside the click event where 'this' is the button
    // jquery selects all siblings that were within the div of the button
    // toggle is then used to hide/show the sibling elements whtn the button with the class 'hide-button' is clicked
    $(this).siblings("h3, p, a").toggle(); // Toggle the visibility of the h3 and p tags next to the button
  });

  // Toggle burger menu on button click
  $(".burger-menu-btn").click(function () {
    $(".burger-menu").toggleClass("show");
  });

  // chained effect to make a subtle colour change on the nav bar when moving away versus hovering over
  $("nav")
    .hover(
      function () {
        $(this).css("background-color", "white");
      },
      function () {
        $(this).css("background-color", "rgb(40, 61, 43)");
      }
    )
    // this applies .css transition with a slight delay
    .css("transition", "background-color 0.9s ease");

  // Function to start the animation
  function startAnimation() {
    var animationProperties = {
      left: "+=100px", // Example animation properties
      top: "+=50px",
      opacity: "0.7",
      fontSize: "40px",
    };

    // Animate the musical note
    $("#musical-note").animate(animationProperties, 1500, function () {
      // Animation complete, restart the animation
      $("#musical-note").css({
        // Reset the position and properties before restarting
        left: "0px",
        top: "0px",
        opacity: "1",
        fontSize: "20px",
      });
      startAnimation(); // Call startAnimation function again to restart the animation
    });
  }

  // Start the animation initially
  startAnimation();
});
