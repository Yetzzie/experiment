
/*
async function gettingDope(url) {
  let myApi = await fetch(url);
  let yourJson = await myApi.json();
  return yourJson;
}

gettingDope('https://api.thecatapi.com/v1/images/0XYvRd7oD/').then((response) => {
  console.log(response);
}).catch((err) => {
  console.log(err);
});
*/

let haha = fetch('https://api.thecatapi.com/v1/images/0XYvRd7oD/').then(response => console.log(response));