const btn = document.querySelector('#btn');


const promise = new Promise((resolve, reject) => {
    btn.addEventListener('click', function () {
        resolve('success');
    });
});

async function clickBtn(){
    let result = await promise;
    console.log('success');
}

clickBtn();