console.log('loaded');
$(window).scroll(function (){
    let height = $(window).scrollTop();
    console.log(height);
    if(height>100){
        $('nav').css('height', '50px');
        $('.nav-connect-btn').children().css('font-size', '10px');
    }
})

$('.nav-connect-btn').click( () => {
    $('.black-background').show();
})


$('#modal-btn').click( () => {
    $('.black-background').hide();
})

$('.black-background').click ( (e) =>{
    // console.log(e);

    if(e.target === $('this')){
        $('.black-background').hide();
    }

})


$('.list').click( (e) => {
   showTab(e.target.dataset.id);
})

const showTab = (i) => {
    $('.tab-button').removeClass('active');
    $('.tab-content').removeClass('show');
    $('.tab-button').eq(i).addClass('active');
    $('.tab-content').eq(i).addClass('show');
}
