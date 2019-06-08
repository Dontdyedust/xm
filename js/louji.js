$("ul").children("li").click(function(){
    $("html").animate({
        scrollTop:$(".ji").eq($(this).index()).offset().top
    },500)
})
