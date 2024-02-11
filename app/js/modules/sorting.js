document.addEventListener('DOMContentLoaded', function () {
   const filterButtons = document.querySelectorAll('.portfolio-filter .filter-btn');
   const portfolioItems = document.querySelectorAll('.portfolio .portfolio-item');
 
   filterButtons.forEach(button => {
     button.addEventListener('click', function () {
       // Удаляем класс 'active' у всех кнопок и добавляем его к нажатой кнопке
       filterButtons.forEach(btn => btn.classList.remove('active'));
       this.classList.add('active');
       
       // Получаем категорию, которую нужно отфильтровать
       const filterValue = this.getAttribute('data-filter');
       
       // Перебираем все элементы портфолио
       portfolioItems.forEach(item => {
         // Если элемент принадлежит категории или выбраны все категории, показываем его
         if (item.getAttribute('data-category').split(' ').includes(filterValue) || filterValue === 'all') {
           item.style.display = 'flex'; // Показываем элемент
         } else {
           item.style.display = 'none'; // Скрываем элемент
         }
       });
     });
   });
 });
 