document.addEventListener('DOMContentLoaded', function () {
   const swiper = new Swiper('.swiper-container', {
     // Optional parameters
     direction: 'horizontal',
     loop: true,
     autoplay: {
       delay: 3000,
     },
 
     // If you need pagination
     pagination: {
       el: '.swiper-pagination',
       clickable: true,
     },
   });
 });
 