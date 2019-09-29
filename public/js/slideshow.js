var slideIndex = 0;

if (document.querySelector('.mySlides') !== null) {
    carousel();
}


function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 5000); // Change image every 2 seconds
}



// highlight current page nav

$(document).ready(function() {

  // Get current page URL
  var url = window.location.href;
 
  // remove # from URL
  url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
 
  // remove parameters from URL
  url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
 
  // select file name
  url = url.substr(url.lastIndexOf("/") + 1);
  
  // If file name not avilable
  if(url == ''){
  url = 'index.html';
  }
  
  // Loop all menu items
  $('.navbar li').each(function(){
 
   // select href
   var href = $(this).find('a').attr('href');
  

   // Check filename
   if("/"+url == href){
 
    
    // Add active class
    $(this).addClass('active');
   }
  });
 });