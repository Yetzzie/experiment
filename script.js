const myArry = [10,20,30,40,50];

myArry.push(60,70,80,90);

function multiply(a) {
   return a >= 50;
};

 const paragraph = document.querySelector('.js-p').innerHTML = myArry.filter(multiply);

console.log(myArry.filter(multiply));


for(let i=1; i <= 5; i++) {
  if(2 > i) {
    console.log('youwin');
  }

  if(3 > i) {
    console.log('YouWin2');
  }
}

