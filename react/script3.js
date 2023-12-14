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



/*
async function loadJson(url) { // (1)
  let response = await fetch(url); // (2)

  if (response.status == 200) {
    let json = await response.json(); // (3)
    return json;
  }

  throw new Error(response.status);
}

loadJson('https://javascript.info/no-such-user.json')
  .catch(alert); // Error: 404 (4)
*/




class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}


async function loadJson(url) {
  let myHavoc = await fetch(url);
    if(myHavoc.status == 200) {
      let json = await myHavoc.json();
      return json;
    } else {
      throw new HttpError(myHavoc);
    }
}

// Ask for a user name until github returns a valid user
async function demoGithubUser() {
  let name = await prompt("Enter a name?", "iliakan");

 let final = await loadJson(`https://api.github.com/users/${name}`).then((user) => {
    alert(`Full name: ${user.name}.`);
    return user;
  }).catch((err) => {
    if (err instanceof HttpError && err.response.status == 404) {
      alert("No such user, please reenter.");
      return demoGithubUser();
    } else {
      throw err;
    };
  });

  return final;
}

demoGithubUser();








  
