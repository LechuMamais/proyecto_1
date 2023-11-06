console.log("hola")

document.addEventListener('DOMContentLoaded', function () {
    const menu_hamburguer_icon = document.getElementById('menu_hamburguer_icon');
    const menu_hamburguer = document.getElementById('menu_hamburguer');

    menu_hamburguer_icon.addEventListener('click', function () {
        if (menu_hamburguer.classList.contains('hidden')) {
            menu_hamburguer.classList.remove('hidden');
        } else {
            menu_hamburguer.classList.add('hidden');
        }
    });
});