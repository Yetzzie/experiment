/*
async function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1
*/




/*
 async function f(){
   let promise = new Promise((resolve, reject) => {
     setTimeout(() => resolve("done!"), 1000)
   })
   let result = await promise; // wait until the promise resolves (*
   alert(result); // "done!"
  } 
 f();
*/


/*
async function f() {
  let response = await fetch('http://no-such-url');
}

// f() becomes a rejected promise
f().catch(alert); // TypeError: failed to fetch // (*)
*/


/*
async function init() {
 return await new Promise((resolve, reject) => {
    setTimeout(() => {
      if(true) {
        resolve('Hello,world');
      } else {
        reject('Fuckyou');
      }
    }, 1000);
  });
};

init().then(alert);
*/




async function loadJson(url) {
  try {
    let response = await fetch(url);
    if (response.status == 200) {
      let yourLit = await response.json();
      return yourLit;
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
    throw error;
  }
}

loadJson('https://javascript.info/no-such-user.json')
  .then(alert)
  .catch(alert);








  
