let arrowBtn = document.getElementById("down-btn");   
let hiddenMenu = document.querySelector(".second-extra");  


hiddenMenu.style.padding = "0"; 

hiddenMenu.style.height = "0px"; 

arrowBtn.style.transform = "rotate(0deg)";   




arrowBtn.onclick = () =>{ 

    arrowBtn.style.transform = "rotate(180deg)";


        if ( hiddenMenu.style.height === "0px") {
            hiddenMenu.style.height = "400px"; 
            hiddenMenu.style.padding = "5%"  

              
            
        }

        else {
        
            hiddenMenu.style.height = "0px";   
            arrowBtn.style.transform = "rotate(0deg)"; 
            hiddenMenu.style.padding = 0
             
             
        }
} 






