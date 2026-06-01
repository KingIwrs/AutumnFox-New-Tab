var export_btn = document.getElementById('export-btn');

export_btn.addEventListener('click', export_settings);


function export_settings() {
    const now = new Date();

    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDay().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    this.download = `backup_${year}-${month}-${day}_${hours}-${minutes}-${seconds}.afnt`;

    const logo = localStorage.getItem('logo');
    const name = localStorage.getItem('name');
    const bg_color = localStorage.getItem('bg_color');
    const search_engines = localStorage.getItem('search_engines');

    export_content = {
        'logo': logo,
        'name': name,
        'bg_color': bg_color,
        'search_engines': search_engines
    };

    this.href = 'data:application/octet-stream;charset=utf-8,' + encodeURIComponent(JSON.stringify(export_content));
}
