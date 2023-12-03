
/*
function bubbleSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
          if (arr[j] > arr[j + 1]) {
              // Swapping elements if they are in the wrong order
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
          }
      }
  }

  return arr;
}

// Example usage:

const unsortedArray = [64, 34, 25, 12, 99, 11, 90];

console.log("Unsorted array:", unsortedArray);

const sortedArray = bubbleSort(unsortedArray);
console.log("Sorted array:", sortedArray);


const myArr = [64, 34, 25, 12, 99, 11, 90];
const l = myArr.length;

for(let i = 0; i < l - 1; i++) {
  for(let j = 0; j < l - 1; j++) {
    if(myArr[j] > myArr[j + 1]) {
      let temps = myArr[j];
      myArr[j] = myArr[j + 1];
      myArr[j + 1] = temps;
    }
  }
}

console.log(myArr);
*/

function inputHere() {
  let input = '';
  input = document.querySelector('.js-input').value;

  let final = `Hi, ${input} How can i help you`;

  return final;
}

document.querySelector('.js-btn').addEventListener('click', ()=> {
    document.querySelector('.yolo').innerHTML += inputHere();
});