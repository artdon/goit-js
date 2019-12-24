

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

//   const ul = document.querySelector("ul");

//   const liAdd = function(arr){
//     arr.forEach(element => {
//  ul.appendChild(document.createElement("li").innerHTML = element);
//          const li = document.createElement();
//         // ul.appendChild(li); 
//         // li;
//     })}

// liAdd(ingredients);

const ingredientsList = {
  list: document.querySelector('#ingredients')
};

const listItem = ingredients.map(el => {
  const item = document.createElement('li');
  item.textContent = el;
  return item;
});

ingredientsList.list.append(...listItem);