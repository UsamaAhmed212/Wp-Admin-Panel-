"use strict";
window.addEventListener('load', function() {
    const dismiss = document.querySelector(".notice-dismiss") || false;
    if(dismiss){
        dismiss.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();

            dismiss.parentElement.remove();
        });
    }
});