var modal = document.getElementById("modal"); 

var bookBtn = document.getElementById("book"); 

var closeBtn = document.getElementById("close-btn"); 


bookBtn.addEventListener("click", openModal); 

closeBtn.addEventListener("click", closeModal); 

window.addEventListener("click", outsideClick);

function openModal(){
        modal.style.display="flex";
} 


function closeModal(){
            modal.style.display="none";

}

function outsideClick(e){
    
    if (e.target == modal ){
    
    
    modal.style.display="none"; 

    }
}