import './theme.js';
import menu from './menu.json';
import menuItem from './menu.hbs';
import './styles.css';


const ref={
    ul: document.querySelector('.menu')
}

function makeMenu(menu) {
    const makeup = menu.map( menu =>menuItem(menu)).join('');
    ref.ul.insertAdjacentHTML('beforeend',makeup);
    
}

makeMenu(menu);