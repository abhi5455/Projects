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
let project=document.getElementById('project');

sun.addEventListener('click',lightTheme);
function lightTheme(){
    sun.style.display = 'none';
    moon.style.display = 'block';
    root.style.setProperty('--bg-color', 'ghostwhite');
    root.style.setProperty('--card-bg-color', '#FFF');
    root.style.setProperty('--text-color', '#000');
    root.style.setProperty('--project-name-color', 'blue');
    root.style.setProperty('--icon-color', 'black');
    root.style.setProperty('--icon-color-hover', 'blue');
    root.style.setProperty('--card-glow', '0 0  25px rgba(0,0,128, .5)');
    root.style.setProperty('--watermark','rgba(0,0,128, .5)');
    header.style.backgroundColor = 'rgba(255,255,255,.6)';
    project.style.color="rgb(0,0,128, .8)";
    languageToolsLight();
}

moon.addEventListener('click',darkTheme);
function darkTheme(){
    moon.style.display = 'none';
    sun.style.display = 'block';
    root.style.setProperty('--bg-color', 'black');
    root.style.setProperty('--card-bg-color', '#0E0426');
    root.style.setProperty('--text-color', 'white');
    root.style.setProperty('--project-name-color', 'violet');
    root.style.setProperty('--icon-color', 'white');
    root.style.setProperty('--icon-color-hover', 'blueviolet');
    root.style.setProperty('--card-shadow', 'none');
    root.style.setProperty('--card-glow', '0 0 40px blueviolet');
    if(window.matchMedia('(max-width: 480px)').matches){
        root.style.setProperty('--card-glow', '0 0  35px rgb(138, 43, 226,.8)');
    }
    root.style.setProperty('--watermark','rgba(138, 43, 226, .5)')
    header.style.backgroundColor = 'rgba(14, 4, 38, .8)';
    project.style.color="white";
    languageToolsDark();
}