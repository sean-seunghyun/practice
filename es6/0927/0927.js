let people = {
    name: '김승현',
    sayHi : function (){
        console.log(`안녕 나는 ${this.name}`);
    }
}

people.sayHi();


let datas = {
    data: [1,2,3,4,5],
}

datas.sum = function (){
    let sum = 0;
    this.data.forEach( a => {
        sum += a;
    })
    console.log(sum);
}

datas.sum();


document.getElementById('btn').addEventListener('click', function () {
    setTimeout(() => {
        console.log(this);
    }, 1000)
})