$(function(){
    
    /*가로메뉴_1유형 한개씩만 내려오기*/
    $('.nav>ul>li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(300);
    });
    $('.nav>ul>li').mouseleave(function(){
        $(this).find('.submenu').stop().slideUp(300);
    });
    /*가로메뉴_1유형 한개씩만 내려오기*/
	

	

    /*좌우 슬라이드*/
    $('#imgslide>a').eq(0).siblings().css({left:'-1200px'});
    var slideIndex=0;
    setInterval(function(){
        if(slideIndex<2){slideIndex++;}
        else{slideIndex=0;}
        $('#imgslide>a').eq(slideIndex).siblings().animate({left:'-1200px'},300);
        $('#imgslide>a').eq(slideIndex).animate({left:'0px'},300);
    },2000);
    /*좌우 슬라이드*/
    
})





