var select_dropdown_menu = document.getElementById('select-dropdown_menu');
var search_input = document.getElementById('input')

select_dropdown_menu.addEventListener('change', change_search_engine);


var search_engines = JSON.parse(localStorage.getItem('search_engines'));
if (search_engines != null) {
    console.log(search_engines);
    start_populate_dropdown(search_engines);
}


function start_populate_dropdown(array) {
    select_dropdown_menu.replaceChildren();
    for (i = 0; i < array.length; i ++) {
        populate_dropdown(i);
    }
}


function populate_dropdown(index) {
    var se_option = document.createElement('option');
        se_option.setAttribute('value', search_engines[index].id);
        se_option.textContent = search_engines[index].name;
    
    select_dropdown_menu.appendChild(se_option);
    if (index == 0) {
        select_dropdown_menu.style.setProperty('--border_color', search_engines[index].color);
        search_input.style.setProperty('--focus_color', search_engines[index].color);
        search_input.placeholder = "Search with " + search_engines[index].name;
    }
}


function change_search_engine() {
    index = search_engines.findIndex(a => a.id == select_dropdown_menu.value);
    
    select_dropdown_menu.style.setProperty('--border_color', search_engines[index].color);
    search_input.style.setProperty('--focus_color', search_engines[index].color);
    search_input.placeholder = "Search with " + search_engines[index].name;
}
