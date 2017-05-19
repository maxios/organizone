var nav_color = '#403b33';


  $(window).scroll(function(e) {
        var scrollTop = $(window).scrollTop();
        var documentHeight = $(document).height();
        var windowHeight = $(window).height();
        var scrollEnd = documentHeight - windowHeight;
        var percentage = (scrollTop/scrollEnd) * 100;
        var titlescroll = 100 + scrollTop;
        if (titlescroll > scrollEnd) {
          titlescroll = scrollEnd;
        };
          

        $('#top-line-scroll').css('width', percentage + '%');

          if (scrollTop > 200){
            $('nav').css({
              'position': 'fixed',
              'background-color': 'rgba(81, 81, 81, 0.95)',
                'max-width': 'unset',
              'color': 'white'
            });
            $('.menu').css('border-color', 'white');
            $('.menu-icon').css('background-color', 'white');
            $('.goup').show();

          }else if (scrollTop < 200){
            $('nav').css({
              'position': 'absolute',
              'background-color': 'unset',
                'max-width': '1440px',
              'color': nav_color
            });
            $('.menu').css('border-color', 'grey');
            $('.menu-icon').css('background-color', 'grey');
            $('.goup').hide();
          };

         if(scrollTop + $(window).height() == $(document).height()) {
           $('footer').css('height', '200px');
         }else if (scrollTop > $(document).height()/2){
           $('footer').css('height', '30px');
         }else if ($(document).height() == $(window).height()){
           $('footer').css('height', '200px');
         }else{
             $('footer').css('height', '10px');
         };

      });
