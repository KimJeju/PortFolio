$(function(){
    
    
    /*좌우 슬라이드*/
    $('#imgslide>a').eq(0).siblings().css({left:'-1900px'});
    var slideIndex=0;
    setInterval(function(){
        if(slideIndex<3){slideIndex++;}
        else{slideIndex=0;}
        $('#imgslide>a').eq(slideIndex).siblings().animate({left:'-1900px'},300);
        $('#imgslide>a').eq(slideIndex).animate({left:'0px'},300);
    },3000);
    /*좌우 슬라이드*/
    
    
    
    /*상하 슬라이드*/
    $('#imgslide2>a').eq(0).siblings().css({top:'-300px'});
    var slideIndexx=0;
    setInterval(function(){
        if(slideIndexx<2){slideIndexx++;}
        else{slideIndexx=0;}
        $('#imgslide2>a').eq(slideIndexx).siblings().animate({top:'-300px'},300);
        $('#imgslide2>a').eq(slideIndexx).animate({top:'0px'},300);
    },3000);
    /*상하 슬라이드*/
    
    
    /*페이드 인/아웃*/
    $('#imgslide3>a').eq(0).siblings().hide();
    var slideIndexxx=0;
    setInterval(function(){
        if(slideIndexxx<2){slideIndexxx++;}
        else{slideIndexxx=0;}
        $('#imgslide3>a').eq(slideIndexxx).siblings().fadeOut(300);
        $('#imgslide3>a').eq(slideIndexxx).fadeIn(300);
    },3000);
    /*페이드 인/아웃*/
    
})