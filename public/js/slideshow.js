var single_previ = 0;
var opened = false;
// carousel in single product section
if (opened == true) {
  changeSlide(slideIndex);
}

function slide(n) {
  var slides = $(".productPhoto");
  var cursor = $(".cursor");
  cursor[single_previ].style.opacity = '0.6';
  cursor[slideIndex].style.opacity = '1';
  slides[single_previ].style.display = "none";
  slides[slideIndex].style.display = "block";

}

function changeSlide(n) {
  slide(slideIndex = n);
  single_previ = n;
}

// $( "html" ).mouseup(function() {
//   alert( "Handler for .mouseup() called." );
// });