"use strict";
window.addEventListener('load', function() {
    // #menu-collapse Click Then #container Section .collapse class toggle   
    const container = document.querySelector("#container");
    const collapse_button = document.querySelector("#menu-collapse");
    collapse_button.addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        
        container.classList.toggle("collapse");
    });
    
    // Admin Menu Dropdown Toggle 
    const adminmenu = document.querySelector("#adminmenu-wrapper");
    const menu_button = document.querySelector(".menu-toggle-item");
    menu_button.addEventListener("click",function(e) {
        e.stopPropagation();
        e.preventDefault();
        
        adminmenu.classList.toggle("open");
    });

});