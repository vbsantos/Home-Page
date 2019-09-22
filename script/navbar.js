const setAbaEvent = (aba) => {
    aba.addEventListener("mousedown", function (e) {
        if (e.which == 1) {
            console.log("TOGGLE MENU") //se fechado abre, se aberto fecha
        }
    });
}

const desseleciona = () => {

}

const seleciona = () => {

}

// ##########################################

let abas = document.getElementsByClassName("nav-item");
abas = [abas[0], abas[1], abas[2], abas[3]];
abas.forEach(setAbaEvent);