/*
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
*/

// Alternative
 let chars = ['A', 'B', 'A', 'C', 'B', 'B', 'E'];

 let uniqueChars = [...new Set(chars)];

 console.log(uniqueChars);



// this is if you want to remove duplicate in array
let charss = ['A', 'B', 'A', 'C', 'B', 'D', 'D', 'E', 'E'];


let uniqueCharss = charss.filter((c, index) => {
    return charss.indexOf(c) === index;
});

console.log(uniqueCharss);

console.log(charss.reverse());



// This is interval
let count = 0;
 let setMy = setInterval(() => {  
   count++;
   console.log(count);

   if(count === 10) {
    clearInterval(setMy);
   }
 }, 1000);





