

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];



  const liAdd = function(arr){
    arr.forEach(element => {
        const ul = document.querySelector("ul");
        const li = document.createElement("li");
        ul.appendChild(li); 
        li.innerHTML = element;
    })}

liAdd(ingredients);