$(document).ready(function(){

  $("#read-more").click(function() {
    $('.history-text').toggle(1000, 'ease');

  })
$(".first, .food-img-recipe-first, .close-first").click(function(){
    $(".first-text").toggle(3000, "linear");

    });
$(".second , .food-img-recipe-second, .close-second").click(function(){
    $(".second-text").toggle(3000, "linear");

    });
$(".third , .food-img-recipe-third, .close-third").click(function(){
    $(".third-text").toggle(3000, "linear");

    });
$(".history__button").click(function(){

    $(".hiden__text").toggle(2000);

	});
$('.burger').click(function(){
    $('.navbar-top').toggleClass('dark');
    
    if($('.navItems').css('display')=== 'block'){
        $('.navItems').css('display', 'none');
    }else{
        $('.navItems').css('display', 'block');
    }

});
});