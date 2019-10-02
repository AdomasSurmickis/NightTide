// carousel in single product section

var slideIndex = 0;
var prevIndex = 0;
changeSlide(slideIndex);

// Thumbnail image controls
function changeSlide(n) {
  slide(slideIndex = n);
  prevIndex = n;
}

function slide(n) {
  var slides = $(".productPhoto");
  var cursor = $(".cursor");
  cursor[prevIndex].style.opacity = '0.6';
  cursor[slideIndex].style.opacity = '1';
  slides[prevIndex].style.display = "none";
  slides[slideIndex].style.display = "block";

}

$( "html" ).mouseup(function() {
  alert( "Handler for .mouseup() called." );
});