"use strict";

// Search Form.
document.querySelector('.search a').addEventListener('click', function() {
    let searchTop = document.querySelector('.search-top');
    searchTop.classList.toggle('active');
});

// Sidebar Menu.
document.querySelector('.right-bar .bar').addEventListener('click', function() {
    let sidebarMenu = document.querySelector('.sidebar-menu');
    sidebarMenu.classList.add('active');
});

document.querySelector('.cross').addEventListener('click', function() {
    let sidebarMenu = document.querySelector('.sidebar-menu');
    sidebarMenu.classList.remove('active');
});