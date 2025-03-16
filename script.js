// For hiding the AD section

const ad = document.getElementById("ad");
const cross = document.getElementById("cross");

cross.addEventListener("click", function () {
  ad.classList.add("hidden");
});

/* <div class="hidden" id="ad"></div> */

// Updating the Star Rating

// Get all the star icons
const stars = document.querySelectorAll(".fa-star");

//Function to update the rating and fill the stars
function updateRating(rating) {
  // Update the display of the rating
  document.getElementById("rating").textContent = rating;

  // Update the stars' classes based on the rating
  stars.forEach((star) => {
    const value = parseInt(star.getAttribute("data-value"), 10);

    if (value <= rating) {
      star.classList.remove("text-gray-400"); // Unfilled
      star.classList.add("text-yellow-400"); // Filled
    } else {
      star.classList.remove("text-yellow-400"); // Filled
      star.classList.add("text-gray-400"); // Unfilled
    }
  });
}

// Add event listeners to each star for click functionality
stars.forEach((star) => {
  star.addEventListener("click", () => {
    const rating = parseInt(star.getAttribute("data-value"), 10);
    updateRating(rating);
  });
});
