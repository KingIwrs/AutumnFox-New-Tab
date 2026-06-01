const import_file = document.getElementById('import-file_picker');
const save_btn = document.getElementById('save-btn');

var preview_logo = document.getElementById('preview-logo');
var preview_name = document.getElementById('preview-name');
var preview_bg_color = document.getElementById('preview-bg-color');
var wrapper_search_engines = document.getElementById('wrapper-search_engines');
var store_SE_data = document.getElementById("store_SE_data");

save_btn.addEventListener('click', import_pressed);


import_file.addEventListener('change', event => {
    const exported_content = event.target.files[0];
    const reader = new FileReader();
    
    reader.addEventListener('load', () => {
        file_content = JSON.parse(reader.result);

        var logo = file_content.logo;
        var name = file_content.name;
        var bg_color = file_content.bg_color;
        var search_engines = file_content.search_engines;

        preview_logo.src = logo;
        preview_name.innerHTML = name;
        preview_bg_color.innerHTML = bg_color;

        wrapper_search_engines.innerHTML = '';
        for (i = 0; i < search_engines.length; i ++) {
            append_divs(i, search_engines);
        }
    });

    if (exported_content) {
        reader.readAsText(exported_content);
    }
});


function append_divs(index, search_engines) {
    var preview_search_engines = JSON.parse(search_engines);
    store_SE_data.innerHTML = search_engines;
    // make div
    var SE_div = document.createElement('div');
        SE_div.setAttribute('id', preview_search_engines[index].id);
        SE_div.setAttribute('class', 'SE_div');
        SE_div.style.borderColor = preview_search_engines[index].color;

    // label div
    var label_div = document.createElement('div');
        label_div.setAttribute('id', preview_search_engines[index].id + '_label_div');
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
        name_label.setAttribute('id', preview_search_engines[index].id + '_name');
        name_label.setAttribute('class', preview_search_engines[index].id + '_name');
        name_label.innerHTML = preview_search_engines[index].name;

    // make color label
    var color_label = document.createElement('label');
        color_label.setAttribute('id', preview_search_engines[index].id + '_color');
        color_label.setAttribute('class', preview_search_engines[index].id + '_color');
        color_label.innerHTML = preview_search_engines[index].color;
        color_label.style.color = preview_search_engines[index].color;

    // make link label
    var link_label = document.createElement('label');
        link_label.setAttribute('id', preview_search_engines[index].id + '_link');
        link_label.setAttribute('class', preview_search_engines[index].id + '_link');
        link_label.innerHTML = preview_search_engines[index].link;
    
    
    // APPENDING TIME
    label_div.appendChild(name_label_start);
    label_div.appendChild(name_label);
    label_div.appendChild(color_label_start);
    label_div.appendChild(color_label);
    label_div.appendChild(link_label_start);
    label_div.appendChild(link_label);


    SE_div.appendChild(label_div);

    wrapper_search_engines.appendChild(SE_div);

    document.getElementById("cancel-btn").style.display = "block";
    document.getElementById("save-btn").style.display = "block";
}


function import_pressed() {
    var logo = preview_logo.src;
    var name = preview_name.innerHTML;
    var bg_color = preview_bg_color.innerHTML;
    var search_engines = store_SE_data.innerHTML;

    localStorage.setItem('logo', logo);
    localStorage.setItem('name', name);
    localStorage.setItem('bg_color', bg_color);
    localStorage.setItem('search_engines', search_engines);

    window.location.reload(true);
}
