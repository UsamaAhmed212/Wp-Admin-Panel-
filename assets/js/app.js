"use strict";
window.onload = function() {
    // menu item active class add or remove
    const menu_item = document.querySelectorAll("#adminmenu .menu-item");
    menu_item.forEach( function (element) {
        element.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            
            menu_item.forEach(function (element) {
                element.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
}