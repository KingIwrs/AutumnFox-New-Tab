const color_input = document.getElementById('color_text');
const color_picker = document.getElementById('color_picker');

color_input.addEventListener('blur', function(e) {
    color_picker.value = e.target.value;
});
color_picker.addEventListener('change', function(e) {
    color_input.value = e.target.value;
});
