let body=document.body;
let lastCard=document.getElementById('lastCard');
window.addEventListener('load',setBody);
window.addEventListener('resize', setBody);
function setBody() {
    let bodyHeight = lastCard.offsetTop + 510 + 150;
    body.style.height = bodyHeight.toString() + 'px';
}

let sun=document.getElementById('sun');
let moon=document.getElementById('moon');
let root=document.documentElement;
let header=document.getElementById('header');

sun.onclick = function(){
    sun.style.display = 'none';
    moon.style.display = 'block';
    root.style.setProperty('--bg-color', 'ghostwhite');
    root.style.setProperty('--card-bg-color', '#FFF');
    root.style.setProperty('--text-color', '#000');
    root.style.setProperty('--project-name-color', 'blue');
    header.style.backgroundColor = 'rgba(255,255,255,.5)';
}

moon.onclick = function(){
    moon.style.display = 'none';
    sun.style.display = 'block';
    root.style.setProperty('--bg-color', '#000');
    root.style.setProperty('--card-bg-color', '#0E0426');
    root.style.setProperty('--text-color', '#FFF');
    root.style.setProperty('--project-name-color', 'violet');
}