$(function(){
    /*세로유형_1*/
    $('.nav>ul>li').mouseenter(function(){
        $(this).find('.submenu').stop().slideDown(300);
    });
    $('.nav>ul>li').mouseleave(function(){
        $(this).find('.submenu').stop().slideUp(300);
    });
    /*세로유형_1*/ 
    
    
    /*세로유형_2*/
    $('.nav2>ul>li').mouseenter(function(){
        $(this).find('.submenu2').stop().slideDown(300);
    });
    $('.nav2>ul>li').mouseleave(function(){
        $(this).find('.submenu2').stop().slideUp(300);
    });   
    /*세로유형_2*/
})