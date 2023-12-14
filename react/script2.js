// const getItem = [
//   {
//     name: 'EarlJohn',
//     age: 19
//   }, {
//     name: 'johnMark',
//     age: 20
//   },
//   {
//     name: 'Albert',
//     age: 21
//   }
// ];

//   function getPost() {
//     setTimeout(() => {
//       let outPost = '';
//       getItem.forEach((a, index) => { 
//         outPost += `<li>${[a.name, a.age]}</li>`;
//       });
//       document.body.innerHTML += outPost;
//     }, 1000);
//   };

//   function createPost(item, callBack) {
//     setTimeout(() => {
//       getItem.push(item);
//       callBack();
//     }, 2000);   
//   }

//   createPost({name: 'Christ', age: 100}, getPost);


// lets do promises

const getItem = [
   {
     name: 'EarlJohn',
     age: 19
   }, {
     name: 'johnMark',
     age: 20
   },
   {
     name: 'Albert',
     age: 21
   }
 ];

   function getPost() {
     setTimeout(() => {
       let outPost = '';
       getItem.forEach((a, index) => { 
         outPost += `<li>${[a.name, a.age]}</li>`;
       });
       document.body.innerHTML += outPost;
     }, 1000);
   }

   function createPost(item) {
    setTimeout(() => {
      getItem.push(item);
    }, 2000);
   };


   
   async function init() {
    await createPost({name: 'Alibaba', age: 200});
    getPost();
   }
 

/*
   // Promises
   function createPost(item) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        getItem.push(item);

        const error = false;

        if(!error) {
          resolve();
        } else {
          reject('Something went Wrong');
        }
      }, 2000);
    });
        
    };
  
    createPost({name: 'MarkLogan', age: 500}).then(getPost, (err) => console.log(err));
*/


//  async function f() {
//   return 1;
// }

// f().then(alert);







async function f() {
  return Promise.resolve(1);
}

f().then(alert);



