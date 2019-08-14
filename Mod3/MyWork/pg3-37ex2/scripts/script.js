"use strict";
window.onload = function (){
    const img = document.querySelectorAll("img");
    for (let i = 0; i < img.length; i++){
    img[i].onmouseover = function (){
        img[i].style.height = "600px";
        img[i].style.width = "500px";
    };
    img[i].onmouseout = function (){
        img[i].style.height = "";
        img[i].style.width = "";
    };
};
}