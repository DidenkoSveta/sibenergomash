document.addEventListener('DOMContentLoaded', function () {
   // Инициализация Swiper для превью сертификатов
   const swiperCertificates = new Swiper('.swiper-container-certificates', {
     slidesPerView: 5,
     spaceBetween: 10,
     loop: true,
     pagination: {
       el: '.swiper-pagination-certificates',
       clickable: true,
     },
     breakpoints: {
       1200: {
         slidesPerView: 4,
         spaceBetween: 10,
       },
       992: {
         slidesPerView: 3,
         spaceBetween: 10,
       },
       768: {
         slidesPerView: 2,
         spaceBetween: 10,
       },
       576: {
         slidesPerView: 1,
         spaceBetween: 10,
       }
     }
   });
 
   // Инициализация Swiper внутри модального окна
   const swiperModal = new Swiper('.swiper-container-modal', {
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
   });
 
   // Обработка клика на превью для открытия модального окна
   const previews = document.querySelectorAll('.certificate-preview');
   const modal = document.getElementById('certificate-modal');
   const closeModal = document.querySelector('.certificate-modal .close');
 
   previews.forEach((preview, index) => {
     preview.addEventListener('click', () => {
       modal.style.display = 'block';
       swiperModal.slideTo(index, 0); // Переход к выбранному слайду
     });
   });
 
   // Закрытие модального окна
   closeModal.addEventListener('click', () => {
     modal.style.display = 'none';
   });
 
   // Закрытие модального окна при клике вне его содержимого
   window.addEventListener('click', (event) => {
     if (event.target === modal) {
       modal.style.display = 'none';
     }
   });
 });
 