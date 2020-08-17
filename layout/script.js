
window.onload = function(){
    let navBtn = document.querySelector('.nav-toggleBtn');
    console.log(navBtn);
    navBtn.onclick = function(){
        document.querySelector('.nav-collapse').classList.toggle('active');
    }
}