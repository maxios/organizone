$(document).ready(function(){

    $('.nav-btn').css('color', 'white');

    $('.field').click(function(){
      $('#leftside').css('filter', 'brightness(0.5)');
    });
    $('#leftside').click(function(){
      $('#leftside').css('filter', 'brightness(1)');
    })
});
