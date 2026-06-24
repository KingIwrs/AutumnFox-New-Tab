const restore_btn = document.getElementById('restore_logo_name');

restore_btn.addEventListener('click', restore_em);


function restore_em() {
    localStorage.removeItem('logo');
    localStorage.removeItem('name');
    localStorage.removeItem('bg_color');

    set_logo();
    set_name();
    set_bg_color();
    window.location.reload(true);
}
