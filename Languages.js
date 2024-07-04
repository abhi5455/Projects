let languagesTools=document.getElementsByClassName('languagesTools');
let blackBox=document.getElementById('blackBox');
for(let i=0;i<languagesTools.length;i++){
    let height=languagesTools[i].offsetHeight;
}

let ProjectName=document.getElementById('languagesTools');
function displayTools(projectName){
    blackBox.style.height=document.body.clientHeight+'px';
    blackBox.style.display = 'block';
    ProjectName.style.display = 'block';
    createLangIcon(projectName);
    blackBox.style.height=(document.body.offsetHeight+70)+'px';
    let height=parseFloat(window.getComputedStyle(ProjectName).height);
    ProjectName.style.top=((window.innerHeight/2)-(height/2))+'px';
    window.addEventListener('resize', function(){
        let height=parseFloat(window.getComputedStyle(ProjectName).height);
        ProjectName.style.top=((window.innerHeight/2)-(height/2))+'px';
        blackBox.style.height=(document.body.offsetHeight+70)+'px';
    });
    blackBox.style.opacity = '0.85';
    ProjectName.style.transform = 'scale(1)';
}

blackBox.addEventListener('click',function(){
    ProjectName.style.transform = 'scale(0)';
    blackBox.style.opacity = '0';
    setTimeout(() => {
        ProjectName.style.display = 'none';
        blackBox.style.display = 'none';
    }, 400);
});


function languageToolsLight(){
    let langIconText=document.getElementsByClassName('langIconText');
    for(let i=0;i<langIconText.length;i++){
        langIconText[i].style.color = 'darkslategrey';
        langIconText[i].style.opacity = '0.9';
    }
}

function languageToolsDark(){
    let langIconText=document.getElementsByClassName('langIconText');
    for(let i=0;i<langIconText.length;i++){
        langIconText[i].style.color = 'white';
        langIconText[i].style.opacity = '0.8';
    }
}


//Updating Languages & Tools
let langIconContainer=document.getElementById('langIconContainer');
let ExpenseTracker = ['EXPENSE TRACKER', 'expense', 'html', 'css', 'JavaScript'];
let UnitConverter = ['UNIT CONVERTER', 'libra', 'html', 'css', 'JavaScript'];
let GregorianCalendar = ['GREGORIAN CALENDAR', 'calendar', 'html', 'css', 'JavaScript'];

function createLangIcon(projectName){
    langIconContainer.innerHTML='';
    if(projectName==='ExpenseTracker'){
        appendIcon(ExpenseTracker);
    }
    else if(projectName==='UnitConverter'){
        appendIcon(UnitConverter);
    }
    else if(projectName==='GregorianCalendar'){
        appendIcon(GregorianCalendar);
    }
}
function appendIcon(projectNameVariable){
    let originalImg=document.getElementById(projectNameVariable[1]);
    let clonedImg=originalImg.cloneNode(true);
    document.getElementById('imgContainer').innerHTML='';
    document.getElementById('imgContainer').appendChild(clonedImg);
    document.getElementById('ProjectIdentifier').textContent=projectNameVariable[0];
    for(let i=2;i<projectNameVariable.length;i++){
        let originalIcon=document.getElementById(projectNameVariable[i]);
        let clonedIcon=originalIcon.cloneNode(true);
        langIconContainer.appendChild(clonedIcon);
    }
}