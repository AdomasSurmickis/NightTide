// var prevScrollpos = window.pageYOffset;
// console.log(prevScrollpos);
// window.onscroll = function() {

//   if (prevScrollpos > 100) {
//     document.getElementById("log").style.display = "none";
//     document.getElementById("navbar").style.top = "0px";
//   } else {
//     document.getElementById("log").style.display = "none";
//     document.getElementsByClassName("navbar").style.top = "0px";
//   }

// };


// on hover 
$(document).ready(function () {
        $(".hidint").hide();
        $(".Recommended").mouseover(function () {
                //     if($(this).hasClass("3")) {
                $(".hidint").show();

                // $(".jumbotron").css("margin-top", "220px");



                //     $(".jumbotron").css({
                //         'margin-top' : "220px",
                //         transition : 'opacity 1s ease-in-out'
                //     });

                //     } else if($(this).hasClass("4")) {
                //         $("#side h2.2").show();
                //     } 
        });

        $(".hidint")
                .mouseleave(function () {
                        //     if($(this).hasClass("3")) {
                        $(".hidint").hide();
                        // $(".jumbotron").css("margin-top", "90px");
                        //     } else if($(this).hasClass("4")) {
                        //         $("#side h2.2").hide();
                        //     }
                });


})





$(function () {
        var timer = $('#timer'),
                timerTop = $('.top img', timer),
                timerBottom = $('.bottom img', timer);

        $('#carousel').carouFredSel({
                auto: {
                        pauseOnEvent: 'resume',
                        button: '#play',
                        progress: {
                                bar: '#timer',
                                updater: function (percentage) {
                                        if (percentage < 50) {
                                                var deg = 180 - (percentage * 180 / 50);
                                                timerTop.css('transform', 'rotate( -' + deg + 'deg )');
                                                timerBottom.css('transform', 'rotate( 0deg )');

                                        } else {
                                                var deg = ((percentage - 50) * 180 / 50);
                                                timerTop.css('transform', 'rotate( 0deg )');
                                                timerBottom.css('transform', 'rotate( ' + deg + 'deg )');
                                        }
                                }
                        }
                },
                scroll: {
                        fx: 'crossfade',
                        duration: 300,
                        timeoutDuration: 3000,
                        onBefore: function () {
                                timer.hide();
                        },
                        onAfter: function () {
                                timer.show();
                                timerTop.css('transform', 'rotate( 182deg )');
                                timerBottom.css('transform', 'rotate( 0deg )');
                        }
                }
        });
});


// carousel

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}