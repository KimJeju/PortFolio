$(function(){
    
    /*가로메뉴_1유형 한개씩만 내려오기*/
    $('.nav>ul>li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(300);
    });
    $('.nav>ul>li').mouseleave(function(){
        $(this).find('.submenu').stop().slideUp(300);
    });
    /*가로메뉴_1유형 한개씩만 내려오기*/
    
    
    /*가로메뉴_2유형 한번에 다 내려오기*/
    $('.nav2>ul').mouseover(function(){
        $(this).find('.submenu2').stop().slideDown(300);
    });
    $('.nav2>ul').mouseleave(function(){
        $(this).find('.submenu2').stop().slideUp(300);
    });
    /*가로메뉴_2유형 한번에 다 내려오기*/
    
    
    /*가로메뉴_3유형 한번에 다 내려오기 + 뒤에 같은색상 배경까지*/
    $('.nav3>ul,.bg').mouseover(function(){
        $('.submenu3,.bg').stop().slideDown(300);
    });
    $('.nav3>ul,.bg').mouseleave(function(){
        $('.submenu3,.bg').stop().slideUp(300);
    });
    /*가로메뉴_3유형 한번에 다 내려오기 + 뒤에 같은색상 배경까지*/
    
    
})