// Плавная прокрутка по якорям и предотвращение появления хэша в URL
document.addEventListener('DOMContentLoaded', () => {
  // Проверяем, есть ли хэш в URL при загрузке страницы
  if (window.location.hash && window.location.pathname === '/') {
    // Перемещаемся в начало страницы
    setTimeout(() => window.scrollTo(0, 0), 1);
  }

  // Обработчик кликов по якорным ссылкам
  document.querySelectorAll('a[href^="#"], a[href^="/#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault(); // Предотвращаем стандартное поведение клика по ссылке

      // Убираем '/#' если ссылка с главной страницы и получаем ID
      const targetId = this.getAttribute('href').startsWith('/') ? this.getAttribute('href').substring(2) : this.getAttribute('href').substring(1);

      // Если мы находимся на другой странице и ссылка ведет на главную страницу с якорем
      if (this.getAttribute('href').startsWith('/#') && window.location.pathname !== '/') {
        // Сохраняем идентификатор в localStorage для прокрутки после перехода
        localStorage.setItem('scrollToId', targetId);
        // Перенаправляем на главную страницу без добавления хэша в URL
        window.location.href = '/';
      } else {
        // Находим элемент, на который ссылается якорь
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          // Плавная прокрутка к нужному элементу
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Плавная прокрутка до элемента после загрузки главной страницы
  const scrollToId = localStorage.getItem('scrollToId');
  if (scrollToId) {
    const targetElement = document.getElementById(scrollToId);
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    }
    localStorage.removeItem('scrollToId'); // Очищаем значение после прокрутки
  }
});
