/* ---- NAV BAR ---- */
// Script to apply color change effect on hover for the navigation bar
$("nav")
  .hover(
    function () {
      $(this).css("background-color", "white");
    },
    function () {
      $(this).css("background-color", "rgb(40, 61, 43)");
    }
  )
  .css("transition", "background-color 0.9s ease");

/* ---- NAV BAR STUFF END ---- */

// Function to handle leaving a comment
document.getElementById("commentButton").addEventListener("click", function () {
  var comment = prompt("Leave a comment:");
  if (comment) {
    // Get existing comments from session storage or initialize as an empty array
    var comments = JSON.parse(sessionStorage.getItem("comments")) || [];
    // Add the new comment to the array
    comments.push(comment);
    // Store the updated comments array back in session storage
    sessionStorage.setItem("comments", JSON.stringify(comments));
    // Update the displayed comments
    displayComments();
  }
});
