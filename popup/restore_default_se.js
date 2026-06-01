const restore_defaults_btn = document.getElementById('btn-restore_defaults');

restore_defaults_btn.addEventListener('click', restore_dem_se);


function restore_dem_se() {
    localStorage.removeItem('search_engines');
    set_SE();
    window.location.reload(true);
}
