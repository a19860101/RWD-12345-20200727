
// window.onload = function(){
//     let navBtn = document.querySelector('.nav-toggleBtn');
//     console.log(navBtn);
//     navBtn.onclick = function(){
//         document.querySelector('.nav-collapse').classList.toggle('active');
//     }
// }

$(function(){
    $('.nav-toggleBtn').click(function(){
        // $('.nav-collapse').toggle(600);
        // $('.nav-collapse').fadeToggle(600);
        $('.nav-collapse').slideToggle(600);
    })
    $(window).resize(function(){
        let w = $(window).width();
        console.log(w);
        if(w > 600){
            $('.nav-collapse').show();
            $('.nav-collapse').css('display','flex')
        }else{
            $('.nav-collapse').hide();
        }
    });
})