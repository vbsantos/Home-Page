// elementos auxiliares
const toogleMenu = document.querySelectorAll('.toggle-menu');
const wrapper = document.querySelector('.wrapper');

// criando evento de click para abrir o menu
for (let i = 0; i < toogleMenu.length; i++) {
    toogleMenu[i].addEventListener('click', menuAction);
}

// função auxiliar que abre e fecha o menu
function menuAction() {
    if (wrapper.classList.contains('show-menu')) {
        wrapper.classList.remove('show-menu');
    }
    else {
        wrapper.classList.add('show-menu');
    }
}

//abre e fecha o menu com a tecla esc
document.addEventListener('keyup', function(e) {
    if(e.keyCode == 27) {
        menuAction();
    }
});
