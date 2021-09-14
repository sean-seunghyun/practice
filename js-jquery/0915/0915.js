console.log('loaded');
$(window).scroll(function (){
    let height = $(window).scrollTop();
    console.log(height);
    if(height>100){
        $('nav').css('height', '50px');
        $('.nav-connect-btn').children().css('font-size', '10px');
    }
})
