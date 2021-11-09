"use strict";
window.addEventListener('load', function() {
    // Button.collapse Class Click .postbox.closed Class Toggle
    const collapse_buttons = document.querySelectorAll(".collapse");
        collapse_buttons.forEach(function (element) {
            element.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            
            element.parentElement.parentElement.classList.toggle("closed"); 
        });
    });
    
});
