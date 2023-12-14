const information = [{
  id: 1,
  name: 'Anne grace',
  job: 'pok-pok',
  img: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  text: 'Hii'
},
{
  id: 2,
  name: 'brodskii',
  job: 'wampipti',
  img: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  text: 'Sarap mo'
},
{
  id: 3,
  name: 'transterlib',
  job: 'Teraboots',
  img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  text: 'Hatdog'
},
{
  id: 4,
  name: 'Aldol muhabamd',
  job: 'Jakolero',
  img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime alias quia dicta fugiat aspernatur atque fugit aperiam, cumque, sapiente quo impedit dolore assumenda itaque ipsam. Quae corporis odio perspiciatis suscipit?'
}];
const img = document.querySelector('#img');
const name = document.querySelector('#name');
const job = document.querySelector('#job');
const info = document.querySelector('#info');


let currentItem = 0;

window.addEventListener('DOMContentLoaded', ()=>{
  showButton();
});

function showButton() {
  const item = information[currentItem];
  img.src = item.img;
  name.textContent = item.name;
  job.textContent = item.job;
};

document.querySelectorAll('.js-btn').forEach((arr)=>{
  arr.addEventListener('click', (e)=>{
    const itss = e.currentTarget.classList;
    if(itss.contains('left')){
      currentItem--;
      if(currentItem < 0){  
        currentItem = information.length - 1;
      }
      showButton();
    }else if(itss.contains('right')){
      currentItem++;
      if(currentItem > information.length -1){  
        currentItem = 0;
      }
      showButton();
    }
  });
});

//random numbers
document.querySelector('#randogs').addEventListener('click', ()=>{
  currentItem = Math.floor(Math.random() * information.length);
  showButton();
});


