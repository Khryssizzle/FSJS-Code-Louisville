//Problems: User when clicking on image goes to dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption= $("<p></p>");

//An image to overlay
$overlay.append($image);


//Add caption to overlay
$overlay.append($caption);


//Add overlay
$("body").append($overlay);
 

// capture the click event on a link to the image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  // update overlay with the image linked in the link
   $image.attr("src", imageLocation);
   //show the overlay
  $overlay.show();
 
  
  // get child's alt attribute and set caption
 var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

// When overlay is clicked
$overlay.click(function(){
  $overlay.hide();
});
  // Hide the overlay