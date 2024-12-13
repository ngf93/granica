function openMenu(id){
    document.getElementById(id).classList.add('visible');
}
function closeMenu(id){
    document.getElementById(id).classList.remove('visible');
}

function toggleDropdown(btn){
    btn.nextElementSibling.classList.toggle('show');
}

// document.addEventListener("load", ready);
// function ready() {
//     let iframeArr = Array.from(document.querySelectorAll('.news-list iframe'));
//     console.log(iframeArr.length);
//     iframeArr.forEach(function(item) {
//         item.contentWindow.document.head.insertAdjacentHTML(
//             'beforeend',
//             '<style>body { background-color: red; }</style>'
//           );
//     });
//   }
window.onload = () => {
    let iframeArr = Array.from(document.querySelectorAll('.news-list iframe'));
    console.log(iframeArr.length);
    iframeArr.forEach((item) => {
        item.contentWindow.document.head.insertAdjacentHTML(
            'beforeend',
            '<style>body { background-color: red; }</style>'
          );
    });
    
}