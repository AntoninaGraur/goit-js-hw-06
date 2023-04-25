// Напиши скрипт створення і очищення колекції елементів. Користувач 
//вводить кількість елементів в input і натискає кнопку Створити,
// після чого рендериться колекція.Натисненням на кнопку Очистити,
//  колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число. 
//Функція створює стільки < div >, скільки вказано в amount і додає 
//їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим 
//від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
//Використовуй готову функцію getRandomHexColor для отримання кольору.



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createButton = document.querySelector('[data-create]');
    const destroyButton = document.querySelector('[data-destroy]');
    const boxesContainer = document.querySelector('#boxes');


    function createBoxes(amount) {
      let boxSize = 30;
      for (let i = 0; i < amount; i += 1) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxesContainer.appendChild(box);
        boxSize += 10;
      }
    }

    function destroyBoxes() {
      boxesContainer.innerHTML = '';
    }

    createButton.addEventListener('click', () => {
      const amount = Number(document.querySelector('input').value);
      createBoxes(amount);
    });

    destroyButton.addEventListener('click', destroyBoxes);