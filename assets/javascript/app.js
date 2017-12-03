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
      

      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        gif + "&api_key=dc6zaTOxFJmzC&limit=10";
      
      $.ajax({
        url: queryURL,
        method: "GET"
      })
      .done(function(response) {

        $("#gify-view").empty();

        console.log(response);
        
        for (var i = 0; i < 11; i++) {
        // save image_orignal_url property
        var imageURL = response.data[i].images.fixed_height_small.url;
        var gifRating = response.data[i].rating;

        
        console.log(response.data[i].images.fixed_height_still.url);
        console.log(gifRating);

        // console.log(response.data[i].images.fixed_height_still);
        // create and store image tag
        var gifImage = $("<img>");

        // setting the gifImage src attributes to imageURL
        gifImage.attr("src", imageURL);
        gifImage.attr("alt", "gif image");
        


        $("#gify-view").prepend(gifRating);
        $("#gify-view").prepend(gifImage);


       }
        // console.log(response);
      });
    }

    // Pause the gif
    $(document).on("click", ".gif", function(){

      var state = $(this).attr("data-state");

      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });
    

      $(document).on("click", ".gif", displayGifInfo);
      
// Section 3: Main Process
//  ===============================================================

renderButtons();
