

const sizeOne = document.getElementById("cakeMone"); 
const sizeTwo = document.getElementById("cakeMtwo");
const sizeThree = document.getElementById("cakeMthree");  
const calc = document.querySelector(".calc-btn")
const yourPrice = document.querySelectorAll("#m-total")

/*tooppers */
const topperOne  = document.getElementById("t-m-none");  
const topperTwo  = document.getElementById("t-m-fruit");  
const topperThree  = document.getElementById("t-m-cookies");   
  
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




