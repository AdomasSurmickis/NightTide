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
$(document).ready(function(){
    $(".hidint").hide();
    $(".Recommended").mouseover(function() {
    //     if($(this).hasClass("3")) {
            $(".hidint").show();

            $(".jumbotron").css("margin-top","220px");
          
          
          
        //     $(".jumbotron").css({
        //         'margin-top' : "220px",
        //         transition : 'opacity 1s ease-in-out'
        //     });

    //     } else if($(this).hasClass("4")) {
    //         $("#side h2.2").show();
    //     } 
    });

    $(".hidint")
    .mouseleave(function() {
    //     if($(this).hasClass("3")) {
            $(".hidint").hide();
            $(".jumbotron").css("margin-top","90px");
    //     } else if($(this).hasClass("4")) {
    //         $("#side h2.2").hide();
    //     }
    });


    $(".selectLang").hide();
    $(".language").mouseover(function() {
    //     if($(this).hasClass("3")) {
            $(".selectLang").show();


    //     } else if($(this).hasClass("4")) {
    //         $("#side h2.2").show();
    //     } 
    });


    $(".relative")
    .mouseleave(function() {
    //     if($(this).hasClass("3")) {
            $(".selectLang").hide();
    //     } else if($(this).hasClass("4")) {
    //         $("#side h2.2").hide();
    //     }

    });





})

