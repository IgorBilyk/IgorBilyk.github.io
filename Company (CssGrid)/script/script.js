let menu = document.querySelector('.nav-list');
let navItems = document.querySelectorAll('.list-item');

let hamburger = document.querySelector('.hamburger').addEventListener('click', () => {
    menu.classList.toggle('active');
  /*   for(let i = 0; i < navItems.length; i++){
       navItems[i].style.opacity = 1;

    }
 */
   
})