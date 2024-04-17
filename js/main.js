"use strict";

// Search Form.
document.querySelector('.search a').addEventListener('click', function() {
    let searchTop = document.querySelector('.search-top');
    searchTop.classList.toggle('active');
});