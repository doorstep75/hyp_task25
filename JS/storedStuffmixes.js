/* NOTE I CREATED A SEPARATE MIXES JS FILE AS I COULDN'T GET THE BELOW WORKING ALONGSIDE STORED STUFF */

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

/* ---- IMAGE ---- */
// Target the save for later button
const saveMixImgButton = document.getElementById("save-mixes-image-button");
// Add click event listener to the save button
saveMixImgButton.addEventListener("click", function () {
  // Get the image source
  // create variable that grabs the image by targetting the id assigned to the image
  const clickableImage = document.getElementById("mixes-image");
  // create variable that gives the image an attribute of src
  const mixImageSrc = clickableImage.getAttribute("src");

  // Save the image source to sessionStorage for later retrieval
  // clickedImageSrc is the name of the stored item
  sessionStorage.setItem("clickedMixImageSrc", mixImageSrc);

  // Get the count of items currently stored in sessionStorage, excluding the liked buttons count
  const itemCount = Object.keys(sessionStorage).filter(
    (key) => !key.startsWith("likedButtons")
  ).length;

  // Ask the user if they want to go to the save for later page
  const goToSavePage = confirm(
    `Image saved. You have ${itemCount} item(s) saved for later. Choose OK to view saved items or cancel to continue browsing.`
  );

  // If user confirms, redirect to the page where the image will be displayed
  if (goToSavePage) {
    window.location.href = "saveForLater.html";
  } else {
    // If user cancels, stay on the current page
    alert("You chose to continue browsing.");
  }
});

// DJ QUOTE

// Target the button element
const saveMixQuoteButton = document.getElementById("save-mixes-dj-quote");

// Add event listener to the button click event
saveMixQuoteButton.addEventListener("click", function () {
  // Target the <p> element and extract its content
  const pElement = document.querySelector("#oakenfoldQuote p");
  const mixQuoteContent = pElement.textContent;

  // Save the content to session storage
  sessionStorage.setItem("savedMixDJQuoteContent", mixQuoteContent);

  // Get the count of items currently stored in sessionStorage, excluding the liked buttons count
  const itemCount = Object.keys(sessionStorage).filter(
    (key) => !key.startsWith("likedButtons")
  ).length;

  // Ask the user if they want to go to the save for later page
  const goToSavePage = confirm(
    `Image saved. You have ${itemCount} item(s) saved for later. Choose OK to view saved items or cancel to continue browsing.`
  );

  // If user confirms, redirect to the page where the image will be displayed
  if (goToSavePage) {
    window.location.href = "saveForLater.html";
  } else {
    // If user cancels, stay on the current page
    alert("You chose to continue browsing.");
  }
});
