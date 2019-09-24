hamburger.onclick = function myFunction(e) {
    e.preventDefault();
    var menu = document.getElementById('menu');

    if (menu.classList.contains('responsive')) {
        menu.classList.remove('responsive');
    } else {
        menu.classList.add('responsive');
    }
}