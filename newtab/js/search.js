const clear_search = document.getElementById('clear_search');
const search_button = document.getElementById('search_button');

search_input.addEventListener("keydown", (event) => {
    if (event.key === 'Enter' && event.ctrlKey) {
        open_new();
    } else if (event.key === 'Enter') {
        search();
    }
});

clear_search.addEventListener("click", (_) => {
    search_input.value = '';
});

search_button.addEventListener("click", (event) => {
    if (event.ctrlKey) {
        open_new();
    } else {
        search();
    }
});


function get_query_link() {
    index = search_engines.findIndex(a => a.id == select_dropdown_menu.value);
    query_link = search_engines[index].link;
    return query_link;
}
function is_url(query) {
    const regex = /^\S+\.[A-Za-z0-9-]{1,}\/.*$/;
    return regex.test(query);
}
function get_url() {
    let url = search_input.value
    if (url === '') {
        return url;
    }
    if (is_url(url)) {
        url = url.startsWith("http") ? url : "https://" + url;
        search_input.blur();
        return url;
    }
    query_link = get_query_link();
    url = (query_link.replace('%s', encodeURIComponent(url)));
    return url;
}

function search() {
    url = get_url();
    if (url == '') {
        return;
    }
    search_input.blur();
    window.location.href = url;
}
function open_new() {
    url = get_url();
    if (url == '') {
        return;
    }
    search_input.select();
    window.open(url, '_blank');
}
