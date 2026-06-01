var preview_logo = document.getElementById('preview-logo');
var preview_name = document.getElementById('preview-name');
var preview_bg_color = document.getElementById('preview-bg-color');
var wrapper_search_engines = document.getElementById('wrapper-search_engines');


preview_logo.src = localStorage.getItem('logo');
preview_name.innerHTML = localStorage.getItem('name');
preview_bg_color.innerHTML = localStorage.getItem('bg_color');
var search_engines = JSON.parse(localStorage.getItem('search_engines'));

wrapper_search_engines.innerHTML = '';
for (i = 0; i < search_engines.length; i ++) {
    append_default_divs(i);
}


function append_default_divs(index) {
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
    
    
    // APPENDING TIME
    label_div.appendChild(name_label_start);
    label_div.appendChild(name_label);
    label_div.appendChild(color_label_start);
    label_div.appendChild(color_label);
    label_div.appendChild(link_label_start);
    label_div.appendChild(link_label);


    SE_div.appendChild(label_div);

    wrapper_search_engines.appendChild(SE_div);
}
