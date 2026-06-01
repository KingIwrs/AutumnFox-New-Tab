const tab_pers = document.getElementById('tab-personalize');
const tab_imp_exp = document.getElementById('tab-import_export');

tab_pers.addEventListener('click', goto_pers);
tab_imp_exp.addEventListener('click', goto_imp_exp);

function switch_tab(tab) {
    if(window.location.hash == "#" + tab) {
        tab_page_box = document.getElementsByClassName("tab_page_box");
        for (i = 0; i < tab_page_box.length; i++) {
            tab_page_box[i].style.display = "none";
            document.getElementById("tab-" + tab_page_box[i].id).className = "tabs";
        }

        document.getElementById(tab).style.display = "block";
        document.getElementById("tab-" + tab).className = "tabs active";
    }
}

function goto_pers() {
    history.replaceState(null, "", "#personalize");
    switch_tab("personalize");
}

function goto_imp_exp() {
    history.replaceState(null, "", "#import_export");
    switch_tab("import_export");
}
