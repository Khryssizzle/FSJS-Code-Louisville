//Problem: User interaction causes no change to application
//Solution: When user interacts cause appropriate changes
var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false

//When clicking on control list items
$(".controls").on("click", "li", function() {
  //Deselect sibling element
  $(this).siblings().removeClass("selected");
  //select clicked element
  $(this).addClass("selected");
  //cache current color
  color = $(this).css("background-color");
});
  
//When "new color" is pressed
$("#revealColorSelect").click(function() {
  //Show color select or hide color select
  changeColor();
  $("#colorSelect").toggle();
});
  
 
//update new color span
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
    $("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}
//when color slider changes
 $("input[type=range]").change(changeColor);

//When "add color" is pressed
$("#addNewColor").click(function(){
  //append color to the controls ul
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  //select new color
    $newColor.click();
});
  
//on mouse events on canvas
$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e) {
   //draw lines
  if(mouseDown) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
  }
}).mouseup(function(){
   mouseDown = false;       
}).mouseleave(function(){
   $canvas.mouseup();           
});

