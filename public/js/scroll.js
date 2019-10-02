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








// $(function () {
//         var timer = $('#timer'),
//                 timerTop = $('.top img', timer),
//                 timerBottom = $('.bottom img', timer);

//         $('#carousel').carouFredSel({
//                 auto: {
//                         pauseOnEvent: 'resume',
//                         button: '#play',
//                         progress: {
//                                 bar: '#timer',
//                                 updater: function (percentage) {
//                                         if (percentage < 50) {
//                                                 var deg = 180 - (percentage * 180 / 50);
//                                                 timerTop.css('transform', 'rotate( -' + deg + 'deg )');
//                                                 timerBottom.css('transform', 'rotate( 0deg )');

//                                         } else {
//                                                 var deg = ((percentage - 50) * 180 / 50);
//                                                 timerTop.css('transform', 'rotate( 0deg )');
//                                                 timerBottom.css('transform', 'rotate( ' + deg + 'deg )');
//                                         }
//                                 }
//                         }
//                 },
//                 scroll: {
//                         fx: 'crossfade',
//                         duration: 300,
//                         timeoutDuration: 3000,
//                         onBefore: function () {
//                                 timer.hide();
//                         },
//                         onAfter: function () {
//                                 timer.show();
//                                 timerTop.css('transform', 'rotate( 182deg )');
//                                 timerBottom.css('transform', 'rotate( 0deg )');
//                         }
//                 }
//         });
// });


