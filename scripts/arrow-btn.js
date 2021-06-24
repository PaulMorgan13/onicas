let arrowBtn = document.getElementById("down-btn");   
let hiddenMenu = document.querySelector(".second-extra");  




hiddenMenu.style.height = "0px"; 

arrowBtn.style.transform = "rotate(0deg)";   




arrowBtn.onclick = () =>{ 

    arrowBtn.style.transform = "rotate(180deg)";


        if ( hiddenMenu.style.height === "0px") {
            hiddenMenu.style.height = "350px";   
            
        }

        else {
        
            hiddenMenu.style.height = "0px";   
            arrowBtn.style.transform = "rotate(0deg)";
             
             
        }
} 






