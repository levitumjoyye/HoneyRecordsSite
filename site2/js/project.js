// Получаем ссылку "Видеоработы" и элемент с классом .case
const link = document.querySelector('#video');
const caseElement = document.querySelector('case');

// Добавляем обработчик события при клике на ссылку
link.addEventListener('click', function(event) {
  // Предотвращаем переход по ссылке
  event.preventDefault();
  
  // Изменяем стиль элемента .case, чтобы он стал скрытым
  caseElement.style.display = 'none';
});

