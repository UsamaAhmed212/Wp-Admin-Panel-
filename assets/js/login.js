"use strict";
window.addEventListener('DOMContentLoaded', function(event) {
    // dashicons Toggle
    const button = document.querySelector("button");
    button.addEventListener("click", function(e){
        e.stopPropagation();
        e.preventDefault();
    
        let targetElement = button.firstElementChild;
        if (targetElement.classList.contains("dashicons-visibility")) {
            targetElement.classList.remove("dashicons-visibility");
            targetElement.classList.add("dashicons-hidden");
            button.parentElement.firstElementChild.setAttribute('type','text')
        } else {
            targetElement.classList.remove("dashicons-hidden");
            targetElement.classList.add("dashicons-visibility");
            button.parentElement.firstElementChild.setAttribute('type','password');
        }
        
        
    
    });
    
});