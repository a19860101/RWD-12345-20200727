
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
})