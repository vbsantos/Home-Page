const desativaLink = (link) => {
    if (link.classList.contains("active")) {
        link.classList.remove("active");
    }
}

const desativaLinks = (links) => {
    links.forEach(desativaLink);
}

const fechaGuia = (aba) => {
    aba.style.display = "none";
    // if (!aba.classList.contains("hidden")) {
    //     aba.classList.add("hidden");
    // }
}

const fechaGuias = (abas) => {
    abas.forEach(fechaGuia);
}

const ativaLink = (link) => {
    link.classList.add("active");
}

const abreGuia = (link) => {
    const id = link.id;
    let new_id = id.substring(3, id.length);
    new_id = "sidemenu" + new_id;
    console.log("ID DA GUIA QUE DEVE SER ABERTA: " + new_id);
    const aba = document.getElementById(new_id);
    aba.style.display = "block";
}

const setChangeGuideEvent = (link) => {
    link.addEventListener("mousedown", function (e) {
        if (e.which == 1) {
            let links = document.getElementsByClassName("nav-item");
            links = [links[0], links[1], links[2], links[3]];
            let abas = document.getElementsByClassName("menu");
            abas = [abas[0], abas[1], abas[2], abas[3]];

            if (!link.classList.contains("active")) {
                desativaLinks(links);
                fechaGuias(abas);
                ativaLink(link);
                abreGuia(link);
            }
        }
    });
}

// ##########################################

let links = document.getElementsByClassName("nav-item");
links = [links[0], links[1], links[2], links[3]];

links.forEach(setChangeGuideEvent);