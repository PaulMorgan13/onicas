let arrowBtn = document.getElementById("down-btn");   
let hiddenMenu = document.querySelector(".second-extra");  




hiddenMenu.style.height = "0px"; 
           

arrowBtn.addEventListener("mouseover", e  =>{ 
    arrowBtn.style.transform = "scale(0.9)"

    




}) 


arrowBtn.addEventListener("mouseout", e  =>{ 
    arrowBtn.style.transform = "scale(1)"

    




})


arrowBtn.onclick = () =>{ 


        if ( hiddenMenu.style.height === "0px") {
            arrowBtn.style.transform  = "rotate(180deg)"
            hiddenMenu.style.height = "350px"; 


        }

        else {
        
            hiddenMenu.style.height = "0px"; 
            arrowBtn.style.transform  = "rotate(0deg)"   
             
        }
} 




