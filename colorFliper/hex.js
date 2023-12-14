const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"];
const button = document.getElementById("btn");
const letterColor = document.querySelector(".js-color");

button.addEventListener('click', ()=>{
  document.body.style.backgroundColor = getRandomNumber();
  letterColor.textContent = getRandomNumber();
});

function getRandomNumber() {
  let hexColor = '#';
  for(let i = 0; i < 6; i++) {
    hexColor += colors[Math.floor(Math.random() * colors.length)];
  };
  return hexColor;
};






