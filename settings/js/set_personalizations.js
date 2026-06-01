const logo = document.getElementById('logo');
const name_thing = document.getElementById('name');
var edit_name = document.getElementById('edit_name');
var color_text = document.getElementById('color_text');


var saved_logo = localStorage.getItem('logo');
if (saved_logo != null) {
    logo.src = saved_logo;
}


var saved_name = localStorage.getItem('name');
if (saved_name != null) {
    name_thing.innerHTML = saved_name;
    if (edit_name != null) {
        edit_name.placeholder = saved_name;
    }
}


var saved_bg_color = localStorage.getItem('bg_color');
if (saved_bg_color != null) {
    color_text.placeholder = saved_bg_color;
    document.body.style.background = saved_bg_color;
}
