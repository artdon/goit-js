import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';
import itemlist from './itemlist.hbs';

document.addEventListener('DOMContentLoaded', onReady);
const inp = document.getElementById('inputID');
const countriesList = document.querySelector('.countries__list');

function onReady(e) {
  document.removeEventListener('DOMContentLoader', onReady);
  inp.addEventListener('input', onInputHandler);
}
let timerId;

function onInputHandler(e) {
  e.preventDefault();
  clearTimeout(timerId);

  timerId = setTimeout(doneRestApi, 500);
}

function buildIteminfo(item) {
  return itemlist(item);
}

function doneRestApi() {
  const urlT = 'https://restcountries.eu/rest/v2/name/';
  fetch(urlT + inp.value)
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      countriesList.innerHTML = '';
      if( data.length  === 0){
        PNotify.error({
          text: 'Please enter a more specific query!',
        });
      }
      if (data.length > 10) {
        PNotify.error({
          text: ' Too many matches found.Please enter a more specific query!',
        });
      }
      if (data.length === 1) {
        countriesList.insertAdjacentHTML('beforeend', buildIteminfo(data));
      }
      if (data.length <= 10) {
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
        text: ' Too many matches found.Please enter a more specific query!',
      });
    });
  };