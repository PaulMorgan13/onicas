let bookEvent = document.getElementById("book-f");  
let bookCake = document.getElementById("book-c");  

let eventBtn = document.getElementById("book-e-btn");
let cakeBtn = document.getElementById("book-c-btn");


 cakeBtn.onclick = () => {
    eventBtn.style.textDecoration = "none";  
    cakeBtn.style.textDecoration ="underline lightpink" ;
    bookEvent.style.display = "none";
    bookCake.style.display = "block"; 

 }  



 let toggle=()=> {  
    eventBtn.style.textDecoration = "underline lightpink" ;  
    cakeBtn.style.textDecoration ="none" ;
    bookCake.style.display = "none";
    bookEvent.style.display = "block";


    }


 eventBtn.addEventListener("click", toggle ) 



