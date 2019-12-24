import itemlist from './itemlist.hbs';
import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';
import PNotifyButtons from '../node_modules/pnotify/dist/es/PNotifyButtons.js';


document.addEventListener('DOMContentLoaded', onReady);
let inp = document.getElementById('inputID');
const urlT = 'https://restcountries.eu/rest/v2/name/';

function onReady(e) {
  document.removeEventListener('DOMContentLoader', onReady);
  inp.addEventListener('input', onInputHandler);
  onInputHandler;
}
let timerId;

function onInputHandler(e) {
  e.preventDefault();
  clearTimeout(timerId);
  timerId = setTimeout(doneRestApi, 500);
}

const countriesList = document.querySelector('.countries__list');

function doneRestApi() {
  fetch(urlT + inp.value)
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      countriesList.innerHTML = '';
      if (data.length > 10) {
        console.log('Список больше 10!');
        data.forEach(elem => {
          data.length = 10;
          countriesList.insertAdjacentHTML(
            'beforeend',
            `<li>${elem.name}</li>`,
          );
        });
      }
      if (data.length === 1) {
        countriesList.insertAdjacentHTML('beforeend', buildIteminfo(data));
      } else {
        data.forEach(elem => {
          countriesList.insertAdjacentHTML(
            'beforeend',
            `<li>${elem.name}</li>`,
          );
        });
      }
    })
    .catch(text => {
      PNotify.error({
        text: " Too many matches found.Please enter a more specific query!"
      });;
    });
}

function buildIteminfo(item) {
  return itemlist(item);
}
