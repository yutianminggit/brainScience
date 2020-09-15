$(function(){
    $("#showmenulist").on("touchstart", function(){
        $('.menulist').slideDown("slow");
    })
    $('#closemenu').on("touchstart", function(event){
        $('.menulist').slideUp("slow");
        event.stopPropagation();
    })
    $('.erwei').on("touchstart", function(){
        $('.box').fadeIn("slow");
    })
    $('#closeadvert').on("touchstart", function(){
        $('.box').fadeOut("slow");
    })
})