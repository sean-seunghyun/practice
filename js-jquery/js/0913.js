let current=0;
let max = -200;

$('.btn-next').click(function (){
    current = current - 100;
    if(current < max){
        current = -200;
    }
    let translateX = `translateX(${current}vw)`;
    console.log(translateX);
    $('.slide-container').css('transform', translateX);
});

$('.btn-previous').click(function (){
    current = current +100;
    if(current >= 100){
        current = 0;
    }
    let translateX = `translateX(${current}vw)`;
    console.log(translateX);
    $('.slide-container').css('transform', translateX);
})