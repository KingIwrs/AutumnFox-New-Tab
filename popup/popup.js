var wrapper_search_engines = document.getElementById('wrapper-search_engines');
const btn_settings = document.getElementById('btn-settings');
const btn_add_entry = document.getElementById('btn-add_entry');

wrapper_search_engines.addEventListener('click', press_a_button);
wrapper_search_engines.addEventListener('keypress', focusout_index_editor);
wrapper_search_engines.addEventListener('focusout', prep_change_index);
btn_settings.addEventListener('click', open_settings);
btn_add_entry.addEventListener('click', add_entry);


var saved_bg_color = localStorage.getItem('bg_color');
if (saved_bg_color.length > 7) {
    document.body.style.background = "#0f131f";
} else if (saved_bg_color != null) {
    document.body.style.background = saved_bg_color;
}


function press_a_button(event) {
    if (event.target.className == 'delete_button') { // child popups close parent popups in firefox so I won't bother with making an "ARE YOU SURE?!?!?!" popup... I just have to be careful not to press the wrong button, lol
        entry_id = event.target.parentElement.parentElement.id;
        delete_entry(entry_id);
    }
    if (event.target.className == 'edit_button') {
        edit_id = event.target.parentElement.parentElement.id;
        
        url = '/entry/entry_editor.html?edit_entry=' + encodeURIComponent(edit_id);
        window.open(url);
    }
}

function open_settings() {
    window.open('/settings/settings.html');
}

function add_entry() {
    window.open('/entry/entry_editor.html?add_entry=true');
}


var search_engines = JSON.parse(localStorage.getItem('search_engines'));
if (search_engines != null) {
    display_SE(search_engines);
}


function display_SE(array) {
    wrapper_search_engines.innerHTML = '';
    for (i = 0; i < array.length; i ++) {
        append_divs(i);
    }
}


function append_divs(index) {
    // make div
    var SE_div = document.createElement('div');
        SE_div.setAttribute('id', search_engines[index].id);
        SE_div.setAttribute('class', 'SE_div');
        SE_div.style.borderColor = search_engines[index].color;

    // label div
    var label_div = document.createElement('div');
        label_div.setAttribute('id', search_engines[index].id + '_label_div');
        label_div.setAttribute('class', 'label_div');

    // label start thingy. like Name: and Color: and Link:
    var name_label_start = document.createElement('label');
        name_label_start.setAttribute('class', 'label_start');
        name_label_start.innerHTML = 'Name: ';
    var color_label_start = document.createElement('label');
        color_label_start.setAttribute('class', 'label_start');
        color_label_start.innerHTML = 'Color: ';
    var link_label_start = document.createElement('label');
        link_label_start.setAttribute('class', 'label_start');
        link_label_start.innerHTML = 'Link: ';

    // make name label
    var name_label = document.createElement('label');
        name_label.setAttribute('id', search_engines[index].id + '_name');
        name_label.setAttribute('class', search_engines[index].id + '_name');
        name_label.innerHTML = search_engines[index].name;

    // make color label
    var color_label = document.createElement('label');
        color_label.setAttribute('id', search_engines[index].id + '_color');
        color_label.setAttribute('class', search_engines[index].id + '_color');
        color_label.innerHTML = search_engines[index].color;
        color_label.style.color = search_engines[index].color;

    // make link label
    var link_label = document.createElement('label');
        link_label.setAttribute('id', search_engines[index].id + '_link');
        link_label.setAttribute('class', search_engines[index].id + '_link');
        link_label.innerHTML = search_engines[index].link;

    // index editor
    var index_editor = document.createElement('input');
        index_editor.setAttribute('id', search_engines[index].id + '_index_editor');
        index_editor.setAttribute('class', 'index_editor');
        index_editor.setAttribute('type', 'number');
        index_editor.setAttribute('value', index);

    // make edit and delete button div
    var edit_div = document.createElement('div');
        edit_div.setAttribute('id', search_engines[index].id + '_edit_div');
        edit_div.setAttribute('class', 'edit_div');
    
    // make buttons
    var delete_button = document.createElement('button');
        delete_button.setAttribute('id', search_engines[index].id + '_delete_button');
        delete_button.setAttribute('class', 'delete_button');
        delete_button.innerHTML = "delete";
    var edit_button = document.createElement('button');
        edit_button.setAttribute('id', search_engines[index].id + '_edit_button');
        edit_button.setAttribute('class', 'edit_button');
        edit_button.innerHTML = "edit";

    // APPENDING TIME
    label_div.appendChild(name_label_start);
    label_div.appendChild(name_label);
    label_div.appendChild(color_label_start);
    label_div.appendChild(color_label);
    label_div.appendChild(link_label_start);
    label_div.appendChild(link_label);

    edit_div.appendChild(index_editor);
    edit_div.appendChild(edit_button);
    edit_div.appendChild(delete_button);

    SE_div.appendChild(label_div);
    SE_div.appendChild(edit_div);

    wrapper_search_engines.appendChild(SE_div);
}


function focusout_index_editor(event) {
    if (event.keyCode != 13 && event.keyCode != null) { // 13 is enter key
        return;
    }
    event.target.blur();
}


function prep_change_index(event) {
    const index_editor = event.target
    const grandpa_div = index_editor.parentElement.parentElement
    if (event.target.className == 'index_editor') {
        var old_array = JSON.parse(localStorage.getItem('search_engines'));
        var old_index = old_array.findIndex(oa => oa.id == grandpa_div.id)
        var new_index = index_editor.value

        new_array = change_index(old_array, old_index, new_index);
        localStorage.setItem('search_engines', JSON.stringify(new_array));
        search_engines = JSON.parse(localStorage.getItem('search_engines'));
        display_SE(search_engines)
    }

}


function change_index(old_array, old_index, new_index) {
    new_array = [];

    if (new_index <= 0) {
        new_array[0] = old_array[old_index];

        for (index = 0; index < old_array.length; index++) {
            if (index < old_index) {
                new_array[index + 1] = old_array[index];
                continue;
            }
            if (index > old_index) {
                new_array[index] = old_array[index];
                continue;
            }
        }
        return new_array;
    }

    if (new_index >= old_array.length) {
        new_array[old_array.length - 1] = old_array[old_index];

        for (index = 0; index < old_array.length; index++) {
            if (index < old_index) {
                new_array[index] = old_array[index];
                continue;
            }
            if (index > old_index) {
                new_array[index - 1] = old_array[index];
                continue;
            }
        }
        return new_array;
    }

    for (index = 0; index < old_array.length; index++) {
        if (old_index < new_index && index > old_index && index <= new_index) {
            new_array[index - 1] = old_array[index];
            continue;
        }
        if (new_index < old_index && index >= new_index && index < old_index) {
            new_array[index + 1] = old_array[index];
            continue;
        }
        if (index == old_index) {
            new_array[new_index] = old_array[index];
            continue;
        }
        new_array[index] = old_array[index];
    }
    return new_array;
}


function delete_entry(entry_id) {
    var entries = JSON.parse(localStorage.getItem('search_engines'));
    index = entries.findIndex(ent => ent.id == entry_id);
    entries.splice(index, 1);
    localStorage.setItem('search_engines', JSON.stringify(entries));
    search_engines = JSON.parse(localStorage.getItem('search_engines'));
    display_SE(search_engines);
}
