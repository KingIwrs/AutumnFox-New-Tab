function set_logo() {
    if (localStorage.getItem('logo') == null) {
        localStorage.setItem('logo', '/assets/AutumnFox.png');
    }
}

function set_name() {
    if (localStorage.getItem('name') == null) {
        localStorage.setItem('name', 'AutumnFox New Tab');
    }
}

function set_bg_color() {
    if (localStorage.getItem('bg_color') == null) {
        localStorage.setItem('bg_color', '#0f131f');
    }
}

function set_SE() {
    if (JSON.parse(localStorage.getItem('search_engines')) == null) {
        var default_search_engines = [
            {
                id: "StartPage_0",
                name: "StartPage",
                color: "#007bc2",
                link: "https://www.startpage.com/do/metasearch.pl?query=%s"
            },
            {
                id: "DuckDuckGo_0",
                name: "DuckDuckGo",
                color: "#de5833",
                link: "https://duckduckgo.com/?q=%s"
            },
            {
                id: "Google_0",
                name: "Google",
                color: "#008000",
                link: "https://www.google.com/search?q=%s"
            }
        ];
        for (i = 0; i < default_search_engines.length; i++) {
            let save_SE = JSON.parse(localStorage.getItem('search_engines')) || [];
            save_SE.push(default_search_engines[i]);
            localStorage.setItem('search_engines', JSON.stringify(save_SE));
        }
    }
}

set_logo();
set_name();
set_SE();
