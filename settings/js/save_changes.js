const btn_save = document.getElementById('btn-save');
const img_inp = document.getElementById('input-image');
var edit_name = document.getElementById('edit_name');
var color_text = document.getElementById('color_text');


btn_save.addEventListener('click', save_changes);
edit_name.addEventListener('keypress', pressed_enter);


const logo_display = document.getElementById('logo_display');
logo_display.src = localStorage.getItem('logo');


img_inp.addEventListener('change', event => {
    const logo = event.target.files[0];
    const reader = new FileReader();
    
    reader.addEventListener('load', () => {
        logo_display.src =  reader.result;
    });
    
    if (logo) {
        reader.readAsDataURL(logo);
    }
});

function pressed_enter() {
    if (event.keyCode != 13 && event.keyCode != null) { // 13 is enter key
        return;
    }

    save_changes();
}


function save_changes() {
    var new_logo = logo_display.src;
    var new_name = edit_name.value;
    var new_bg_color = color_text.value;

    localStorage.setItem('logo', new_logo);
    if (new_name != "") {
        localStorage.setItem('name', new_name);
    }
    if (new_bg_color != "") {
        localStorage.setItem('bg_color', new_bg_color);
    }
    window.location.reload(true);
}
