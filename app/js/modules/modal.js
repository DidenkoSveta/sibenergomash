document.addEventListener('DOMContentLoaded', (event) => {
   // Получаем элементы
   var modal = document.getElementById('feedbackModal');
   var btn = document.getElementById('openModal');
   var span = document.getElementsByClassName('close')[0];
   var feedbackForm = document.getElementById('feedbackForm');
   var feedbackMessage = document.getElementById('feedbackMessage'); // Элемент для сообщения

   // Открываем модальное окно при клике на кнопку
   btn.onclick = function () {
       modal.style.display = "block";
   }

   // Закрываем модальное окно при клике на (x)
   span.onclick = function () {
       modal.style.display = "none";
       feedbackForm.reset(); // Сбрасываем форму при закрытии модального окна
       feedbackMessage.style.display = "none"; // Скрываем сообщение
   }

   // Закрываем модальное окно при клике за его пределами
   window.onclick = function (event) {
       if (event.target == modal) {
           modal.style.display = "none";
           feedbackForm.reset(); // Сбрасываем форму при закрытии модального окна
           feedbackMessage.style.display = "none"; // Скрываем сообщение
       }
   }

   // Обработчик формы
   feedbackForm.onsubmit = function (event) {
       event.preventDefault();
       // Здесь код для отправки данных формы
       // Например, использование XMLHttpRequest или fetch для асинхронной отправки данных формы

       // После отправки данных (пример с setTimeout для имитации асинхронной отправки)
       setTimeout(function() {
           feedbackMessage.style.display = "block"; // Показываем сообщение
           feedbackForm.reset(); // Очищаем форму

           // Скрываем модальное окно и сообщение через 5 секунд
           setTimeout(function() {
               feedbackMessage.style.display = "none"; // Скрываем сообщение
               modal.style.display = "none"; // Скрываем модальное окно
           }, 5000);
       }, 500); // Имитация задержки сети
   }
});
