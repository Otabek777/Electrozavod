$(".header__burgir").click(function() {
    if($(".header__burgir").hasClass("active")) {
        $(".header__right").removeClass("active");
        $(".header__burgir").removeClass("rotate");
        setTimeout(function() {
            $(".header__burgir").removeClass("translate");
        }, 200);
        setTimeout(function() {
            $(".header__burgir").removeClass("active");
        }, 500);
    } else {
        $(".header__right").addClass("active");
        $(".header__burgir").addClass("active");
        setTimeout(function() {
            $(".header__burgir").addClass("translate");
        }, 200);
        setTimeout(function() {
            $(".header__burgir").addClass("rotate");
        }, 500);
    }
});
$(window).scroll(function() {
    let st = $(this).scrollTop();
    $(".banner__content .left").css({
        "transform" : "translate(0px, " + st/10 + "px"
    });
    $(".banner__img").css({
        "transform" : "translate(0px, " + st/20 + "px"
    });
});