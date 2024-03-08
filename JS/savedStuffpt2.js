/* IMAGE ELEMENT ON INDEX PAGE */
// Retrieve the saved image source from sessionStorage
const savedImageSrc = sessionStorage.getItem("clickedImageSrc");

// Check if there's a saved image source
if (savedImageSrc) {
  // Create an img element
  const imgElement = document.createElement("img");

  // Create br element
  const brElement = document.createElement("br");

  // Set the src attribute to the saved image source
  imgElement.src = savedImageSrc;

  // Append the img and br elements to the savedImages div
  document.getElementById("savedImages").appendChild(imgElement);
  document.getElementById("savedImages").appendChild(brElement);
}

/* PARAGRAPH ELEMENTS ON INDEX PAGE */
document.addEventListener("DOMContentLoaded", function () {
  // Select the div where saved paragraphs will be displayed
  const savedParagraphsDiv = document.getElementById("savedParagraphs");

  // Loop through sessionStorage to retrieve saved paragraphs
  for (let i = 0; i < sessionStorage.length; i++) {
    // Get the key of the saved item
    const key = sessionStorage.key(i);

    // Check if the key starts with "savedParagraph" (indicating a saved paragraph)
    if (key.startsWith("savedParagraph")) {
      // Retrieve the saved paragraph content
      const savedParagraph = sessionStorage.getItem(key);

      // Create a new paragraph element
      const paragraphElement = document.createElement("p");
      // Set the content of the paragraph to the saved paragraph
      paragraphElement.textContent = savedParagraph;

      // Append the paragraph to the div with id 'savedParagraphs'
      savedParagraphsDiv.appendChild(paragraphElement);
    }
  }
});
/* ------------ INDEX PAGE END -------------- */

/* ----------- MIXES PAGE START --------------- */
// IMAGE
// Retrieve the saved image source in mixes from sessionStorage
const savedMixImageSrc = sessionStorage.getItem("clickedMixImageSrc");

// Check if there's a saved image source
if (savedMixImageSrc) {
  // Create an img element
  const mixImgElement = document.createElement("img");

  // Create br element
  const brElement = document.createElement("br");

  // Set the src attribute to the saved image source
  mixImgElement.src = savedMixImageSrc;

  // Append the img element to the savedImages div
  document.getElementById("savedImages").appendChild(mixImgElement);
  document.getElementById("savedImages").appendChild(brElement);
}

// DJ QUOTE

// Retrieve the content from session storage
const savedMixQuoteContent = sessionStorage.getItem("savedMixDJQuoteContent");

// Check if there's saved content
if (savedMixQuoteContent) {
  // Create a paragraph element
  const quoteParagraph = document.createElement("p");
  quoteParagraph.textContent = savedMixQuoteContent;

  // Append the paragraph element to the savedDJQuotes div
  document.getElementById("savedDJQuotes").appendChild(quoteParagraph);
}

// "savedMixDJQuoteContent", mixQuoteContent

/* ------------ MIXES PAGE END ----------- */

/* ----- LIVE PAGE START ----- */
// IMAGE
// Retrieve the saved image source in mixes from sessionStorage
const savedLiveImageSrc = sessionStorage.getItem("clickedLiveImageSrc");

// Check if there's a saved image source
if (savedLiveImageSrc) {
  // Create an img element
  const liveImgElement = document.createElement("img");

  // Create br element
  const brElement = document.createElement("br");

  // Set the src attribute to the saved image source
  liveImgElement.src = savedLiveImageSrc;

  // Append the img element to the savedImages div
  document.getElementById("savedImages").appendChild(liveImgElement);
  document.getElementById("savedImages").appendChild(brElement);
}

// DJ QUOTE
// Retrieve the content from session storage
const savedLiveQuoteContent = sessionStorage.getItem("savedLiveDJQuoteContent");

// Check if there's saved content
if (savedLiveQuoteContent) {
  // Create a paragraph element
  const quoteParagraph = document.createElement("p");
  quoteParagraph.textContent = savedLiveQuoteContent;

  // Append the paragraph element to the savedDJQuotes div
  document.getElementById("savedDJQuotes").appendChild(quoteParagraph);
}

/* ----- LIVE PAGE END ----- */

/* ----- VISITORS PAGE START ----- */

// Function to display comments
function displayComments() {
  // Retrieve comments from session storage or initialize as an empty array if there are none
  var comments = JSON.parse(sessionStorage.getItem("comments")) || [];
  // Get the container element where comments will be displayed
  var commentsContainer = document.getElementById("visitorComments");
  // Clear any existing content in the comments container and add a heading
  commentsContainer.innerHTML = "<h3>Visitor's comments</h3>";
  // Check if there are no comments
  if (comments.length === 0) {
    // If there are no comments, display a message indicating so
    commentsContainer.innerHTML += "<p>No comments yet.</p>";
  } else {
    // If there are comments, loop through each comment
    comments.forEach(function (comment) {
      // Display each comment within a paragraph element
      commentsContainer.innerHTML += "<p>" + comment + "</p>";
    });
  }
}

// Call displayComments initially to load existing comments
displayComments();
