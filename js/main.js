function openMenu(id){
    document.getElementById(id).classList.add('visible');
}
function closeMenu(id){
    document.getElementById(id).classList.remove('visible');
}
function toggleDropdown(btn){
    btn.nextElementSibling.classList.toggle('show');
}