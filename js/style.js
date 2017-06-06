var nav_color = '#444';
// functions
function prevAllCalc(selector, prev_type, initial = 0){
  var width = initial ;
  $(selector).prevAll().each(function(){
    width += $(this).outerWidth();
  });
  return width;
};

function showFooter(){
  $('#footer-content').css({
    'visibility': 'visible',
    'opacity': '1'
  });
}
function hideFooter(){
  $('#footer-content').css({
    'visibility': 'hidden',
    'opacity': '0'
  });
}

function footerDown(element){

}
// End functions

$(document).ready(function(){

   
      $('nav').css('color', nav_color)
      $('.goup').click(function(){
        $(window).scrollTop(0);
      });
    
//
//      $('footer').toggle(function(){
//        $('footer').css('height', '200px');
//        showFooter()
//      },function(){
//        hideFooter()
//        $('footer').css('height', '10px');
//      });

     // navbar
     $('.main-nav-list > li').hover(function(){
       var width = $(this).outerWidth() + prevAllCalc(this, null, 250);
        $('#top-line').css('width', width);
    }).mouseleave(function() {
      $('#top-line').css('width', '100%');
    });
    $('.main-nav-list a').click(function(){
      $('#top-line').css('background-color', '#00B4FF');
      $('.horz-line-nav').css('background-color', '#00B4FF')
    });
  $('.drop-ul > a').hover(function(){

      var height = (($(this).index())/$(this).parent().children('a').length) * 100;
       $('.horz-line-nav').css('height', height + '%');
      var ul = $(this).parent().children().length;

   }).mouseleave(function() {
     $('.top-line-nav').css('width', '100%');
   });

   $('.menu').toggle(function(){
     $('#nav-list-responsive').css('display', 'block');
   },function(){
     $('#nav-list-responsive').css('display', 'none');
   });

     $('.open > p').toggle(function(){
        $(this).next('.dropdown-toggle').css('display', 'block')
     },function(){
       $(this).next('.dropdown-toggle').css('display', 'none')
     });
// titles
    $('.title-text').hover(function(){
      var height = (($(this).index())/$(this).parent().children('.title-text').length) * 100;
        $('.horz-line').css('height', height + "%");

   }).mouseleave(function() {
     $('.horz-line').css('height', '100%');
   });

   $('.title-text').click(function(){

     var id = '#' + $(this).data('id');

     $(window).scrollTop(0);
     $('.title-text h1').css({
       'color': 'inherit',
       'margin-left': '0px'
     });
     $(this).children().css({
       'color': '#00B4FF',
       'margin-left': '10px'
     });

     $('.titles-content').css('display', 'none');
       $(id).show();
//     setTimeout(function(){
//     }, 500);

   });

});
