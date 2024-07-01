let languagesTools=document.getElementsByClassName('languagesTools');
let blackBox=document.getElementById('blackBox');
for(let i=0;i<languagesTools.length;i++){
    let height=languagesTools[i].offsetHeight;
    console.log(height, window.innerHeight);
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
    ProjectName.style.transform = 'scale(1)';
    blackBox.style.transform = 'scale(1)';
}

blackBox.addEventListener('click',function(){
    blackBox.style.display = 'none';
    ProjectName.style.transform = 'scale(0)';
    blackBox.style.transform = 'scale(0)';
    ProjectName.style.display = 'none';
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
