var cancel_btn = document.getElementById('cancel-btn');

cancel_btn.addEventListener('click', cancel);

function cancel() {
    preview_logo.src = localStorage.getItem('logo');
    preview_name.textContent = localStorage.getItem('name');
    preview_bg_color.textContent = localStorage.getItem('bg_color');
    var search_engines = JSON.parse(localStorage.getItem('search_engines'));

    wrapper_search_engines.replaceChildren();
    for (i = 0; i < search_engines.length; i ++) {
        append_default_divs(i);
    }

    document.getElementById("cancel-btn").style.display = "none";
    document.getElementById("save-btn").style.display = "none";
}

