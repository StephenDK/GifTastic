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


      // This function handles events for buttons.
      $("#add-gif").on("click", function(event) {
      	// prevent default button behavior
      	event.preventDefault();

      	// grab input from textbox
      	var gif = $("#gify-Input").val().trim()

      	// add gify search option to myInterests array.
      	myInterests.push(gif);

      	renderButtons();
      });

    function displayGifInfo() {
      var gif = $(this).attr("data-name");
      var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&q=" + gif + "&limit=10&rating=r";
      
      $.ajax({
        url: queryURL,
        method: "GET"
      })
      .done(function(response) {
        
        // save image_orignal_url property
        var imageURL = response.data.image_orignal_url;


        
        console.log(response.data.image_orignal_url);
        // create and store image tag
        var gifImage = $("<img>");

        // setting the gifImage src attributes to imageURL
        gifImage.attr("src", imageURL);
        // gifImage.attr("alt", "gif image");

        $("#gify-view").prepend(gifImage)

        console.log(response);
      });
    }

      $(document).on("click", ".gif", displayGifInfo);
   
// Section 3: Main Process
//  ===============================================================

renderButtons();
