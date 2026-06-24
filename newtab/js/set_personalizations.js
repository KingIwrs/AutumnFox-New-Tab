const logo = document.getElementById('logo');
const name_thing = document.getElementById('name');


var saved_logo = localStorage.getItem('logo');
if (saved_logo != null) {
    logo.src = saved_logo;
}


var saved_name = localStorage.getItem('name');
if (saved_name != null) {
    name_thing.textContent = saved_name;
}


var saved_bg_color = localStorage.getItem('bg_color');
if (saved_bg_color != null) {
    document.body.style.background = saved_bg_color;
}
