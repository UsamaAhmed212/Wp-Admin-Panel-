"use strict";
window.onload = function() {
    // menu item active class add or remove
    const menu_items = document.querySelectorAll("#adminmenu .menu-item");
    menu_items.forEach( function (element) {
        element.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            
            menu_items.forEach(function (element) {
                element.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // collapse toggle #adminmenu 
    const collapse_button = document.querySelector("#menu-collapse");
    collapse_button.addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        
        const adminmenu = document.querySelector("#adminmenu-wrapper");
        adminmenu.classList.toggle("collapse");
    });

}