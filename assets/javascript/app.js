// Section 1: Global Variables
// ================================================================
// Arrays and Variables for holding

var myInterests = ["Coding", "Websites", "Video Games", "Music", "Sports", "Art"];

console.log(myInterests)
// Section 2: Functions
// ================================================================

	 function renderButtons() {

        // delete repeat buttons
        $("#gif-Buttons").empty();

        // Looping through the array of interests
        for (var i = 0; i < myInterests.length; i++) {

          // Generate button element
          var a = $("<button>");
          // Adding gif class to button
          a.addClass("gif");
          // Add data-attribute
          a.attr("data-name", myInterests[i]);
          // button text
          a.text(myInterests[i]);
          // Adding button to the HTML
          $("#gif-Buttons").append(a);
        }
      }


renderButtons();


// Section 3: Main Process
//  ===============================================================

