/**
 * Напиши скрипт, який під час втрати фокусу 
 * на інпуті (подія blur), перевіряє його вміст щодо 
 * правильної
 *  кількості введених символів.
 * Яка кількість символів повинна бути в інпуті, 
 * зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, 
то border інпуту стає зеленим, 
якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і 
invalid, які ми вже додали у вихідні файли завдання.
 */
const input = document.getElementById('validation-input');
const inputLength = input.getAttribute('data-length');

function handleInputBlur() {
  if (input.value.length === parseInt(inputLength)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}

input.addEventListener('blur', handleInputBlur);
