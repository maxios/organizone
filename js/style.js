// functions
function prevAllCalc(selector, prev_type, initial=0){
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

  console.log($(window).height());
}
// End functions



$(document).ready(function(){

      $(window).scroll(function(e) {
        var scrollTop = $(window).scrollTop();
        console.log(scrollTop);
        var documentHeight = $(document).height();
        var windowHeight = $(window).height();
        var scrollEnd = documentHeight - windowHeight;
        var percentage = (scrollTop/scrollEnd) * 100;
        var titlescroll = 100 + scrollTop;
        if (titlescroll > scrollEnd) {
          titlescroll = scrollEnd
        };
        $('.titles').css('top', titlescroll);

        $('#top-line-scroll').css('width', percentage + '%');
         if(scrollTop + $(window).height() == $(document).height()) {
           $('footer').css('height', '200px');
         }else if (scrollTop > $(document).height()/2){
           $('footer').css('height', '30px');
         }else{
             $('footer').css('height', '10px');
         };

      });

      $('footer').toggle(function(){
        $('footer').css('height', '200px');
        showFooter()
      },function(){
        hideFooter()
        $('footer').css('height', '10px');
      });

     // navbar
     $('#main-nav-list > li').hover(function(){
       var width = $(this).outerWidth() + prevAllCalc(this, null, 250);
        $('#top-line').css('width', width);
    }).mouseleave(function() {
      $('#top-line').css('width', '100%');
    });
    $('#main-nav-list a').click(function(){
      $('#top-line').css('background-color', '#00B4FF');

    });
  $('.drop-ul > a').hover(function(){
      var width = $(this).outerWidth() + prevAllCalc(this);
       $('.top-line').css('width', width);
      var ul = $(this).parent().children().length

       $('#top-line').css('width', ((100/ul)*($(this).index()+1) + '%'));
   }).mouseleave(function() {
     $('.top-line').css('width', '100%');
   });

// titles
    $('.title-text').hover(function(){
      var height = $(this).outerHeight() + $(this).prevAll('div').outerHeight();

      if ($(this).index() == 1){
        $('.horz-line').css('height', '17%');
      } else if ($(this).index() == 2) {
        $('.horz-line').css('height', '33%');
      }else if ($(this).index() == 3) {
        $('.horz-line').css('height', '50%');
      } else if ($(this).index() == 4) {
        $('.horz-line').css('height', '66%');
      } else if ($(this).index() == 5) {
        $('.horz-line').css('height', '83%');
      } else if ($(this).index() == 6) {
        $('.horz-line').css('height', '100%');
      }
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

     $('.titles-content').fadeOut()
     setTimeout(function(){
       $(id).fadeIn();
     }, 500);

     $('footer').css('height', '10px');
   });

});
