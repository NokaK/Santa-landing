const bMenu = document.getElementById('burger-menu');
const menuDiv = document.getElementById('menu-div');

bMenu.addEventListener('click', function () {
    if (menuDiv.style.display === "none") {
        menuDiv.style.display = "block";
      } else {
        menuDiv.style.display = "none";
      }
});

window.addEventListener('mouseup', function(e) {
    if (e.target != menuDiv) {
        menuDiv.style.display = "none";
    }
});
