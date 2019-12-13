const categories = Array.from(document.querySelector("#categories").children);


const work = function() {
    console.log(`В списке ${categories.length} категории`);
};
work();

categories.forEach(element => {
    const title = element.querySelector('h2').innerText;
    const liList = element.querySelector('ul').children.length;
    console.log(`Категория:  ${title}`);
    console.log(`Количество элементов:  ${liList}`)
    
}); 

