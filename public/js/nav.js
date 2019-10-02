

$(".language").mouseover(function () {
        $(".selectLang").show();
});


$(".relative")
.mouseleave(function () {
        $(".selectLang").hide();
});

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