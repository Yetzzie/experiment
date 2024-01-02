import {deleteInput, checkIt} from './backend.js';

function inputText() {
  const yourValue = document.querySelector('.js-text-inpputer');
  let textHTML = `
  <li> 
  <input id="checkbox" type="checkbox" style="margin-right: 5px;">
  <span class="js-your-text your-text">${yourValue.value}</span>
  <button class="delete-btn js-delete-btn">Delete</button>
  </li>
  `; 
  document.querySelector('.js-ul').innerHTML += textHTML; 
  deleteInput();
  checkIt();
};

document.querySelector('#input-btn').addEventListener('click',()=> {
  inputText();
});