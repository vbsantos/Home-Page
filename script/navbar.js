
// <li id="aba3" class="nav-item">
//     <p class="nav-link">Contato</p>		<!-- LINK DA NAVBAR -->
// </li>

const setAbaEvent = (aba) => {
    aba.addEventListener("mousedown", function (e) {
        if (e.which == 1) {
            if (!aba.classList.contain("active")) {
                aba.classList.add("active");
                let a = "x";
                let b = "y";
                console.log("Troca do menu "+a+" pro menu "+b);   
            }
        }
    });
}

const desseleciona = () => {

}

const seleciona = (aba) => {
    aba.classList.add("active");
}

// ##########################################

let abas = document.getElementsByClassName("nav-item");
abas = [abas[0], abas[1], abas[2], abas[3]];
abas.forEach(setAbaEvent);