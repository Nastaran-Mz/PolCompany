$(document).ready(function () {
    $('section.openMenu>i').on("click",function () {
        $('section.menu>nav').slideToggle(700).css({
            "display":"flex",
            "flexFlow":"column nowrap",
            
        })
    });

    $('section.service-image>section.row-1').css({
        "display":"none"
    })
    $('section.service-image>section.row-2').css({
        "display":"none"
    })
    $('section.service-image>section.row-3').css({
        "display":"none"
    })
    /*******animation*********/
    $(document).on("scroll",function () {
        let parallax=$(this).scrollTop();
        console.log(parallax);
        if (parallax===0){
            $('section.parallax img').addClass('animate__bounceInLeft');
            $('section.span').addClass('animate__flipInX');
        }
        else {
            $('section.parallax img').removeClass('animate__bounceInLeft');
            $('section.span').removeClass('animate__flipInX');
        }
         let parallaxAnimate=$(this).scrollTop();
        if (parallaxAnimate>=0.5){
            $('section.parallax').addClass('animate__zoomOutLeft');
        }
        else {
            $('section.parallax').removeClass('animate__zoomOutLeft');
        }
        let service=$(this).scrollTop();
        if (service>=396 && service<1500){
            $('section.service-image img').addClass('animate__lightSpeedInLeft')
            $('section.service h1').addClass('animate__backInLeft');
            $('section.service-image>section.row-1').css({
                "display":"flex"
            })
            $('section.service-image>section.row-2').css({
                "display":"flex"
            })
            $('section.service-image>section.row-3').css({
                "display":"flex"
            })
        }
        else{
            $('section.service-image img').removeClass('animate__lightSpeedInLeft');
            $('section.service h1').removeClass('animate__backInLeft');
        }
        let About=$(this).scrollTop();
        if (About>=1660){
            $('section.about-us').addClass(' animate__fadeInLeftBig');
            $('section.about-img>img').addClass('animate__zoomInUp');
            $('section.aboutUs h1').addClass('animate__flipInY');
        }
        else {
            $('section.about-us').removeClass(' animate__fadeInLeftBig');
            $('section.about-img>img').removeClass('animate__zoomInUp');
            $('section.aboutUs h1').removeClass('animate__flipInY');
        }
        let society=$(this).scrollTop();
        if (society>=1996){
           $('section.society div.row1').addClass('animate__bounceInRight');
           $('section.society div.row3').addClass('animate__bounceInLeft');
           $('section.society-header').addClass('animate__slideInUp');
        }
        else {
            $('section.society div.row1').removeClass('animate__bounceInRight');
            $('section.society div.row3').removeClass('animate__bounceInLeft');
            $('section.society-header').removeClass('animate__slideInUp');
        }
        let contact=$(this).scrollTop();
        if (contact>=2665){
            $('section.contact img').addClass('animate__slideInLeft');
        }
        else {
            $('section.contact img').removeClass('animate__slideInLeft');
        }
    });
    /*******end animation*********/
    /***********hover menu*********/
    $('section.menu>nav>ul>li>a').hover(function () {
        $(this).css({
            "color":"#0954a4",
            "backgroundColor":"rgba(0,0,0,0.9)"
        })
    },function () {
        $(this).css({
            "color":"whitesmoke",
            "backgroundColor":"rgba(0,0,0,0.3)"
        })
    });
    /***********end hover menu*********/
    /**scroll**/
    $(document).on("scroll", function () {
        let st = $(this).scrollTop();
        if (st > 400) {
            $('section.scroll').fadeIn(500);
        } else {
            $('section.scroll').fadeOut(500);
        }
    });
    $('section.scroll').click(function () {
        $("html,body").animate({
            scrollTop: 0,
        }, 650, "linear");
    });
    /****end scroll****/

});