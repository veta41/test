import menu from '../menu.json';

export function makeImageMarkup ( menu) {
  const menuMarkup = menu
  .map(({ ingredients, name, description, image, price }) => {
    return `<li class="menu__item">
  <article class="card">
    <img class="card__image" src="${image}" alt="${name}" loading="lazy" />
    <div class="card__content">
      <h2 class="card__name">${name}</h2>
      <p class="card__price">${price} кредитов</p>
      <p class="card__descr">${description}</p>
      <ul class="tag-list">
        ${ingredients
          .map(ingredient => {
            return `<li class="tag-list__item">${ingredient}</li>`;
          })
          .join('')}
         </ul>
    </div>
    <button class="card__button button">Добавить в корзину</button>
  </article>
</li>`;
  })
  .join('');


// Находим элемент в DOM и добавляем разметку
const menuRef = document.querySelector('.js-menu');
console.log(menuRef);
menuRef.insertAdjacentHTML('beforeend', menuMarkup);
}




// Применяем шаблон для массива данных
makeImageMarkup(menu);
