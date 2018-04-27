$(document).ready(function() {


// Add jQuery here

$('.menu').click(function() {
  $('.nav').addClass('active');
});


$('.m-open').click(function() {
  $('.nav').addClass('active');
  $('.m-open').addClass('hide');
    $('.m-close').removeClass('hide');
});

$('.m-close').click(function() {
  $('.nav').removeClass('active');
  $('.m-close').addClass('hide');
    $('.m-open').removeClass('hide');
});



















// Don't remove this line
  });
