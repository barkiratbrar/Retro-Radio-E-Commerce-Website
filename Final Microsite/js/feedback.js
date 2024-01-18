// Get all elements with the class "stars" and store them in a NodeList called "stars"
const stars = document.querySelectorAll(".stars span");

// Loop through each star element in the NodeList
stars.forEach((star, index1) => {
    // Add a click event listener to each star
    star.addEventListener("click", () => {
        // Loop through the stars again to determine which stars to activate and deactivate
        stars.forEach((star, index2) => {
            // If the clicked star's index is greater than or equal to the current star's index
            if (index1 >= index2) {
                star.classList.add("active"); // Add "active" class to the star
            } else {
                star.classList.remove("active"); // Remove "active" class from the star
            }
        });
    });
});


document.getElementById("call").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior

    alert("You are about to call +1 (437) 434-0073");
});
