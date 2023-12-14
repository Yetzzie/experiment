const btnDecrease = document.querySelector('.js-btn-decrease');
const btnReset = document.querySelector('.js-btn-reset');
const btnIncrease = document.querySelector('.js-btn-increase');

/*
let numbers = 0;
btnDecrease.addEventListener('click', ()=>{
  numbers--;
  document.querySelector('#number').textContent = numbers;
});

btnReset.addEventListener('click', ()=>{
  numbers = 0;
  document.querySelector('#number').textContent = numbers;
});

btnIncrease.addEventListener('click', ()=>{
  numbers++;
  document.querySelector('#number').textContent = numbers;
});
*/

const btns = document.querySelectorAll('.btn');
let value = 0;

btns.forEach((btn)=>{
  btn.addEventListener('click', (e)=>{
    const yourBtn = e.currentTarget.classList;
    if(yourBtn.contains('decrease')) {
      value--;
    } else if(yourBtn.contains('reset')) {
      value = 0;
    } else if(yourBtn.contains('increase')) {
      value++;
    }

    if(value < 0) {
      document.querySelector('#number').style.color = 'red';
    }
    if(value > 0) {
      document.querySelector('#number').style.color = 'green';
    }
    if(value == 0) {
      document.querySelector('#number').style.color = 'black';
    }
    document.querySelector('#number').textContent = value;
  });
}); 