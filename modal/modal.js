const modal = document.querySelector('#js-modal');


// this is will show your modal screen
document.querySelector('#btn').addEventListener('click', ()=>{
  modal.classList.add('activate');
});

//this is will exit the modal
document.querySelector('.exit-btn').addEventListener('click', ()=>{
  modal.classList.remove('activate');
});

modal.addEventListener('click', ()=>{
  modal.classList.remove('activate');
});
