let languagesTools=document.getElementsByClassName('languagesTools');
let blackBox=document.getElementById('blackBox');
for(let i=0;i<languagesTools.length;i++){
    let height=languagesTools[i].offsetHeight;
}

let ProjectName=document.getElementById('ExpenseTracker');
function displayTools(projectName){
    ProjectName=document.getElementById(projectName);
    blackBox.style.height=document.body.clientHeight+'px';
    blackBox.style.display = 'block';
    ProjectName.style.display = 'block';
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
    }
}

function languageToolsDark(){
    let langIconText=document.getElementsByClassName('langIconText');
    for(let i=0;i<langIconText.length;i++){
        langIconText[i].style.color = 'white';
    }
}
