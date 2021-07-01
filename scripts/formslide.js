const steps = Array.from( document.querySelectorAll(".step")); 

const nextBtn = document.querySelectorAll("form .next-button");   

const goBtn = document.querySelectorAll("form .go-button"); 


const prevBtn = document.querySelectorAll("form .prev-button");    



const form = document.querySelector("#cake-form");


nextBtn.forEach(button => {
        button.addEventListener("click", (e) =>{  
            changeStep("next");

        })

})   
 

goBtn.forEach(button => { 
    let clickCount=0;
    button.addEventListener("click", (e) =>{  
            clickCount++ 
            console.log(clickCount)
            if (clickCount >=2 ){    
                console.log(clickCount)
                changeStep("next");  
                clickCount=0;
        }  

    })

})   

prevBtn.forEach(button => {
    button.addEventListener("click", (e) =>{  
        changeStep("prev");

    })

})   


form.addEventListener("submit", (e)=>{ 
    e.preventDefault();  
    const inputs = []; 
    form.querySelectorAll("input").forEach(input => {  
    const {name, value} = input;  
    inputs.push({name,value})
    })
  console.log(inputs)


})


  
function changeStep(btn){ 
    let index = 0; 
    const active = document.querySelector("form .step.active"); 
    index = steps.indexOf(active)    

    steps[index].classList.remove("active");
    if (btn === "next"){  
        index++; 

    } 
    if (btn === "prev"){  
        index--; 

    } 
    steps[index].classList.add("active")



}