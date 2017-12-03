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

      // This function displays gif info

    function displayGifInfo() {
      var gif = $(this).attr("data-name");
      
      //  variable with url for the api
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        gif + "&api_key=dc6zaTOxFJmzC&limit=10";
      

      $.ajax({
        url: queryURL,
        method: "GET"
      })
      .done(function(response) {

        $("#gify-view").empty();

        console.log(response);
        
        // This loop generates 10 gifs
        for (var i = 0; i < 10; i++) {
       
          // Get the response data back from api and save to variables
        var imageURL = response.data[i].images.fixed_height_still.url;
        var gifRating = response.data[i].rating;
        var gifState = response.data[i].images.fixed_height.url;

        // Tests and Debugging
        
        

        // create and store image tag
        var gifImage = $("<img>");

        // setting the gifImage src attributes to imageURL
        gifImage.attr("src", imageURL);
        gifImage.attr("alt", "gif image");
        gifImage.attr("data-still", imageURL)
        gifImage.attr("data-animate", gifState);
        gifImage.attr("data-state", "still");
        gifImage.attr("class", "gif-StopStateClass");


        $("#gify-view").prepend("Rating: " + gifRating);
        $("#gify-view").prepend(gifImage);
       }
        // console.log(response);
      });
    }

    // Pause the gif
    function clickStopState() {
      var state = $(this).attr("data-state");

      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    };
    

      $(document).on("click", ".gif", displayGifInfo);
      $(document).on("click", ".gif-StopStateClass", clickStopState);
      
      
// Section 3: Main Process
//  ===============================================================

renderButtons();
