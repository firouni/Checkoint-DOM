let btndelete = document.querySelectorAll('.btn-del')
for (let i=0; i<btndelete.length; i++){
    btndelete[i].addEventListener('click', function(){
        btndelete[i].parentElement.parentElement.remove();
    })
}
let btplus = document.getElementsByClassName('btn-up')
for (let i=0; i<btplus.length; i++){
    btplus[i].addEventListener('click', function(){
        btplus[i].previousElementSibling.innerText ++;
    })
}
let btmin = document.getElementsByClassName('btn-down')
for (let i=0; i<btmin.length; i++){
    btmin[i].addEventListener('click', function(){
        if(btmin[i].nextElementSibling.innerText>0)
        btmin[i].nextElementSibling.innerText --;
    })
}
let kalb = document.getElementsByClassName('heart')
for (let colors of kalb){
    colors.addEventListener('click', function(){
        if(colors.style.color === 'white' ){
            colors.style.color="red"
          }else{
            colors.style.color = "white"
          }
    })
}