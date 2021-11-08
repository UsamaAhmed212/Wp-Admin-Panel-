"use strict";
window.onload = function() {
    // collapse toggle #adminmenu 
    const adminmenu = document.querySelector("#adminmenu-wrapper");
    const collapse_button = document.querySelector("#menu-collapse");
    collapse_button.addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        
        adminmenu.classList.toggle("collapse");
    });
    
    // Admin Menu Dropdown Toggle 
    const menu_button = document.querySelector(".menu-toggle-item");
    menu_button.addEventListener("click",function(e) {
        e.stopPropagation();
        e.preventDefault();
        
        adminmenu.classList.toggle("open");
    });


}