// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
document.querySelector('.animation-box').addEventListener('click', function () {
    this.style.animation = 'bounce 1s ease-in-out';
    // After the animation, remove the animation property to reset it for future clicks
    this.addEventListener('animationend', function () {
        this.style.animation = '';
    });
});