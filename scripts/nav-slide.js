let burger = document.querySelector(".burger");
let show = document.querySelector(".show");




show.style.right = "-100%";

burger.onclick =() => {

    if (show.style.right === "-100%"){
        show.style.right ="0";
    } 
    else{
        show.style.right= "-100%";
    }
}