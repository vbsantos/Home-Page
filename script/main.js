var sites = [
    { id: 0, name: "Google", description: "Pesquisa qualquer coisa", link: ["https://www.google.com/", "https://www.google.com/search?q="], icon: "img/icon_google.png", active: true },
    { id: 1, name: "Google Translator", description: "Traduz qualquer coisa", link: ["https://translate.google.com/", "https://translate.google.com/#auto/pt/"], icon: "img/icon_translator.png", active: true },
    { id: 2, name: "YouTube", description: "Pesquisa vídeos", link: ["https://www.youtube.com/", "https://www.youtube.com/results?search_query="], icon: "img/icon_youtube.png", active: true },
    { id: 3, name: "Bing", description: "Pesquisa qualquer coisa", link: ["https://www.bing.com/", "https://www.bing.com/search?q="], icon: "img/icon_bing.png", active: false },
    { id: 4, name: "Wikipedia", description: "Sabe tudo sobre tudo", link: ["https://pt.wikipedia.org/", "https://pt.wikipedia.org/wiki/"], icon: "img/icon_wikipedia.png", active: true },
    { id: 5, name: "GitHub", description: "Pesquisa códigos e projetos open-source", link: ["https://www.github.com/", "https://github.com/search?q="], icon: "img/icon_github.png", active: true },
    { id: 6, name: "Stack Overflow", description: "Pesquisa problemas e soluções relacionadas a programação", link: ["https://pt.stackoverflow.com/", "https://pt.stackoverflow.com/search?q="], icon: "img/icon_stackoverflow.png", active: true },
    { id: 7, name: "Google Images", description: "Pesquisa Imagens", link: ["https://www.google.com/", "https://www.google.com.br/images?q="], icon: "img/icon_google.png", active: false },
    { id: 8, name: "IMDb", description: "Pesquisa filmes e séries", link: ["https://www.imdb.com/", "https://www.imdb.com/find?ref_=nv_sr_fn&q="], icon: "img/icon_imdb.png", active: true },
    { id: 9, name: "Reddit", description: "Pesquisa subreddits", link: ["https://www.reddit.com/", "https://www.reddit.com/search/?q="], icon: "img/icon_reddit.png", active: false },
    { id: 10, name: "Ecosia", description: "Pesquisa qualquer coisa plantando árvores", link: ["https://ecosia.org", "https://www.ecosia.org/search?q="], icon: "img/icon_ecosia.png", active: true },
    { id: 11, name: "Duck Duck Go", description: "Pesquisa qualquer coisa discretamente", link: ["https://duckduckgo.com", "https://duckduckgo.com/?q="], icon: "img/icon_duckduckgo.png", active: true }
];

var historico = new Array(); //{when: "time", where: "nome", what: "search", how: "address"}

const search_bar = document.getElementById("form");

const get_search = () => {
    return search_bar.value;
}

const toInternet = (common_string) => {
    return common_string.toLowerCase().replace(" ", "%20");
}

const getTime = () => {
    const now = new Date();
    const hor = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    return hor + ":" + min + ":" + sec;
}

const addToHistory = (nome, search, address, time=getTime()) => {
    // const time = getTime();
    const string = "[" + time + "] " + nome + ": \"" + search + "\"";       
    //historico = historico || [];
    historico.push({
        when: time,
        where: nome,
        what: search,
        how: address
    });
    localStorage.setItem("history", JSON.stringify(historico));

    const menu = document.getElementById("sidemenu2");
    const item = document.createElement("div");
    // item.classList.add("side-menu-item");
    const link = document.createElement("a");
    link.href = address;
    const text = document.createElement("p");
    const content = document.createTextNode(string);

    text.appendChild(content);
    link.appendChild(text);
    item.appendChild(link);
    menu.appendChild(item);
}

const setAsSearchOption = (site) => {
    console.log("Setting \"" + site["name"] + "\" as search option.")
    const searchIcons = document.getElementById("search-options");
    const slot = document.createElement("div");
    slot.classList.add("col-sm");
    const icon = document.createElement("img");
    icon.src = site["icon"];
    icon.title = site["name"];
    icon.alt = "icon";
    icon.classList.add("search-icon");
    slot.setAttribute("id", "si" + site["id"]); // si0 si1 si2
    slot.appendChild(icon);
    searchIcons.appendChild(slot);
    slot.addEventListener("mousedown", function (e) {
        const search = get_search();
        if (search == "") {
            var address = site["link"][0];
        }
        else {
            var address = site["link"][1] + toInternet(search);
            addToHistory(site["name"], search, address);
            search_bar.value = "";
        }
        if (e.which == 1) {
            window.location.href = address;
        }
        else if (e.which == 2 || e.button == 4) {
            window.open(address);
        }
    });
}

const removeSearchOption = (site) => {
    const searchIcons = document.getElementById("search-options");
    const searchOption = document.getElementById("si" + site["id"]);
    searchIcons.removeChild(searchOption);
    site["active"] = false;
}

const createHistoryLink = (historydata) => {
    addToHistory(historydata["where"], historydata["what"], historydata["how"], historydata["when"]);
}

const makeSideMenuItem = (site) => {
    console.log("Adding side menu item.");
    const menu = document.getElementById("sidemenu1");
    const item = document.createElement("div");
    item.title = site["description"];
    item.classList.add("side-menu-item");
    item.classList.add("row");
    const icon = document.createElement("img");
    icon.src = site["icon"]
    icon.classList.add("col-sm-2");
    const h = document.createElement("h2");
    const title = document.createTextNode(site["name"]);
    const link = document.createElement("a");
    link.href = site["link"][0];
    link.classList.add("col-sm-9");
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.classList.add("col-sm-1");
    if (site["active"]) {
        cb.checked = true;
        setAsSearchOption(site);
    }
    cb.addEventListener("mousedown", function (e) {
        if (e.which == 1) {
            if (!cb.checked) {
                // console.log("ATIVOU "+site["name"]);
                setAsSearchOption(site);
                site["active"] = true;
            }
            else {
                // console.log("DESATIVOU "+site["name"]);
                removeSearchOption(site);
                site["active"] = false;
            }
            localStorage.setItem("config", JSON.stringify(sites));
        }
    });
    h.appendChild(title);
    link.appendChild(h);
    item.appendChild(cb);
    item.appendChild(link);
    item.appendChild(icon);
    menu.appendChild(item);
}

const updateHistory = () => {
    const temp = localStorage.getItem("history");
    if (temp) {
        historico = JSON.parse(temp);
    }
}

const updateConfig = () => {
    const temp = localStorage.getItem("config");
    if (temp) {
        sites = JSON.parse(temp);
    }
}

const limpaHistorico = () => {
    localStorage.setItem("history", null);
}

// ##############################################

// PEGA TODO O HISTÓRICO DE DENTRO DA CACHE
//updateHistory()

// PEGA TODA A CONFIGURAÇÃO DE DENTRO DA CACHE
updateConfig()

// CRIA ABA HISTÓRICO
//historico.forEach(createHistoryLink);

// CRIA ABA CONFIG E BOTÕES DE PESQUISA
sites.forEach(makeSideMenuItem);

// FOCA NA BARRA DE PESQUISA
search_bar.focus();