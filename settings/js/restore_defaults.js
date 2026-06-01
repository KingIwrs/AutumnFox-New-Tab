const restore_defaults_btn = document.getElementById('restore_defaults');

restore_defaults_btn.addEventListener('click', restore_dem_defaults);


function restore_dem_defaults() {
    localStorage.removeItem('logo');
    localStorage.removeItem('name');
    localStorage.removeItem('bg_color');
    localStorage.removeItem('search_engines');

    set_logo();
    set_name();
    set_bg_color();
    set_SE();

    window.location.reload(true);
}
