
const promise = new Promise(function (res,rej){
   const img = document.getElementById("test");

   img.addEventListener('load', function (){
       res();
   })
    img.addEventListener('error', function (){
        rej();
    })
})

promise.then(function (){
    console.log('success');
}).catch(function (){
    console.log('fail');
})
