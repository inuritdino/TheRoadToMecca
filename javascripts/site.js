// This is where it all goes :)
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function show_on_click() {
    document.getElementById("dropdown").classList.toggle("dropdown-show");
}
function show_on_click2() {
    document.getElementById("dropdown-2").classList.toggle("category-show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('dropdown-show')) {
        openDropdown.classList.remove('dropdown-show');
      }
    }
  }
  if (!event.target.matches('.dropbtn2')) {

    var dropdowns = document.getElementsByClassName("category");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('category-show')) {
        openDropdown.classList.remove('category-show');
      }
    }
  }
} 

