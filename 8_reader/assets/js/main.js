$(document).ready(function() {

  // Add jQuery here

  // On .nav click, toggleClass ON or OFF showme.



$('.girl').mouseenter(function() {
    $('.girl-bubble').addClass('bubble-show');
  });

$('.girl').mouseleave(function() {
    $('.girl-bubble').removeClass('bubble-show');
  });



  $('.girl2-image').mouseenter(function() {
      $('.girl2-bubble').addClass('bubble-show');
    });

  $('.girl2-image').mouseleave(function() {
      $('.girl2-bubble').removeClass('bubble-show');
    });

    $('.btn-menu').mouseenter(function() {
       $('.menu').addClass('m-show');
     });

   $('.btn-menu').mouseleave(function() {
       $('.menu').removeClass('m-show');
     });

     $("#button").click(function() {
         $('html, body').animate({
             scrollTop: $("#myDiv").offset().top
         }, 2000);
     });
     $("#button1").click(function() {
         $('html, body').animate({
             scrollTop: $("#myDiv1").offset().top
         }, 2000);
     });
     $("#button2").click(function() {
         $('html, body').animate({
             scrollTop: $("#myDiv2").offset().top
         }, 2000);
     });

     $("#button3").click(function() {
         $('html, body').animate({
             scrollTop: $("#myDiv3").offset().top
         }, 2000);
     });

     $("#button4").click(function() {
         $('html, body').animate({
             scrollTop: $("#myDiv4").offset().top
         }, 2000);
     });
     $("#button5").click(function() {
         $('html, body').animate({
             scrollTop: $("#myDiv5").offset().top
         }, 2000);
     });
     $("#button6").click(function() {
         $('html, body').animate({
             scrollTop: $("#myDiv6").offset().top
         }, 2000);
     });
     $("#button7").click(function() {
         $('html, body').animate({
             scrollTop: $("#myDiv7").offset().top
         }, 2000);
     });



});


// Add jQuery here
