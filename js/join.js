var nav_color = 'white';
 $(document).ready(function(){
//   $('section, .section-intro-content').css('height', $(window).height());
  //  $('.leftside, .rightside').css('height', $(window).height()/2);
  //  $('.intro-div').css('height', ($(window).height()/2) - 100);

   $('.intro-div h2').mouseenter(function(){
     $('.sq-anime, .sq-anime1').css('animation-play-state', 'running');
   })
 }).mouseleave(function(){
   $('.sq-anime, .sq-anime1').hide();

 });
