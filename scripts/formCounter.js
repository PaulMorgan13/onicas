const sizeOne = document.getElementById("cakeSone"); 
const sizeTwo = document.getElementById("cakeStwo");
const sizeThree = document.getElementById("cakeSthree");  
const calc = document.querySelector(".go-button")
const yourPrice = document.querySelectorAll("#total")

/*tooppers */
const topperOne  = document.getElementById("t-none");  
const topperTwo  = document.getElementById("t-fruit");  
const topperThree  = document.getElementById("t-cookies");   
  
const fill = document.querySelector(".filling")  






let cakePrice = 0 ; 

let cakeSizeValue = 0;   
let topperVal = 0;

console.log(sizeOne.value)



console.log(cakeSizeValue)





calc.addEventListener("click", ()=>{               
    
    


    if (sizeOne.checked == true){
        cakeSizeValue  = parseInt(sizeOne.value) ;
    }    
    
    if  (sizeTwo.checked == true){
        cakeSizeValue  = parseInt(sizeTwo.value) ; 
    }    
    
    if (sizeThree.checked == true){
        cakeSizeValue  = parseInt(sizeThree.value) ; ;
    }    
    console.log(cakeSizeValue)        

    
    if (topperOne.checked == true){
        topperVal = parseInt(topperOne.value);  
    } 

    if (topperTwo.checked == true){
        topperVal = parseInt(topperTwo.value);
    } 
    if (topperThree.checked == true){
        topperVal = parseInt(topperThree.value);
    }

  
    a  = parseInt(cakeSizeValue); 
    b  = parseInt(topperVal);  

    
    t = a+b ;


    for (i=0; i<yourPrice.length; i++){
        yourPrice[i].innerHTML = "$" + t ; 

    }

})




