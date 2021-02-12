// находим нужные нам элементы
const textInput = document.querySelector('#textInput');
const myButton = document.querySelector('#myButton');
const list = document.querySelector('#list');

// добавляем кнопке myButton, обработчик события по ('клику')
myButton.addEventListener('click', function() {
    // создаем новый элемент с тегом ('li') и сохраняем в переменной newItem, пока что не добавляя в DOM-дерево
    const newItem = document.createElement('li');
    // добавляем новый класс ('item') нашему тегу 'li'
    newItem.classList.add('item');
    // получаем текстовое значение из текстового поля (инпут) в тег 'li'
    newItem.textContent = textInput.value;

    // создаем новую кнопку для удаления элементов
    const deleteButton = document.createElement('button');
    // кнопке добавляем текстовое содержимое 'Удалить'
    deleteButton.textContent = 'Удалить';

    // добавляем кнопке для удаления, обработчик события по ('клику')
    deleteButton.addEventListener('click', function() {
        // из списка list, удаляем элемент 'li'
        list.removeChild(newItem);
    });

    // в наш элемент 'li', добавляем кнопку удалить
    newItem.appendChild(deleteButton);
    // в список list, добавляем элемент 'li'
    list.appendChild(newItem);

    // очищаем содержимое текстового поля (инпут)
    textInput.value = '';
});
