let closebtn = document.getElementById('close');
let nav = document.getElementById('navi');
let openbtn = document.getElementById('open')



closebtn.onclick=function(){
nav.style.display='none';
closebtn.style.display='none';
openbtn.style.display='flex'
}
openbtn.onclick = function(){
    nav.style.display='flex';
   closebtn.style.display='flex';
    openbtn.style.display='none';
}