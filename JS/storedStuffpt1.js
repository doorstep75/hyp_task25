// Function to check if the button is already liked
function isLiked(itemId) {
  const likedButtons = JSON.parse(
    sessionStorage.getItem("likedButtons") || "[]"
  );
  return likedButtons.includes(itemId);
}

// Function to update the button state
function updateButtonState(button) {
  const itemId = button.getAttribute("id");
  if (isLiked(itemId)) {
    button.style.backgroundColor = "green";
  }
}

// Event listener to handle button clicks
document.querySelectorAll(".like-button").forEach((button) => {
  // Update button state when the page loads
  updateButtonState(button);

  // Add click event listener
  button.addEventListener("click", function () {
    const itemId = button.getAttribute("id");

    // Toggle button color
    if (isLiked(itemId)) {
      button.style.backgroundColor = "";
    } else {
      button.style.backgroundColor = "green";
    }

    // Update likedButtons in sessionStorage
    const likedButtons = JSON.parse(
      sessionStorage.getItem("likedButtons") || "[]"
    );
    const index = likedButtons.indexOf(itemId);
    if (index !== -1) {
      // Remove itemId if already present
      likedButtons.splice(index, 1);
    } else {
      // Add itemId if not present
      likedButtons.push(itemId);
    }
    sessionStorage.setItem("likedButtons", JSON.stringify(likedButtons));

    // Prevent like button click from affecting the itemCount
    event.stopPropagation();
  });
});

/* ------ SAVE FOR LATER FUNCTIONS ON INDEX PAGE ------- */
// Target the save for later button
const saveButton = document.getElementById("saveForLater");
// Add click event listener to the save button
saveButton.addEventListener("click", function () {
  // Get the image source
  // create variable that grabs the image by targetting the id assigned to the image
  const clickableImage = document.getElementById("main-page-pic");
  // create variable that gives the image an attribute of src
  const imageSrc = clickableImage.getAttribute("src");

  // Save the image source to sessionStorage for later retrieval
  // clickedImageSrc is the name (key) of the stored item and imageSrc is the value
  sessionStorage.setItem("clickedImageSrc", imageSrc);

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

/* SAME BUT TO SAVE THE PARAGRAPH */

// Select all save paragraph buttons
const saveParagraphButtons = document.querySelectorAll(".save-paragraph");

// Add click event listener to each save paragraph button and use forEach to loop through
saveParagraphButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    // Get the paragraph content associated with this button
    const paragraphContent = this.previousElementSibling.textContent;

    // Save the paragraph content to sessionStorage with unique keys
    sessionStorage.setItem(`savedParagraph${index}`, paragraphContent);

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

    // Notify the user that the paragraph has been saved
    // alert("Paragraph saved for later!");
  });
});
