$(function() {
    $(window).scroll(function() {
        // var windowScrolledDist = $(document).scrollTop();
        // var navHeight = $('.navbar').height();
        // var logoHeight = $('.logoContainer').height();
        // var logoOffsetTop = $('.logoContainer').offset();
        // console.log(logoHeight, logoOffsetTop.top);
        // if(windowScrolledDist > (logoHeight + 40)) {
        //     $('.navbar').addClass('navbarOnScroll');
        //     $('.featuredContainer').addClass('overlayMoved');
        // }
        // if(windowScrolledDist <= (logoHeight + 40)) {
        //     $('.navbar').removeClass('navbarOnScroll');
        //     $('.featuredContainer').removeClass('overlayMoved');
        // }
    })
})


$(function() {
    $('.navbar li a').click(function() {
        console.log($(this).text())
        
        if($(this).text() == "explore") {
            if($('.exploreContainer').css("display") == "none") {
                // $('.exploreContainer').css({"display" : "block"});
                $(this).addClass('activeNav');
                $('.exploreContainer').addClass('openExploreMenu');
                setTimeout(function() {
                    $('.courseLi').addClass("courseLiVisible"); 
                }, 400);
            }
            else {
                // $('.exploreContainer').css({"display" : "none"});
                $('.exploreContainer').removeClass('openExploreMenu');
                $(this).removeClass('activeNav');
                $('.courseLi').removeClass("courseLiVisible");
                // $('.exploreContainer').addClass('closeExploreMenu');
            }
        }
        if($(this).text() == "experts") {
            if($('.expertContainer').css("display") == "none") {
                $(this).addClass('activeNav');
                $('.expertContainer').addClass('openExpertMenu');
                setTimeout(function() {
                    $('.mainExpertItem').addClass('mainExpertItemVisible');
                    $('.expertHr').addClass('expertHrVisible');
                }, 400)
            }
            else {
                $('.expertContainer').removeClass('openExpertMenu');
                $('.mainExpertItem').removeClass('mainExpertItemVisible');
                $('.expertHr').removeClass('expertHrVisible');
                $(this).removeClass('activeNav');
            }
        }
        if($(this).text() == "blog") {
            if($('.blogContainer').css("display") == "none") {
                $(this).addClass('activeNav');
                $('.blogContainer').addClass('openBlogContainer');
                $('.blockContainer').addClass('firstRowBlock');
            }
            else {
                $('.blogContainer').removeClass('openBlogContainer');
                $(this).removeClass('activeNav');
                $('.blockContainer').removeClass('firstRowBlock');
            }
        }
        if($(this).text() == "people") {

        }

        
    })
});


// $(function() {
//     $('.meetCubeContainer').click(function() {
//         if($('.expertContainer').css("display") == "none") {
//             $('.expertContainer').addClass('openExpertMenu');
//         }
//         else {
//             $('.expertContainer').removeClass('openExpertMenu');
//         }
//     })
// })