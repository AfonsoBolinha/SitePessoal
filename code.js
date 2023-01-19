var gestorImg= ["Images/Gestor/welcome (1).png","Images/Gestor/Patrocinios.png","Images/Gestor/edit2.png","Images/Gestor/image_2022-12-24_190030831.png"];
var caixaImg= ["Images/Caixa/Main.png","Images/Caixa/2.png","Images/Caixa/3.png","Images/Caixa/4.png"];

var timeout=2000;
var play1=true,play2=true,play3=true;
async function showProjectInfo(projectId, img) {
    let projectInfo = document.getElementById(projectId);
    projectInfo.style.display = "block";
    if (img == 1){
        play1=true;
        let i = 0;
        while(i < caixaImg.length && play1) {
            caixa.src = caixaImg[i];
            i++;
            await new Promise(resolve => setTimeout(resolve, timeout));
            if (i==3){
                i=0;
            }
        }
    }

    if (img == 3) {
        play3=true;
        let i = 0;
        while(i < gestorImg.length && play3) {
            gestor.src = gestorImg[i];
            i++;
            await new Promise(resolve => setTimeout(resolve, timeout));
            if (i==3){
                i=0;
            }
        }
    }
}



function hideProjectInfo(img) {
    let projectInfo = document.getElementsByClassName("project-info");
    for (let i = 0; i < projectInfo.length; i++) {
        projectInfo[i].style.display = "none";
    }
    if (img==1){
        caixa.src=caixaImg[0];
        play1=false
    }
    if (img==3){
        gestor.src=gestorImg[0];
        play3=false;
    }

}




