$(document).ready(function () {

let burger  = document.querySelector('.burger');
let nav     = document.querySelector('.list-items');
let links   = document.querySelectorAll('.item');

     $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top -110
    }, 800);
});
  //Changing color of navbar
  let $nav = $(".navbar");
     $(document).scroll(function () {
       $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
       //$('.span-logo').toggleClass('pinked', $(this).scrollTop() > $('.cover').height()-10);
     });
        
  burger.addEventListener('click', (e) => {
    //Toggle Nav
    nav.classList.toggle('nav-active');

    //Animate links 
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';   
        } else {
            link.style.animation = `navLinkFade 1s linear forwards ${index / 7 + 0.5}s`;
        }     
    })
    //Toggle close button
    burger.classList.toggle('toggle');
    })

});
