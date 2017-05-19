var nav_color = '#515151';



var stage = 1
 var topp = true;
$(document).ready(function(){
    
    $('.arrow.up').on('click', function(e){
        goUp();
        
    });
    $('.arrow.down').on('click', function(e){
        goDown();
    });
});


$(document).keydown(function(event){   

        if (translateMain == 0){
            topp = true;
        } else {
            topp = false;
        };
        if (event.which == 38 && topp == false) {
            // scroll up
            goUp();
            $('.snam.up').css('border-color', 'white');
          setTimeout(function(){
            $('.snam.up').css('border-color', 'lightblue');
          }, 200);
        }
        else if (event.which == 40) {
            // scroll down
            goDown();
            $('.snam.down').css('border-color', 'white');
          setTimeout(function(){
            $('.snam.down').css('border-color', 'lightblue');
          }, 200);
        }
      

 });
//initial
showText($('#sec1 h1'))
showText($('#sec1 p'))

//go from stage screen to another
var translate1 = 0, translate2 = 0 , translate3 = 0, translateMain = 0;
var windowHeight = $(window).height();
function goStage(direction){
    if (direction == 'up'){
            translate1 += 100;
            translate2 += 300;
            translate3 += 400;
            translateMain += windowHeight + 100;
           
            $('.group-1').css('transform', 'translateY('+ translate1 + 'px)');
            $('.group-2').css('transform', 'translateY('+ translate2 + 'px)');
            $('.group-3').css('transform', 'translateY('+ translate3 + 'px)');
            $('.wrapper').css('transform', 'translateY(' + translateMain + 'px)' );
        
            stage -= 1;
            checkAction(stage);
    } else if (direction == 'down'){
        
            translate1 -= 100;
            translate2 -= 300;
            translate3 -= 400;
            translateMain -= windowHeight + 100;
        
            $('.group-1').css('transform', 'translateY('+ translate1 + 'px)');
            $('.group-2').css('transform', 'translateY('+ translate2 + 'px)');
            $('.group-3').css('transform', 'translateY('+ translate3 + 'px)'); 
            $('.wrapper').css('transform', 'translateY(' +  translateMain + 'px)' );
            stage += 1;
            checkAction(stage);
    };
    console.log(stage);
};

//    var old = parseInt($('.horz-scroll-floor').css('height'));
function goUp(){
    var old = $('.horz-scroll-floor').css('transform').split(' ')[5];
        var currTrans = $('.horz-scroll-floor').css('-webkit-transform').split(/[()]/)[1];
        var posy = parseInt(currTrans.split(',')[5]);
        var result = posy - $(window).height() - 100;
    console.log(result);
    
      if (stage == 2){
          result += 100
            $('.horz-scroll-floor').css('height', '150px');
            $('.horz-scroll-floor').css('transform', '');
        }
    
     $('.horz-scroll-floor').css('transform', "translateY(" + result + 'px)');
    goStage('up');
}
function goDown(){
        var old = $('.horz-scroll-floor').css('transform').split(' ')[5];
        var currTrans = $('.horz-scroll-floor').css('-webkit-transform').split(/[()]/)[1];
        var posy = parseInt(currTrans.split(',')[5]);
        var result = posy + $(window).height() + 100;
    if (stage == 1){
        result -= 100;
            $('.horz-scroll-floor').css('height', $(window).height() + 'px');
    }
            $('.horz-scroll-floor').css('transform', "translateY(" + result + 'px)');
        goStage('down');
}
function yTranslate(element){
    var split = element.css("transform").split(" ");
    var y = ~~split[1].split(")")[0];
    return y;
} 

function stretchLine(value){
  $('.horz-scroll-floor').css('height', value + 'px') 
};

function checkAction(stage){
        $('.headers-num').addClass('trans-num'); //reset all numbers headers
    
    if (stage == 1){
        $('.horz-scroll-floor').css('height', 'calc(60vh)')
        reset();
    }else if (stage == 2){
        $('#num-one').removeClass('trans-num');
        $('#num-one').css('left', '0');
        showText($('#sec2 p'));
        showText($('#sec2 h1'));
        $('.arrow.up').css({
            'display': 'block',
            'opacity': '1'
        });
        
        $('nav').css({
              'position': 'fixed',
              'background-color': 'rgba(81, 81, 81, 0.95)',
                'max-width': 'unset',
              'color': 'white'
            });
        
    }else if (stage == 3){
        $('#num-two').removeClass('trans-num');
        $('#num-two').css('left', '0');
        showText($('#sec3 p'));
        showText($('#sec3 h1'));
    }else if (stage == 4){
        $('#num-three').removeClass('trans-num');
        $('#num-three').css('left', '0');
        showText($('#sec4 p'));
        showText($('#sec4 h1'));
    }
}

function reset(){
        $('#num-two').css('left', '-80px');
        $('.content-text h1').css('left', '-250px');
        $('.content-text p').css('left', 'calc(-50vw)');
        $('#num-one').css('left', '-80px');
        $('.arrow.up').css({
            'display': 'none',
            'opacity': '0'
        });
    
        $('nav').css({
              'position': 'absolute',
              'background-color': 'transparent',
                'max-width': 'unset',
              'color': '#515151'
            });
}

function showText(selector){
        $(selector).css('left', '0px');
};
    
$('.field').on('keypress', function(){
    if ($(this).is(':invalid')){
        $(this).css('width', '50% !important');
    }
})

$(document).keydown(function (e) 
{
    var keycode1 = (e.keyCode ? e.keyCode : e.which);
    if (keycode1 == 0 || keycode1 == 9) {
        e.preventDefault();
        e.stopPropagation();
    }
});
$('input').keydown(function 909090