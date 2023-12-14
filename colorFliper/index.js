const colors = ["red", "green", "rgba(133,122,200)", "#f15025"];
const button = document.getElementById("btn");
const letterColor = document.querySelector(".js-color");

button.addEventListener('click', ()=>{
  const randomNumber = Math.floor(getRandomNumber());
  document.body.style.backgroundColor = colors[randomNumber];
  letterColor.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.random() * colors.length;
};

