$(document).ready(function () {
    $('.bxslider').bxSlider({

        mode: 'fade', // 수직 스크롤 vertical, 사라지기 fade
        controls: false,  // 컨트롤 버튼 유무
        pager: false, // 페이지 컨트롤 유무
        auto: true, // 이미지 자동 슬라이드 유무
        pause: 3000, // 딜레이 시간 (1000 = 1초)
        autoHover: false

    });
});

//slide
$(document).ready(function () {
    $('.bxslider').bxSlider({

        mode: 'fade', // 수직 스크롤 vertical, 사라지기 fade
        controls: false,  // 컨트롤 버튼 유무
        pager: false, // 페이지 컨트롤 유무
        auto: true, // 이미지 자동 슬라이드 유무
        pause: 3000, // 딜레이 시간 (1000 = 1초)
        autoHover: false

    });
});

//section_01
$(document).ready(function () {
    $("#gyeong").click(function () {
        $("#image").attr("src", "section_01(1).jpg")
        .css("width","850px");
    });
});
$(document).ready(function () {
    $("#pohang").click(function () {
        $("#image").attr("src", "section_01(2).jpg")
        .css("width","850px");
    });
});
$(document).ready(function () {
    $("#duck").click(function () {
        $("#image").attr("src", "section_01(3).jpg")
        .css("width","850px");
    });
});
$(document).ready(function () {
    $("#jin").click(function () {
        $("#image").attr("src", "section_01(4).jpg")
        .css("width","850px");
    });
});

function simpleParallax() {
    //스크롤된 거리
    var scrolled = $(window).scrollTop() + 1;

    //백그라운드 스크롤 속도 변경 시 0.3 을 수정
    $('.section_02').css('background-position', '0' + -(scrolled * 0.3) + 'px');
}
//Everytime we scroll, it will fire the function
$(window).scroll(function (e) {
    simpleParallax();
});

//section_02
$(document).ready(function() {
    $("#s2_dayText").mouseover(function() {
        $("#s2_dayText").css("cursor","pointer")
        $("#s2_dayImg").css("filter","blur(2px)");
    })
    $("#s2_dayText").mouseout(function() {
        $("#s2_dayImg").css("filter","none");
    })
    $("#s2_nightText").mouseover(function() {
        $("#s2_nightText").css("cursor","pointer")
        $("#s2_nightImg").css("filter","blur(2px)");
    })
    $("#s2_nightText").mouseout(function() {
        $("#s2_nightImg").css("filter","none");
    })
});