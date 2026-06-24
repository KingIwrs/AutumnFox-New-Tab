var title = document.getElementById('title');
var wrapper_aligner = document.getElementById('wrapper-aligner');
var name_input = document.getElementById('name_text');
var color_input = document.getElementById('color_text');
var color_picker = document.getElementById('color_picker');
var link_input = document.getElementById('link_text');
var button_submit_entry = document.getElementById('button-submit_entry');

name_input.addEventListener('keypress', change_focus)
color_input.addEventListener('keypress', change_focus)
link_input.addEventListener('keypress', change_focus)


color_input.addEventListener('blur', function(e) {
    color_picker.value = e.target.value;
});
color_picker.addEventListener('change', function(e) {
    color_input.value = e.target.value;
});

button_submit_entry.addEventListener('click', submit_pressed)


function change_focus(event) {
    if (event.keyCode != 13 && event.keyCode != null) { // 13 is enter key
        return
    }
    if (event.target.id == 'name_text') {
        color_input.focus();
    }
    if (event.target.id == 'color_text') {
        link_input.focus();
    }
    if (event.target.id == 'link_text') {
        submit_pressed();
    }
}


var url_parameters = new URLSearchParams(window.location.search);
var add_entry = url_parameters.get('add_entry');
var entry_id = url_parameters.get('edit_entry');


search_engines = JSON.parse(localStorage.getItem('search_engines'));
id_index = search_engines.findIndex(a => a.id == entry_id)
if (add_entry == 'true') {
    button_submit_entry.textContent = 'create';
    title.textContent = 'Add Entry';
}
else {
    button_submit_entry.textContent = 'save';
    title.textContent = 'Edit Entry';
    if (id_index == -1) {
        not_an_entry();
    }
    else {
        set_values(id_index)
    }
}

function set_values(index) {
    name_input.value = search_engines[index].name;
    color_input.value = search_engines[index].color;
    color_picker.value = search_engines[index].color;
    link_input.value = search_engines[index].link;
}


function not_an_entry() { // change page to one of those "404 Page Not Found." pages if 'add_entry' != true and 'edit_entry' is not a valid id
    // Replace this to to use appendChild type thing.
    wrapper_aligner.innerHTML = '\
    <div class="wrapper-logo">\
        <img src="/assets/AutumnFox.png" alt="Fox in the night of autumn" class="logo">\
        <h1 class="name">KingIwrs</h1>\
    </div>\
    <div style="text-align: center; -webkit-user-select: text; -ms-user-select: text; user-select: text;">\
        <h1 style="color: red;">404 Page Not Found.</h1>\
        <p>Press \'Add Entry\' or \'edit\' in the navigation bar to open this page correctly.</p>\
    </div>\
    '; // fake 404 page, lol
}


function submit_pressed() {
    if (add_entry == 'true') {
        new_id = get_new_id(name_input.value);

        new_entry = {
            id: new_id,
            name: name_input.value,
            color: color_input.value,
            link: link_input.value
        }

        let save_SE = JSON.parse(localStorage.getItem('search_engines')) || [];
        save_SE.push(new_entry);
        localStorage.setItem('search_engines', JSON.stringify(save_SE));
        window.location.reload(true);
    }
    else {
        var entry_index = search_engines.findIndex(a => a.id == entry_id);
        
        let save_SE = JSON.parse(localStorage.getItem('search_engines')) || [];
        save_SE[entry_index].name = name_input.value;
        save_SE[entry_index].color = color_input.value;
        save_SE[entry_index].link = link_input.value;
        localStorage.setItem('search_engines', JSON.stringify(save_SE));
        window.location.reload(true);
    }
}

function get_new_id(name) {
    for (i = 0; i < search_engines.length; i++) {
        new_id = name + '_' + String(i);
        if (search_engines.findIndex(a => a.id == new_id) == -1) {
            return new_id;
        }
    }
}
