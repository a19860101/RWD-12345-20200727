
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
    $('a[data-target]').click(function(){
        let target = $(this).data('target');
        let offset = $(target).offset().top;
        $('html,body').animate({
            scrollTop: offset
        })
    })
    $('#gotop').click(function(e){
        $('html,body').animate({
            scrollTop:0
        })
        e.preventDefault();
    })
    $(window).scroll(function(e){
        let h = $(this).scrollTop();
        console.log(h);
        if(h > 800){
            $('#gotop').fadeIn();
        }else{
            $('#gotop').fadeOut();
        }
        
    })
})