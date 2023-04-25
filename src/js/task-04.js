/**
 Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.

 */


const counterValue = document.querySelector('#value'); 
let value = 0; 

const decrementBtn = document.querySelector('[data-action="decrement"]');
decrementBtn.addEventListener('click', () => { 
  value -= 1; 
  counterValue.textContent = value; 
});

const incrementBtn = document.querySelector('[data-action="increment"]'); 
incrementBtn.addEventListener('click', () => { 
  value += 1; 
  counterValue.textContent = value; 
});
